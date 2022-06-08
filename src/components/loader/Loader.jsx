import React from 'react';
import styles from './Loader.module.css';
import { BallTriangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={styles.container}>
      <BallTriangle color="rgb(0, 0, 0)" height={200} width={200} />
    </div>
  );
};

export default Loader;
