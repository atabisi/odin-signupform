const firstPassword = document.querySelector('#password')
const secondPassword = document.querySelector('#pwconfirm')
const secondPasswordLegend = document.querySelector('#pw2legend')

secondPassword.addEventListener('change', validatePassword)

function validatePassword() {
    if (firstPassword.value !== secondPassword.value) {
        secondPasswordLegend.textContent = "Passwords do not match"
    } else {
        secondPasswordLegend.textContent = ""
    }
}