#! /bin/sh

# release to linkorg.club
DATE=$(date "+ %Y%m%d")
tar -cjvf linkorg-club.tar.bz2 ./v-easy
scp -o StrictHostKeyChecking=no -r linkorg-club$DATE.tar.bz2 ci@112.74.169.178:~/travis-repo
ssh ci@112.74.169.178 -o StrictHostKeyChecking=no 'cd ~/travis-repo && tar -xjvf linkorg-club$DATE.tar.bz2 -C ~/sitemap'
echo 'release success, by'
