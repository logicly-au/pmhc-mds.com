#!/usr/bin/env bash
set -e # halt script on error

docker run \
  -it --rm --label=jekyll \
  --volume=$(pwd):/srv/jekyll \
  jekyll/jekyll bundle exec jekyll build

docker run \
  -it --rm --label=html-proofer \
  --volume=$(pwd)/_deploy:/srv/site \
  18fgsa/html-proofer /srv/site --disable-external --url-ignore "/^#$/" \
  || echo "Fail!"

docker run \
  -it --rm --label=html5validator \
  --volume=$(pwd)/_deploy:/mnt/site \
  stratdat/html5validator \
  || echo "Fail!"
