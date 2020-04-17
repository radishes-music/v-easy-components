#! /bin/sh

# release to linkorg.club
FILE="linkorg-club"$(date +%Y%m%d)".tar.bz2"
tar -cjvf $FILE ./v-easy
scp -o StrictHostKeyChecking=no -r $FILE ci@112.74.169.178:~/travis-repo
ssh ci@112.74.169.178 -o StrictHostKeyChecking=no 'cd ~/travis-repo && tar -xjvf '$FILE' -C ~/sitemap'
echo 'Done'
