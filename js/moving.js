$(document).ready(function(){
  if (screen.width >= 700){
    $("#make-side").hover(
      function(){
        $("#make-back-side").slideUp(300);
        $("#make").slideDown(300);
      },
      function(){
        $("#make").slideUp(300);
        $("#make-back-side").slideDown(300);
       }
    );

    $("#hack-side").hover(
      function(){
        $("#hack-back-side").slideUp(300);
        $("#hack").slideDown(300);
      },
      function(){
        $("#hack").slideUp(300);
        $("#hack-back-side").slideDown(300);
      }
    );
  }
  else {
    $("#make-back-side").slideUp(300);
    $("#make").show(300);
    $("#hack-back-side").slideUp(300);
    $("#hack").show(300);
  }
});

/* document.getElementById('hack-side').addEventListener("click", function() {
  console.log("hi");
}) */
