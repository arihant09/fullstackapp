import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as cloudfront from '@aws-cdk/aws-cloudfront';
import * as s3Deployment from '@aws-cdk/aws-s3-deployment';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //S3
    const bucket = new s3.Bucket(this, "CdkTestBucket", {
      publicReadAccess: true,
      websiteIndexDocument: "index.html"
    });
    //Deployment
    new s3Deployment.BucketDeployment(this, "CdkDeploymnetBucket", {
      sources: [s3Deployment.Source.asset("../build")],
      destinationBucket: bucket
    });
    //CF
  new cloudfront.CloudFrontWebDistribution(this, 'CfDistribution', {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: bucket
          },
          behaviors: [{ isDefaultBehavior: true }]
        }
      ]
    });
  }
}
