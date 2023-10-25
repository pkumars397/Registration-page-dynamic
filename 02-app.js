const form=document.getElementById("form");
// console.log(form)

document.addEventListener("DOMContentLoaded",()=>{
  const users = axios.get(
    "https://crudcrud.com/api/56bb19519e424c5dafe0a9108ba803ca/UserData")
   .then((res)=>{
     const allUsers=res.data;
     allUsers.forEach((detail)=>{
      showUserDetails(detail)
     })
   })
})

form.addEventListener("submit",function(event){
  event.preventDefault();
  const details = {
    name: event.target.fullName.value,
    email: event.target.emailId.value,
    phone: event.target.phone.value,
  };
  axios.post("https://crudcrud.com/api/56bb19519e424c5dafe0a9108ba803ca/UserData",details)
   .then((res)=>{
    // console.log(res.data)
    showUserDetails(res.data);})
   .catch((err)=>{
    console.log(err);
   })
  // console.log(details)
})


function showUserDetails(user){

  const ul=document.getElementById("List");
  const childNode=`<li id='${user._id}'>${user.name} - ${user.email} - ${user.phone}
  <button onclick=deleteUser("${user._id}")>Delete</button> 
  <button onclick=editUser('${user._id}','${user.name}','${user.email}','${user.phone}')>Edit</button></li>`
  // console.log(childNode)
  ul.innerHTML=ul.innerHTML+childNode;
}

function deleteUser(userId){
  axios.delete(
    `https://crudcrud.com/api/56bb19519e424c5dafe0a9108ba803ca/UserData/${userId}`)
    .then((res)=>{
      removeUserFromScreen(userId);
    })
    .catch((err)=>console.log(err));
}

function editUser(userId,name,email,phone){
 document.getElementById("fN").value=name;
 document.getElementById("emailId").value=email;
 document.getElementById("phone").value=phone;
 deleteUser(userId);
}

function removeUserFromScreen(userId){
  const parentNode=document.getElementById("List");
  const childNode=document.getElementById(userId);
  parentNode.removeChild(childNode);
}