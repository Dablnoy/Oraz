import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackArrow from "../assets/BackArrow";
import CheckoutBag from "../assets/ChackoutBag";
import styles from "./Details.module.css";

const Details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [params.productId]);

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsNav}>
        <BackArrow
          className={styles.detailsNavIcon}
          onClick={() => navigate(-1)}
        />
        <h1>Details Page</h1>
        <CheckoutBag
          className={styles.detailsNavIcon}
          onClick={() => navigate("/checkout", { state: { product } })}
        />
      </div>
      <div className={styles.detailsWrapper}>
        <div>
          {/* <p>{product?.id}</p> */}
          <h3>{product?.title}</h3>
          <p>{product?.description}</p>
          {/* <p>{product?.category}</p> */}
          <h2>{product?.price} $</h2>
          {/* <p>{product?.rating?.rate}</p> */}
          {/* <p>{product?.rating?.count}</p> */}
        </div>
        <div>
          <img
            className={styles.detailsImage}
            src={product?.image}
            alt={product?.title}
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
