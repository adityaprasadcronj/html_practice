
  function saveData()
  {
  let name,age,salary,email,remark;
  name=document.getElementById("name").value;
  age=document.getElementById("age").value;
  salary=document.getElementById("salary").value;
  email=document.getElementById("email").value;
  remark=document.getElementById("remark").value;
  
  let user_records=new Array();
  user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  if(user_records.some((v)=>{return v.email==email}))
  {
    alert("duplicate data");
  }
  else
  {
    user_records.push({
    "name":name,
    "age":age,
    "salary":salary,
    "email":email,
    "remark":remark
  })
  localStorage.setItem("users",JSON.stringify(user_records));
  }
  
  }
           