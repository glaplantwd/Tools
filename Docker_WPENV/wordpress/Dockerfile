FROM wordpress:php8.3-apache

# Set the working directory
WORKDIR /var/www/html

# Install necessary packages and clean up
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y --no-install-recommends \
    vim \
    wget && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copy WordPress files to the container
COPY . /var/www/html

# Copy the fix-permissions script
COPY fix-permissions.sh /usr/local/bin/fix-permissions.sh
RUN chmod +x /usr/local/bin/fix-permissions.sh

# Expose the default Apache port
EXPOSE 80

# Combine the permission fix and Apache start in the ENTRYPOINT script
ENTRYPOINT ["/bin/bash", "-c", "/usr/local/bin/fix-permissions.sh && apache2-foreground"]
