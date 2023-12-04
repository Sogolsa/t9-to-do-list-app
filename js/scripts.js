function newItem() {
  // Adding a new item to the list of items //
  let list = $('#list');
  let li = $('<li></li>');
  list.append(li);

  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    let list = $('#list');
    list.append(li);
  }
  

  // Crossing out an item //
  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });

  // Create delete button //
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  // Class Delete //
  crossOutButton.on('click', deleteListItem);
  function deleteListItem() {
    li.addClass('delete');
  }

  // Reorder the items //
  list.sortable();
}

// eventlistener for pressing enter to work like an add button //
$('#input').on('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); //preventing the default behavior of pressing enter
        $('#button').click();
    }
  })