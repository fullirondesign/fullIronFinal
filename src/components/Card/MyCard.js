import React, { useState } from 'react';
import styles from './card.module.css';

import Card from '@material-ui/core/Card';

function MyCard(props) {
  // Declare state variable(s)
  const [count, setCount] = useState(0);
  // 
  console.log("card props", props)
  // 
  return (
    <Card className={styles.card}>
    <div className={styles.cardMedia}></div>
    <div>{props.children}</div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me {props.children} 
      </button>
    </Card>
  );
}

export default MyCard