async function loginUser(event)
{

try {
    event.preventDefault();

const email=document.getElementById('emailid').value;
const password=document.getElementById('passwordid').value;
console.log(email,password)
const loginuser={ email, password}

    const res = await axios.post("http://localhost:3000/user/login",loginuser)

    console.log(res);
    console.log(res.data);
   
    document.getElementById('emailid').value = ''; // Clear the email field
    document.getElementById('passid').value = ''; // Clear the phone number field
    if (res.status === 202) {
            alert(res.data.message);
    }
} catch (error) {
    document.body.innerHTML=document.body.innerHTML;
   // console.log(error);
   //alert(error.response.data.message);
}


}