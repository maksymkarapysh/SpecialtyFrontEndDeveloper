window.addEventListener("load", function() {
  
var sticky = {
  
  main: function(elements, counter) {
    var el = document.querySelectorAll(elements),
        
        counter = 0;
    
    window.addEventListener("scroll", function() {
      var scroll = window.pageYOffset;
          
          //console.dir(scroll < elRect + scroll);
      if (counter < 0) {
        counter = 0;
      } else {
        var elRect = el[counter].parentElement.getBoundingClientRect().top;
        if (scroll > elRect + scroll) {
          el[counter].classList.add("fixed");
          console.log(scroll, elRect);
          counter++;
        } else{
          el[counter].classList.remove("fixed"); 
          counter--;
        } 
      }  
    });
  }
}


sticky.main(".header");
});