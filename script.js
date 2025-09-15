const container = document.getElementById("container");
const btnShowRegister = document.getElementById("btn_register");
const welcomeText = document.getElementById("welcome_text");
const welcomeDesc = document.getElementById("welcome_desc");

btnShowRegister.addEventListener("click", () => {
  container.classList.toggle("swapped");

  if (container.classList.contains("swapped")) {
    welcomeText.textContent = "Welcome Back";
    welcomeDesc.textContent = "Silakan masuk dengan akun Anda.";
    btnShowRegister.textContent = "Masuk";
  }
  else {
    welcomeText.textContent = "Hello, Friend";
    welcomeDesc.textContent = "Silakan daftar untuk membuat akun Anda.";
    btnShowRegister.textContent = "Daftar";
  }
});
