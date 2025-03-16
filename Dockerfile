FROM httpd:2.4-alpine

# Remove default Apache static assets
RUN rm -rf /usr/local/apache2/htdocs/*

# Copy static assets from builder
COPY deploy/ /usr/local/apache2/htdocs/

# Copy Apache configuration
COPY apache.conf /usr/local/apache2/conf/httpd.conf

# Expose port 80
EXPOSE 80 