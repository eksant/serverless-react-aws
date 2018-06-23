#### **Configure the AWS CLI**
To make it easier to work with a lot of the AWS services, we are going to use the AWS CLI.

#### **Install the AWS CLI**
AWS CLI needs Python 2 version 2.6.5+ or Python 3 version 3.3+ and Pip. Use the following if you need help installing Python or Pip.

[Installing Python](https://www.python.org/downloads/)  
[Installing Pip](https://pip.pypa.io/en/stable/installing/)  

Now using Pip you can install the AWS CLI (on Linux, macOS, or Unix) by running:

```
$ sudo pip install awscli
```

Or using [Homebrew](https://brew.sh/) on macOS:

```
$ brew install awscli
```

If you are having some problems installing the AWS CLI or need Windows install instructions, refer to the [complete install instructions](http://docs.aws.amazon.com/cli/latest/userguide/installing.html).

#### **Add Your Access Key to AWS CLI**
We now need to tell the AWS CLI to use your Access Keys from the previous chapter.

It should look something like this:

Access key ID **AKIAIOSFODNN7EXAMPLE**  
Secret access key **wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY**  
Simply run the following with your Secret Key ID and your Access Key.  

```
$ aws configure
```

You can leave the Default region name and Default output format the way they are.

Next let’s get started with setting up our backend.


[[Back]](https://github.com/eksant/serverless-react-aws)
