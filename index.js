/*const type=new Typed(".multiple-text",{
    strings:['Fullstack developper','data-analyst','designer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})*/
var section=document.querySelector(".skills")
var porgressbar=document.querySelector(".percentage1");
var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // La section est considérée comme visible lorsque 50% ou plus est visible
  };
  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        porgressbar.style.animation="progression 2s forwards"
    } else {
        progressbar.style.animation = 'none';
      }
    });
  }, options);
  
  observer.observe(section);