document.addEventListener("DOMContentLoaded", function() {
    const menuOptions = document.querySelectorAll("nav ul li a");
    const formContainers = document.querySelectorAll(".form-container");
  
    // Adicionar evento de clique para cada opção do menu
    menuOptions.forEach(function(option, index) {
      option.addEventListener("click", function(event) {
        event.preventDefault();
  
        // Ocultar todos os formulários
        formContainers.forEach(function(container) {
          container.classList.remove("show");
        });
  
        // Exibir o formulário correto com base na opção selecionada
        formContainers[index].classList.add("show");
      });
    });
  });
  