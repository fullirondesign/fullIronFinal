import React, { useState } from 'react';
import styles from './card.module.css';

import Card from '@material-ui/core/Card';
import { Link } from 'gatsby';

function MyCard(props) {
  // Declare state variable(s)
  // const [count, setCount] = useState(0);
  // 
  console.log("card props", props)
  // 
  return (
    <Card className={styles.card}>
      <Link className={styles.cardMedia}> <div > </div> </Link>
      <div className={styles.cardChildren}>{props.children}</div>
      <Link className={styles.cardTitle}> title </Link>
      <div className={styles.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea harum repudiandae.</div>
      {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me {props.children} 
      </button> */}
    </Card>
  );
}

export default MyCard