# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

$setup = <<SCRIPT
apt-get update
apt-get install -y python-software-properties
apt-add-repository -y ppa:chris-lea/node.js
apt-get update
apt-get install -y nodejs
npm install npm -g
apt-get install -y ruby-compass
gem install compass 
gem install bootstrap-sass
npm install -g bower
npm install -g grunt-cli
apt-get install phantomjs
npm install
bower install
SCRIPT

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.network "private_network", ip: "192.168.33.11"

  # forward default port 9000 to host 9000.
  # If changed you must update Gruntfile.js to match
  config.vm.network :forwarded_port, :host => 9000, :guest => 9000
  # forward tests port 9000 to host 9001.
  # If changed you must update Gruntfile.js to match
  config.vm.network :forwarded_port, :host => 9001, :guest => 9001
  # forward livereload port 35729 to host 35729.
  # If changed you must update Gruntfile.js to match
  config.vm.network :forwarded_port, :host => 35729, :guest => 35729

  config.vm.provider "virtualbox" do |vb|
     vb.name = "Front End box dev"
     vb.customize ["modifyvm", :id, "--memory", "2048"]
     vb.customize ["modifyvm", :id, "--nicpromisc2", "allow-all"]
  end

  #Sync the current folder in the vagrant user folder of the VM
  config.vm.synced_folder ".", "/home/vagrant/workspace"

  config.vm.provision :shell, inline: $setup
end
