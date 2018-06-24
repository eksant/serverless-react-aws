### **Set Custom Domains Through Seed**
Our serverless API uses API Gateway and it gives us some auto-generated endpoints. We would like to configure them to use a scheme like api.my-domain.com or something similar. This can take a few different steps through the AWS Console, but it is pretty straightforward to configure through [Seed](https://seed.run/).

From our **prod** stage, click on **View Deployment**.

![Prod stage view deployment screenshot](https://d33wubrfki0l68.cloudfront.net/30df02579c5a752aadaab2cff94d4cfb387253fb/77177/assets/part2/prod-stage-view-deployment.png)

This shows you a list of the API endpoints and Lambda functions that are a part of this deployment. Now click on **Settings**.

![Prod stage deployment screenshot](https://d33wubrfki0l68.cloudfront.net/337d3ad4dc336eb19ed55e3d15d8c2f7b9391278/2ae85/assets/part2/prod-stage-deployment.png)

And hit **Update Custom Domain**.

![Custom domain panel prod screenshot](https://d33wubrfki0l68.cloudfront.net/4dcfc9a8dd825975d72d87ab078e262dfdffeb00/061d0/assets/part2/custom-domain-panel-prod.png)

In the first part of the tutorial we had added our domain to Route 53. If you haven’t done so you can [read more about it here](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/MigratingDNS.html). Hit **Select a domain** and you should see a list of all your Route 53 domains. Select the one you intend to use. And fill in the sub-domain and base path. For example, you could use api.my-domain.com/prod; where api is the sub-domain and prod is the base path.

And hit **Update**.

![Custom domain details prod screenshot](https://d33wubrfki0l68.cloudfront.net/2f3c9b340cc410cd5bf5b7ab1f643f43f708af8e/0d632/assets/part2/custom-domain-details-prod.png)

Seed will now go through and configure the domain for this API Gateway endpoint, create the SSL certificate and attach it to the domain. This process can take up to 40 mins.

While we wait, we can do the same for our dev stage. Go into the **dev** stage > click **View Deployment** > click **Settings** > and hit **Update Custom Domain**. And select the domain, sub-domain, and base path. In our case we’ll use something like api.my-domain.com/dev.

![Custom domain details dev screenshot](https://d33wubrfki0l68.cloudfront.net/a2c6ef7b3d5f8ba45c80e1801d13705088b91de4/84667/assets/part2/custom-domain-details-dev.png)

Hit **Update** and wait for the changes to take place.

Once complete, we are ready to test our fully-configured serverless API backend!


[[Back]](https://github.com/eksant/serverless-react-aws)
