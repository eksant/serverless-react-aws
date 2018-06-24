### **Serverless Node.js Starter**
[Serverless Node.js Starter]((https://github.com/eksant/serverless-react-aws/tree/master/serverless-nodejs-starter)) uses the [serverless-webpack](https://github.com/serverless-heaven/serverless-webpack) plugin, the [serverless-offline](https://github.com/dherault/serverless-offline) plugin, [Babel](https://babeljs.io/), and [Jest](https://facebook.github.io/jest/). It supports:

* Use ES7 syntax in your handler functions
* Package your functions using Webpack
* Run API Gateway locally
  * Use serverless offline start
* Support for unit tests
  * Run npm test to run your tests
* Sourcemaps for proper error messages
  * Error message show the correct line numbers
  * Works in production with CloudWatch
* Automatic support for multiple handler files
  * No need to add a new entry to your webpack.config.js
* Add environment variables for your stages

#### Demo
A demo version of this service is hosted on AWS - https://z6pv80ao4l.execute-api.us-east-1.amazonaws.com/dev/hello.

And here is the ES7 source behind it.

```
export const hello = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Go Serverless v1.0! ${(await message({ time: 1, copy: 'Your function executed successfully!'}))}`,
      input: event,
    }),
  };

  callback(null, response);
};

const message = ({ time, ...rest }) => new Promise((resolve, reject) => 
  setTimeout(() => {
    resolve(`${rest.copy} (with a delay)`);
  }, time * 1000)
);
```

#### Requirements
* [Configure your AWS CLI](../setup-aws/configure-the-aws-cli.md)
* Install the Serverless Framework `npm install serverless -g`

#### Installation
To create a new Serverless project.

```
$ serverless install --url https://github.com/AnomalyInnovations/serverless-nodejs-starter --name my-project
```

Enter the new directory.

```
$ cd my-project
```

Install the Node.js packages.

```
$ npm install
```

#### Usage
To run a function on your local

```
$ serverless invoke local --function hello
```

To simulate API Gateway locally using [serverless-offline](https://github.com/dherault/serverless-offline)

```
$ serverless offline start
```

Run your tests

```
$ npm test
```

We use Jest to run our tests. You can read more about setting up your tests [here](https://facebook.github.io/jest/docs/en/getting-started.html#content).

Deploy your project

```
$ serverless deploy -v
```

Deploy a single function

```
$ serverless deploy function --function hello
```

To add environment variables to your project

1. Rename env.example to env.yml.
2. Add environment variables for the various stages to env.yml.
3. Uncomment environment: ${file(env.yml):${self:provider.stage}} in the serverless.yml.
4. Make sure to not commit your env.yml.

So give it a try and send us an [email](mailto:eksant@gmail.com) if you have any questions or open a [new issue](https://github.com/eksant/serverless-react-aws/issues/new) if you’ve found a bug.


[[Back]](https://github.com/eksant/serverless-react-aws)
