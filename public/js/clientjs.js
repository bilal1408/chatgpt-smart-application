
const chatJptForm = document.querySelector('form')
const question = document.querySelector('input')
const answer = document.querySelector('.answer')

chatJptForm.addEventListener('submit' , (e) => {
    e.preventDefault()

    const askquestion = question.value
    
    fetch("http://localhost:3000/askquestion?ask=" + askquestion).then((response) => {
        response.text().then((data) => {
            answer.textContent = data
        })
    })
})