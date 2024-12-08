var signupEmailInput = document.querySelector("#signupEmail");
var signupPasswordInput = document.querySelector("#signupPassword");


function loginfun(){
    
    var store = JSON.parse(  localStorage.getItem("users")  );
    
    var msgFalse = document.querySelector("#msgFalse");
    if(  validEmail()  &&   validPassword()  ){
        for (var i = 0; i < store.length; i++) {
          if (store && store[i].email === signupEmailInput.value && store[i].password === signupPasswordInput.value) {
            msgFalse.classList.add("d-none");
            window.location.href = "../html/home.html";
            
          }else{
            msgFalse.classList.remove("d-none");
          }
        }
          
          
    clearData();
      }
}
  

// clear data from input and valid 
function clearData(){
    signupEmailInput.value = "";
    signupPasswordInput.value = "";
  
    signupEmailInput.classList.remove("is-valid");
    signupPasswordInput.classList.remove("is-valid");
    
  }


  // validation for email 
function validEmail(){
  var regex = /^[a-z0-9\-\.]+@([a-z0-9\-]+\.)+[\w-]{2,4}$/g;
    var text = signupEmailInput.value;
  
    if(regex.test(text)){
      signupEmailInput.classList.add("is-valid");
      signupEmailInput.classList.remove("is-invalid");
      return true;
    }else{
      signupEmailInput.classList.remove("is-valid");
      signupEmailInput.classList.add("is-invalid");
      return false;
    }
  }
  
  // validation for password
  function validPassword(){
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    var text = signupPasswordInput.value;
  
    if(regex.test(text)){
      signupPasswordInput.classList.add("is-valid");
      signupPasswordInput.classList.remove("is-invalid");
      return true;
    }else{
      signupPasswordInput.classList.remove("is-valid");
      signupPasswordInput.classList.add("is-invalid");
      return false;
    }
  }