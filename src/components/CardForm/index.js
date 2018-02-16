import React from 'react'
import Link from 'gatsby-link'
import styles from './styles.module.css'

const CardForm = props => (
  <div
    className={styles.cardBleed}
    style={{
      backgroundColor: props.card.background,
      color: props.card.foreground
    }}
  >
    <div className={styles.wrapper}>
      <div className={styles.card} style={{
        width: props.card.width,
        height: props.card.height
      }}>
        <div className={styles.number}>
          <div className={styles.numberInner}>
            <span className={styles.numberSymbol}>#</span>
            <input
              type="text"
              placeholder="10001"
              className={styles.numberInput}
            />
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.bodyInputWrapper}>
            <textarea
              name=""
              id=""
              className={styles.bodyInput}
              placeholder="Description..."
            />
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.parentNumber}>
            <input type="text" placeholder="Tracker" />
          </div>

          <div className={styles.project}>
            <input type="text" placeholder="Product" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default CardForm
