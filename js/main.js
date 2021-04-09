
   
      const indicator = document.querySelector(".indicator");
      const input = document.getElementById("pwd");
      const weak = document.querySelector(".weak");
      const medium = document.querySelector(".medium");
      const strong = document.querySelector(".strong");
      const text = document.querySelector(".text");
    
      
     
      let regExpWeak = /[a-z]/;
      let regExpMedium = /\d+/;
      let regExpStrong = /[A-Z]/;

      function trigger(){
        error2.setAttribute("hidden","false");
        password.style.border="1px solid black";
        text.removeAttribute("hidden","true");
        
        if(input.value != ""){
        
          indicator.style.display = "block";
          
          if(input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong)))no=1;
          if(input.value.length > 3 || (input.value.length <= 7 ) && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
          if(input.value.length >= 8 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))no=3;
          if(no==1){
            weak.classList.add("active");
            text.style.display = "block";
            text.textContent = "Week Password: utleast include 1 uppercase letter , 1 lowercase and 1 digit ";
            text.classList.add("weak");
            return false;
            
          }if(no==2){
            medium.classList.add("active");
            text.textContent = "Medium Password: utleast include 1 uppercase letter , 1 lowercase and 1 digit";
            text.classList.add("medium");
            return false;
          }else{
            medium.classList.remove("active");
            text.classList.remove("medium");
    
          } if(no==3){
            weak.classList.add("active");
            medium.classList.add("active");
            strong.classList.add("active");
            text.textContent = "Your password is strong";
            text.classList.add("strong");
            return true;
          }else{
            strong.classList.remove("active");
            text.classList.remove("strong");
            
          }
        }
      };

        let password=document.getElementById("pwd");
        let email=document.getElementById("Email");
        let error1=document.getElementById("error1");
        let error2=document.getElementById("error2")
        
       function validate(){ 
            if(email.value.trim()=="" && password.value.trim()==""){
                text.setAttribute("hidden","true");
                error1.removeAttribute("hidden","true");
                error1.style.color="red";
                email.style.border="1px solid red";
                error2.removeAttribute("hidden","true");
                error2.style.color="red";
                password.style.border="1px solid red";
              return false;
            }else if(email.value.trim()==""){
              error1.removeAttribute("hidden","true");
                error1.style.color="red";
                email.style.border="1px solid red";
                error2.setAttribute("hidden","false");
                password.style.border="1px solid black";
              return false;
            }else if(password.value.trim()==""){
              text.setAttribute("hidden","true");
              error2.removeAttribute("hidden","true");
                error2.style.color="red";
                password.style.border="1px solid red";
                error1.setAttribute("hidden","false");
                email.style.border="1px solid black";
                return false;
              }else{
                error1.setAttribute("hidden","false");
                error2.setAttribute("hidden","false");
                email.style.border="1px solid black";
                password.style.border="1px solid black";
                return true;
              }
      };

  
      let regexp= /^([\w\d\.-]+)@([\w\d\.-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
      function emailvalidate(){
        if(regexp.test(email.value)){
          error1.removeAttribute("hidden","true");
          error1.innerText="valid";
          error1.style.color="green";
          error1.style.border="1px solid green";
          email.style.border="1px solid black";
          return true;
          
        }else{
          error1.removeAttribute("hidden","true");
          error1.innerText="invalid email"
          error1.style.color="red";
          return false;
         
        }
      };

      




    
  
      


   