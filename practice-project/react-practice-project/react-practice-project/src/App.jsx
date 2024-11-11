import AllProducts from "./components/AllProducts/AllProducts"
import CartContainer from "./components/CartContainer/CartContainer"
import Header from "./components/Header/Header"
import './App.css'
import { useState } from "react"



function App() {

  const [isActive,setIsActive] = useState({cart:true,status:"cart"})
  const [selectedProducts,setSelectedProducts] = useState([]);
  const [price,setPrice] = useState(500);

  const handleActiveStatus = (status)=>{
      if(status==='cart'){
          setIsActive({cart:true,status:'cart'})
      }else{
        setIsActive({cart:false,status:"about"})
      }
  }

  const handleSelectedProducts =(product)=>{

    const isExist = selectedProducts.find((p)=>p.recipe_id === product.recipe_id);
    if(isExist){
      alert("already added")
    }else{
      setPrice(price+product.calories)
      setSelectedProducts([...selectedProducts,product])
    }
      
  }

  const handleDeletePrice = (id)=>{
          const product = selectedProducts.find((p)=>p.recipe_id === id);
          setPrice(price - product.calories)

  }

  const handleRemove = (id)=>{
    handleDeletePrice(id);
      const remainingProduct = selectedProducts.filter((product)=>product.recipe_id !== id);
      setSelectedProducts(remainingProduct)
  }

  
 
  return (
    <>
      
      <Header price={price} selectedProducts={selectedProducts}></Header>
      <section className="flex justify-around">
          <AllProducts handleSelectedProducts={handleSelectedProducts}></AllProducts>
          <CartContainer handleRemove={handleRemove} selectedProducts={selectedProducts} handleActiveStatus={handleActiveStatus} isActive={isActive}></CartContainer>
      </section>
     
    </>
  )
}

export default App
