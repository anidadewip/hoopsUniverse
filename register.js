let form = document.forms['registrationForm'];
let errorLabel = document.getElementById('errorLabel');
document.getElementById('submitBtn').addEventListener('click', onSubmit);
//word warp alt+z

function onSubmit(event) {
    if(!checkName()){
        event.preventDefault();
        return;
    }
    else if(!checkPhoneNumber()){
        event.preventDefault();
        return;
    }
    else if(!checkEmail()){
        event.preventDefault();
        return;
    }
    else if(!checkGender()){
        event.preventDefault();
        return;
    }
    else if(!checkDistrict()){
        event.preventDefault();
        return;
    }
    else if(!checkAddress()){
        event.preventDefault();
        return;
    }
    else if(!checkPostalCode()){
        event.preventDefault();
        return;
    }
    else if(!checkCheckBox()){
        event.preventDefault();
        return;
    }
    
    errorLabel.innerHTML = "";
    alert(`
            Name       : ${form['name'].value} \n 
            Phone Number: ${form['phoneNumber'].value} \n 
            Email       : ${form['email'].value} \n
            Gender      : ${form['gender'].value}\n
            District    : ${form['district'].value} 
            Address     : ${form['address'].value} \n
            Postal Code : ${form['postalCode'].value}
    `);
}

function checkCheckBox() {
    if(!document.getElementById('checkbox').checked){
        errorLabel.innerHTML = "Checkbox must be checked";
        return false;
    }
    return true;
}

function checkGender(){
    if(!document.getElementById('maleRBtn').checked && !document.getElementById('femaleRBtn').checked){
        errorLabel.innerHTML = "Gender must be filled";
        return false;
    }
    // if(form['gender'].value == ""){
    //     errorLabel.innerHTML = "Gender must be filled";
    //     return false;
    // }
    return true;
}

// function checkPassword() {
//     if(form['password'].value == ""){
//         errorLabel.innerHTML = "Password must be filled";
//         return false;
//     }else if(form['password'].value.length < 8){
//         errorLabel.innerHTML = "Password length must more than 8 letters";
//         return false;
//     }
//     else if(form['cpassword'].value == ""){
//         errorLabel.innerHTML = "Confirmation password must be filled";
//         return false;
//     }
//     else if(form['password'].value != form['cpassword'].value){
//         errorLabel.innerHTML = "Password and confirmation password not match";
//         return false;
//     }
//     return true;
// }

function checkEmail(){
    if(form['email'].value == ""){
        errorLabel.innerHTML = "Email must be filled";
        return false;
    }
    if(form['email'].value.indexOf('@') > 0){
        if(form['email'].value.indexOf('@')+1 < form['email'].value.indexOf('.')){
            return true;
        }else{
            errorLabel.innerHTML = "Email format is wrong";
            return false;
        }
    }else{
        errorLabel.innerHTML = "Email format is wrong";
        return false;
    }

}

function checkName(){
    if(form['name'].value == ""){
        errorLabel.innerHTML = "Name must be filled\n";
        return false;
    }
    if(form['name'].value.length < 3){
        errorLabel.innerHTML = "Name length must be more than 3 letters\n";
        return false;
    }
    return true;
}

function checkPhoneNumber(){
    if(form['phoneNumber'].value == ""){
        errorLabel.innerHTML = "Phone Number must be filled\n";
        return false;
    }
    if(form['name'].value.length > 13){
        errorLabel.innerHTML = "Name length must be less than 13 letters\n";
        return false;
    }
    return true;
}

function checkDistrict(){
    if(form['district'].value == ""){
        errorLabel.innerHTML = "District must be filled\n";
        return false;
    }
    // if(form['name'].value.length < 3){
    //     errorLabel.innerHTML = "Name length must be more than 3 letters";
    //     return false;
    // }
    return true;
}

function checkAddress(){
    if(form['address'].value == ""){
        errorLabel.innerHTML = "Address must be filled\n";
        return false;
    }
    // if(form['name'].value.length < 3){
    //     errorLabel.innerHTML = "Name length must be more than 3 letters";
    //     return false;
    // }
    return true;
}

function checkPostalCode(){
    if(form['postalCode'].value == ""){
        errorLabel.innerHTML = "Postal code must be filled\n";
        return false;
    }
    if(form['name'].value.length < 3){
        errorLabel.innerHTML = "Postal code length must be 5 letters\n";
        return false;
    }
    return true;
}


