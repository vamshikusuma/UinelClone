import './App.css'
import HeroUnit from './HeroUnit'
import Sidebar from './Sidebar'
function Headder(){
  return(
    
      <div className='headder'> 

<img width="13" height="13"   src="https://img.icons8.com/windows/32/search--v1.png" alt="search--v1"/>
<div className='inner-element'>
      <ul> <li>New tools</li>
       <li>Products</li>
       <li>Pricing</li> </ul>

      </div>  

      <div className='notification'><img width="13" height="13" src="https://img.icons8.com/?size=100&id=l4Qa9u8ugqVJ&format=png&color=000000" alt="search--v1"/></div>

  
      <div className='profile'><img width="14" height="14" src="https://img.icons8.com/ultraviolet/40/test-account.png" alt="test-account"/></div>
      
      <button>NEW PROJECT</button>
       
       </div>
  )
}
function App() {


  return (
    <>
     <Headder/>
     <Sidebar></Sidebar>
     <HeroUnit></HeroUnit>
    </>
  )
}

export default App
