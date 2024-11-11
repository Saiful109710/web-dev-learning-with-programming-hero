const myInfo = {
    name:"saiful",
    age:25,
    address:"sylhet",
    subject:["bangla","english","math"]
}

const sentence = `amar nam ${myInfo.name}. amar subject gulo ${myInfo.subject.map((sub)=>sub).join('/')}`
console.log(sentence)