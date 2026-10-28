const gridContainer = document.querySelector(".grid-container");
console.log("Let's make an Etch-a-sketch!");
let counter=1;

//Grid-making
function makeGrid(num)
{  
gridContainer.replaceChildren();    
let x=0;
if (counter===1) x=16;
else x=num;      
//Filling 16 rows
console.log("Attempt "+counter);
for(let j=0;j<x;j++)
{    
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");

    //Filling one row with 16 squares divs
    for(let i=0;i<num;i++)
    {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridRow.appendChild(gridItem);
        console.log("one div added!");
        //adding "hover" effect to each grid
        gridItem.addEventListener("mouseenter",() => {gridItem.style.backgroundColor="brown"} );

    
    }
    gridContainer.appendChild(gridRow);
    console.log("one row added");
}
counter++;
}

//Modifying grid size
function modifyGridSize()
{
    let size = prompt("Enter no.of tiles per side");
    if(size>=16 && size<=100)
    makeGrid(size);
    else {
       alert("Size should be between 16 and 100!");
    }

}

const button = document.querySelector("#button");
button.addEventListener("click",modifyGridSize);

//first 16 by 16 grid
makeGrid(16);

