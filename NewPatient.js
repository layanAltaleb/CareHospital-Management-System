function validation(){
    var fullName = document.getElementById("fullName").value;
    var id = document.getElementById("id").value;
    var gender = document.getElementById("gender").value;
    var birthday = document.getElementById("birthday").value;
    var status1 = document.getElementById("status").value;
    var address = document.getElementById("address").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var insurance = document.getElementById("insurance").value;
    var reader = new FileReader();
    var input = document.getElementById('image-input');
    var preview = document.getElementById('image-preview');

    let ValidName = /^[a-zA-Z]./;
    let ValidEmail =  /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ ;
    let ValidNumber = /\d{10}/;
        
    
    if( fullName==""||id==""||gender == "" ||phoneNumber == ""||insurance == ""){
    alert("Pleace fill the required information!! ");
        }

    else if((!(ValidNumber.test(phoneNumber))) || isNaN(phoneNumber)){
        alert("Phone number should be 10 intgers");
        }   

    else if((!(ValidNumber.test(id))) || isNaN(id)){
        alert("ID should be 10 intgers");
         }

    else if( email != "" && (!(ValidEmail.test(email))) ){
        alert("Pleace enter a valid email");
        }

    else if((!(ValidName.test(fullName)))){
        alert("Name can't start with number");
        }
    
    else{
    preview.style.display = "block";
    document.getElementById('new-patient').style.border = "#2D5259 solid 2px";  
    document.getElementById('new-patient').innerHTML = "<h4>Form Submitted Successfully!!</h4><p><br>FullName: "+ fullName + "<br>ID: "+id+"<br>Gender: "+gender+"<br>BirthDate: "+birthday+ "<br>Material Status: "+status1+"<br>Address: "+address+"<br>PhoneNumber: "+phoneNumber+"<br>Email: "+email+"<br>Insurance company number: "+insurance + "<br></p>";
    reader.onload = function() {
        preview.src = reader.result;
      }
  
      if (input.files && input.files[0]) {
        reader.readAsDataURL(input.files[0]);
      }
      document.getElementById("form").reset();
    
    }

}

