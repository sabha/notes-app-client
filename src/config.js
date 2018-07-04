export default {
  s3: {
    REGION: "us-west-2",
    BUCKET: "lesson-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://q5rqvabqq0.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_rTygPoIaQ",
    APP_CLIENT_ID: "1d29vfst9bgk0jeqeknet5qopr",
    IDENTITY_POOL_ID: "us-west-2:0d551d69-38a4-4343-87fe-4256a0dfdc78"
  },
  MAX_ATTACHMENT_SIZE: 5000000,
};

// npx aws-api-gateway-cli-test \
// --username='sabha.b@gmail.com' \
// --password='Pass4321!' \
// --user-pool-id='us-west-2_rTygPoIaQ' \
// --app-client-id='1d29vfst9bgk0jeqeknet5qopr' \
// --cognito-region='us-west-2' \
// --identity-pool-id='us-west-2:0d551d69-38a4-4343-87fe-4256a0dfdc78' \
// --invoke-url='https://q5rqvabqq0.execute-api.us-west-2.amazonaws.com/prod' \
// --api-gateway-region='us-west-2' \
// --path-template='/notes' \
// --method='POST' \
// --body "{\"content\":\"hello world\",\"attachment\":\"hello.jpg\"}"
