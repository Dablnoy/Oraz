import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import spinner from "../assets/wait3.gif";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className={styles.productContainer}>
      <h2>Product Page</h2>
      {products ? (
        <div className={styles.products}>
          {products?.map((each) => (
            <Link
              to={`details/${each.id}`}
              key={each.id}
              className={styles.product}
            >
              <h4>{each.category}</h4>
              <p>{each.title}</p>
              <img style={{ width: "100px" }} src={each.image} alt="" />
            </Link>
          ))}
        </div>
      ) : (
       <div><img src={spinner} alt="spinner" /></div>
      )}
    </div>
  );
};

export default Products;
