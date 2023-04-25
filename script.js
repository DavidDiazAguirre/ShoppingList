let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let item = document.getElementById('toBuy').value;
    let quantity = document.getElementById('quantity').value;
    let tableBody = document.getElementById('shopping-list');
    let row = tableBody.insertRow(1);
    row.setAttribute('id', `item-${id}`); //doesn't this need to be incremented?
    row.insertCell(0).innerHTML = item;
    row.insertCell(1).innerHTML = quantity;
    let deleteButton = row.insertCell(2);
    deleteButton.appendChild(createDeleteButton(id++));

    document.getElementById('toBuy').value = '';
    document.getElementById('quantity').value = '';
})

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-success';
    btn.id = id;
    btn.innerHTML = 'Check off the list!';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    }
    return btn;
}