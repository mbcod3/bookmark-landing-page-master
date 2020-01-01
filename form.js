const email = document.querySelector('#email')
const error = document.querySelector('#email-err')

email.addEventListener('input', () => {
  email.setCustomValidity('');
})

document.getElementById('submit').addEventListener('click', () => {
  console.log('start')
  if (!email.checkValidity()) {
    email.classList.add('input-err')
    error.classList.add('err-msg-show')

    error.innerText = 'Whoops, make sure its an email'

    email.setCustomValidity(' ');
  } else {
    email.classList.remove('input-error')
    error.classList.remove('err-msg-show')
  }
})