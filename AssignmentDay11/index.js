function login()
{
    const uname=document.getElementById('username').value;
    const pass=document.getElementById('password').value;

    if(uname=="world" && pass=="123")
    {
        location.assign("homepage.html");
    }
    else{
        window.alert("login Failed!")
    }
}
