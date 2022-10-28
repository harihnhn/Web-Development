function validate(){
    if(document.getElementById('name').value == ""){
        document.getElementById('br1').appendChild(document.createElement("br"));
        //var name = document.getElementById('br');
        //var br_tag = document.createElement('br');
        //name.appendChild(br_tag);
        document.getElementById('name error').innerHTML = "***Error: Please Enter Your Name***";
    }

    if(document.getElementById('contact').value =""){
        document.getElementById('br2').appendChild(document.createElement("br"));
        document.getElementById('contact error').innerHTML = "***Error: Please Enter Your Contact number";
        console.log("true");
    }
    
    if(document.getElementById('email').value =""){
        document.getElementById('br3').appendChild(document.createElement("br"));
        document.getElementById('email error').innerHTML = "***Error: Please Enter Your Mail Id";
    }

    if(document.getElementById('password').value =""){
        document.getElementById('br4').appendChild(document.createElement("br"));
        document.getElementById('password error').innerHTML = "***Error: Please Enter Your Password";
    }

    if(document.getElementById('dob').value =""){
        document.getElementById('br5').appendChild(document.createElement("br"));
        document.getElementById('dob error').innerHTML = "***Error: Please Enter Your Date of Birth";
    }
    console.log("true");
}