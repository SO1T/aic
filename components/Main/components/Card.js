import React from 'react'
import Image from 'next/image'
import styles from './Card.module.css'

export const Card = ({ card }) => {
  console.log(card)
  const {
    link,
    title,
    icon: {
      fields: {
        file: { url },
        title: imgTitle,
      },
    },
  } = card.fields
  return (
    <a href={link}>
      <div className={styles.card}>
        <div className={styles.imgwrapper}>
          <Image src={'https:' + url} alt={imgTitle} width={80} height={80} />
          <h4 className={styles.title}>{title}</h4>
        </div>
        <span>Learn more</span>
      </div>
    </a>
  )
}
