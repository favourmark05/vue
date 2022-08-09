//Declare UI variables
const form = document.getElementById('list-form');
const myList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-list');
const listInput = document.getElementById('list');

//Event Listeners
//Add to my list
form.addEventListener('submit', addToList);
//Delete Each list item 
myList.addEventListener('click', deleteItem);
//Clear List
clearBtn.addEventListener('click', clearList);


//Functions
//Add to list
function addToList(e) {
  if(listInput.value === ''){
    alert('Add a Task');
  }

  //create li element
  const li = document.createElement('li');
  //Add classname
  li.className = 'collection-item';
  //create text node and append to li
  li.appendChild(document.createTextNode(listInput.value));
  // Create new link element
  const link = document.createElement('a');
  //Add class
  link.className = 'delete-item secondary-content';
  //Add icon html
  link.innerHTML = '<i class="fa fa-check"></i>';
  // Append the link to li
  li.appendChild(link);
  //append li to the ul
  myList.appendChild(li);
  //clear input
  listInput.value = ' ';

  e.preventDefault();
}

//Delete individual list
function deleteItem(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();
  }

  e.preventDefault();
}

//Clear my List
function clearList() {
  myList.innerHTML = '';
}