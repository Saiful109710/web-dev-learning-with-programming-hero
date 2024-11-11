


const loadData = async ()=>{
 try{
    const res = await fetch("https://jsonplaceholder.typicode.c");
    const data = await res.json();
    console.log(data)
 }catch(err){
    console.log("Error:",err)
 }
}

loadData()