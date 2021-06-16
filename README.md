# Guide Stack
Final project for the web developer grade.

Guide Stack is an application developed in React whose objective is to collect information from different cities and centralize it on a single website.

# What's need it
To run this project, first you need a Google API Key from this platform following [this URL](https://console.cloud.google.com/apis/credentials?hl=es-419&authuser=1&angularJsUrl=%2Fprojectselector%2Fapis%2Fcredentials%3Fhl%3Des-419%26supportedpurview%3Dproject%26authuser%3D1&project=guidestack&folder=&organizationId=&supportedpurview=project)
and adding it on ``` src/Component/Pages/Map/config.js ```

This is needed if you want the app to work.

# How to run it with NPM
First you have to install all dependencies with:
```
npm install
```
and finally use:
```
npm start
```

# How to run it with Docker
First you have to build the image of the application:
```
docker build -t lrodrigueztevar/guidestack .
```
Finally, run a container using this image with:
```
docker run -p 3000:3000 lrodrigueztevar/guidestack
```
Make sure port 3000 is available, if it's not, change the port in the last command.
