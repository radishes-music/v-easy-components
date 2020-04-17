#! /bin/sh

# release to linkorg.club
if [ "$TRAVIS_BRANCH" = "docs" ]; then
  # file name
  FILE="linkorg-club"$(date +%Y%m%d)".tar.bz2"

  # compression file
  tar -cjvf $FILE ./v-easy
  # copy tar.bz2 file
  scp -o StrictHostKeyChecking=no -r $FILE ci@112.74.169.178:~/travis-repo
  # un-compression tar.bz2 file to ~/sitemap
  ssh ci@112.74.169.178 -o StrictHostKeyChecking=no 'cd ~/travis-repo && tar -xjvf '$FILE' -C ~/sitemap'

  echo 'Done'
  exit 0
fi
