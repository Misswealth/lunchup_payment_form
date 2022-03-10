
//targeting the form
let form = document.getElementById('paymentForm');
let amount = document.getElementById('amount');


//eventListener to handle submit

form.addEventListener('submit', function(e){
    // console.log(form.elements);
    e.preventDefault();
    if (form.elements[0].value === ''){
        alert ('Please enter your first name');
        return;
        
    } else if (form.elements[1].value === ''){
        alert ('please enter your last name');
        return;
        
    } else if (form.elements[2].value === ''){
        alert ('please enter your email');
        return;
        
    }else if (form.elements[3].value === ''){
        alert ('please enter your Address');
        return;

    } else if (form.elements[4].value === ''){
        alert ('please enter your city');
        return;
    } else {
        // console.log('successful');
        payWithPaystack();
    }
});






  function payWithPaystack() {
    let handler = PaystackPop.setup({
      key: 'pk_test_2cf79eee1eb4c8fa7cf79ea1aa5d941a62276fa7', // Replace with your public key
      email: document.getElementById("email-address").value,
      amount: document.getElementById("amount").value * 100,
      currency: 'NGN',
      ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      // label: "Optional string that replaces customer email"
      onClose: function(){
        alert('Window closed.');
      },
      callback: function(response){
        let message = 'Payment complete! Reference: ' + response.reference;
        alert(message);
      }
    });
    handler.openIframe();
  }
  

  

  

//sk_test_24c34e67ca69e18de214053d87b65d1453ec2d96
//pk_test_2cf79eee1eb4c8fa7cf79ea1aa5d941a62276fa7

