#  Image Analysis API Documentation

## Introduction

Welcome to the Image Analysis API ! This API allows you to perform various image analysis services can extract a wide variety of visual features from your images. In addition to these functionalities, the API supports a variety of image analysis tasks, including object detection, image classification.

This API is Developed on the Express.js framework, this API seamlessly incorporates with Azure Cognitive Services, providing robust capabilities for image analysis.

## Overview of Image-Analysis-API

![GitHub Logo](images/image-analysis-orig.png)

By Utilizing the Image Analysis API, the information below can be extracted regarding the displayed image.

| Feature    | Extracted Value             |  Description         |
|------------|---------------------------- |----------------------|
| Description| a person sitting at a table with a laptop  | Generates a human-readable phrase that describe the whole image content.  |
| Tags       | Furniture,Clothing,Person   | Tags are recognizable objects, living beings,scenery and actions that appear in the image.  |
| Color  | Grey,Green | It will display the colors in the image.  |
| Objects  | person, Two Chairs, Laptop | Detect various objects within an image , including their approximate location |

## Prerequisite
* Authentication is done by adding the HTTP request header `Image-Analysis-Subscription-Key` so please obtain the key from the email sent to you with subject "Image-Analysis-API-Key".

##  Getting Started
* **Base URL:** http://localhost:3000/api/image-analysis

## Endpoints

### /analyze 

POST http://localhost:3000/api/image-analysis/analyze

The `/api/image-analysis/analyze` endpoint deeply analyzes images, extracting insights like image type, facial features, adult content, object categories, color, tags, description, identified objects, brands, and landmarks. Submitting a POST request triggers a comprehensive analysis, and the API returns a structured JSON response, valuable for precise image interpretation in content analysis applications. Clear error responses aid in issue identification, making it ideal for thorough image assessment in applications.

### Request 

**Method:** POST

**Headers:** 

| Header Name | Value Type            |  Value                |
|-------------|--------------------   |----------------------|
| Content-Type| String                | application/json |
| Image-Analysis-Subscription-Key     | String | Paste the key Obtained from Email   |

### RequestBody
To analyze an image, make a POST request to the specified endpoint with the following JSON payload:

```json
{
  "url": "string"
}
```

This request initiates the image analysis process and provides valuable insights into the content of the specified image.

### Request Example

```json
{
"url": "https://moderatorsampleimages.blob.core.windows.net/samples/sample16.png"
}
```

### Response

 **Success Response:**
 
StatusCode:'200 OK'

This  API returns a structured JSON response providing detailed insights into the analyzed image.

 ### ResponseBody

```json
{
    "categories": [
        {
            "name": "string",
            "score": 0.0
        }
    ],
    "adult": {
        "isAdultContent": false,
        "isRacyContent": false,
        "isGoryContent": false,
        "adultScore": 0.0,
        "racyScore": 0.0,
        "goreScore": 0.0
    },
    "color": {
        "dominantColorForeground": "string",
        "dominantColorBackground": "string",
        "dominantColors": [
            "string",
            "string"
        ],
        "accentColor": "string",
        "isBWImg": false,
        "isBwImg": false
    },
    "imageType": {
        "clipArtType": 0,
        "lineDrawingType": 0
    },
    "tags": [
        {
            "name": "string",
            "confidence": 0.0
        }
    ],
    "description": {
        "tags": [
            "string"
        ],
        "captions": [
            {
                "text": "string",
                "confidence": 0.0
            }
        ]
    },
    "faces": [],
    "objects": [
        {
            "rectangle": {
                "x": 0,
                "y": 0,
                "w": 0,
                "h": 0
            },
            "object": "string",
            "confidence": 0.0,
            "parent": {
                "object": "string",
                "confidence": 0.0,
                "parent": {
                    "object": "string",
                    "confidence": 0.0
                }
            }
        }
    ],
    "brands": [],
    "requestId": "string",
    "metadata": {
        "width": 0,
        "height": 0,
        "format": "string"
    },
    "modelVersion": "string"
}
```

