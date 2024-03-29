const darkModeToggle = document.getElementById("darkmode")
const table = document.getElementById("tab")
const encounter = document.getElementById("encounter")
const data = document.getElementById("data")
var obj

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.toggle("dark")
    darkModeToggle.innerText = "Light Mode"
}

function toggleMode() {
    if (darkModeToggle.innerText == "Light Mode") {
        darkModeToggle.innerText = "Dark Mode"
    } else {
        darkModeToggle.innerText = "Light Mode"
    }
    document.body.classList.toggle("light")
    document.body.classList.toggle("dark")
}


function encounterSpecifics(values) {
    encounter.innerHTML = ''
    for (const [keys, vals] of Object.entries(values)) {
        let elem = document.createElement('button')
        elem.innerText = values[keys]['Boss']
        elem.onclick = function () { bossSpecifics(values[keys]) }
        encounter.appendChild(elem)
    }
}

function bossSpecifics(val) {
    data.innerText = ''

    let key = document.createElement('tr')
    let va = document.createElement('tr')
    for (const [keys, vals] of Object.entries(val)) {
        if(keys == 'Boss'){
            continue
        }
        let x = document.createElement('th')
        x.innerText = keys
        let y = document.createElement('th')
        y.innerText = vals
        key.appendChild(x)
        va.appendChild(y)
    }
    data.appendChild(key)
    data.appendChild(va)
}

fetch('raidshp.json')
    .then(res => res.json())
    .then(data => {
        obj = data
        Object.keys(obj).forEach(x => {
            let el = document.createElement('button')
            el.innerText = x
            el.onclick = function () { encounterSpecifics(obj[x]) }
            table.appendChild(el)
        })
    })