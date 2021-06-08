

$("#dark-mode-button").click(function(){
  checkDarkLight("body", "dark-mode", "light-mode");
  checkDarkLight(".hold", "hold-dark", "hold-light");
  checkDarkLight("h6", "dark", "light");
  checkDarkLight("p", "dark", "light");
  checkDarkLight(".card-body", "card-body-dark", "card-body-light");
});


function checkDarkLight(element, dark, light) {
  if ($(element).hasClass(dark)) {
    $(element).removeClass(dark);
    $(element).addClass(light);
  }
  else {
    $(element).removeClass(light);
    $(element).addClass(dark);
  }
}
