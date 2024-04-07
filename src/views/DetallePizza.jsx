import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PizzasContext } from "../context/PizzaProv";
import Menubar from "../components/Menubar";

const Detalle = () => {
  const [pizzaDetail, setPizzaDetail] = useState({});
  const { pizzas, addToCart } = useContext(PizzasContext);
  const { id } = useParams();

  const obtenerDatos = () => {
    const datosPizza = pizzas.find((pizza) => pizza.id === id);

    setPizzaDetail(datosPizza || {});
  };

  useEffect(() => {
    obtenerDatos();
  }, [pizzas]);

  return (
    <>
      <Menubar />
      <div>
        <div>
          <div>
            
            <div className="col-md-6">
              <img src={pizzaDetail.img}/>
            </div>

            <div className="col-md-6">
              <div>
                <h5 className="card-title text-capitalize">
                  {pizzaDetail.name}
                </h5>
                <p className="card-text">{pizzaDetail.desc}</p>
                <ul>
                  {pizzaDetail.ingredients?.map((ingredient, i) => (
                    <li key={i}> {ingredient}</li>
                  ))}
                </ul>
                <div className="d-flex justify-content-around">
                  <h4>Precio: ${pizzaDetail.price}</h4>
                  <button
                    className="btn btn-danger"
                    onClick={() => addToCart(pizzaDetail)}
                  >Añadir</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detalle;
