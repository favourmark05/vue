//Creating/Assigning the dom variables

let inputText = document.querySelector("#txt");
let button = document.querySelector("#sub");
let list = document.querySelector(".list");

//Adding to the todo list

button.addEventListener("click", (e) => {
  if (inputText.value != "") {
    e.preventDefault();
    console.log(inputText.value);
    let newli = document.createElement("li");
    let newSpan = document.createElement("span");
    newli.innerHTML = inputText.value;
    newSpan.innerText = "X";
    list.appendChild(newli);
    newli.appendChild(newSpan);
    inputText.value = "";
  }

let del = document.querySelectorAll('span')
for(let i = 0; i < del.length; i++){

  //deleting from list using the remove method

del[i].addEventListener('click', ()=>{
    del[i].parentElement.remove()
})
}
});