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

const divs = document.querySelectorAll('div');
const numberOfRows = parseInt(prompt('Enter the number of row and columns:'));

const numberOfElements = numberOfRows * numberOfRows;
const widthOfDiv = 100 / numberOfRows;

//a functionlity to make the default amount even row and columns by taking the number of rows needed as a parameter. 
const makeDefaultRows = (rows) => {
    
    const widthOfDiv = 100 / rows;
    const divs = document.querySelectorAll('div');
    divs.forEach((div) => {
        div.style.flexBasis = `${widthOfDiv}%`
    })


}
//256 div elements made to cover for the whole 16*16 need of the element. 
const defaultElementsNumber = 256;
const defaultnumberOfRows= Math.sqrt(defaultElementsNumber);
numberOfAppends(defaultElementsNumber);
makeDefaultRows(defaultnumberOfRows);



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

container.addEventListener('mouseover', (e) => {
    e.stopPropagation();
    e.target.style.backgroundColor = changeColor();
})
