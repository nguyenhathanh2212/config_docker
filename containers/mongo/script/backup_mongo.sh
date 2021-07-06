#!/bin/bash

set -e

COLLECTION=test
TODAY=`date +%m%d%Y-%H:%M:%S`
BACKUP_PATH=/mongo_backups/$TODAY

mkdir -p $BACKUP_PATH

mongodump --db $COLLECTION -o $BACKUP_PATH

echo "Backup data Date: $TODAY!"
