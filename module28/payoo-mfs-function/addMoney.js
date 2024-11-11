document.getElementById("btn-add-money").addEventListener("click",function(event){
    event.preventDefault();
    console.log("btn is clicked");
    const addMoney = getInputFieldValue("input-add-money");
    const pinNumber = getInputFieldValue("input-pin-number");
    console.log(pinNumber);
    console.log(addMoney);

    if(pinNumber===1234){
        const balance = getTextFieldValue("account-balance");
        const newBalance = balance + addMoney;
        document.getElementById("account-balance").innerText = newBalance; 
        const p = document.createElement("p");
        p.innerText = `Addeded ${addMoney} new balance: ${newBalance}`
        console.log(p);
        document.getElementById("transaction-container").appendChild(p);
    }else{
      alert("wrong pin")
    }
  

})

