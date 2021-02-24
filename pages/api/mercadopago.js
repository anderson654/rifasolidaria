
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');
const registerUser = async event => {
const configureMercadoPago = () => {
    try {
      mercadopago.configure({
        access_token:'APP_USR-3556522391211461-022402-423b0927ecf62e9e27deefa8e6acf247-440587816'
      });
    } catch (error) {
      console.log(error);
    }
  }
  configureMercadoPago();
  
  let preference = {
    items: [
      {
        title: 'Meu produto',
        unit_price: 100,
        quantity: 1,
      }
    ]
  };
  
  
  
  
  
    mercadopago.preferences.create(preference)
  .then(function(response){
  // Este valor substituirá a string "<%= global.id %>" no seu HTML
    global.id = "anderson";
  }).catch(function(error){
    console.log(error);
  });

    const res = await fetch('https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js', {
      body: JSON.stringify(preference),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
  }
  export default registerUser;




