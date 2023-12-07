#  Image Analysis API Documentation

## Introduction

Welcome to the Image Analysis API ! This API allows you to perform various image analysis services can extract a wide variety of visual features from your images. In addition to these functionalities, the API supports a variety of image analysis tasks, including object detection, image classification, and facial recognition. 

This API is Developed on the Express.js framework, this API seamlessly incorporates with Azure Cognitive Services, providing robust capabilities for image analysis.


##  Getting Started
* **Base URL:** http://localhost:3000/api/image-analysis

## Endpoints

### /analyze 

POST http://localhost:3000/api/image-analysis/analyze

The `/api/image-analysis/detect-objects` endpoint deeply analyzes images, extracting insights like image type, facial features, adult content, object categories, color, tags, description, identified objects, brands, and landmarks. Submitting a POST request triggers a comprehensive analysis, and the API returns a structured JSON response, valuable for precise image interpretation in content analysis applications. Clear error responses aid in issue identification, making it ideal for thorough image assessment in applications.

### Request 

**Method:** POST

**Headers:** Content-Type: application/json

### RequestBody
To analyze an image, make a POST request to the specified endpoint with the following JSON payload:

```json
{
  "url": "URL_OF_IMAGE_TO_BE_ANALYZED"
}
```

Replace "URL_OF_IMAGE_TO_BE_ANALYZED" with the actual URL of the image you want to analyze. This request initiates the image analysis process and provides valuable insights into the content of the specified image.

### Example

```json
{
"url": "https://moderatorsampleimages.blob.core.windows.net/samples/sample16.png"
}
```

### Response

 Success Response:** StatusCode:'200 OK'

 ### Body

This  API returns a structured JSON response providing detailed insights into the analyzed image.

 ### ExampleResponse

```json
{
    "categories": [
        {
            "name": "animal_dog",
            "score": 0.99609375
        }
    ],
    "adult": {
        "isAdultContent": false,
        "isRacyContent": false,
        "isGoryContent": false,
        "adultScore": 0.000665627361740917,
        "racyScore": 0.0016316529363393784,
        "goreScore": 0.0007828640518710017
    },
    "color": {
        "dominantColorForeground": "White",
        "dominantColorBackground": "Grey",
        "dominantColors": [
            "Grey",
            "Green"
        ],
        "accentColor": "A36D28",
        "isBWImg": false,
        "isBwImg": false
    },
    "imageType": {
        "clipArtType": 0,
        "lineDrawingType": 0
    },
    "tags": [
        {
            "name": "grass",
            "confidence": 0.9957543611526489
        },
        {
            "name": "dog",
            "confidence": 0.9939157962799072
        },
        {
            "name": "mammal",
            "confidence": 0.9928356409072876
        },
        {
            "name": "animal",
            "confidence": 0.9918001890182495
        },
        {
            "name": "dog breed",
            "confidence": 0.9890419244766235
        },
        {
            "name": "pet",
            "confidence": 0.974603533744812
        },
        {
            "name": "outdoor",
            "confidence": 0.969241738319397
        },
        {
            "name": "companion dog",
            "confidence": 0.906731367111206
        },
        {
            "name": "small greek domestic dog",
            "confidence": 0.8965123891830444
        },
        {
            "name": "golden retriever",
            "confidence": 0.8877675533294678
        },
        {
            "name": "labrador retriever",
            "confidence": 0.8746421337127686
        },
        {
            "name": "puppy",
            "confidence": 0.872604250907898
        },
        {
            "name": "ancient dog breeds",
            "confidence": 0.8508287668228149
        },
        {
            "name": "field",
            "confidence": 0.8017748594284058
        },
        {
            "name": "retriever",
            "confidence": 0.6837497353553772
        },
        {
            "name": "brown",
            "confidence": 0.6581960916519165
        }
    ],
    "description": {
        "tags": [
            "grass",
            "dog",
            "outdoor",
            "laying",
            "tan"
        ],
        "captions": [
            {
                "text": "a small dog in the grass",
                "confidence": 0.44371092319488525
            }
        ]
    },
    "faces": [],
    "objects": [
        {
            "rectangle": {
                "x": 78,
                "y": 231,
                "w": 664,
                "h": 906
            },
            "object": "dog",
            "confidence": 0.903,
            "parent": {
                "object": "mammal",
                "confidence": 0.908,
                "parent": {
                    "object": "animal",
                    "confidence": 0.909
                }
            }
        }
    ],
    "brands": [],
    "requestId": "4077959b-b930-48c1-b620-f413cf0e5534",
    "metadata": {
        "width": 1295,
        "height": 1155,
        "format": "Png"
    },
    "modelVersion": "2021-05-01"
}
```

