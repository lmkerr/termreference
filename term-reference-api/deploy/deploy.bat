mkdir deploy
npm install
npm run build
npm prune --production
Compress-Archive dist/, node_modules/ nest-lambda.zip
 
aws cloudformation package --template-file aws/nest-lambda.yaml --s3-bucket termreference-api-cloudformation --output-template-file deploy/nest-lambda.out.yaml
 
aws cloudformation deploy --template-file deploy/nest-lambda.out.yaml --stack-name nest-lambda --capabilities CAPABILITY_IAM