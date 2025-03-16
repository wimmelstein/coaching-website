#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download the image
curl -L "https://startupstockphotos.com/wp-content/uploads/2015/05/7.jpg" -o public/images/coaching-bg-original.jpg

# Check if imagemagick is installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick is required but not installed. Please install it first:"
    echo "On macOS: brew install imagemagick"
    echo "On Ubuntu: sudo apt-get install imagemagick"
    exit 1
fi

# Optimize the image
convert public/images/coaching-bg-original.jpg -strip -quality 85 -resize 1920x1080^ -gravity center -extent 1920x1080 public/images/coaching-bg.jpg

# Remove the original
rm public/images/coaching-bg-original.jpg

echo "Background image has been downloaded and optimized!" 