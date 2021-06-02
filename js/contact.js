const nameInputContactFormUnvalidText = document.querySelector('.contact___from__Name__Input .unvalid-text');
const FullNameContactForm = document.querySelector('.contact___from__Name__Input #full-name');

FullNameContactForm.addEventListener("change", ()=> {
    let isValid = /^[a-zA-Z\s]*$/.test(FullNameContactForm.value)
    console.log(isValid)

    if(isValid === false) {
        nameInputContactFormUnvalidText.classList.remove("d-none")
    }
    else if(isValid){
        nameInputContactFormUnvalidText.classList.add("d-none")
    }
    
})