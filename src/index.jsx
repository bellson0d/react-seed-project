// document.getElementById("root").innerHTML = 'Initial bundle!'

import React from 'react';
import { render } from 'react-dom';
import styles from './index.css';

render (
  <div className={styles.container}>
    <h1>Hi</h1>
  </div>,
  document.getElementById("root")
)
