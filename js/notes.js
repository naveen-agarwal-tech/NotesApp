const addNotes = document.getElementById("addNote");
const addList= document.querySelector("button");
const text=document.getElementById("boxtxt");
// const listText=document.querySelector("noteItem")
let a=0;
addNotes.addEventListener("click", function(e){
    const list=document.createElement("li");
    
    a++;
    list.classList.add("noteItem");
    list.id=`noteItem${a}`;
    list.onclick=myFunction;
    const add=document.getElementById('listItem')
    add.appendChild(list);
    
    document.getElementById(`noteItem${a}`).innerHTML = document.getElementById('boxtxt').innerHTML;
    document.getElementById('boxtxt').innerHTML = "";
    
})


function myFunction(r)
{
    
    document.getElementById('boxtxt').innerHTML = "";
    document.getElementById('boxtxt').innerHTML=document.getElementById(`${r.target.id}`).innerHTML;

}
document.getElementById('boxtxt').designMode = "on";

function Bold() {
    
   console.log(document)
    // Execute command if user presses the SHIFT button:
    document.execCommand("bold");
  
}
function Italic() {
    
   
    // Execute command if user presses the SHIFT button:
    document.execCommand("italic");
  
}
function Underline() {
    
   
    // Execute command if user presses the SHIFT button:
    document.execCommand("underline");
  
}
function Copy() {
    
   
    // Execute command if user presses the SHIFT button:
    document.execCommand("copy");
  
}
let search=document.getElementById('searchtxt');
search.addEventListener("input",function(){
    let inputVal=search.value
    
    let listItems=document.getElementsByClassName('noteItem');
    Array.from(listItems).forEach(function(element){
        let listTxt=element.innerHTML;
        if(listTxt.includes(inputVal)){
            element.style.display='block';
        }
        else{
            element.style.display='none';
        }
    })
})
