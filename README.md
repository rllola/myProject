# My Project

Standard project start up for webdev with Angular, grunt, bower.

## Setup

Please clone the git repository :

```
$ git clone https://github.com/rllola/myProject.git
```

Start the Vagrant box :

```
$ vagrant up
```

Run :
```
$ npm install & bower install
```

It will add all the dependencies needed.

Go inside your vargrant box :

```
$ vagrant ssh
```

Reach the workspace folder :

```
$ cd workspace
```

In the folder, you should see all the files related to the project.

Then start your server :
```
grunt go
```

## Start working

Open your favorite broswer to see your page :
```
http://192.168.33.11:9000/
```

You can now modify your files, the changes will be automatically appears on your webpage.

For more information see my tutorial on grunt, bower and Angular :

[My Website : A tutorial to learn how to develop web project with Angular using grunt and bower.](https://github.com/rllola/myWebsite/wiki)
