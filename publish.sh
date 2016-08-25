#!/usr/bin/env bash
set -e # halt script on error

docker build -t stratdat/pmhc-mds . \
  && docker push stratdat/pmhc-mds

