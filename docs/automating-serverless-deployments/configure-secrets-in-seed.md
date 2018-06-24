### **Configure Secrets in Seed**
Before we can do our first deployment, we need to make sure to configure our secret environment variables. If you’ll recall, we have explicitly not stored these in our code (or in Git). This means that if somebody else on our team needs to deploy, we’ll need to pass the env.yml file around. Instead we’ll configure [Seed](https://seed.run/) to deploy with our secrets for us.

To do that, hit the **Settings** button in our **dev** stage.

![Select Settings in dev stage screenshot](https://d33wubrfki0l68.cloudfront.net/fd8419729c2f64135891db1ddeb3a5a4d23b33ca/f8188/assets/part2/select-settings-in-dev-stage.png)

Here click **Show Env Variables**.

![Show dev env variables settings screenshot](https://d33wubrfki0l68.cloudfront.net/bed10c42dcc5bfa9c78544c79f282b971824b46e/ef9fd/assets/part2/show-dev-env-variables-settings.png)

And type in stripeSecretKey as the **Key** and the value should be the STRIPE_TEST_SECRET_KEY back from the Load secrets from env.yml chapter. Hit **Add** to save your secret key.

![Add secret dev environment variable screenshot](https://d33wubrfki0l68.cloudfront.net/b92d328ebdb7e23c7d777fa1a2acd812d3aa55f2/d7fd1/assets/part2/add-secret-dev-environment-variable.png)

Next we need to configure our secrets for the prod stage. Head back to the service page and click on **prod**.

![Click on prod stage in Seed screenshot](https://d33wubrfki0l68.cloudfront.net/1e07297226fa65eb162a1069a0d059a745e8096a/eeeaf/assets/part2/click-on-prod-stage-in-seed.png)

Hit the **Settings** button.

![Select Settings in prod stage screenshot](https://d33wubrfki0l68.cloudfront.net/ed966a351b4d66bc126b836898a767939f68e0f7/39dc2/assets/part2/select-settings-in-prod-stage.png)

Click **Show Env Variables**.

![Show prod env variables settings screenshot](https://d33wubrfki0l68.cloudfront.net/c66db9d7c01a57183bed4a7882b8b810810b8e43/d0bbc/assets/part2/show-prod-env-variables-settings.png)

And type in stripeSecretKey as the **Key** and the value should be the STRIPE_PROD_SECRET_KEY back from the Load secrets from env.yml chapter. Hit **Add** to save your secret key.

![Add secret prod environment variable screenshot](https://d33wubrfki0l68.cloudfront.net/b1d6972fcb92e9a157ea2c3c1ffc6289ab6a41fa/d1ce9/assets/part2/add-secret-prod-environment-variable.png)

Next, we’ll trigger our first deployment on Seed.


[[Back]](https://github.com/eksant/serverless-react-aws)
