import { useContext } from "react";
import Menubar from "../components/Menubar";
import { PizzasContext } from "../context/PizzaProv";
import { useNavigate } from "react-router-dom";

const DetallePedido = () => {
  const { carrito, increment, decrement } = useContext(PizzasContext);
  const total = carrito.reduce((a, { count, price }) => a + price * count, 0);

  const navigate=useNavigate()

  const formPago=()=>{
    navigate(`/formPago`)
  }

  return (
    <>
      <Menubar />
      <div >
        <div>
          <h5>Detalles del pedido:</h5>
          <div >
            {carrito.map((producto, i) => (
              <div
                key={i}
                className="d-flex justify-content-between py-2"
              >
                <div >
                  <img
                    src={producto.img}
                    width="50"
                    alt=""
                  />
                  <h6 >{producto.name}</h6>
                </div>

                <div >
                  <h6 >
                    ${(producto.price * producto.count)}
                  </h6>
                  </div>
              </div>
            ))}
            <h2 >Total: ${(total)}</h2>
            <button>Ir a Pagar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetallePedido;