### /detect-tags

POST http://localhost:3000/api/image-analysis/detect-tags 

The `/api/image-analysis/detect-tags`  endpoint employs Azure Computer Vision to analyze an image and extract descriptive tags. Submit the image URL to trigger the process and obtain concise keywords representing the visual content. After receiving a POST request with the image URL, the API utilizes advanced algorithms from Azure Computer Vision to thoroughly analyze and categorize image elements, generating concise tags that capture the content's essence.

The API returns a JSON response with tags and confidence scores, indicating the system's certainty in identifying each tag.

### Request 

**Method:** POST

**Headers:** Content-Type: application/json

### RequestBody
To analyze an image, make a POST request to the specified endpoint with the following JSON payload:

```json
{
  "url": "URL_OF_IMAGE_TO_BE_ANALYZED"
}
```
Replace "URL_OF_IMAGE_TO_BE_ANALYZED" with the actual URL of the image you want to analyze. This request initiates the image analysis process and provides valuable insights into the content of the specified image.

### Example

```json
{
  "url": "https://example.com/sample-image.jpg"
}
```
### Response

 Success Response:** StatusCode:'200 OK'

 ### Body:

This  API returns a structured JSON response providing detailed insights into the analyzed image.

 ### ExampleResponse

```json
{
  "tags": [
    {"name": "Nature", "confidence": 0.95},
    {"name": "Mountains", "confidence": 0.89},
    {"name": "Scenery", "confidence": 0.82},
  ]
}
```

 ### /detect-objects
 
 POST http://localhost:3000/api/image-analysis/detect-objects 

 The `/api/image-analysis/detect-objects` endpoint utilizes Azure Computer Vision to identify and outline objects in an image. Supplying the image URL triggers advanced algorithms for entity detection, providing insights into specific items within the image. Upon receiving a POST request with the image URL, the API employs Azure Computer Vision for advanced object detection, thoroughly analyzing the image and outlining distinct objects using state-of-the-art algorithms.

 The API returns a JSON response with tags and confidence scores, indicating the system's certainty in identifying each tag.

 ### Request 

**Method:** POST

**Headers:** Content-Type: application/json

### RequestBody
To analyze an image, make a POST request to the specified endpoint with the following JSON payload:

```json
{
  "url": "URL_OF_IMAGE_TO_DETECT_OBJECTS"
}
```
Replace "URL_OF_IMAGE_TO_DETECT_OBJECTS" with the actual URL of the image you want to detect the object. This request initiates the image analysis process and provides valuable insights into the content of the specified image.

### Example

```json
{
  "url": "https://example.com/sample-image.jpg"
}
```
### Response

 Success Response:** StatusCode:'200 OK'

 ### Body

This  API returns a structured JSON response providing detailed insights into the analyzed image.

 ### ExampleResponse

```json
{
  
  {
  "objects": [
    {
      "object": "person",
      "confidence": 0.87,
      "parent": {
        "object": "bicycle",
        "confidence": 0.78
      },
      "rectangle": {
        "x": 120,
        "y": 50,
        "w": 200,
        "h": 300
      }
    },
  ]
}

}
```
 ### /describe

 POST http://localhost:3000/api/image-analysis/describe

