
const cells=document.querySelectorAll('.cell');

cells.forEach(cell => cell.addEventListener('click',(e)=>{

  if(empty(cell)){
      cell.textContent="O";
      placeRandomX();
  }
  else{
      cell.textContent="";
  }
  checkWin(cells);
  checkFull(cells);
  })
  
);

checkFull=()=>{
  if([...cells].every(cell=>cell.textContent!=="")){

    const draw=document.getElementById('draw');
    draw.innerHTML="Draw"
    cells.forEach(cell=>cell.textContent="")
  }
}
 
function empty(cell){
  if(cell.textContent=="")
  return true;
}

function checkWin(cells){
 var winPattern=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
 ]
  for (const pattern of winPattern){
    const  [a,b,c]=pattern;
   
    if(cells[a].textContent !== "" &&cells[a].textContent==cells[b].textContent&&cells[b].textContent==cells[c].textContent){
      if (cells[a].textContent === 'O') {
        const win=document.getElementById('winner');
        win.innerHTML="You Win"
        cells.forEach(cell=>cell.textContent="")
    } else if (cells[a].textContent === 'X' ) {
      const cwin=document.getElementById('loser');
      cwin.innerHTML="Computer Wins"
        cells.forEach(cell=>cell.textContent="")
    }
     
    }

  }
  }



function placeRandomX() {
    const emptyCells = document.querySelectorAll('.cell:empty');
    if (emptyCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      emptyCells[randomIndex].textContent = "X";
  
     
    
    }
  }
 