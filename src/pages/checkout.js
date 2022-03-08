import Head from "next/head";
import React, { useContext } from "react";
import OrderItem from "@components/OrderItem";
import styles from "@styles/Checkout.module.scss";
import AppContext from "../context/AppContext";
import useGetSumProducts from "../hooks/useGetSumProducts";

const Checkout = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles["Checkout"]}>
        <div className={styles["Checkout-container"]}>
          <h1 className={styles["title"]}>My order</h1>
          <div className={styles["Checkout-content"]}>
            <div className={styles["order"]}>
              <p>
                <span>{new Date().toISOString()}</span>
                <span>
                  {state?.cart.length} article
                  {`${
                    state?.cart.length > 1 || state?.cart.length === 0
                      ? "s"
                      : ""
                  }`}
                </span>
              </p>
              <p>${useGetSumProducts()}</p>
            </div>
          </div>
          {state?.cart.map((item, index) => (
            <OrderItem
              product={item}
              indexValue={index}
              key={`checkout-order-item-${index}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Checkout;
