let plus = document.getElementById('plus')
let wind = document.createElement('div');
let windBox = document.createElement('div');
wind.appendChild(windBox)
let x = document.createElement('i');
wind.appendChild(x)
wind.classList.add('wind');
windBox.classList.add('wind-box');
x.classList.add('bi');
x.classList.add('bi-x-lg');
////////
let title = document.createElement('div');
windBox.appendChild(title);
title.classList.add('title');
title.innerHTML = 'إعلان عن كتاب';
////////
let form = document.createElement('form');
windBox.appendChild(form);
form.classList.add('form');
////////
let nameInput = document.createElement('input')
nameInput.setAttribute('placeholder','عنوان الكتاب')
form.appendChild(nameInput)
let writerInput = document.createElement('input')
writerInput.setAttribute('placeholder','المؤلف')
form.appendChild(writerInput)
let disInput = document.createElement('input')
disInput.setAttribute('placeholder','وصف الكتاب')
form.appendChild(disInput)
let imgInput = document.createElement('input')
imgInput.setAttribute('type',"text")
imgInput.setAttribute('placeholder','رابط الصورة على الانترنت')
form.appendChild(imgInput)
//////////
let button = document.createElement('button');
windBox.appendChild(button);
button.classList.add('button');
button.innerHTML = 'نشر';


plus.addEventListener('click', function(){
    document.body.appendChild(wind);
})

x.addEventListener('click', function(){
    document.body.removeChild(wind);
})


button.addEventListener('click',function(){
    Box(imgInput.value,writerInput.value,nameInput.value,disInput.value,'50$');
    document.body.removeChild(wind);
})

