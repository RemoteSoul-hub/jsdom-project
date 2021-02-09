let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

// form submit event 
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter Event
filter.addEventListener('keyup', filterItems);

// Add item function
function addItem(e) {
    e.preventDefault();

    // Get value of input
    let newItem = document.getElementById('item').value;

    // Create new li element with the added value
    let li = document.createElement('li');
    // Add Class to li
    li.className = 'list-group-item';
    console.log(li);

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    // Create delete button element
    let deleteBtn = document.createElement('button');

    // Add Classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
// Append button to li
    li.appendChild(deleteBtn);
    // Append to li to List
    itemList.appendChild(li);
}

// Remove Item function
function removeItem(e) {
 if (e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
 }
}

// filter items 
function filterItems (e) {
    // convert text to lowerCase
    let text = e.target.value.toLowerCase();
    // get lis
    let items = itemList.getElementsByTagName('li');
    // convert html collection to array 
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    })
}