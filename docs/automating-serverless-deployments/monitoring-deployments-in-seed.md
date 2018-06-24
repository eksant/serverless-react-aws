### **Monitoring Deployments in Seed**
Despite our best intentions we might run into cases where some faulty code ends up in production. We want to make sure we have a plan for that. Let’s go through what this would look like in [Seed](https://seed.run/).

#### Push Some Faulty Code
First start by pushing an obvious mistake.

Add the following to functions/create.js right at the top of our function.

```
gibberish.what;
```

Now there is no such variable as gibberish so this code should fail.

Let’s commit and push this to dev.

```
$ git add .
$ git commit -m "Making a mistake"
$ git push
```

Now if you head over to the **dev** stage in Seed you can see the build in progress. Wait for it to complete and hit **Promote**.

![Promote changes to prod screenshot](https://d33wubrfki0l68.cloudfront.net/d9240300be9328e8da0e96f62e8044c128ce510e/2bbce/assets/part2/promote-changes-to-prod.png)

Confirm the Change Set by hitting **Confirm**.

![Confirm Change Set to prod screenshot](https://d33wubrfki0l68.cloudfront.net/aba878840d972b817c4cecc1e56e31ef8d23f53c/61530/assets/part2/confirm-changeset-to-prod.png)

Head back to the service page and let it complete.

#### Enable Access Logs
Now before we test our faulty code, we’ll turn on API Gateway access logs so we can see the error. Click on the **prod** stage **View Deployment**.

![Click View Deployment in prod screenshot](https://d33wubrfki0l68.cloudfront.net/33a7088191f26cb8109f76acc64b56c401d35cd9/cd4e0/assets/part2/click-view-deployment-in-prod.png)

Hit **Settings**.

![Click deployment settings in prod screenshot](https://d33wubrfki0l68.cloudfront.net/b59bb7ad9e0050d4658f9ee3723de8f1444321ce/c0e05/assets/part2/click-deployment-settings-in-prod.png)

Hit **Enable Access Logs**.

![Enable access logs in prod screenshot](https://d33wubrfki0l68.cloudfront.net/8997a51152386c041f91237ee82b7b465b4b7164/71a74/assets/part2/enable-access-logs-in-prod.png)

This will take a couple of minutes but Seed will automatically configure the IAM roles necessary for this and enable API Gateway access logs for your prod environment.

#### Test the Faulty Code
Now to test our code, run the same command from the last chapter to test our API.

```
$ npx aws-api-gateway-cli-test \
--username='admin@example.com' \
--password='Passw0rd!' \
--user-pool-id='YOUR_PROD_COGNITO_USER_POOL_ID' \
--app-client-id='YOUR_PROD_COGNITO_APP_CLIENT_ID' \
--cognito-region='YOUR_PROD_COGNITO_REGION' \
--identity-pool-id='YOUR_PROD_IDENTITY_POOL_ID' \
--invoke-url='YOUR_PROD_API_GATEWAY_URL' \
--api-gateway-region='YOUR_PROD_API_GATEWAY_REGION' \
--path-template='/notes' \
--method='POST' \
--body='{"content":"hello world","attachment":"hello.jpg"}'
```

Make sure to use the prod version of your resources.

You should see an error that looks something like this.

```
Authenticating with User Pool
Getting temporary credentials
Making API request
{ status: 502,
  statusText: 'Bad Gateway',
  data: { message: 'Internal server error' } }
```

#### View Logs and Metrics
Back in the Seed console, you should be able to click on **Access Logs**.

![Click access logs in prod screenshot](https://d33wubrfki0l68.cloudfront.net/24f6d5c54d355683c536366621c8818a50911cad/db210/assets/part2/click-access-logs-in-prod.png)

This should show you that there was a 502 error on a recent request.

![View access logs in prod screenshot](https://d33wubrfki0l68.cloudfront.net/b4d6bda612076cc0cae71e106f2f3dea31ac2f51/4cfcc/assets/part2/view-access-logs-in-prod.png)

If you go back, you can click on **Metrics** to get a good overview of our requests.

![Click API metrics in prod screenshot](https://d33wubrfki0l68.cloudfront.net/b1d9c477e2116545cf505f1e2609b3415124106a/819f8/assets/part2/click-api-metrics-in-prod.png)

You’ll notice the number of requests that were made, 4xx errors, 5xx error, and latency for those requests.

![View API metrics in prod screenshot](https://d33wubrfki0l68.cloudfront.net/86433604f13b463e09dee8656201051ca4df3c2b/7cc02/assets/part2/view-api-metrics-in-prod.png)

Now if we go back and click on the **Logs** for the **create** Lambda function.

![Click lambda logs in prod screenshot](https://d33wubrfki0l68.cloudfront.net/7db7ef1f4e61b7a65f525029c4439d3c7676ea95/a80d5/assets/part2/click-lambda-logs-in-prod.png)

This should show you clearly that there was an error in our code. Notice, that it is complaining that gibberish is not defined.

![View lambda logs in prod screenshot](https://d33wubrfki0l68.cloudfront.net/9ed9397c1a438d58cbdbecc480c1e9367d52b132/eeb75/assets/part2/view-lambda-logs-in-prod.png)

And just like the API metrics, the Lambda metrics will show you an overview of what is going on at a function level.

![View lambda metrics in prod screenshot](https://d33wubrfki0l68.cloudfront.net/378dc35f08053da4504c566982a2e2ece69a36b7/e34aa/assets/part2/view-lambda-metrics-in-prod.png)

#### Rollback in Production
Now obviously, we have a problem. Usually you might be tempted to fix the code and push and promote the change. But since our users might be affected by faulty promotions to prod, we want to rollback our changes immediately.

To do this, head back to the **prod** stage. And hit the **Rollback** button on the previous build we had in production.

![Click rollback in prod screenshot](https://d33wubrfki0l68.cloudfront.net/7b8d432c0c341c90eee5fff9081e40ab121bc875/fc6ca/assets/part2/click-rollback-in-prod.png)

Seed keeps track of your past builds and simply uses the previously built package to deploy it again.

![Rollback complete in prod screenshot](https://d33wubrfki0l68.cloudfront.net/dac0b78b50cfd894651d8abccf8544f363ee2aaa/109d2/assets/part2/rollback-complete-in-prod.png)

And now if you run your test command from before.

```
$ npx aws-api-gateway-cli-test \
--username='admin@example.com' \
--password='Passw0rd!' \
--user-pool-id='YOUR_PROD_COGNITO_USER_POOL_ID' \
--app-client-id='YOUR_PROD_COGNITO_APP_CLIENT_ID' \
--cognito-region='YOUR_PROD_COGNITO_REGION' \
--identity-pool-id='YOUR_PROD_IDENTITY_POOL_ID' \
--invoke-url='YOUR_PROD_API_GATEWAY_URL' \
--api-gateway-region='YOUR_PROD_API_GATEWAY_REGION' \
--path-template='/notes' \
--method='POST' \
--body='{"content":"hello world","attachment":"hello.jpg"}'
```

You should see it succeed this time.

```
Authenticating with User Pool
Getting temporary credentials
Making API request
{ status: 200,
  statusText: 'OK',
  data: 
   { userId: 'us-east-1:9bdc031d-ee9e-4ffa-9a2d-123456789',
     noteId: '8f7da030-650b-11e7-a661-123456789',
     content: 'hello world',
     attachment: 'hello.jpg',
     createdAt: 1499648598452 } }
```

#### Revert the Code
Finally, don’t forget to revert your code in functions/create.js.

```
gibberish.what;
```

And commit and push the changes.

```
$ git add .
$ git commit -m "Fixing the mistake"
$ git push
```

And that’s it! We are now ready to plug this into our frontend.


[[Back]](https://github.com/eksant/serverless-react-aws)
