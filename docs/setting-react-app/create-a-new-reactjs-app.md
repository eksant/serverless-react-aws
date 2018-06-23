### **Create a New React.js App**
Let’s get started with our frontend. We are going to create a single page app using [React.js](https://facebook.github.io/react/). We’ll use the Create [React App project](https://github.com/facebookincubator/create-react-app) to set everything up. It is officially supported by the React team and conveniently packages all the dependencies for a React.js project.

Move out of the directory that we were working in for the backend.

```
$ cd ../
```

#### Create a New React App
Run the following command to create the client for our notes app.

```
$ npx create-react-app notes-app-client
```

This should take a second to run, and it will create your new project and your new working directory.

Now let’s go into our working directory and run our project.

```
$ cd notes-app-client
$ npm start
```

This should fire up the newly created app in your browser.

![New Create React App screenshot](https://d33wubrfki0l68.cloudfront.net/9ae9e3c18c0e24f717eb03d396673094db90906b/ed39f/assets/new-create-react-app.png)

#### Change the Title
Let’s quickly change the title of our note taking app. Open up public/index.html and edit the title tag to the following:

```
<title>Scratch - A simple note taking app</title>
```

Create React App comes pre-loaded with a pretty convenient yet minimal development environment. It includes live reloading, a testing framework, ES6 support, and [much more](https://github.com/facebookincubator/create-react-app#why-use-this).

Next, we are going to create our app icon and update the favicons.


[[Back]](https://github.com/eksant/serverless-react-aws)
