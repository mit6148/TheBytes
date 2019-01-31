const socket = io();

function stepOne(){
    const modalBodyDOM = document.getElementById('modal-body');
    
    const selectModeDivDOM = document.createElement('div');
    selectModeDivDOM.id = 'select-mode';
    
    const instructDOM = document.createElement('p');
    instructDOM.id = 'select-text';
    instructDOM.innerText = 'Wait until 3 players have connected! And then once game start click the false tweet.';
    selectModeDivDOM.appendChild(instructDOM);


    const singlePlayerButtonDOM = document.createElement('button');
    singlePlayerButtonDOM.id = "single";
    singlePlayerButtonDOM.className = 'mode-btn';
    singlePlayerButtonDOM.addEventListener("click", stepTwo, false);
    singlePlayerButtonDOM.innerText = "Next";
    selectModeDivDOM.appendChild(singlePlayerButtonDOM);



}
function stepTwo(){
    document.getElementById('select-mode').style.display = 'none';
        multiplePlayerMode();
        console.log('steptwo entered');
} 

function connectRoom(){
    window.location.replace('/wait');
    socket.emit('connectToGame');
}



function multiplePlayerMode(){
    const modalBodyDOM = document.getElementById('modal-body');


    const formTagDOM = document.createElement('form');


    const formGroupDivDOM = document.createElement('div');
    formGroupDivDOM.className = 'form-group';
    formTagDOM.appendChild(formGroupDivDOM);


    const connectButtonDOM = document.createElement('a');
    connectButtonDOM.innerText = 'Connect'
    connectButtonDOM.addEventListener('click',connectRoom,false);
    formTagDOM.appendChild(connectButtonDOM);

    modalBodyDOM.appendChild(formTagDOM);
}


function main (){
    stepOne();
}

main();