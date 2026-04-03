window.addEventListener("load", () => {
  setTimeout(() => {
    const home = document.querySelector("#Home");
    const conteiner = document.querySelector("#ConteinerHomeDiv");
        const sobre = document.querySelector("#SobreDivConteinerAll");

    // fade
    conteiner.classList.add("fade-out");

    setTimeout(() => {
      // ESCONDE COMPLETAMENTE
      home.style.visibility = "hidden";
      home.style.position = "absolute";

            // ativa o fade do sobre
      sobre.classList.add("show");

      // scrolla
      document.querySelector("#Sobre").scrollIntoView({
        behavior: "smooth"
      });
    }, 1000);

  }, 1000);
});

const sections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2 // ativa quando 20% da section aparece
});

sections.forEach(section => {
    observer.observe(section);
});







function Insta(){
  window.open('https://instagram.com/japatattoo.pb')
}
function Whats(){
  window.open('https://wa.me/4699133452/')
}