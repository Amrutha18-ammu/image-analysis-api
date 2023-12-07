const express = require('express');
const bodyParser = require('body-parser');
var morgan = require('morgan')
const ComputerVisionClient = require('@azure/cognitiveservices-computervision').ComputerVisionClient;
const ApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials;

/**
 * AUTHENTICATE
 * This single client is used for all examples.
 */
const key = process.env.VISION_KEY;
const endpoint = process.env.VISION_ENDPOINT;

const computerVisionClient = new ComputerVisionClient(
  new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint);
/**
 * END - Authenticate
*/

const localApiKey = process.env.LOCAL_API_KEY;
const LOCAL_API_KEY_HEADER = 'Image-Analysis-Subscription-Key'

const app = express();

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 3000;

app.post("/api/image-analysis/analyze", validateRequest, async (req, res) => {
  const features = ["ImageType","Faces","Adult","Categories","Color","Tags","Description","Objects","Brands"];
  const domainDetails = ['Landmarks'];
  let imageURL = req.body.url
  try {
    const result = await computerVisionClient.analyzeImage(imageURL,{visualFeatures: features, details: domainDetails});
    res.send(result)
  } catch(e) {
    console.error(e)
    res.status(500).send({e})
  }
})

/**
 * DETECT TAGS  
 * Detects tags for an image, which returns:
 * all objects in image and confidence score.
 */
app.post("/api/image-analysis/detect-tags", validateRequest, async(req, res) => {
      let tagsURL = req.body.url
      try {
        const tags = (await computerVisionClient.analyzeImage(tagsURL, { visualFeatures: ['Tags'] })).tags;
        res.send(tags)
      } catch(e) {
        res.status(500).send(e)
    }
})


app.post("/api/image-analysis/detect-objects", validateRequest, async (req, res) => {
  let imageURL = req.body.url
  try {
    const result = await computerVisionClient.detectObjects(imageURL);
    res.send(result)
  } catch(e) {
    console.error(e)
    res.status(500).send({e})
  }
})

app.post("/api/image-analysis/describe", validateRequest, async (req, res) => {
  let imageURL = req.body.url
  try {
    const result = await computerVisionClient.describeImage(imageURL);
    res.send(result)
  } catch(e) {
    console.error(e)
    res.status(500).send({e})
  }
})

app.post("/api/image-analysis/recognize-text", validateRequest, async (req, res) => {
  let imageURL = req.imageURL
  try {
    const result = await computerVisionClient.recognizePrintedText(false, imageURL);
    res.send(result)
  } catch(e) {
    handleErrors(e, res)
  }
})

app.listen(PORT, () => {
  console.log(`Serving on port ${PORT}`);
});


function validateRequest(req, res, next) {
  if (req.header(LOCAL_API_KEY_HEADER) != localApiKey) {
    res.status(401).send("UnAuthorized Access")
  } else {
    if (req?.body?.url) {
      req.imageURL = req.body.url
      next()
    } else {
      res.status(400).send({
        code: "InvalidArgument",
        message: "Image URL Missing"
      })
    }
  }
}


async function handleErrors(error, res) {
    console.error(error)
    let errorCode = error?.code ? error?.code : "Internal Server Error"
    let errorStatusCode = error?.statusCode ? error?.statusCode : 500
    let errorBody = error?.body?.error?.message ? {
      code: errorCode,
      message: error?.body?.error?.message
    } : errorCode
    res.status(errorStatusCode).send(errorBody)
}