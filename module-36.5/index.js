
const quotes = [
    { quote: "The only limit to our realization of tomorrow is our doubts of today.",
     author: "Franklin D. Roosevelt" 
    },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", 
      author: "Eleanor Roosevelt" 
    },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
     },
    { quote: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky" 
    },
    { quote: "Whether you think you can or you think you can’t, you’re right.",
      author: "Henry Ford" 
    },
    { quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb" 
    },
    { quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius" 
    },
    { quote: "Our lives begin to end the day we become silent about things that matter.",
      author: "Martin Luther King Jr." 
    },
    { quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs" 
    },
    { quote: "Believe you can and you're halfway there.", 
      author: "Theodore Roosevelt" 
    }
  ];
  

document.getElementById("quote").addEventListener("click",()=>{
    const p = document.getElementById("quote-p");
    const h1 = document.getElementById("name");
    const randomIndex = Math.floor(Math.random()*quotes.length);
    console.log(randomIndex);
    console.log(quotes[randomIndex])
    p.innerText = quotes[randomIndex].quote;
    h1.innerText = quotes[randomIndex].author
})

const textArea = document.getElementById("text-area");
textArea.addEventListener("keyup",(e)=>{
  

    if(e.key==="Enter"){
       
        console.log(e.target.value)
        if(e.target.value.trim()===''){
            e.target.value = ''
            return alert("please");
        }
      
        const todoContent = document.getElementById("todo-content");
        const li = document.createElement('li');
        li.innerText = document.getElementById("text-area").value;
        todoContent.append(li);
        document.getElementById("text-area").value = ''
    }
})