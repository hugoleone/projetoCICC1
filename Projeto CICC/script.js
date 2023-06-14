document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.querySelector("#login-form");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Verifica se o usuário e a senha são válidos
    if (username === "usuário" && password === "senha") {
      // Redireciona para a página principal
      window.location.href = "pagina_principal.html";
    } else {
      alert("Usuário ou senha inválidos");
    }
  });
});
