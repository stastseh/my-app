import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = e => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSub = () => {
    if (email === "") {
      alert("Введите email");
      return false;
    }
    if (password === "") {
      alert("Введите пароль");
      return false;
    }
    return true;
  };
  return (
    <form className={styles.login} name="form" onsubmit={formSub()}>
      <span className={styles.loginTitle}>Login</span>
      <div className={styles.formGroup}>
        <input
          onChange={e => setEmail(e.target.value)}
          type="text"
          className={styles.inputForm}
          id="email"
          name="email"
          placeholder="email"
          value={email}
        />
      </div>
      <div className={styles.formGroup}>
        <span className={styles.btnShow}>
          <i class="material-icons">remove_red_eye</i>
        </span>
        <input
          onChange={e => setPassword(e.target.value)}
          type="password"
          className={styles.inputForm}
          id="password"
          name="password"
          placeholder="password"
          value={password}
        />
      </div>
      <div className={styles.btnContainer}>
        <button type="submit" className={styles.loginBtn}>
          LOGIN
        </button>
        <a href="#">Register</a>
      </div>
    </form>
  );
};

export default Form;
