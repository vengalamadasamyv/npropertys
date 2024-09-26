const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function savedata(e){
    e.preventDefault();
    let name, email, mobile, password;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    mobile = document.getElementById("mobile").value;
    password = document.getElementById("password").value;
    // console.log(name+email+mobile+password);

    // localStorage.setItem("name",name);
    // localStorage.setItem("email",email);
    // localStorage.setItem("mobile",mobile);
    // localStorage.setItem("password",password);

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

    if(user_records.some((v)=>{
        return v.email==email
    })){
        alert("This mail already registered, Please Login");
    }
    else{
        user_records.push({
            "name":name,
            "email":email,
            "mobile":mobile,
            "password":password
        })
        localStorage.setItem("users",JSON.stringify(user_records));
    }
}