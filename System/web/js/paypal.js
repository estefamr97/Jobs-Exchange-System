// Render the PayPal button
    paypal.Button.render({

        // Set your environment
        env: 'sandbox', // sandbox | production

        // Specify the style of the button
        style: {
            label: 'pay',
            size:  'large', // small | medium | large | responsive
            shape: 'pill',   // pill | rect
            color: 'silver'   // gold | blue | silver | black
        },

        // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create
        client: {
            sandbox:    'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
            production: '<insert production client id>'
        },

        // Wait for the PayPal button to be clicked
        payment: function(data, actions) {
            return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '0.01', currency: 'USD' }
                        }
                    ]
                }
            });
        },
        
        
        
        // Wait for the payment to be authorized by the customer
        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                add();
                //document.getElementById("rest").disabled = false;
            });
        }

    }, '#paypal-button-container');