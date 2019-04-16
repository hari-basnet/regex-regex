// validators 
const patterns = {
    telephone:/^\d{10}$/,
    firstname: /^[A-Z][a-z\d]{3,16}$/,
    lastname: /^[A-Z][a-z\d]{3,16}$/,
    password: /^[\w@-]{8,20}$/,
    bio: /^[a-z\d-]{8,50}$/,
    email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

};
const allInputs = document.querySelectorAll('input');

// validation function 
function validate(field, regex){

    if(regex.test(field.value)){
        field.className = 'valid';
    }else{
        field.className = 'invalid';
    }

}

// event listeners
allInputs.forEach(element => {
    element.addEventListener('input', (e) => {

        validate(e.target, patterns[e.target.attributes.name.value]);

    })
});