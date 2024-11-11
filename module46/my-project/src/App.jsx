
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

//   const handleSignUpSubmit = (data)=>{
//           console.log("sign Up" , data)

     
// }


// const handleUpdateSubmit = (data)=>{
//         console.log("update data=",data)
// }

  return (
    <>
     
      <h1>Vite + React</h1>
        {/* <SimpleForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
          <div>
              <h2>Sign Up</h2>
              <p>Please fill all the input for SignUp</p>
          </div>
        </SimpleForm>
        <SimpleForm formTitle={"Profile Updated"} submitBtnText={'update'} handleSubmit={handleUpdateSubmit}>
          <div>
            <h2>Update Form</h2>
            <p>Please fill up the all input field</p>
          </div>
        </SimpleForm>
      */}
      <Grandpa></Grandpa>
    </>
  )
}

export default App
