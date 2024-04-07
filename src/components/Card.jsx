import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PizzasContext } from "../context/PizzaProv";


const Card = () => {

  const { pizzas, addToCart } = useContext(PizzasContext);

  const navigate = useNavigate();

  return (
    <>

    {pizzas.map((pizza) => (
        <div key={pizza.id} className="col">
          <div >
            <img className="card-img-top"
              src={pizza.img}/>

            <div className="card-body">
              <h4>Pizza {pizza.name}</h4>
           
              <p className="card-text">
                <h6>Ingredientes:</h6>
              </p>

                {pizza.ingredients.map((ingredient, i) => (
                  <li key={i}> {ingredient}</li>
                ))}
             
            </div>

            <h2>
              {"$"}{pizza.price}</h2>

            <div >
              <button
                to={`pizza/${pizza.id}`} className="btn btn-info text-white" onClick={() => navigate(`/pizzas/${pizza.id}`)}>
                Ver Más
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                className="btn btn-danger"
                onClick={() => addToCart(pizza)}
              >
                Añadir
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
