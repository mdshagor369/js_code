document.querySelector('body').addEventListener('selectstart', (e) => {
  e.preventDefault();
})
$(document).ready(function(){
  $('body').bind('cut copy past', function(e){
    e.preventDefault();
  })
  $("body").on("contextmenu",function(e){
    return false;
  })
})
