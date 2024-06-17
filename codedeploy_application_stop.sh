#!/bin/bash
# Stop all servers and start the server
pm2 stop app
pm2 delete app
