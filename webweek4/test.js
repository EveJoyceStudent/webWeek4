// function displayDate() {
//   document.getElementById("demo").innerHTML = Date();
// }
// function displayDate() {
//   document.getElementById("demo2").innerHTML = document.getElementById("demo").innerHTML;
// }

document.getElementById('first').addEventListener('mouseover', function(event) {
    document.getElementById("demo").innerHTML = Date();
      });
  
  document.getElementById('first').addEventListener('click', function(event) {
      document.getElementById("demo2").innerHTML = document.getElementById("demo").innerHTML;
      });