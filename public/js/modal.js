const socket = io();

function stepOne(){
    const modalBodyDOM = document.getElementById('modal-body');
    
    const selectModeDivDOM = document.createElement('div');
    selectModeDivDOM.id = 'select-mode';
    
    const instructDOM = document.createElement('p');
    instructDOM.id = 'select-text';
    instructDOM.innerText = 'Please select a mode';
    selectModeDivDOM.appendChild(instructDOM);


    const singlePlayerButtonDOM = document.createElement('button');
    singlePlayerButtonDOM.id = "single";
    singlePlayerButtonDOM.className = 'mode-btn';
    singlePlayerButtonDOM.addEventListener("click", stepTwo, false);
    singlePlayerButtonDOM.innerText = "Single Player";
    selectModeDivDOM.appendChild(singlePlayerButtonDOM);


    const multiplePlayerButtonDOM = document.createElement('button');
    multiplePlayerButtonDOM.id = "multiple";
    multiplePlayerButtonDOM.className = 'mode-btn';
    multiplePlayerButtonDOM.addEventListener("click", stepTwo, false);
    multiplePlayerButtonDOM.innerText = "Multiple Player";
    selectModeDivDOM.appendChild(multiplePlayerButtonDOM);
    modalBodyDOM.appendChild(selectModeDivDOM);


}
function stepTwo(){
    document.getElementById('select-mode').style.display = 'none';
    if(event.target.id === "single"){
        selectCategory();
    }
    else{
        multiplePlayerMode();
        console.log('steptwo entered');
    }
} 

// function connectRoom(){
//     if (event.target.id == ''){
//     }else{
//     const socket = io.connect();
//     socket.on('connect',function(){
//         socket.emit('room',{pin: event.target.id });
//         window.location.href = '/game';

//     });
//     socket.on('message', function(data) {
//         console.log('Incoming message:', data);
//      })
// }
// }
function connectRoom(){
    window.location.replace('/wait');
}

// function createRoom(){
//     const socket = io(); 
//     socket.emit('create');
//     window.location.href = '/game';
// }


function multiplePlayerMode(){
    const modalBodyDOM = document.getElementById('modal-body');


    const formTagDOM = document.createElement('form');


    const formGroupDivDOM = document.createElement('div');
    formGroupDivDOM.className = 'form-group';
    formTagDOM.appendChild(formGroupDivDOM);


    const labelTagDOM = document.createElement('label');
    labelTagDOM.for = 'group-code';
    labelTagDOM.innerText = 'Enter Group Pin:';
    formTagDOM.appendChild(labelTagDOM);


    const inputTagDOM = document.createElement('input');
    inputTagDOM.type = 'text';
    inputTagDOM.className = 'form-control';
    inputTagDOM.id = 'group-code';
    inputTagDOM.placeholder = 'Code Here';
    formTagDOM.appendChild(inputTagDOM);

    const connectButtonDOM = document.createElement('a');
    connectButtonDOM.innerText = 'Connect'
    connectButtonDOM.addEventListener('click',connectRoom,false);
    formTagDOM.appendChild(connectButtonDOM);

    // const createRoomDOM = document.createElement('a');
    // createRoomDOM.className = 'create-room';
    // createRoomDOM.addEventListener('click',createRoom);
    // createRoomDOM.innerText = 'Create A New Game Room'
    // formTagDOM.appendChild(createRoomDOM);

    modalBodyDOM.appendChild(formTagDOM);
}

function selectCategory(){
    const modalBodyDOM = document.getElementById('modal-body');

    const selectCategoryDivDOM = document.createElement('div');
    selectCategoryDivDOM.id = 'select-category';

    const politcsButtonButtonDOM = document.createElement('button'); 
    politcsButtonButtonDOM.id = 'politics-category';
    politcsButtonButtonDOM.innerText = "Politics";
    selectCategoryDivDOM.appendChild(politcsButtonButtonDOM);

    const celebrityButtonButtonDOM = document.createElement('button');
    celebrityButtonButtonDOM.id = 'celebrity-category';
    celebrityButtonButtonDOM.innerText = "Celebrity";
    selectCategoryDivDOM.appendChild(celebrityButtonButtonDOM);

    const randButtonButtonDOM = document.createElement('button');
    randButtonButtonDOM.id = 'random-category';
    randButtonButtonDOM.innerText = "Random";
    selectCategoryDivDOM.appendChild(randButtonButtonDOM);

    modalBodyDOM.appendChild(selectCategoryDivDOM);


}

function main (){
    stepOne();
}

main();