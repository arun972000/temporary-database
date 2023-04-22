let container=document.createElement("div")
container.setAttribute("class","container");

let row=document.createElement("div");
row.setAttribute("class","row");

let col4=document.createElement("div");
col4.setAttribute("class","col-4");

let col8=document.createElement("div");
col8.setAttribute("class","col-8");

let heading1=document.createElement("h1");
heading1.innerHTML="Form Submission"

let heading2=document.createElement("h1");
heading2.innerHTML="Temporary Database"

let form=document.createElement("form");
form.setAttribute("action","GET");

function input(tag,tagtype,tagval,name,nameval,id,idvalue,clas,clasname,place,placeval){
let inp=document.createElement(tag);
inp.setAttribute(tagtype,tagval);
inp.setAttribute(name,nameval);
inp.setAttribute(id,idvalue);
inp.setAttribute(clas,clasname);
inp.setAttribute(place,placeval)
return inp
}
function label(tag,type,typeval,content){
  let lab=document.createElement(tag);
  lab.setAttribute(type,typeval);
  lab.innerHTML=content;
  return lab;
}

let label1= label("label","for","fname","First Name");
let br1=document.createElement("br");
let firstname=input("input","type","text","name","firstname","id","fname","class","form-control","placeholder","Enter First Name");
let br2=document.createElement("br");
let label2= label("label","for","lname","Last Name");
let br3=document.createElement("br");
let lastname=input("input","type","text","name","lastname","id","lname","class","form-control","placeholder","Enter Last Name");
let br4=document.createElement("br");
let label3= label("label","for","email","Eamil");
let br5=document.createElement("br");
let email=input("input","type","email","name","mail","id","email","class","form-control","placeholder","Enter Email");
let br6=document.createElement("br");
let label4= label("label","for","dateofbirth","Date Of Birth");
let br7=document.createElement("br");
let dob=input("input","type","date","name","dob","id","dateofbirth","class","form-control","placeholder","Enter Date of Birth");
let br8=document.createElement("br");
let label5= label("label","for","address","Address");
let br9=document.createElement("br");
let address=input("input","type","text","name","add","id","address","class","form-control","placeholder","Enter Address");
let br17=document.createElement("br");
let label6= label("label","for","city","City");
let br10=document.createElement("br");
let city=input("input","type","text","name","city","id","city","class","form-control","placeholder","Enter City");
let br11=document.createElement("br");
let label7= label("label","for","state","State");
let br12=document.createElement("br");
let state=input("input","type","text","name","state","id","state","class","form-control","placeholder","State");
let br13=document.createElement("br");
let br14=document.createElement("br");
let submit=document.createElement("input");
submit.setAttribute("type","button");
submit.setAttribute("onclick","foo()");
submit.setAttribute("value","Submit")
submit.classList.add("btn", "btn-primary");

let table=document.createElement("table");
table.setAttribute("id","tab")
table.classList.add("table", "table-bordered");

let tres=document.createElement("div");
tres.setAttribute("class","table-responsive")

let thead=document.createElement("thead");

let headrow=document.createElement("tr");

let th=document.createElement("th");
th.innerHTML="First Name"
let th2=document.createElement("th");
th2.innerHTML="Last Name"
let th3=document.createElement("th");
th3.innerHTML="Email"
let th4=document.createElement("th");
th4.innerHTML="D.O.B"
let th5=document.createElement("th");
th5.innerHTML="Address"
let th6=document.createElement("th");
th6.innerHTML="City"
let th7=document.createElement("th");
th7.innerHTML="State"

form.append(label1,br1,firstname,br2,label2,br3,lastname,br4,label3,br5,email,br6,label4,br7,dob,br8,label5,br9,address,br17,label6,br10,city,br11,label7,br12,state,br13,br14,submit);
col4.append(heading1,form);
headrow.append(th,th2,th3,th4,th5,th6,th7);
thead.append(headrow);
table.append(thead);
tres.append(table)
col8.append(heading2,tres)
row.append(col4,col8);
container.append(row);
document.body.append(container)

function foo(){
  let res=document.getElementById("tab");

  let Row=res.insertRow(1);

  let cell1=Row.insertCell(0);
  let cell2=Row.insertCell(1);
  let cell3=Row.insertCell(2);
  let cell4=Row.insertCell(3);
  let cell5=Row.insertCell(4);
  let cell6=Row.insertCell(5);
  let cell7=Row.insertCell(6);

  let fnam=document.getElementById("fname").value;
  let lnam=document.getElementById("lname").value;
  let emal=document.getElementById("email").value;
  let dob=document.getElementById("dateofbirth").value;
  let add=document.getElementById("address").value;
  let city=document.getElementById("city").value;
  let state=document.getElementById("state").value;
  

  cell1.innerHTML=fnam;
  cell2.innerHTML=lnam;
  cell3.innerHTML=emal;
  cell4.innerHTML=dob;
  cell5.innerHTML=add;
  cell6.innerHTML=city;
  cell7.innerHTML=state;

}

