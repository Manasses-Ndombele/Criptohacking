const mainHeader = document.querySelector('header#main-header')

function checkHeaderBehavior() {
    if (window.scrollY >= 10) {
        if (!mainHeader.classList.contains('role')) {
            mainHeader.classList.add('role')
        }
    } else {
        if (mainHeader.classList.contains('role')) {
            mainHeader.classList.remove('role')
        }
    }
}

window.onload = checkHeaderBehavior
window.onscroll = checkHeaderBehavior

const formControls = document.querySelectorAll('input.form-control')
formControls.forEach(formControl => {
    formControl.addEventListener('focus', () => {
        formControl.parentElement.style.borderBottomColor = '#f29f05'
    })

    formControl.addEventListener('blur', () => {
        formControl.parentElement.style.borderBottomColor = '#f2f2f2'
    })
})

const formSelect = document.querySelector('select.form-select')
formSelect.addEventListener('focus', () => {
    formSelect.parentElement.style.borderBottomColor = '#f29f05'
})

formSelect.addEventListener('blur', () => {
    formSelect.parentElement.style.borderBottomColor = '#f2f2f2'
})

document.forms[0].onsubmit = event => {
    event.preventDefault()
    let nameField = document.querySelector('input#name-field').value
    location.href = `/thank-u/${nameField}`
}
