<!--
title: 'AWS Serverless RESTful API for Term Entities'
description: 'Basic Crud operations for Term Entity'
layout: Doc
framework: v1
platform: AWS
language: nodeJS
authorLink: 'https://github.com/lmkerr'
authorName: 'Loren M. Kerr'
authorAvatar: 'https://avatars2.githubusercontent.com/u/5288084?s=400&u=35f1682d40b9780f803e01d1197a3cb4e7c927e9&v=4'
-->
# Serverless REST API

This application builds a [RESTful Web Services](https://en.wikipedia.org/wiki/ allowing to create, list, get, update, and delete Terms. This is intended to be a micro data service that modifies data on DynamoDB.

## Structure

This service has a separate directory for all the term operations. For each operation exactly one file exists e.g. `src/delete.js`. In each of these files there is exactly one function which is directly attached to `module.exports`.

Because it's a microservice, there should only be one crud operation per entity. Fork folder structure to create new services.

## Use-cases

- Microservice API for a Web Application API

## Setup

```bash
npm install
```

## Deploy

In order to deploy the endpoint simply run

```bash
serverless deploy -v
```

The expected result should be similar to:

```bash
Serverless: Packaging service…
Serverless: Uploading CloudFormation file to S3…
Serverless: Uploading service .zip file to S3…
Serverless: Updating Stack…
Serverless: Checking Stack update progress…
Serverless: Stack update finished…

Service Information
service: term-reference-api-term
stage: dev
region: us-east-1
api keys:
  None
endpoints:
  POST - https://45wf34z5yf.execute-api.us-east-1.amazonaws.com/dev/terms
  GET - https://45wf34z5yf.execute-api.us-east-1.amazonaws.com/dev/terms
  GET - https://45wf34z5yf.execute-api.us-east-1.amazonaws.com/dev/terms/{id}
  PUT - https://45wf34z5yf.execute-api.us-east-1.amazonaws.com/dev/terms/{id}
  DELETE - https://45wf34z5yf.execute-api.us-east-1.amazonaws.com/dev/terms/{id}
functions:
  term-reference-api-term-dev-update: arn:aws:lambda:us-east-1:488110005556:function:term-reference-api-term-dev-update
  term-reference-api-term-dev-get: arn:aws:lambda:us-east-1:488110005556:function:term-reference-api-term-dev-get
  term-reference-api-term-dev-list: arn:aws:lambda:us-east-1:488110005556:function:term-reference-api-term-dev-list
  term-reference-api-term-dev-create: arn:aws:lambda:us-east-1:488110005556:function:term-reference-api-term-dev-create
  term-reference-api-term-dev-delete: arn:aws:lambda:us-east-1:488110005556:function:term-reference-api-term-dev-delete
```

## Usage

You can create, retrieve, update, or delete terms with the following commands:

### Create a Term

```bash
curl -X POST https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/terms --data '{ "text": "Learn Serverless" }'
```

Example Result:
```bash
{"text":"Learn Serverless","id":"ee6490d0-aa11e6-9ede-afdfa051af86","createdAt":1479138570824,"checked":false,"updatedAt":1479138570824}%
```

### List all Terms

```bash
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/terms
```

Example output:
```bash
[{"text":"Deploy my first service","id":"ac90feaa11e6-9ede-afdfa051af86","checked":true,"updatedAt":1479139961304},{"text":"Learn Serverless","id":"206793aa11e6-9ede-afdfa051af86","createdAt":1479139943241,"checked":false,"updatedAt":1479139943241}]%
```

### Get one Term

```bash
# Replace the <id> part with a real id from your terms table
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/terms/<id>
```

Example Result:
```bash
{"text":"Learn Serverless","id":"ee6490d0-aa11e6-9ede-afdfa051af86","createdAt":1479138570824,"checked":false,"updatedAt":1479138570824}%
```

### Update a Term

```bash
# Replace the <id> part with a real id from your terms table
curl -X PUT https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/terms/<id> --data '{ "text": "Learn Serverless", "checked": true }'
```

Example Result:
```bash
{"text":"Learn Serverless","id":"ee6490d0-aa11e6-9ede-afdfa051af86","createdAt":1479138570824,"checked":true,"updatedAt":1479138570824}%
```

### Delete a Term

```bash
# Replace the <id> part with a real id from your terms table
curl -X DELETE https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/terms/<id>
```

No output

## Scaling

### AWS Lambda

By default, AWS Lambda limits the total concurrent executions across all functions within a given region to 100. The default limit is a safety limit that protects you from costs due to potential runaway or recursive functions during initial development and testing. To increase this limit above the default, follow the steps in [To request a limit increase for concurrent executions](http://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html#increase-concurrent-executions-limit).

### DynamoDB

When you create a table, you specify how much provisioned throughput capacity you want to reserve for reads and writes. DynamoDB will reserve the necessary resources to meet your throughput needs while ensuring consistent, low-latency performance. You can change the provisioned throughput and increasing or decreasing capacity as needed.

This is can be done via settings in the `serverless.yml`.

```yaml
  ProvisionedThroughput:
    ReadCapacityUnits: 1
    WriteCapacityUnits: 1
```

In case you expect a lot of traffic fluctuation we recommend to checkout this guide on how to auto scale DynamoDB [https://aws.amazon.com/blogs/aws/auto-scale-dynamodb-with-dynamic-dynamodb/](https://aws.amazon.com/blogs/aws/auto-scale-dynamodb-with-dynamic-dynamodb/)
