let createButton = document.querySelector('.h');
let backButton = document.querySelector('.todo-list__wrapper .back');
let openButton = document.querySelector('.button__open-list');

openButton.addEventListener('click', function(){
    document.querySelector('.todo-list__wrapper').classList.remove('todo-list__hide');
})

backButton.addEventListener('click', function(){
    document.querySelector('.todo-list__wrapper').classList.add('todo-list__hide');
})