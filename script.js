let id = 0; //defines id to allow it to be incremented later when we add the "Check off list" buttons dynamically to new shopping list entries

document.getElementById('add').addEventListener('click', () => { //fetches add button, listens for click, runs function
    let item = document.getElementById('toBuy').value; //sets item to toBuy input field
    let quantity = document.getElementById('quantity').value; //sets quantity to quantity input field
    let tableBody = document.getElementById('shopping-list'); //sets tableBody to the table that will contain the shopping list
    let row = tableBody.insertRow(1); //defines where the first row added by a user will go
    row.setAttribute('id', `item-${id}`); //adds the id "item-${id}" to any new <tr> created by user
    row.insertCell(0).innerHTML = item; //I guess cells are zero indexed too. populates the first cell of a new <tr> with the user input to item
    row.insertCell(1).innerHTML = quantity; //same as above but quantity for second cell
    let deleteButton = row.insertCell(2); //will populate the "Check item off list!" button on the 3rd cell of a new <tr>
    deleteButton.appendChild(createDeleteButton(id++)); //appends a child, defined by the function on line 18, which creates the "Check off the list!" dynamically for ever row a user adds

    document.getElementById('toBuy').value = ''; //resets the input fields to blank after a submission is made
    document.getElementById('quantity').value = '';
})

function createDeleteButton(id) { //this function creates the delete button on every row and said button is appended to the row at line 12. good thing functions are hoisted.
    let btn = document.createElement('button');
    btn.className = 'btn btn-success'; //passing bootstrap styling in JS, very cool oh yeah...
    btn.id = id; //adds an id attribute to the button, kept track of by line 1, and incremented for every new button at line 12 so that each button will only delete its row.
    btn.innerHTML = 'Check off the list!';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`); //defines elementToDelete as the element with id "item-${id} which should be the same id as btn.id, pairing them for deletion"
        elementToDelete.parentNode.removeChild(elementToDelete); //the actual code that removes the child from the parent element, onclick
    }
    return btn;
}