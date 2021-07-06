#!/bin/bash

# chown mongodb:mongodb /tmp/mongodb-27017.sock

crontab -e

0 * * * * sh /backup_mongo.sh > /logs/cron-backup_mongo.log
cron -f