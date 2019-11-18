# pmhc-mds.com

[![Build Status](https://travis-ci.org/strategicdata/pmhc-mds.com.svg?branch=master)](https://travis-ci.org/strategicdata/pmhc-mds.com)

## Build and view site

`docker-compose up`

## Update rubygems

`docker-compose run site bundle update`

===========================================

Posting announcements:

To create a new post, all you need to do is create a file in the _source/_posts directory. How you name files in this folder is important. Jekyll requires blog post files to be named according to the following format:

YYYY-MM-DD-title.md

For example: 2016-09-12-This-is-the-name-of-the-post.md

All Posts must begin with YAML front matter, like so:

---
title: This is the name of the post.
---

The content of the file is simply the content of the post formatted using standard HTML tags.

More information here:
https://jekyllrb.com/docs/posts/

===========================================
