import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import DetallePizza from "./views/DetallePizza"
import NotFound from './views/NotFound'
import Home from './components/Home'
import DetallePedido from './views/DetallePedido'

function App() {
  

  return (
    <>

<div>
      <Routes>     

        <Route path="/" element={<Home />} />
        <Route path="pizzas/">
        <Route path=":id" element={<DetallePizza />} /></Route>
        <Route path="/carrito" element={<DetallePedido />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </div>
    </>
  )
}

export default App
