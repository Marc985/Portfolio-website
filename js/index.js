

//intersection observer
const sections = document.querySelectorAll('.percentage1 ,.percentage2 ,.percentage3,.percentage4 ,.percentage5 ,.percentage6 ,.percentage7 ,.percentage8');

const observerOptions = {
  root: null, // Utilise la fenêtre du navigateur comme racine
  rootMargin: '0px', // Marge autour de la racine (peut être utilisée pour précharger l'animation avant qu'elle n'apparaisse)
  threshold: 1 // Pourcentage de visibilité nécessaire pour déclencher l'observation (0 signifie que l'élément est complètement invisible, 1 signifie qu'il est complètement visible)
};



const sectionObserver = new IntersectionObserver((entries, observer) => {
    
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let inter=1500

      // Ajoutez la classe d'animation lorsque la section est visible
     if( entry.target.classList.contains("percentage1"))
     entry.target.classList.add("animation1")
      if( entry.target.classList.contains("percentage2"))
     entry.target.classList.add("animation2")
     if( entry.target.classList.contains("percentage3"))
     entry.target.classList.add("animation3")
     if( entry.target.classList.contains("percentage4"))
     entry.target.classList.add("animation4")
     if( entry.target.classList.contains("percentage5"))
     entry.target.classList.add("animation5")
     if( entry.target.classList.contains("percentage6"))
     entry.target.classList.add("animation6")
     if( entry.target.classList.contains("percentage7"))
     entry.target.classList.add("animation7")
     if( entry.target.classList.contains("percentage8"))
     entry.target.classList.add("animation8")
      let values=document.querySelectorAll(".percentage");
      incr(values,inter)
      // Arrêtez d'observer la section une fois l'animation appliquée
      observer.unobserve(entry.target);
    }
  })
}, observerOptions);

sections.forEach(section => {
  sectionObserver.observe(section);
});




//auto incrimentation
let valueDisplays = document.querySelectorAll(".number");
let intervalle = 1600;

function incr(values,intervalle){
  values.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(intervalle / endValue);
    
    let increment = function() {
      startValue += 1;
      valueDisplay.textContent = startValue;
      
      if (startValue < endValue) {
        setTimeout(increment, duration);
      }
    };
    
    increment();
  });
}
incr(valueDisplays,intervalle);



