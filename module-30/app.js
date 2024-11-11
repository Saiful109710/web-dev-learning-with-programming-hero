function loadData2(){

    const url =  "https://jsonplaceholder.typicode.com/todos/1";
    fetch(url)
    .then(res=>res.json())
    .then(data=>console.log(data));
}

function loadUser(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>display(data));
}

function display(data){
    console.log(data);
}