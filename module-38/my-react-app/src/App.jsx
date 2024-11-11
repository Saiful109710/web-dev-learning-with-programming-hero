
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Products from './components/Products/Products'
import { useEffect, useState } from 'react'
import Services from './components/Products/Services/Services'





function App() {


const [status,setStatus] = useState(false);
console.log(status)

const handleMessage = (message)=>{
       setStatus(message)
}

    

     

   




  return (
    <>
    

       <Services message={handleMessage}></Services>

      
    </>
  )
}





export default App
