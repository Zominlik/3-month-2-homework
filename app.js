let inputOne = document.querySelector('.inputone')
let inputTwo = document.querySelector('.inputtwo')
let elForm = document.querySelector('.form')
let wrapper = document.querySelector('.wrapper')



let arr = [];

elForm.addEventListener('submit', (evt) =>{
    evt.preventDefault();

    let inputVal = inputOne.value;
    let inputValTwo = inputTwo.value;
    let list = document.createElement('li')
    let text = document.createElement('p')
    list.setAttribute('class', 'item')
    text.setAttribute('class', 'desc')
    list.textContent = inputValTwo
    text.textContent = inputVal

    let count = 0;

    wrapper.appendChild(list)
    wrapper.appendChild(text)
    
    
    
    arr.push(Number(inputValTwo))
    count = arr.reduce(function(acc, item){
        return (acc += item)
    })
    let allcount = document.createElement('p')
    allcount.textContent = (count);
    wrapper.appendChild(allcount)
})