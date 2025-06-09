import profilePic from './assets/image1.jpg';
import contactImage from './assets/contact.png'
import mapImage from './assets/map.png'
import vendoImage from './assets/vendo.png'
import clock from './assets/clock.png'
import savingsPro from './assets/savingspro.png'
import eCap from './assets/ecap.png'
import android from './assets/android.png'
import webImage from './assets/http.png'
import myProfile from './assets/me.jpg'
import myCv from './assets/files/AshleyNoblezaResume.pdf'
import arduinoImage from './assets/arduino.png'
import './App.css';

function App() {
  
  initLogic();

  return (
    <div>
      <div style={{flexDirection: 'row', display: 'flex', padding: 25, gap: 20, background: 'black'}}>
        <img class="circleimage1" src={myProfile} alt="Profile"/>
        <div style={{flexDirection: 'column', gap: 20}}>
          <h2 style={{fontSize: 50, color: 'white', fontStyle: 'bold'}}>Raynier Ashley Nobleza</h2>
          <h5 style={{fontSize: 13, color: 'white', fontWeight: 'normal'}}>I'm a fullstack developer aims to design and develop experience that makes poeple's lives simple.</h5>
          <div style={{flexDirection: 'row', display: 'flex'}}>
            <button class="button button1" style={{marginRight: 30}} onClick={downloadCV}>Download CV</button>
            <div style={{flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
            <img src={android} alt='props' width='30px' height='30px'></img>
            <h4 style={{color: 'white', marginLeft: 8}}>4+ years</h4>
          </div>

          <div style={{marginLeft: 15, marginRight: 15}}></div>

          <div style={{flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
            <img src={webImage} alt='props' width='30px' height='30px'></img>
            <h4 style={{color: 'white', marginLeft: 8}}>1 year</h4>
          </div>
          </div>
        </div>
      </div>

      <div style={{flexDirection: 'row', display: 'flex'}}>
        <div style={{flexDirection: 'row', padding: 35, display: 'flex', alignItems: 'center'}}>
          <img src={mapImage} alt="Profile" style={{width: 35, height: 35}}/>
          <h3 style={{marginLeft: 20}}>Landy, Santa Cruz, Marinduque 4902</h3>
        </div>

        <div style={{flexDirection: 'row', padding: 35, display: 'flex', alignItems: 'center'}}>
          <img src={contactImage} alt="Profile" style={{width: 35, height: 35}}/>
          <h3 style={{marginLeft: 20}}>+63 9953450732 (PH)</h3>
        </div>
      </div>

      <div style={{flexDirection: 'column', display: 'flex', padding: 30}}>
        <h3 style={{fontSize: 30}}>My Projects</h3>

        <div style={{padding: 20, flexDirection: 'row', display: 'flex'}}>
          <img class="circleimage2" src={arduinoImage} width='150px' height='150px'></img>
          <div style={{flexDirection: 'column', display: 'flex'}}>
            <h2 style={{fontSize: 30, marginLeft: 30}}>Local Web Controller</h2>
            <h2 style={{fontSize: 20, marginLeft: 30, fontWeight: 'normal'}}>I have created a Web Controller for Arduino harware. Users can control arduino harware via the locally hosted web that can be accessed in any devices.</h2>
            <h2 style={{fontSize: 14, marginLeft: 30, fontStyle: 'italic'}}>Technologies: HTML | CSS | JAVASCRIPT</h2>
          </div>
        </div>

        <div style={{padding: 20, flexDirection: 'row', display: 'flex'}}>
          <img class="circleimage2" src={vendoImage} width='150px' height='150px' alt='props'></img>
          <div style={{flexDirection: 'column', display: 'flex'}}>
            <h2 style={{fontSize: 30, marginLeft: 30}}>My Vendo App</h2>
            <h2 style={{fontSize: 20, marginLeft: 30, fontWeight: 'normal'}}>I have created an android and web app for vending machines boards. This makes it easier to track and monitor income of vendin machines like carwash vendo.</h2>
            <h2 style={{fontSize: 14, marginLeft: 30, fontStyle: 'italic'}}>Technologies: FLUTTER DART | HTML | JAVACRIPT | KOTLIN | XML | FIREBASE</h2>
          </div>
        </div>

        <div style={{padding: 20, flexDirection: 'row', display: 'flex'}}>
          <img class="circleimage2" src={clock} width='150px' height='150px' alt='props'></img>
          <div style={{flexDirection: 'column', display: 'flex'}}>
            <h2 style={{fontSize: 30, marginLeft: 30}}>Digital Clock & Club Management System</h2>
            <h2 style={{fontSize: 20, marginLeft: 30, fontWeight: 'normal'}}>I have created a fully functional android app and web app for fanciers to easily manage members, coordinates and tournament and event status.</h2>
            <h2 style={{fontSize: 14, marginLeft: 30, fontStyle: 'italic'}}>Technologies: FLUTTER DART | FIREBASE | KOTLIN</h2>
          </div>
        </div>

        <div style={{padding: 20, flexDirection: 'row', display: 'flex'}}>
          <img class="circleimage2" src={savingsPro} width='150px' height='150px' alt='props'></img>
          <div style={{flexDirection: 'column', display: 'flex'}}>
            <h2 style={{fontSize: 30, marginLeft: 30}}>SavingsPro</h2>
            <h2 style={{fontSize: 20, marginLeft: 30, fontWeight: 'normal'}}>I have created a mobile android app that records and tracks income and expenses of a user. Users can also view advance analytics of the incoming and outgoing money.</h2>
            <h2 style={{fontSize: 14, marginLeft: 30, fontStyle: 'italic'}}>Technologies: FLUTTER DART | KOTLIN | FIREBASE</h2>
          </div>
        </div>

        <div style={{padding: 20, flexDirection: 'row', display: 'flex'}}>
          <img class="circleimage2" src={eCap} width='150px' height='150px' alt='props'></img>
          <div style={{flexDirection: 'column', display: 'flex'}}>
            <h2 style={{fontSize: 30, marginLeft: 30}}>eCAPSULE</h2>
            <h2 style={{fontSize: 20, marginLeft: 30, fontWeight: 'normal'}}>I have created a Web Controller for Arduino harware. Users can control arduino harware via the locally hosted web that can be accessed in any devices.</h2>
            <h2 style={{fontSize: 14, marginLeft: 30, fontStyle: 'italic'}}>Technologies: HTML | CSS | JAVASCRIPT</h2>
          </div>
        </div>

        <div style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
          <h5 style={{fontWeight: 'normal'}}>Last updated: June 9, 2025</h5>
        </div>
      </div>
    </div>
  );
}

function initLogic(){

}

function downloadCV(){
  console.log("Resume is downloading...");
  const link = document.createElement('a');
    link.href = myCv;
    link.download = 'AshleyNoblezaResum.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


export default App;
