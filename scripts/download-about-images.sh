#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download images for about section
curl -o public/images/about-coaching-1.jpg "https://images.unsplash.com/photo-1573497161079-f3d3ed51d311?q=80&w=1200&auto=format&fit=crop"
curl -o public/images/about-coaching-2.jpg "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
curl -o public/images/about-coaching-3.jpg "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop" 