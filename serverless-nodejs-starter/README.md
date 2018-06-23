# Serverless NodeJS Starter
This repo is for the serverless backend API that I build over the course of the tutorial. You can find the repo for the frontend React app [here](https://github.com/eksant/serverless-react-aws/tree/master/serverless-client-react). And the repo for the tutorial [here](https://github.com/eksant/serverless-react-aws).


#### Usage
To use this repo locally you need to have the [Serverless framework](https://serverless.com) installed.

``` bash
$ npm install serverless -g
```

Clone this repo and install the NPM packages.

``` bash
$ git clone https://github.com/eksant/serverless-react-aws/tree/master/serverless-nodejs-starter
$ npm install
```

Run a single API on local.

``` bash
$ serverless invoke local --function list --path event.json
```

Where, `event.json` contains the request event info and looks something like this.

``` json
{
  "requestContext": {
    "authorizer": {
      "claims": {
        "sub": "USER-SUB-1234"
      }
    }
  }
}
```

Finally, run this to deploy to your AWS account.

``` bash
$ serverless deploy -v
```
