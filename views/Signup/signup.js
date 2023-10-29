async function signUp(event)
{

try {
    event.preventDefault();
const name=document.getElementById('nameid').value;
const email=document.getElementById('emailid').value;
const password=document.getElementById('passid').value;

const signupDetails={
    name:name,
    email:email,
    password:password
}

console.log(signupDetails);
    document.getElementById('userid').value = ''; // Clear the username field
    document.getElementById('emailid').value = ''; // Clear the email field
    document.getElementById('passid').value = ''; // Clear the phone number field
    const res = await axios.post("http://localhost:3000/user/signup",signupDetails); 

    console.log(res);

    if(res.status==201)
    {
        window.location.href="../Login/login.html"  ///on successful 
    }
              
    else 
    {
        throw new Error('Failed to login')
    }
} catch (error) {
    document.body.innerHTML+= `<div style="colour:red;">${error}</div>`;
       
}

}


