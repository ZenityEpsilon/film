FROM php:7.4-fpm

# Set working directory
WORKDIR /var/www

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    locales \
    libpng-dev libjpeg62-turbo-dev libfreetype6-dev libxpm-dev \
    libonig-dev libpq-dev \
    zip libzip-dev \
    jpegoptim optipng pngquant gifsicle \
    libjpeg-turbo-progs \
    libmemcached-dev \
    vim \
    unzip \
    git \
    curl

# Imagemagick
RUN apt-get install -y \
    imagemagick ghostscript \
    libmagickwand-dev --no-install-recommends

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install extensions
RUN docker-php-ext-install mbstring exif pcntl

# ZIP
RUN docker-php-ext-install zip

# mysqli
RUN docker-php-ext-install mysqli \
	&& docker-php-ext-enable mysqli

# memcached
RUN mkdir -p /usr/src/php/ext/memcached \
    	&& curl -fsSL https://pecl.php.net/get/memcached | tar xvz -C "/usr/src/php/ext/memcached" --strip 1 \
    	&& docker-php-ext-install memcached

# redis
RUN mkdir -p /usr/src/php/ext/redis \
	&& curl -fsSL https://pecl.php.net/get/redis | tar xvz -C "/usr/src/php/ext/redis" --strip 1 \
	&& docker-php-ext-install redis

# Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer \
	&& chmod 755 /usr/bin/composer

# GD
RUN docker-php-ext-configure gd \
		--with-freetype=/usr/include/ \
		--with-jpeg=/usr/include/ \
		--with-xpm=/usr/include/ \
	&& NPROC=$(grep -c ^processor /proc/cpuinfo 2>/dev/null || 1) \
	&& docker-php-ext-install -j${NPROC} gd

# Opcache
RUN docker-php-ext-install opcache

ADD .docker/php/docker-php.ini /usr/local/etc/php/conf.d/docker-php.ini

# SETUP PHP-FPM CONFIG SETTINGS (max_children / max_requests)
RUN echo 'pm.max_children = 12' >> /usr/local/etc/php-fpm.d/zz-docker.conf && \
    echo 'pm.max_requests = 500' >> /usr/local/etc/php-fpm.d/zz-docker.conf

ARG SYS_USER
ARG SYS_UID
ARG SYS_GROUP
ARG SYS_GID

# Add user for application
RUN groupadd -g ${SYS_GID} ${SYS_GROUP}
RUN useradd -u ${SYS_UID} -ms /bin/bash -g ${SYS_GROUP} ${SYS_USER}

# Copy existing application directory contents
RUN mkdir /var/www/public
COPY . /var/www/public
RUN chown ${SYS_USER}:${SYS_GROUP} /var/www/public -R

# Change current user to www
USER ${SYS_USER}:${SYS_GROUP}

# Install dependencies
RUN cd /var/www/public \
	&& rm -rf vendor/ composer.lock \
	&& composer install

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
