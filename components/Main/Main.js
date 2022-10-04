import React from 'react';
import { Card } from './components/Card';
import styles from './Main.module.css';

export const Main = ({ data }) => {
    console.log(55, data);
    return (
        <div className={styles.main}>
            {data.map(card => <Card key={card.sys.id} card={card} />)}
        </div>
    )
}