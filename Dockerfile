# use a node base image
FROM node:16-alpine3.17

COPY . .

# set maintainer
LABEL maintainer "xxxxx"

# set a health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:8000 || exit 1

# tell docker what port to expose
EXPOSE 3000
