import './App.css';
import './css/pages.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Registration from './pages/Auth/Registration';
import CompleteRegistration from './pages/Auth/CompleteRegistration';
import SuccessRegistration from './pages/Auth/SuccessRegistration';
import Login from './pages/Auth/Login';
import Dashboard from './pages/Home/Dashboard';
import Campaign from './pages/Home/Campaign';
import Advertiser from './pages/Home/Advertiser';
import Publisher from './pages/Home/Publisher';
import Manager from './pages/Home/Manager';
import Payment from './pages/Home/Payment';
import LeftSidebar from './components/LeftSidebar';
import RightSideBar from './components/RightSideBar';
import {useState} from 'react';


function App() {

  const [rightSidebar, setRightSidebar] = useState(false);
  const [leftSidebar, setLeftSidebar] = useState(false)
  
  
 /*  if(window.location.pathname == "/dashboard"){
    setLeftSidebar(false)
  } */
 /*  switch (window.location.pathname) {
    case "/": setLeftSidebar(false); 
      break;
  
    default:
      break;
  } */
  

  return (
    <div className="App">
      <div className="content">
        <BrowserRouter> 
          <LeftSidebar leftSidebar={leftSidebar} />
          <Routes>
            <Route exact path="/"  element={<Login setLeftSidebar={setLeftSidebar} />} />
            <Route  exact path="/registration" element={<Registration setLeftSidebar={setLeftSidebar} />} />
            <Route  path="/registration/complete" element={<CompleteRegistration setLeftSidebar={setLeftSidebar}  />} />
            <Route  path="/registration/success" element={<SuccessRegistration setLeftSidebar={setLeftSidebar}  />} /> 
            <Route  path="/dashboard" element={<Dashboard setRightSidebar={setRightSidebar} setLeftSidebar={setLeftSidebar}   />} />  
            <Route  path="/campaigns" element={<Campaign setLeftSidebar={setLeftSidebar} />} />  
            <Route  path="/advertisers" element={<Advertiser setLeftSidebar={setLeftSidebar}  />} />  
            <Route  path="/publishers" element={<Publisher setLeftSidebar={setLeftSidebar}  />} />   
            <Route  path="/managers" element={<Manager  setLeftSidebar={setLeftSidebar} />} />   
            <Route  path="/payment" element={<Payment setLeftSidebar={setLeftSidebar}  />} /> 
          </Routes>
          <RightSideBar  
              setRightSidebar={setRightSidebar} 
              rightSidebar={rightSidebar} 
              
              />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
