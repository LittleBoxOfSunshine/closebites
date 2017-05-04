$script = <<SCRIPT
#!/usr/bin/env bash

shareroot="/vagrant"
webroot="/var/www"
password="pass"

#switch to root
sudo su

export DEBIAN_FRONTEND=noninteractive

apt-get -y update

# Install Apache2
apt-get install -y apache2

# Install Mail Server
# sudo apt-get install sendmail
# echo 'HostsFile=/etc/hosts' >> /etc/mail/sendmail.conf
# Also need to fix /etc/hosts. See evernote for details

# Configure Apache2 to load from shared directory (if needed)
# if ! [ -L $webroot ]; then
#   rm -rf $webroot
#   ln -fs $shareroot $webroot
# fi

# Install PHP + dependencies
# apt-get -y install php5 libapache2-mod-php5 php5-mcrypt php5-curl
# add-apt-repository -y ppa:ondrej/php
# apt-get -y update
# apt-get -y install php5.6 php5.6-mcrypt php5.6-mbstring php5.6-curl php5.6-cli php5.6-mysql php5.6-gd php5.6-intl php5.6-xsl php5.6-zip

# apt-get install -y php7.0 libapache2-mod-php7.0 php7.0 php7.0-common php7.0-gd php7.0-mysql php7.0-mcrypt php7.0-curl php7.0-intl php7.0-xsl php7.0-mbstring php7.0-zip php7.0-bcmath php7.0-iconv php7.0-cli

apt-get install -y php7.0 php-cli php libapache2-mod-php7.0

# apt-get install php-mongodb

# Install MySQL + dependencies
debconf-set-selections <<< "mysql-server mysql-server/root_password password $password"
debconf-set-selections <<< "mysql-server mysql-server/root_password_again password $password"
apt-get -y install mysql-server php-mysql #libapache2-mod-auth-mysql

# Install phpMyAdmin
debconf-set-selections <<< "phpmyadmin phpmyadmin/dbconfig-install boolean true"
debconf-set-selections <<< "phpmyadmin phpmyadmin/app-password-confirm password $password"
debconf-set-selections <<< "phpmyadmin phpmyadmin/mysql/admin-pass password $password"
debconf-set-selections <<< "phpmyadmin phpmyadmin/mysql/app-pass password $password"
debconf-set-selections <<< "phpmyadmin phpmyadmin/reconfigure-webserver multiselect apache2"
apt-get install -y phpmyadmin
#a2enmod php7.0.load

# apt-get install php7.0-sqlite

# Enable php extension
# php7enmod mcrypt

# Install git (needed for composer)
apt-get install git zip unzip

# Allow for installation of composer
sudo chown -R `whoami`:root /usr/local/bin
sudo chown -R `whoami`:root /usr/local/share

# Install Composer
curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Run composer
# composer --working-dir=$webroot install

# Configure webroot permissions
adduser vagrant www-data
chown -R www-data:www-data /var/www
chmod -R g+rw /var/www

# AWS Security Group?
add security group 3330S1

# Configure apache to rewrite
# echo -e "<VirtualHost *:80>" > /etc/apache2/sites-available/000-default.conf
# echo -e "\tDocumentRoot ${webroot}" >> /etc/apache2/sites-available/000-default.conf
# echo -e "\t<Directory ${webroot}>" >> /etc/apache2/sites-available/000-default.conf
# echo -e "\t\tAllowOverride All" >> /etc/apache2/sites-available/000-default.conf
# echo -e "\t</Directory>" >> /etc/apache2/sites-available/000-default.conf
# echo -e "\tErrorLog /error.log" >> /etc/apache2/sites-available/000-default.conf
# echo -e "\tCustomLog /access.log combined" >> /etc/apache2/sites-available/000-default.conf
# echo -e "</VirtualHost>" >> /etc/apache2/sites-available/000-default.conf

# Enable Apache mod_rewrite
a2enmod rewrite

# Restart Apache2
service apache2 restart
SCRIPT

Vagrant.configure("2") do |config|
  # Base VM
  config.vm.box = "bento/ubuntu-16.04"

  # Use the script above to provision the vm
  config.vm.provision "shell", inline: $script
  # Forward port
  config.vm.network "forwarded_port", guest: 80, host: 7000
  # Set up private networking
  config.vm.network "private_network", ip: "192.168.33.101"

  # config.vm.synced_folder "./", "/home/vagrant", owner: "www-data", group: "www-data"
  config.vm.synced_folder "./", "/vagrant", owner: "www-data", group: "www-data"

end
