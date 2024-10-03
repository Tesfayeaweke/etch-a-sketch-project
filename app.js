//Append functionality.
const appendDiv = () => {
    const squareDiv = document.createElement('div');
    const container = document.querySelector('.container');
    const paragraph = document.createElement('p');


    paragraph.textContent = 'hello';

    squareDiv.appendChild(paragraph);
    container.appendChild(squareDiv);

}

//functionality to specify the number of appends to be made.
const numberOfAppends = (num) => {
    for (let i = 0; i < num; i++) {
        appendDiv();

    }

}

//256 div elements made to cover for the whole 16*16 need of the element. 
numberOfAppends(256);



//functionality to change the color of the div element.
const changeColor = () => {
    const randRed = Math.floor(Math.random() * 256);
    const randBlue = Math.floor(Math.random() * 256);
    const randGreen = Math.floor(Math.random() * 256);

    const divs = document.querySelectorAll('div');

    divs.forEach((div) => {
        div.style.backgroundColor =`rgb(${randRed},${randGreen},${randBlue})`;

    })
    

}