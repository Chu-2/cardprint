#!/bin/bash

aws s3 sync public s3://ualibr-cardprint --delete $1
