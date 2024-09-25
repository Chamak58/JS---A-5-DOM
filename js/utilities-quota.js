//console.log('utilitues file added')

// function getInputFieldValueById(){
//     console.log('will get value by id');
//     const addDonation = document.getElementById('add-donation').value;
//     return addDonation;
// }

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    //console.log(inputNumber);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;

    // const textFigure = document.getElementById(id).innerText;
    // const textAmount = parseFloat(textFigure);
    // return textAmount

}