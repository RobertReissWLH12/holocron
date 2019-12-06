import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import { HashRouter } from 'react-router-dom'
import Routes from './Routes'
import { Provider } from 'react-redux'
import store from './ducks/store'



function App() {
  console.log(window.location.hash)
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
            
          <Header />
          <Routes/>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;

//  POSSIBLE GREENSOCK FUNCTIONALITY


// import React, {useEffect, useRef} from 'react';
// import logo from './download.jpeg';
// import './App.css';
// import {TweenMax, Linear} from 'gsap';
// const App = () => {
//     let logoElement = useRef(null);
//     useEffect(() => {
//       TweenMax.to(
//           logoElement,
//           1,
//           {
//               repeat: 6.5,
//               rotation: 360,
//               ease: Linear.easeNone,
//               repeatDelay: .5
//           }
//       )
//   }, []);
//   function scaleUp() {
//       TweenMax.to(logoElement, 1, {
//           scale: 3,
//           ease: Linear.ease,
//       });
//   }
//   function scaleDown() {
//       TweenMax.to(logoElement, 1, {
//           scale: 0
//       });
//   }
//     return (
//         <div className="App">
//           <div className="potato">
//             <header className="App-header">
//                 <img src={logo}
//                     onMouseEnter={scaleUp}
//                     onMouseLeave={scaleDown}
//                     ref={element => {logoElement = element}}
//                     className="App-logo"
//                     alt="logo"
//                 />
//             </header>
//             </div>
//         </div>
//     );
// }
// export default App;