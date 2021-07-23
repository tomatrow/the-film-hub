#! /usr/bin/bash

export NODE_PATH='/home/thefil15/public_html/wp-content/plugins/thread-and-point/nodejs/node-v16.5.0-linux-x64/bin'
export PATH="$PATH:$NODE_PATH"

cd /home/thefil15/public_html/wp-content/plugins/thread-and-point/the-film-hub

main() {
    echo start $(date) 
    pnpm run build 
    echo end $(date)
}

main &> ./scripts/log.txt

cd -
