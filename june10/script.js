const Validate = () => {
     let Name = document.querySelector("#name").value.trim();
     let Email = document.querySelector("#email").value.trim();
     let Num = document.querySelector("#number").value.trim();
     let Pass = document.querySelector("#pass").value.trim();
     let Cpass = document.querySelector("#cpass").value.trim();
     let errname = document.querySelector("#errname");
     let erremail = document.querySelector("#erremail");
     let errnum = document.querySelector("#errnum");
     let errpass = document.querySelector("#errpass");
     let errcpass = document.querySelector("#errcpass");

     if(Name==""){
        errname.innerHTML="Please enter name";
        errname.style.color="red";
        return false;
     }
       else if(Email==""){
        erremail.innerHTML="Please enter email";
        erremail.style.color="red";
        return false;
     }
         else if(Num.length!==10){
        errnum.innerHTML="Please enter valid number";
        errnum.style.color="red";
        return false;
     }
         else if(isNaN(Num)){
        errnum.innerHTML="Please enter number only";
        errnum.style.color="red";
        return false;
     }
         else if(!(Email.includes("@")&&Email.includes(".com"))){
        erremail.innerHTML="Please enter valid email";
        erremail.style.color="red";
        return false;
     }
         else if(Pass!=Cpass){
        errcpass.innerHTML="Please enter same password";
        document.querySelector("#cpass").value="";
        document.querySelector("#cpass").focus();
        errcpass.style.color="red";
        return false;
     }
     else if(!(Pass.match(/[0123456789]/)&&Pass.match(/[!@#$^&*()]/)&&Pass.match(/[a-z]/)&&Pass.match(/[A-Z]/))){
        errpass.innerHTML="Please enter strong password";
        errpass.style.color="red";
        return false;
     }
     
};
