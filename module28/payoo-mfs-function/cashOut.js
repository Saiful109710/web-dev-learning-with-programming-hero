document.getElementById("btn-cash-out").addEventListener("click",function(event){
    event.preventDefault();
    const addMoney = getInputFieldValue("input-cash-out-money");
    const pinNumber = getInputFieldValue("input-cash-out-pin-number");
    console.log(addMoney,pinNumber)
    if(isNaN(addMoney)){
        alert("cas out failed");
        return;
    }
    if(pinNumber===1234){
      
        const balance = getTextFieldValue("account-balance");
        if(addMoney>balance){
            alert("you hav nit enough money for cashout");
            return;
        }

        const newBalance = balance - addMoney;
        console.log(balance,newBalance)
        document.getElementById("account-balance").innerText = newBalance;

        const div = document.createElement("div");
        div.classList.add("bg-yellow-200")
        div.innerHTML = `
            <h2 class="text-2xl font-bold">Cash Out History</h2>
            <p>${addMoney} withdraw. New balance is ${newBalance}</p>
        `
        document.getElementById("transaction-container").appendChild(div);

    }else{
        alert("update pin number")
    }
})