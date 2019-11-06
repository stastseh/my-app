import React from 'react'
import styles from './Login.module.css'

 const Login = () => {
    return ( 
      <div className={styles.containerFluid}> 
        <div className={styles.container}>
            <div className={styles.wrap}>
                <form className={styles.login}>
                    <span className={styles.loginTitle}>Login</span>
                    <div className={styles.formGroup}>
                        <input type="text"  className={styles.inputForm} id="email" name="email" placeholder="email"/>
                    </div>
                    <div className={styles.formGroup}>
                        <span className={styles.btnShow}>
                            <i class="material-icons" >remove_red_eye</i>
                        </span>
                        <input type="password" className={styles.inputForm} id="password" placeholder="password"/>
                    </div>
                    <div className={styles.btnContainer}>
                        <button className={styles.loginBtn}>LOGIN</button>
                        <a href="#">Register</a>
                    </div>
                </form>
            </div>   
        </div>
      </div> 
    );
}

export default Login