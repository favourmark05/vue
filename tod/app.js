const lists = document.querySelector('ul')
const inputs = document.querySelector('input')
const btn = document.querySelector('button')

inputs.addEventListener('input', evt => {
  const elem = evt.target;
  const valid = elem.value.length != 0;
  if (valid && btn.disabled) {
    btn.disabled = false
  } else if(!valid && !btn.disabled){
    btn.disabled = true
  }
})
inputs.value = ''

btn.addEventListener('click', ()=>{
  const task = document.createElement('li')
  const text = document.createElement('span')
  const deleteTask = document.createElement('button')
  task.appendChild(text)
  text.innerHTML = inputs.value
  task.appendChild(deleteTask)
  deleteTask.innerHTML = 'delete'
  deleteTask.className = 'delet'
  lists.appendChild(task)
  inputs.value = ''
  inputs.focus()
  const delBtn = document.getElementsByClassName('delet')
  deleteTask.onclick = () =>{
    lists.removeChild(task)
  }
    
  
})
