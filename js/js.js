const item =[
{name:"tops"},   
{name:"women"},   
{name:"mobile"},    
{name:"bags"},   
{name:"baby"},   

];
const list =document.getElementById('list');
function setlist(group){
    clearist();
    for(const person of group){
        const item = document.createElement('li');
        item.classList.add(list-group-item);
        const text =document.createTextNode(person.name);
        item.appendChild(text);
        list.appendChild(item);
    }
    if(group.length==0){
        setNoresults();
    }
}
function clearist(){
while (list.firstChild){
    list.removeChild(list.firstChild);

}
}
function setNoresults(){
    for(const person of group){
        const item = document.createElement('li');
        item.classList.add(list-group-item);
        const text =document.createTextNode("No results found");
        item.appendChild(text);
        list.appendChild(item);
    }
    if(group.length==0){
        setNoresults();
    }
}
function getRelevany(value,searchTerm){
    if(value=== searchTerm){
        return 2;
    }else if(value.statsWith(term)){
        return 1;
    }else if(value.includes(searchTerm)){
        return 0;
    }
    else{
        return -1;
    }
}
const searchInput= document.getElementById('search');
searchInput.addEventListener('input',(event)=>{
const value=event.target.value;
if(value && value.trim().length>0){
    value=value.trim().toLowerCase();
    setlist(person.filter(person=>{
return person.name.includes(value);

    }));
}else{
    clearist();
}
});
