// step -1 : add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
// step-1: get the email address inside the email input field
// always remember to use  .value to get text from an input field
   const emailField = document.getElementById('user-email');
   const email = emailField.value;
// step-3:get password
// a.set id on the html element
// b.get the element
// c.get the value from the element
   const passField = document.getElementById('user-pass');
   const pass = passField.value;
   console.log(email,pass);
   
// Danger:Do not verify eamil password on the client side 
// step-4:verify eamil and password
   if(email === 'father@gmail.com' && pass === 'father'){
    window.location.href = 'bank.html';

   }
   else{
    alert('Please Submit a Valid User Inforamtion')
   }
})


