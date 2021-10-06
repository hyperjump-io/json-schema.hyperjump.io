#!/bin/bash

set -e

function cleanup {
  rm -rf "$WORK_DIR"
  echo "Deleted temp working directory $WORK_DIR"
}

trap cleanup EXIT

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
WORK_DIR=$(mktemp -d)

# check if tmp dir was created
if [[ ! "$WORK_DIR" || ! -d "$WORK_DIR" ]]; then
  echo "Could not create temp dir"
  exit 1
fi

npm run build

cd "$WORK_DIR"

git clone -b gh-pages --single-branch git@github.com:hyperjump-io/json-schema.hyperjump.io.git
cd json-schema.hyperjump.io

git rm -r -q .
git reset -q HEAD CNAME
git checkout -q -- CNAME

cp -rp "$DIR"/../build/* .
touch .nojekyll
git add .

git commit
git push
