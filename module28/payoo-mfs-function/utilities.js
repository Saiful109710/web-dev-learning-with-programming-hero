function getInputFieldValue(id){
    const inputValue = document.getElementById(id).value;
    const  inputNumber = parseFloat(inputValue);
    return inputNumber;

}

function getTextFieldValue(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;

}

function showSectionId(id){
    document.getElementById("add-money-form").classList.add("hidden")
    document.getElementById("cash-out-form").classList.add("hidden")
    document.getElementById("transaction-history").classList.add("hidden")

    document.getElementById(id).classList.remove('hidden')
}