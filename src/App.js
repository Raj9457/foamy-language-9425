import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import AllRoutes from './Components/AllRoutets';


function App() {
  return (
    <div className="App">
      <Navbar/>   
      <AllRoutes/>
      <HomePage/>
      
    </div>
  );
}

export default App;
