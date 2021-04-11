var nav =document.body.querySelector(".nav");
var display =document.body.querySelector(".display");

var pages = [
  {
    name:"Home",
    content:" "
  },
  {
    name:"About",
    content:" "
  },
  {
    name:"View",
    content:"none"
  }
]


function submit(){
  var submitEle=document.body.querySelector(".submitMess");
  var username=document.body.querySelector(".username").value;
  
  if(username==="coolStudent123"){
    loggedIn();
  }else{
    submitEle.innerHTML="Incorrect";
  }
  
}

function loggedIn(){
  for(var i=0; i<pages.length; i++){
  createPage(pages[i]);
}}
  
function createPage(pg){
  var button =document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name);
  })
  button.innerHTML=pg.name;
  nav.appendChild(button);
}

function contentWrite(wd,pg){
 display.innerHTML="";
  var heading = document.createElement("h1");
   if(pg!=="View"){
    display.innerHTML=wd;
  }else{
    viewPage()
    
  }
}

function createButton(){
  var button =document.createElement("button");
  button.innerHTML="Submit";
  display.appendChild(button);
  button.addEventListener("click", function(){
     checkString()
  })
}

function checkString(){
  var text=document.body.querySelector(".text").value;
  if(text.length!==0){
    document.body.querySelector(".submitMess").innerHTML="";
     list.push(text);
  }else{
    document.body.querySelector(".submitMess").innerHTML="Not enough letters"
  }
  showItem();
}
  
function showItem(){
  document.body.querySelector(".display").innerHTML="";
  for(var i=0; i<list.length; i++){
    var ele =document.createElement("div");
    ele.innerHTML=list[i];
    document.body.querySelector(".display").appendChild(ele);
  }
}

 
function viewPage(){
  
  createButton();
  
}
document.body.querySelector(".submit").addEventListener("click", function(){
  submit();
})