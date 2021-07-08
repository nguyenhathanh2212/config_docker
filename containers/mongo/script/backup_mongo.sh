#!/bin/bash

set -e

COLLECTION=$1

NAME_FOLDER=`date +%Y%m%d-%H%M`

BACKUP_PATH=/data/backup/$NAME_FOLDER

mkdir -p $BACKUP_PATH

mongodump --db $COLLECTION -o $BACKUP_PATH

echo "Backup data Date: $NAME_FOLDER!"

cd /data/backup
index=0
for d in `ls -d */ | sort -nr`; do
    index=$((index+1))
    if [ $index -gt 5 ]; then
        rm -rf "$d"
    fi
done
