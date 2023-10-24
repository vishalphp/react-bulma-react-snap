import { Route, Routes } from 'react-router-dom' 
//import SeoUtils from './components/seo/SeoUtils';
import Screen from './Screen';
import './asset/style/style.scss';
//import { useLocation } from 'react-router-dom'

function App() {
  
  /*const location = useLocation();
  let pageSeo = location.pathname.substring(1) === '' ? 'home' : location.pathname.substring(1); 
*/
 
  return (
    <div className="App">
      {/*<SeoUtils page={pageSeo} />*/} 
     
       <Routes>
         <Route path='/*' element={<Screen />} />
       </Routes>
      
    </div>
  );
}

export default App;
