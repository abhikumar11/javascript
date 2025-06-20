const getData=async()=>{
    const res=await fetch("http://localhost:3000/user",{method:"GET"});
    const data=await res.json();
    console.log(data);
    let usertab=document.querySelector("#usertable");
    usertab.innerHTML=`<table border="2px">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Action</th>
        </tr>
        ${data.map((item)=>`<tr>
            <td>${item.username}</td>
             <td>${item.emailid}</td>
             <td>${item.mobileno}</td>
             <td><button onclick="del('${item.id}')"}>Delete</button></td>
        </tr>
        `)}
    </table>
    `
}
let del=(id)=>{
    fetch(`http://localhost:3000/user/${id}`,{method:"DELETE"})
}
getData();