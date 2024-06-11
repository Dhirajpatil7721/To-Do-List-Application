const Button = document.querySelector("#button")
const listContainer = document.querySelector('.listcontainer')
const input = document.querySelector('.input')
const li = document.querySelectorAll('ul li')


Button.addEventListener('click', () => {
    if (!input.value) {
        alert("Please Enter Some Task")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = input.value
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "&#10006";
        li.append(span);
    }
    input.value = "";
    SaveData()
})


listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        SaveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        SaveData()
    }
}, false)

function SaveData() {
    localStorage.setItem("data", listContainer.innerHTML);
    console.log("print");
}

function ShowTask(){
    
    listContainer.innerHTML = localStorage.getItem("data" ) 
}
ShowTask()