import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routing from './Routes/routes';
import Navmenu from './components/Navbar';
import CartProd from './contexts/cartprods';


function App() {
  return (
    <div>
   
      <CartProd>
      <Navmenu />
      <Routing></Routing>
      </CartProd>
    

    </div>
  )
}

export default App;
