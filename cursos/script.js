const menuHamburger = document.querySelector(".menu-hamburger");
const navList = document.querySelector(".nav-list");

menuHamburger.addEventListener("click", () => {
  navList.classList.toggle("display-show");
  console.log("clicked");
});


function aviso(){
  email = document.getElementById('email-value').value
  if (email.includes('@gmail.com') || email.includes('@outlook.com') || email.includes('@fatec.sp.gov.br')) {
      alert("Email cadastrado com sucesso.")
  }else{
      alert("Email invalido.")
  }
}

const button = document.getElementById("button");

button.addEventListener("click", aviso);