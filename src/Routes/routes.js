import Cart from '../screens/cart';
import { Route, Routes } from 'react-router-dom';
import Detsrc from '../screens/detsrcs';
import Shop from '../components/shop';


function Routing(){
    return(
        <div>
            <Routes>
            <Route path='/' element={[<Shop></Shop>] }></Route>
            <Route path='/detsrc/:productId' element={<Detsrc/>}>
                <Route path=':productId' element={<Detsrc />}></Route>
            </Route>
            <Route path='/cart' element={<Cart/>} ></Route>
            
            </Routes>
        </div>
    )
}
export default Routing