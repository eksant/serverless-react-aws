### **Create a DynamoDB Table**
To build the backend for our notes app, it makes sense that we first start by thinking about how the data is going to be stored. We are going to use [DynamoDB](https://aws.amazon.com/dynamodb/) to do this.

#### **About DynamoDB**
Amazon DynamoDB is a fully managed NoSQL database that provides fast and predictable performance with seamless scalability. Similar to other databases, DynamoDB stores data in tables. Each table contains multiple items, and each item is composed of one or more attributes. We are going to cover some basics in the following chapters. But to get a better feel for it, here is a [great guide on DynamoDB](https://www.dynamodbguide.com/).

#### **Create Table**
First, log in to your [AWS Console](https://console.aws.amazon.com/) and select **DynamoDB** from the list of services.

![alt text](https://d33wubrfki0l68.cloudfront.net/d671288f5fbc3cf9d1956ead460e5ad3136c0d6e/5f794/assets/dynamodb/select-dynamodb-service.png)

Select **Create table**.

![alt text](https://d33wubrfki0l68.cloudfront.net/326f021b4c253afa04dd18248785812fbb5d0891/544ba/assets/dynamodb/create-dynamodb-table.png)

Enter the **Table name** and **Primary key** info as shown below. Just make sure that userId and noteId are in camel case.

![alt text](https://d33wubrfki0l68.cloudfront.net/452153843b7152c4404e34a8f3a9727db190b8f4/02f0d/assets/dynamodb/set-table-primary-key.png)

Each DynamoDB table has a primary key, which cannot be changed once set. The primary key uniquely identifies each item in the table, so that no two items can have the same key. DynamoDB supports two different kinds of primary keys:

* Partition key  
* Partition key and sort key (composite)

We are going to use the composite primary key which gives us additional flexibility when querying the data. For example, if you provide only the value for userId, DynamoDB would retrieve all of the notes by that user. Or you could provide a value for userId and a value for noteId, to retrieve a particular note.

To further your understanding of how indexes work in DynamoDB, you can read more here: [DynamoDB Core Components](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html)

If you see the following message, deselect Use default settings.

![alt text](https://d33wubrfki0l68.cloudfront.net/ebfb370d77fe680538ad1dcd60d5acb2962498be/8e96a/assets/dynamodb/auto-scaling-iam-role-warning.png)

Scroll to the bottom, ensure that **New role**: **DynamoDBAutoscaleRole** is selected, and select **Create**.

![alt text](https://d33wubrfki0l68.cloudfront.net/1f917301bb2e68f727670ae86863de3ee0160cb6/0c4bf/assets/dynamodb/set-table-provisioned-capacity.png)

Otherwise, simply ensure that **Use default settings** is checked, then select **Create**.

Note that the default setting provisions 5 reads and 5 writes. When you create a table, you specify how much provisioned throughput capacity you want to reserve for reads and writes. DynamoDB will reserve the necessary resources to meet your throughput needs while ensuring consistent, low-latency performance. One read capacity unit can read up to 8 KB per second and one write capacity unit can write up to 1 KB per second. You can change your provisioned throughput settings, increasing or decreasing capacity as needed.

The notes table has now been created. If you find yourself stuck with the **Table is being created** message; refresh the page manually.

![alt text](https://d33wubrfki0l68.cloudfront.net/a1f194da9157dd7a01461dedd271736807d6d29b/a57ae/assets/dynamodb/dynamodb-table-created.png)

Next we’ll set up an S3 bucket to handle file uploads.

[[Back]](https://github.com/eksant/serverless-react-aws)
