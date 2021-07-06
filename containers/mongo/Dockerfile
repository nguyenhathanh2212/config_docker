FROM mongo:4.4.2

# Install cron
RUN apt-get update && apt-get install -y cron

# COPY ./containers/mongo/script/docker-entrypoint.sh /
COPY ./containers/mongo/script/backup_mongo.sh /
RUN chmod +x /backup_mongo.sh

COPY ./containers/mongo/cron/backup-mongo-cron /etc/cron.d/backup-mongo-cron

RUN chmod 0644 /etc/cron.d/backup-mongo-cron

# Apply cron job
RUN crontab /etc/cron.d/backup-mongo-cron

RUN cron -f

# ENTRYPOINT [ "/docker-entrypoint.sh" ]
