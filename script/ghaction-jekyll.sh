#!/usr/bin/env bash
set -e # halt script on error

# github actions mounts the workspace as /github/workspace
cd /github/workspace

bundle install
bundle exec jekyll build
