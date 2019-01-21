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

    modalBodyDOM.append(selectModeDivDOM);




}
function stepTwo(){
    document.getElementById('select-mode').style.display = 'none';
    if(event.target.id === "single"){
        selectCategory();
    }
    else{
        enterPin();
    }
} 



function enterPin(){
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

    const connectButtonDOM = document.createElement('button');
    connectButtonDOM.innerText = 'connect'
    formTagDOM.appendChild(connectButtonDOM);

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