## /detect-tags

POST http://localhost:3000/api/image-analysis/detect-tags

The `/api/image-analysis/detect-tags`  endpoint employs Azure Computer Vision to analyze an image and extract descriptive tags. Submit the image URL to trigger the process and obtain concise keywords representing the visual content. After receiving a POST request with the image URL, the API utilizes advanced algorithms from Azure Computer Vision to thoroughly analyze and categorize image elements, generating concise tags that capture the content's essence.

The API returns a JSON response with tags and confidence scores, indicating the system's certainty in identifying each tag.

### Request 

**Method:** POST

**Headers:** 

| Header Name | Value Type            |  Value                |
|-------------|--------------------   |----------------------|
| Content-Type| String                | application/json |
| Image-Analysis-Subscription-Key     | String | Paste the key Obtained from Email   |

### RequestBody
To analyze an image, make a POST request to the specified endpoint with the following JSON payload:

```json
{
  "url": "String"
}
```
 This request initiates the image analysis process and provides valuable insights into the content of the specified image.

### RequestExample

```json
{
  
     "url": "https://moderatorsampleimages.blob.core.windows.net/samples/sample16.png"
}
```
 ### Response

 Success Response:StatusCode:'200 OK'

This  API returns a structured JSON response providing detailed insights into the analyzed image.

 ### ResponseBody

```json
{
  "tags": [
    {
      "name": "String", 
      "confidence": 0.0
      },
    
  ]
}
```

 ## /detect-objects
 
 POST http://localhost:3000/api/image-analysis/detect-objects

 The `/api/image-analysis/detect-objects` endpoint utilizes Azure Computer Vision to identify and outline objects in an image. Supplying the image URL triggers advanced algorithms for entity detection, providing insights into specific items within the image. Upon receiving a POST request with the image URL, the API employs Azure Computer Vision for advanced object detection, thoroughly analyzing the image and outlining distinct objects using state-of-the-art algorithms.

 The API returns a JSON response with tags and confidence scores, indicating the system's certainty in identifying each tag.

 ### Request 

**Method:** POST

**Headers:** 

| Header Name | Value Type            |  Value                |
|-------------|--------------------   |----------------------|
| Content-Type| String                | application/json |
| Image-Analysis-Subscription-Key     | String | Paste the key Obtained from Email   |

### RequestBody
To analyze an image, make a POST request to the specified endpoint with the following JSON payload:

```json
{
  "url": "String"
}
```
 This request initiates the image analysis process and provides valuable insights into the content of the specified image.

### RequestExample

```json
{
  
  "url": "https://moderatorsampleimages.blob.core.windows.net/samples/sample16.png"
}
```
### Response

 Success Response: StatusCode:'200 OK'

This  API returns a structured JSON response providing detailed insights into the analyzed image.

 ### ResponseBody

```json
{
    "objects": [
        {
            "rectangle": {
                "x": 0,
                "y": 0,
                "w": 0,
                "h": 0
            },
            "object": "String",
            "confidence": 0.0,
            "parent": {
                "object": "String",
                "confidence": 0.0,
            }
        }
    ],
    "requestId": "String",
    "metadata": {
        "width": 0,
        "height": 0,
        "format": "String"
    },
    "modelVersion": "String"
}
```
 ## /describe

 POST http://localhost:3000/api/image-analysis/describe

The `/api/image-analysis/describe` endpoint facilitates image description using the Azure Computer Vision service. Upon receiving a POST request with the image URL, the API engages the Computer Vision service to generate a descriptive analysis of the image's content. The primary purpose is to provide a textual description that captures the key elements and characteristics present in the visual content.


### Request 

**Method:** POST

**Headers:** 

| Header Name | Value Type            |  Value                |
|-------------|--------------------   |----------------------|
| Content-Type| String                | application/json |
| Image-Analysis-Subscription-Key     | String | Paste the key Obtained from Email   |

