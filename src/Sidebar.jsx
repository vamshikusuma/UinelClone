  import "./App.css"
  import "./index.css"
  import Img from './assets/Screenshot 2024-12-08 143622.png'
  import pc from './assets/Screenshot 2024-12-08 152836.png'
  import pic from './assets/Screenshot 2024-12-08 155237.png'
  export default function Sidebar(){


    return(


        <div className='main-content'>

        <div className='main'>

            <div className="head">  <img width="12" height="12" src="https://img.icons8.com/papercut/60/diamonds.png" alt="diamonds"/>  <br />  <br /> <h5>Uinel</h5></div>

            <div className="list"><ul>
                <li> <img width="11" height="11" src="https://img.icons8.com/material-sharp/24/dashboard-layout.png" alt="dashboard-layout"/>      Dashboard</li>
                <li> <img width="14" height="14" src="https://img.icons8.com/ios-filled/50/group-foreground-selected.png" alt="group-foreground-selected"/>  Users</li>
                <li> <img width="14" height="14" src="https://img.icons8.com/ios-filled/50/chat.png" alt="chat"/> Chat</li>
                <li><img width="14" height="14" src="https://img.icons8.com/ios/50/secured-letter--v1.png" alt="secured-letter--v1"/>     Messages</li>
                <li> <img width="14" height="14" src="https://img.icons8.com/ios/50/spiral-bound-booklet.png" alt="spiral-bound-booklet"/> Catalog</li>
                <br />
                <span  style={{ color:"rgb(112, 111, 111)", fontSize:"7px"}}>New tools</span> 

                <li><img width="14" height="14" src="https://img.icons8.com/material-rounded/24/navigation.png" alt="navigation"/>  Location</li>
                <li> <img width="14" height="14" src="https://img.icons8.com/material-outlined/24/documents--v2.png" alt="documents--v2"/> Document</li>
               <br />
                <span  style={{ color:"rgb(112, 111, 111)", fontSize:"7px"}}>About</span> 
        
        <span  style={{ color:"rgb(112, 111, 111)", fontSize:"7px"}}>Help center</span> 

        <span  style={{ color:"rgb(112, 111, 111)", fontSize:"7px"}}>contact</span> 
                </ul>
               
        </div></div> 
        <div>
        <img  width= "490" height= "150"src={Img} alt="" />

        <div class="container">

    <div class="card-container">
      <div class="card">
        <div class="card-header">
          <span class="badge">Design</span>
          <span class="time">8 AM</span>
        </div>
        <h5>Product Design</h5>
        <p class="members">Allen & others</p>
      </div>

      <div class="card new">
        <div class="card-header">
          <span class="badge video">Video</span>
          <span class="time">10:30 AM</span>
        </div>
        <h5>How to start?</h5>
        <span class="tag new-tag">NEW</span>
      </div>

      <div class="card">
        <div class="card-header">
          <span class="badge seo">SEO</span>
          <span class="time">8 AM</span>
        </div>
        <h5>Think Mt</h5>
      </div>
    </div>
  </div>
        </div>
       
       <div className="side-unit">
        <img  width= "132"  height="170"src={pc} alt="" />
        <div className='btn'>All</div>
        <img  width="132" height="140"src={pic} alt="" />
       </div>
     


        </div>
    )
}