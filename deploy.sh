#!/bin/bash
aws s3 cp . s3://olimpiici.com --recursive --exclude ".git/*" --exclude "deploy.sh"
