const paypalSdk = require('paypal-rest-sdk')

paypal.notification.webhookEvent.verify(headers, eventBody, webhookId, function (error, response) {
  if (error) {
      console.log(error);
      throw error;
  } else {
      console.log(response);

      // Verification status must be SUCCESS
      if (response.verification_status === "SUCCESS") {
          console.log("It was a success.");
      } else {
          console.log("It was a failed verification");
      }
  }
});

module.exports.handler = async(event) => {
    const { body, headers } = event

    paypal.notification.webhookEvent.verify(headers, body, body.id, function (error, response) {
      if(error){
        return { statusCode: 500 }
      }
    })
    console.log(event)
    return { statusCode: 200 }
  }