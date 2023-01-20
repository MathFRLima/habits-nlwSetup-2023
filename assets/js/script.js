const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists) {
        console.log('dia ja incluso')
        return
    }

   console.log('adicionado com sucesso')
    nlwSetup.addDay(today)
}

function save() {
    localStorage.setItem('nlwSetup', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('nlwSetup')) || {}
nlwSetup.setData(data)
nlwSetup.load()

/* 
const form = document.querySelector('#form-habits')
const button = document.querySelector('header button')
const days = document.querySelector("[data-days]")

button.addEventListener('click', () => {
    
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    days.innerHTML = `
        <div class="day">
            <div>${today}</div>
            <input type="checkbox" name="run" value="${today}"/>
            <input type="checkbox" name="water" value="${today}"/>
            <input type="checkbox" name="food" value="${today}"/>
            <input type="checkbox" name="journal" value="${today}"/>
            <input type="checkbox" name="takePills" value="${today}"/>
        </div>
    `

}) */