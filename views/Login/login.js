async function loginUser(event)
{

try {
    event.preventDefault();

const email=document.getElementById('emailid').value;
const password=document.getElementById('passid').value;

const loginuser={
 email,
    password
}

    const res = await axios.post("http://localhost:3000/user/login",loginuser)
    console.log(res.data);
    console.log(res);
    //showUserOnScreen(res.data.newUserDetail);
   
    document.getElementById('emailid').value = ''; // Clear the email field
    document.getElementById('passwordid').value = ''; // Clear the phone number field
  
    if (res.status === 202) {
        alert(res.data.message);
  
        localStorage.setItem('token',res.data.token)
        window.location.href="../Expense/expensetracker.html" /////on successfull login
        
      } 
 



      

    
} catch (error) {
             console.log(error);
     alert(error.response.data.message);
    document.body.innerHTML+= `<div style="colour:red;">${error}</div>`;
}
}
// } catch (error) {
//     document.body.innerHTML=document.body.innerHTML;
//     console.log(error);
// }


// }

// window.addEventListener("DOMContentLoaded", async () => {
//  try {
//       const res = await axios.get("http://localhost:3000/user/login")
  
//       console.log(res.data.allUsers);
//       // data is in the format of array
  
//       // for(let key of res.data)
//       // {
//       //     showuseronscreen(key)
//       // }
  
//     //   for(i=0;i<res.data.allUsers.length;i++)
//     //   {
//     //       showUserOnScreen(res.data.allUsers[i])
//     //       console.log(res.data.allUsers[i]);
//    }
   
//  catch (err) {
//      document.body.innerHTML= document.body.innerHTML;
//      console.log(err)
//    }
// })

// // function showUserOnScreen(user)
// // {
// //     let parentNode=document.getElementById('listofusers');
//     // let li = document.createElement('li');
//     // li.textContent=`${user.username}--${user.emailid}--${user.phonenumber}`;


//     // let inputEdit=document.createElement('input');
//     // inputEdit.type='button'
//     // inputEdit.value='Edit';
    

//     // let inputDelete=document.createElement('input');
//     // inputDelete.type='button'
//     // inputDelete.value='Delete';

//     //    li.appendChild(inputEdit);
//     //    li.appendChild(inputDelete);
//     //    parentNode.appendChild(li);
     


// //     const childNode=`<li id=${user.id}>${user.username}-${user.emailid}-${user.phonenumber}
// //                         <button onclick=deleteUser('${user.id}')>Delete</button>
// //                         <button onclick=editUserDetail('${user.emailid}','${user.username}','${user.phonenumber}','${user.id}')>Edit</button>`

// //     parentNode.innerHTML=parentNode.innerHTML+childNode; 


// // }

// // async function deleteUser(userid)
// // {

// //     try {
// //         await axios.delete(`http://localhost:3000/user/delete-user/${userid}`);
// //         removeFromScreen(userid);
// //     } catch (err) {
// //         document.body.innerHTML= document.body.innerHTML+"<h4>Something Went Wrong</h4>"
// //     console.log(err);
// //     }
       
         
// // } 
  
// // function removeFromScreen(id)
// //  {
// //      let parent=document.getElementById('listofusers');
// //     const childNodeDeleted=document.getElementById(id);

// //     parent.removeChild(childNodeDeleted)
// // }

