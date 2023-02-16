#!/bin/bash
#rename all jpg files in a sequence. Place script inside image folder
# sh renameImages.sh 
a=1
for i in *.jpg; do
  new=$(printf "%d.jpg" "$a")
  mv -i -- "$i" "$new"
  let a=a+1
done