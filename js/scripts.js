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





//INDEX TEXTO

const elements = document.querySelectorAll(".reveal");

const fadeObserver  = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.5 });

elements.forEach(el => fadeObserver .observe(el));







//// FOTOGRAFIA FOTOS 

const images = Array.from(document.querySelectorAll(".galeria img"));

let currentIndex = 0;

const dialog = document.createElement("dialog");
dialog.className = "lightbox-dialog";

dialog.innerHTML = `
  <button class="lb-prev">‹</button>
  <img>
  <button class="lb-next">›</button>
`;

document.body.appendChild(dialog);

const dialogImg = dialog.querySelector("img");
const btnPrev = dialog.querySelector(".lb-prev");
const btnNext = dialog.querySelector(".lb-next");


images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    dialogImg.src = img.src;
    dialog.showModal();
  });
});


btnNext.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  dialogImg.src = images[currentIndex].src;
};

btnPrev.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  dialogImg.src = images[currentIndex].src;
};


dialog.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});


dialog.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") btnNext.click();
  if (e.key === "ArrowLeft") btnPrev.click();
  if (e.key === "Escape") dialog.close();
});



// FOTO FADE IN

const fotos = document.querySelectorAll(".foto");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = Array.from(fotos).indexOf(entry.target);


      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fotos.forEach(f => observer.observe(f));



//     PAGINA PROYECTO GALERIA

const galleryImages = document.querySelectorAll('.project-gallery img');

const galleryObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

galleryImages.forEach(img => galleryObserver.observe(img));





const gallery = document.querySelector('.project-gallery');
const leftArrow = document.querySelector('.gallery-arrow.left');
const rightArrow = document.querySelector('.gallery-arrow.right');

const scrollAmount = 400;

leftArrow.addEventListener('click', () => {
  gallery.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});

rightArrow.addEventListener('click', () => {
  gallery.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});
