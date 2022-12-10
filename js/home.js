AOS.init();
function showIt3(){
  document.getElementById("Category").innerHTML="Men"

  document.getElementById('firstimage').src = 'images/home/img_bg_1.jpg';
  document.getElementById('firstdot').style.backgroundColor = "yellow";
  document.getElementById('thirddot').style.backgroundColor = "#bbb";
  document.getElementById('secdot').style.backgroundColor = "#bbb";
  document.getElementById("text").style.textAlign = "80px";

}
 function showIt2() {
    document.getElementById('firstimage').src = 'images/home/img_bg_2.jpg';
    document.getElementById("Category").innerHTML="WOMEN"
    document.getElementById('secdot').style.backgroundColor = "yellow";
    document.getElementById('firstdot').style.backgroundColor = "#bbb";
    document.getElementById('thirddot').style.backgroundColor = "#bbb";
    document.getElementById("text").style.left = "80px";


  }
  function showIt1() {
    document.getElementById('firstimage').src = 'images/home/img_bg_3.jpg';
    document.getElementById("Category").innerHTML="NEW ARRIVAL"
    document.getElementById("text").style.left = "800px";
    document.getElementById('thirddot').style.backgroundColor = "yellow";
    document.getElementById('secdot').style.backgroundColor = "#bbb";


    document.getElementById('firstdot').style.backgroundColor = "#bbb";




  }

  setTimeout("showIt2()", 3000);
  setTimeout("showIt1()", 5000);

