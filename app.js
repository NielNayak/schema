var AWS = require("aws-sdk"),
  region = "ap-south-1",
  secret,
  secretName = "test/Demo", // You can load this secret based on the environment
  decodedBinarySecret;

// Create a Secrets Manager client
let client = new AWS.SecretsManager({
  region: region,
});

let test = async () => {
  return new Promise((resolve, reject) => {
    client.getSecretValue({ SecretId: secretName }, function (err, data) {
      if (err) {
        if (err.code === "DecryptionFailureException")
          // Secrets Manager can't decrypt the protected secret text using the provided KMS key.
          // Deal with the exception here, and/or rethrow at your discretion.
          throw err;
        else if (err.code === "InternalServiceErrorException")
          // An error occurred on the server side.
          // Deal with the exception here, and/or rethrow at your discretion.
          throw err;
        else if (err.code === "InvalidParameterException")
          // You provided an invalid value for a parameter.
          // Deal with the exception here, and/or rethrow at your discretion.
          throw err;
        else if (err.code === "InvalidRequestException")
          // You provided a parameter value that is not valid for the current state of the resource.
          // Deal with the exception here, and/or rethrow at your discretion.
          throw err;
        else if (err.code === "ResourceNotFoundException")
          // We can't find the resource that you asked for.
          // Deal with the exception here, and/or rethrow at your discretion.
          throw err;
      } else {
        // Decrypts secret using the associated KMS key.
        // Depending on whether the secret is a string or binary, one of these fields will be populated.
        if ("SecretString" in data) {
          secret = JSON.parse(data.SecretString);
        }
        resolve(secret);
      }

      // console log in case of error
      //console.log(secret);
    });
  });
};

module.exports = { test };
