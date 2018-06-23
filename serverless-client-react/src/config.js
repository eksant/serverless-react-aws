const dev = {
  STRIPE_KEY: "pk_test_v1amvR35uoCNduJfkqGB8RLD",
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "notes-app-api-prod-attachmentsbucket-x9ctfsuvr782"
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://p03ksxh3z4.execute-api.ap-southeast-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_q8xB3iz96",
    APP_CLIENT_ID: "37s1k5vijed7evig9eoqiu66vm",
    IDENTITY_POOL_ID: "ap-southeast-1:a6697ed3-b1a0-4d3b-84de-2d15a5cb3864"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_v1amvR35uoCNduJfkqGB8RLD",
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "notes-app-api-prod-attachmentsbucket-x9ctfsuvr782"
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://p03ksxh3z4.execute-api.ap-southeast-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_q8xB3iz96",
    APP_CLIENT_ID: "37s1k5vijed7evig9eoqiu66vm",
    IDENTITY_POOL_ID: "ap-southeast-1:a6697ed3-b1a0-4d3b-84de-2d15a5cb3864"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};