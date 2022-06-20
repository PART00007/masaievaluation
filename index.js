// fill in javascript code here

document.querySelector("form").addEventListener("submit",rowdata);

function rowdata(){
   event.preventDefault();
   var name=document.querySelector("#name").value;
  var id=document.querySelector("#docID").value;
  var dept=document.querySelector("#dept").value;
  var exp=document.querySelector("#exp").value;
  var email=document.querySelector("#email").value;
  var mobile=document.querySelector("#mbl").value;

  var tr=document.createElement("tr");
  var td1=document.createElement("td");
  td1.innerText=name;
  var td2=document.createElement("td");
  td2.innerText=id;
  var td3=document.createElement("td");
  td3.innerText=dept;
  var td4=document.createElement("td");
  td4.innerText=exp
  var td5=document.createElement("td");
  td5.innerText=email
  var td6=document.createElement("td");
  td6.innerText=mobile
  var td7=document.createElement("td");
   var exp1=parseInt(exp);
  if(exp1>5){
    td7.innerText="Senior"
  }
   if(exp1>=2 && exp1<=5){
    td7.innerText="Junior"
  }if(exp1<=1){
    td7.innerText="Trainee"
  }
  
  var td8=document.createElement("td");
  td8.innerText="Delete"
  td8.style.backgroundColor="red"
  
  td8.addEventListener("click",rowdel)
 
  
  
  tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
  document.querySelector("tbody").append(tr)
  function rowdel(){
    event.target.parentNode.remove();
  }
  
}