### RequestBody
To analyze an image, make a POST request to the specified endpoint with the following JSON payload:

```json
{
  "url":  "String"
}
```
This request initiates the image analysis process and provides valuable insights into the content of the specified image.

### RequestExample

```json
{
  
  "url": "https://moderatorsampleimages.blob.core.windows.net/samples/sample16.png"
}
```

### Response

 Success Response: StatusCode:'200 OK'  

  This  API returns a structured JSON response providing detailed insights into the analyzed image.

 ### ResponseBody

```json
{
    "tags": [
        "String",
        "String",
        "String",
        "String",
        "String"
    ],
    "captions": [
        {
            "text": "String",
            "confidence": 0.0
        }
    ],
    "requestId": "String",
    "metadata": {
        "width": 0,
        "height": 0,
        "format": "String"
    },
    "modelVersion": "String"
}

```

 ## /recognize-text

 POST http://localhost:3000/api/image-analysis/recognize-text

 The `/api/image-analysis/recognize-text` endpoint leverages the Azure Computer Vision service to recognize printed text within an image. By submitting a POST request with the image URL, the API engages the service's capabilities to identify and extract textual information. The primary purpose is to provide the recognized text present in the image.

### Request 

**Method:** POST

**Headers:** 
| Header Name | Value Type            |  Value                |
|-------------|--------------------   |----------------------|
| Content-Type| String                | application/json |
| Image-Analysis-Subscription-Key     | String | Paste the key Obtained from Email   |

### RequestBody
To analyze an image, make a POST request to the specified endpoint with the following JSON payload:

```json
{
  "url": "String"
}
```
 This request initiates the image analysis process and provides valuable insights into the content of the specified image.

### RequestExample

```json
{
  
  "url": "https://moderatorsampleimages.blob.core.windows.net/samples/sample16.png"
}
```


### Response

 Success Response:** StatusCode:'200 OK'

This  API returns a structured JSON response providing detailed insights into the analyzed image.

 ### ResponseBody

```json
{
    "language": "String",
    "textAngle": 0,
    "orientation": "String",
    "regions": [],
    "modelVersion": "String"
}
   
```

## Error Handling
Here is a collection of common errors along with their explanations, organized as follows:

 ### API Error Responses


| Status Code | Code                            | Error Type          | message                                                     |
|-------------|-------------------------------- |-------------------- |-------------------------------------------------------------------|
| 400         | InvalidImageUrl                 | Bad Request         |  Image URL is badly formatted or not accessible.                  |
| 400         | InvalidImageFormat              |Bad Request          |  Input data is not a valid image.                                 |
| 400         | InvalidImageSize                | Bad Request         | Input image is too large.                                         |
| 400         |  NotSupportedVisualFeature      | Bad Request         |  Specified feature type isn't valid.                              |
| 400         | NotSupportedImage               | Bad Request         |  Unsupported image, for example child pornography                 |
| 400         | InvalidDetails                  | BadRequest          |  Unsupported detail parameter value.                              |
| 400         |  NotSupportedLanguage           | BadRequest          | The requested operation isn't supported in the language specified.|
| 400         | BadArgument                     | Bad Request         |  More details are provided in the error message.
| 415        | Unsupported media type error.    |Unsupported Media Type|  The Content-Type isn't in the allowed types:For an image URL, Content-Type should be application/json.For a binary image data, Content-Type should be application/octet-stream or multipart/form-data|
| 500         | Failed Procedure                |  Internal Server Error     |    An unexpected error occurred on the server while processing the request.                                     |
| 500         |  Timeout       | Internal Server Error        |  This can happen when the server is unable to complete the requested operation within the expected  leading to a timeout error.                             |


## Example Error Response

**HTTP StatusCode: 400**
```json

  {
    "code": "InvalidArgument",
    "message": "Image URL Missing"
  }
  
```

## Conclusion
Now, you're ready to leverage the Image Analysis API and extract valuable insights from images using Postman.


