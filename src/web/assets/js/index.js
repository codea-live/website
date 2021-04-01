$(document).on('mousemove', function(e) {  
  const sensitivity = 2; 

  var ax = -($(window).innerWidth()/2 - e.pageX) / 20 / sensitivity;
  var ay = ($(window).innerHeight()/2 - e.pageY) / 10 / sensitivity;

  const xy = `rotateY(${+ax}deg) rotateX(${+ay}deg)`;
  $('header h1').attr('style', `transform: ${xy};-webkit-transform: ${xy};-moz-transform: ${xy}`);
});
