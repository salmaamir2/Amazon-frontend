AOS.init();



var info = [
    {name: "boyes", value: "home.html"}, 
    {name: 'dress', value: 'home.html'},
     {name: 'mobiles', value: 'home.html'},
     {name: 'men', value: 'home.html'},
     {name: 'women', value: 'home.html'},
     {name: 'long dress', value: 'productPage.html'},
     {name: 'accessories', value: 'home.html'}
  ]; 
  
  function getInputValue(){
    var inputVal = document.getElementById("search").value;
 for(var a=0;a<7;a++){
     if(inputVal==info[a].name){
         
         window.location.replace(info[a].value);
        
     }
 }
    
};
