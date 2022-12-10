
$(document).ready(function(){
    
      $("table").hide();
   
  });
function size(){
  $("table").toggle();
}
  function changeImageRed(){
    document.getElementById('leftimage1').src='images/dress1/red11.png '
    document.getElementById('leftimage2').src='images/dress1/red12.png '
    document.getElementById('leftimage3').src='images/dress1/red14.png '
    document.getElementById('leftimage4').src='images/dress1/red11.png '
    document.getElementById('toggleImage').src='images/dress1/red1.png '
 
  }

  
  function changeImageGrey(){
    document.getElementById('leftimage1').src='images/dress1/grey11.png '
    document.getElementById('leftimage2').src='images/dress1/grey12.png '
    document.getElementById('leftimage3').src='images/dress1/grey13.png '
    document.getElementById('leftimage4').src='images/dress1/grey11.png '

    document.getElementById('toggleImage').src='images/dress1/grey11.png '
 
  }
  function changeImageGreen(){
    document.getElementById('leftimage1').src='images/dress1/green11.png '
    document.getElementById('leftimage2').src='images/dress1/green12.png '
    document.getElementById('leftimage3').src='images/dress1/green13.png '
    document.getElementById('leftimage4').src='images/dress1/green14.png '
    document.getElementById('toggleImage').src='images/dress1/green11.png '
 
  }
  function changeImageBlack(){
    document.getElementById('leftimage1').src='images/dress1/2.png '
    document.getElementById('leftimage2').src='images/dress1/3.png '
    document.getElementById('leftimage3').src='images/dress1/5.png '
    document.getElementById('leftimage4').src='images/dress1/4.png '
    document.getElementById('toggleImage').src='images/dress1/2.png '
 
  }
  function checkWhichPicFirst(){
    var x= document.getElementById('leftimage1');

 if(x.src.indexOf("images/dress1/grey11.png") != -1){
  document.getElementById('toggleImage').src='images/dress1/grey11.png '

 }else  if(x.src.indexOf("images/dress1/red11.png") != -1){
  document.getElementById('toggleImage').src='images/dress1/red11.png '

 } else  if(x.src.indexOf("images/dress1/green11.png") != -1){
  document.getElementById('toggleImage').src='images/dress1/green11.png '

 }else{
  document.getElementById('toggleImage').src='images/dress1/2.png '

}


 }
 function checkWhichPicSec(){
  var x= document.getElementById('leftimage2');

if(x.src.indexOf("images/dress1/grey12.png") != -1){
document.getElementById('toggleImage').src='images/dress1/grey12.png '

}else  if(x.src.indexOf("images/dress1/red12.png") != -1){
document.getElementById('toggleImage').src='images/dress1/red12.png '

} else  if(x.src.indexOf("images/dress1/green12.png") != -1){
document.getElementById('toggleImage').src='images/dress1/green12.png '

}else{
  document.getElementById('toggleImage').src='images/dress1/3.png '

}


}
function checkWhichPicThird(){
  var x= document.getElementById('leftimage3');

if(x.src.indexOf("images/dress1/grey13.png") != -1){
document.getElementById('toggleImage').src='images/dress1/grey13.png '

}else  if(x.src.indexOf("images/dress1/red14.png") != -1){
document.getElementById('toggleImage').src='images/dress1/red14.png '

} else  if(x.src.indexOf("images/dress1/green13.png") != -1){
document.getElementById('toggleImage').src='images/dress1/green13.png '

}else{
  document.getElementById('toggleImage').src='images/dress1/4.png '

}


}
function checkWhichPicForth(){
  var x= document.getElementById('leftimage4');

if(x.src.indexOf("images/dress1/grey11.png") != -1){
document.getElementById('toggleImage').src='images/dress1/grey11.png '

}else  if(x.src.indexOf("images/dress1/red11.png") != -1){
document.getElementById('toggleImage').src='images/dress1/red11.png '

} else  if(x.src.indexOf("images/dress1/green14.png") != -1){
document.getElementById('toggleImage').src='images/dress1/green14.png '

} else{
  document.getElementById('toggleImage').src='images/dress1/5.png '

}


}
    function addcar(){
      alert("Added to Car");

     }
     
     function cimagechange(){
      var x= document.getElementById('cimage2');
    
    if(x.src.indexOf("images/dress1/c1.jpg") != -1){
    document.getElementById('cimage').src='images/dress1/c1.jpg '
    
    }else  if(x.src.indexOf("images/dress1/c2.jpg") != -1){
    document.getElementById('cimage').src='images/dress1/c2.jpg '
    
    } else  if(x.src.indexOf("images/dress1/c3.jpg") != -1){
    document.getElementById('cimage').src='images/dress1/c3.jpg '
    
    } else{
      document.getElementById('cimage').src='images/dress1/c4.jpg '
    }}
  