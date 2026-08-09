document.addEventListener("DOMContentLoaded", () => {

/* NAVBAR */
const hamburger = document.querySelector('#hamburger');
const navLinks = document.querySelector('#navLinks');
const logo = document.querySelector('#logo');

const dropdownBtns = document.querySelectorAll('.dropbtn');
const dropdownContents = document.querySelectorAll('.dropdown-content');


// dropdown abierto en mobile
let openDropdownIndex = null;


hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  logo.classList.toggle('logo-hidden');
});


// Mostrar/Ocultar dropdowns de manera independiente en mobile y permitir que el enlace funcione en desktop
dropdownBtns.forEach((btn, index) => {
  btn.addEventListener('click', (event) => {
    
    if (window.innerWidth < 768) {
      
      const isDropdownOpen = dropdownContents[index].classList.contains('show-dropdown');


      
      if (isDropdownOpen) {
        return true; 
      } else {
        
        event.preventDefault();
        
        if (openDropdownIndex !== null && openDropdownIndex !== index) {
          dropdownContents[openDropdownIndex].classList.remove('show-dropdown');
        }
        
        dropdownContents[index].classList.toggle('show-dropdown');
        // Guardar el índice del dropdown abierto
        openDropdownIndex = index;
      }
    } else {
      // osea desktop
      return true;
    }
  });
});



  /* FORM + POPUP */
  const form = document.getElementById("contactoForm");
  const popup = document.getElementById("mensajeenviado");
  const cerrarBtn = document.getElementById("cerrarMensaje");

  form.addEventListener("submit", function (e) {
  e.preventDefault();
;


    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const tel = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !tel || !mensaje) {
      alert("Completá todos los campos");
      return;
    }

    popup.classList.add("activo");
    form.reset();
  });

  cerrarBtn.addEventListener("click", () => {
    popup.classList.remove("activo");
  });

});
