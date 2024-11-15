import React from 'react'
import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location)
  console.log(navigation)
  return (
    <div>
        <h2>This is home component</h2>
        <Header></Header>
        {
          navigation.state === 'loading' ? <p>Loading....</p>:<Outlet></Outlet>
        }
        
        <Footer></Footer>

    </div>
  )
}

export default Home
