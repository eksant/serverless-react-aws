### **Add App Favicons**
Create React App generates a simple favicon for our app and places it in public/favicon.ico. However, getting the favicon to work on all browsers and mobile platforms requires a little more work. There are quite a few different requirements and dimensions. And this gives us a good opportunity to learn how to include files in the public/ directory of our app.

For our example, we are going to start with a simple image and generate the various versions from it.

**Right-click to download** the following image.

![App Icon](https://d33wubrfki0l68.cloudfront.net/51b114579c271bf050c38de2a1dc8e7112dacaa7/df452/assets/scratch-icon.png)

To ensure that our icon works for most of our targeted platforms we’ll use a service called the [Favicon Generator](http://realfavicongenerator.net/).

Click **Select your Favicon picture** to upload our icon.

![Realfavicongenerator.net screenshot](https://d33wubrfki0l68.cloudfront.net/009990a6f5962e44eb5b8e4f96a57827b4d964cb/08ec3/assets/realfavicongenerator.png)

Once you upload your icon, it’ll show you a preview of your icon on various platforms. Scroll down the page and hit the **Generate your Favicons and HTML code** button.

![Realfavicongenerator.net screenshot](https://d33wubrfki0l68.cloudfront.net/3c21045ee75b5cb62b2018f39e45d086ef89aa7b/ee5a6/assets/realfavicongenerator-generate.png)

This should generate your favicon package and the accompanying code.

Click **Favicon package** to download the generated favicons. And copy all the files over to your public/ directory.

![Realfavicongenerator.net completed screenshot](https://d33wubrfki0l68.cloudfront.net/70911200bdc0b5eaa4fe7e85df4ef86977876528/9750c/assets/realfavicongenerator-completed.png)

Then replace the contents of public/manifest.json with the following:

```
{
  "short_name": "Scratch",
  "name": "Scratch Note Taking App",
  "icons": [
    {
      "src": "android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "android-chrome-256x256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "start_url": "./index.html",
  "display": "standalone",
  "theme_color": "#ffffff",
  "background_color": "#ffffff"
}
```

To include a file from the public/ directory in your HTML, Create React App needs the %PUBLIC_URL% prefix.

Add this to your public/index.html.

```
<link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/apple-touch-icon.png">
<link rel="icon" type="image/png" href="%PUBLIC_URL%/favicon-32x32.png" sizes="32x32">
<link rel="icon" type="image/png" href="%PUBLIC_URL%/favicon-16x16.png" sizes="16x16">
<link rel="mask-icon" href="%PUBLIC_URL%/safari-pinned-tab.svg" color="#5bbad5">
<meta name="theme-color" content="#ffffff">
```

And remove the following lines that reference the original favicon and theme color.

```
<meta name="theme-color" content="#000000">
<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
```

Finally head over to your browser and try the /favicon-32x32.png path to ensure that the files were added correctly.

Next we are going to look into setting up custom fonts in our app.


[[Back]](https://github.com/eksant/serverless-react-aws)