The `/api/image-analysis/describe` endpoint facilitates image description using the Azure Computer Vision service. Upon receiving a POST request with the image URL, the API engages the Computer Vision service to generate a descriptive analysis of the image's content. The primary purpose is to provide a textual description that captures the key elements and characteristics present in the visual content.


### Request 

**Method:** POST

**Headers:** Content-Type: application/json

### RequestBody
To analyze an image, make a POST request to the specified endpoint with the following JSON payload:

```json
{
  "url":  "URL_OF_IMAGE_TO_BE_DESCRIBED"
}
```
Replace "URL_OF_IMAGE_TO_BE_DESCRIBED" with the actual URL of the image you want to describe. This request initiates the image analysis process and provides valuable insights into the content of the specified image.

### Example

```json
{
  "url": "https://example.com/sample-image.jpg"
}
```
### Response

 Success Response:** StatusCode:'200 OK'

 ### Body:

This  API returns a structured JSON response providing detailed insights into the analyzed image.

 ### ExampleResponse

```json
{
  "description": {
    "captions": [
      {
        "text": "A scenic view of a mountain landscape",
        "confidence": 0.92
      }
    ],
    "tags": ["mountain", "landscape", "nature"],
    "requestId": "4fb72a9d-9f53-4816-8b5b-83a9c2bc3f3c",
    "metadata": {
      "width": 1920,
      "height": 1080,
      "format": "Jpeg"
    }
  }
}

```

 ### /recognize-text

 POST http://localhost:3000/api/image-analysis/recognize-text

 The `/api/image-analysis/recognize-text` endpoint leverages the Azure Computer Vision service to recognize printed text within an image. By submitting a POST request with the image URL, the API engages the service's capabilities to identify and extract textual information. The primary purpose is to provide the recognized text present in the image.

### Request 

**Method:** POST

**Headers:** Content-Type: application/json

### RequestBody
To analyze an image, make a POST request to the specified endpoint with the following JSON payload:

```json
{
  "url": "URL_OF_IMAGE_TO_BE_RECOGNIZED"
}
```
Replace  "URL_OF_IMAGE_TO_BE_RECOGNIZED" with the actual URL of the image you want to recognize the text . This request initiates the image analysis process and provides valuable insights into the content of the specified image.

### Example

```json
{
  "url": "https://example.com/sample-image.jpg"
}
```
### Response

 Success Response:** StatusCode:'200 OK'

 ### Body:

This  API returns a structured JSON response providing detailed insights into the analyzed image.

 ### ExampleResponse

```json
{
  "text": "This is the recognized text from the image.",
  "language": "en",
  "orientation": "Up",
  "regions": [
    {
      "boundingBox": "0,0,100,100",
      "lines": [
        {
          "boundingBox": "0,0,100,20",
          "words": [
            {
              "boundingBox": "0,0,50,20",
              "text": "This"
            },
            
          ]
        },
       
      ]
    },
  
  ],
  "requestId": "3f74b3a0-b32e-4eb2-99c3-9c8ea6c0e997"
}
```
## Possible errors

Here is a collection of common errors along with their explanations, organized as follows:

 ### API Error Responses

| Status Code | Error Type         | Description                                      |
|-------------|--------------------|--------------------------------------------------|
| 400         | InvalidImageURL    | Image URL is badly formatted or not accessible. |
| 400         | InvalidImageFormat | Input data is not a valid image.    |
| 403         | Forbidden          | The request is valid, but the server refuses to fulfill it. |
| 404         | Not Found          | The requested resource could not be found.            |
| 429         | Too Many Requests  | The client has exceeded the allowed request rate.     |
| 500         | Internal Server Error | An unexpected server error occurred during processing. |
| 503         | Service Unavailable | The server is temporarily unable to handle the request. |

## Example Error Response

```json
{
  "statusCode": 404,
  "error": "Not Found",
  "message": "The requested endpoint or resource was not found."
}
```

## Conclusion
Now, you're ready to leverage the Image Analysis API and extract valuable insights from images using Postman.


