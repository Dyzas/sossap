document.addEventListener("DOMContentLoaded", function() {
    var modal2 = document.getElementById("myModal2");
    var btn2 = document.getElementById("myBtn2");
    var span2 = document.getElementsByClassName("close2")[0];
  
    btn2.addEventListener("click", function() {
      modal2.style.display = "block";
    });
  
    span2.addEventListener("click", function() {
      modal2.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target === modal2) {
        modal2.style.display = "none";
      }
    });
  });
  
  