//Append functionality.
const appendDiv = () => {
    const squareDiv = document.createElement('div');
    const container = document.querySelector('.container');
    const paragraph = document.createElement('p');


    paragraph.textContent = 'colors';

    squareDiv.appendChild(paragraph);
    container.appendChild(squareDiv);

}

//functionality to specify the number of appends to be made.
const numberOfAppends = (num) => {
    for (let i = 0; i < num; i++) {
        appendDiv();

    }

}



//a functionlity to make the default amount of even row and columns by taking the number of rows needed as a parameter. 
const makeRows = (rows) => {

    const widthOfDiv = 100 / rows;
    const divs = document.querySelectorAll('div');
    divs.forEach((div) => {
        div.style.flexBasis = `${widthOfDiv}%`;
        div.style.height = `${widthOfDiv}%`;
        div.style.flexGrow = `0`;

    })


}
//256 div elements made to cover for the whole 16*16 need of the element. 
const defaultElementsNumber = 256;
const defaultnumberOfRows = Math.sqrt(defaultElementsNumber);
numberOfAppends(defaultElementsNumber);
makeRows(defaultnumberOfRows);



//functionality to generate random color.
const changeColor = () => {
    const randRed = Math.floor(Math.random() * 256);
    const randBlue = Math.floor(Math.random() * 256);
    const randGreen = Math.floor(Math.random() * 256);


    return `rgb(${randRed},${randGreen},${randBlue})`;





}


//adEventListener is attached to every div using forEach.

const container = document.querySelector('.container');

// divs.forEach((div) => {
//     div.addEventListener('mouseover',(e)=>{
//         e.stopPropagation();

//         div.style.backgroundColor = changeColor();
//         console.log(e.currentTarget)

//     })


// })

//addEventListener is added to the parent container of the div to change the background color.
container.addEventListener('mouseover', (e) => {
    e.stopPropagation();
    e.target.style.backgroundColor = changeColor();
})

const gridButton = document.querySelector('.grid-control #grid-button');
const resetButton = document.querySelector('.grid-control #reset-button')
const divs = document.querySelectorAll('.container div');
let isReset = false;

gridButton.addEventListener('click', () => {
    
    // const divs = document.querySelectorAll('div');
    numberOfAppends(defaultElementsNumber);
    makeRows(defaultnumberOfRows);
    const numberOfRows = parseInt(prompt('Enter the number of row and columns:'));
    const numberOfElements = numberOfRows * numberOfRows;


    // const widthOfDiv = 100 / numberOfRows;
    divs.forEach((div) => {
        div.remove();
    })
    numberOfAppends(numberOfElements);
    makeRows(numberOfRows)
    // console.log(numberOfRows);
    // console.log(numberOfElements);
    



})
const paragraphs = document.querySelectorAll('.container div p');


resetButton.addEventListener('click', () => {
    if (!isReset) {
        divs.forEach((div) => {
            div.remove()
        })
        const defaultElementsNumber = 256;
        const defaultnumberOfRows = Math.sqrt(defaultElementsNumber);
        numberOfAppends(defaultElementsNumber);
        makeRows(defaultnumberOfRows);
        divs.forEach((div) => {
            div.style.backgroundColor = 'white';
        })
        container.style.backgroundColor = 'white';
        paragraphs.forEach((p) => {
            p.style.backgroundColor = 'white';
        })
    }
    



})


