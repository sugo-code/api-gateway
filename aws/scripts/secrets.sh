#!/bin/bash

cd /home/ec2-user/app
aws s3 cp s3://clod2021-group2-bucket-secrets/api-gateway/.env .env
