#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download images for services
curl -o public/images/agile-coaching.jpg "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
curl -o public/images/scrum-master.jpg "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?q=80&w=800&auto=format&fit=crop"
curl -o public/images/career-coaching.jpg "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop"
curl -o public/images/life-coaching.jpg "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
curl -o public/images/leadership.jpg "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
curl -o public/images/performance.jpg "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" 