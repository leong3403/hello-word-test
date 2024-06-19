#!/bin/bash
# Stop all servers and start the server
pm2 stop all -s
pm2 start /home/ubuntu/my-app1/app.js
