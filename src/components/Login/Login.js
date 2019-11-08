import React from "react";
import Form from "../Form/Form";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.containerFluid}>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Login;
