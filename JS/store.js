let container = document.getElementById('container');
let imgA = document.getElementById('img');
imgA.classList.add('img');
let writerA = document.getElementById('writer');
writerA.classList.add('writer');
let nameA = document.getElementById("name");
nameA.classList.add('name');
let disA = document.getElementById("dis");
disA.classList.add('dis');


function Box(imgN,writerN,nameN,disN,priceN) {
    let box = document.createElement('div');
    container.appendChild(box);
    box.classList.add('box');
    let img = document.createElement('img');
    let writer = document.createElement('div');
    let name = document.createElement('div');
    let dis = document.createElement('div');
    let price = document.createElement('span');
    box.appendChild(img);
    box.appendChild(writer);
    box.appendChild(name);
    box.appendChild(dis);
    box.appendChild(price);
    img.classList.add('img');
    writer.classList.add('writer');
    name.classList.add('name');
    dis.classList.add('dis');
    price.classList.add('price');
    img.src = imgN;
    writer.innerHTML = writerN;
    name.innerHTML = nameN;
    dis.innerHTML = disN;
    price.innerHTML = priceN;
}

