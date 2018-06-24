### **Setting up Your Project on Seed**
We are going to use [Seed](https://seed.run/) to automate our serverless deployments and manage our environments.

Start by signing up for a free account [here](https://console.seed.run/signup-account).

![Create new Seed account screenshot](https://d33wubrfki0l68.cloudfront.net/bb8a9cf85e2f00b93f10b9bdc48b384568010d05/54ec3/assets/part2/create-new-seed-account.png)

Let’s **Add your first app**.

![Add your first Seed app screenshot](https://d33wubrfki0l68.cloudfront.net/31409114b59f97b5cac4ac39c641103cdf11b314/65295/assets/part2/add-your-first-seed-app.png)

Now to add your project, select **GitHub** as your git provider. You’ll be asked to give Seed permission to your GitHub account.

![Select Git provider screenshot](https://d33wubrfki0l68.cloudfront.net/08b67727d7ffafeccc5dcb04767a5154e7054a86/263a8/assets/part2/select-git-provider.png)

Select the repo we’ve been using so far.

Seed deploys to your AWS account on your behalf. You should create a separate IAM user with exact permissions that your project needs. You can read more about this [here](https://seed.run/docs/customizing-your-iam-policy). But for now we’ll simply use the one we’ve used in this tutorial.

Run the following command.

```
$ cat ~/.aws/credentials
```

The output should look something like this.

```
[default]
aws_access_key_id = YOUR_IAM_ACCESS_KEY
aws_secret_access_key = YOUR_IAM_SECRET_KEY
```

Fill these in and click **Add**.

![Select GitHub repo screenshot](https://d33wubrfki0l68.cloudfront.net/05758f793b8f1b4c0dc27a76131513da8a702933/8ddbb/assets/part2/select-github-repo.png)

Click on your newly created app.

![Click on new Seed app screenshot](https://d33wubrfki0l68.cloudfront.net/f786421dad12ebeae788e9df051b84832366af72/1be3b/assets/part2/click-on-new-seed-app.png)

You’ll notice a few things here. First, we have a service called **default**. A Serverless app can have multiple services within it. A service (roughly speaking) is a reference to a serverless.yml file. In our case we have one service in the root of our repo. Second, we have two stages (environments) set up for our app. Our **dev** stage is hooked up to master. This means that any commits to master will trigger a build in dev.

Click on **default**.

![Click default service in Seed project screenshot](https://d33wubrfki0l68.cloudfront.net/256cdb77ff318a87fd4d8d70669ed94bcceee979/f1e65/assets/part2/click-default-service-in-seed-project.png)

You’ll see that the stages this service has. Next click **dev**.

![Click dev stage in Seed project screenshot](https://d33wubrfki0l68.cloudfront.net/2d2fe5b4f9896f705a7a79f5c5c578af66cb2b41/47b68/assets/part2/click-dev-stage-in-seed-project.png)

You’ll see that we haven’t deployed to this stage yet.

![Dev stage in Seed project screenshot](https://d33wubrfki0l68.cloudfront.net/acf91d3a81a76dc835c0c5f51f264bcc09767cc8/6edf4/assets/part2/dev-stage-in-seed-project.png)

However, before we do that, we’ll need to add our secret environment variables.


[[Back]](https://github.com/eksant/serverless-react-aws)
