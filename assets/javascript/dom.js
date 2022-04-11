//add click listener, add items script, strikethrough with click, then remove items script

let button = document.getElementById('new-things-button');
button.addEventListener('click', function(event) {
    let newLI = document.createElement('li');
    newLI.innerHTML = document.getElementById('add-them-things').value;
    let list = document.querySelector('ul');
    list.appendChild(newLI);
    document.getElementById('add-them-things').value = '';
});

let unorderedList = document.getElementById('things-list');
unorderedList.addEventListener('click', function(event) {
    event.target.className = 'line-through';
    setTimeout(() => { event.target.remove(); }, 1000);
});