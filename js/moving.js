$(document).ready(function(){    
  if (screen.width >= 400){
    $("#make-side").hover(
      function(){
        $("#make-back-side").slideUp(300);
        $("#make").show(300);
      },
      function(){
        $("#make").hide(300);
        $("#make-back-side").slideDown(300);
       }
    );

    $("#hack-side").hover(
      function(){
        $("#hack-back-side").slideUp(300);
        $("#hack").show(300);
      },
      function(){
        $("#hack").hide(300);
        $("#hack-back-side").slideDown(300);
      }
    );
  }
});

/* document.getElementById('hack-side').addEventListener("click", function() {
  console.log("hi");
}) */
