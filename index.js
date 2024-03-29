fetch('bosshp.json')
    .then(res => res.json())
    .then(obj => {
        console.log(obj)
        let x = Object.assign({}, groupByKey(obj, 'Activity'))
        console.log(x)
        console.log(JSON.stringify(x))
    })

const darkModeToggle = document.getElementById("darkmode")

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

function groupByKey(obj, key = "") {
    let temp = new Array()
    Object.entries(obj).forEach(x => {
        let y = x[1][key]
        delete x[1][key]
        if (!Object.keys(temp).includes(y)) {
            temp[y] = [x[1]]
        }else{
            temp[y].push(x[1])
        }
    })
    return temp
}
