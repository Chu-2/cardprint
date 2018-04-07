import React from 'react'
import { CompactPicker } from 'react-color'
import styles from './styles.module.css'

const Controls = props => (
  <div className={styles.wrapper}>
    <div className={styles.control}>
      <h3 className={styles.controlHeading}>Card color</h3>

      <CompactPicker
        color={props.card.background}
        onChangeComplete={props.handleCardBgColor}
        className={styles.colorPicker}
      />
    </div>

    <div className={styles.control}>
      <h3 className={styles.controlHeading}>Text Color</h3>

      <div className={styles.fgChooser}>
        <input
          type="radio"
          name="fgColor"
          id="fgColorDark"
          value="dark"
          onChange={props.handleCardFgColor}
          checked={props.card.foregroundControl == 'dark'}
        />
        <label htmlFor="fgColorDark">Dark</label>
      </div>

      <div className={styles.fgChooser}>
        <input
          type="radio"
          name="fgColor"
          id="fgColorLight"
          value="light"
          onChange={props.handleCardFgColor}
          checked={props.card.foregroundControl == 'light'}
        />
        <label htmlFor="fgColorLight">Light</label>
      </div>
    </div>

    <div className={styles.control}>
      <h3 className={styles.controlHeading}>Size</h3>

      <div className={styles.sizeChooser}>
        <input
          type="radio"
          name="size"
          id="sizeBig"
          value="big"
          onChange={props.handleCardSize}
          checked={props.card.sizeControl == 'large'}
        />
        <label htmlFor="sizeBig">Big</label>
      </div>

      <div className={styles.sizeChooser}>
        <input
          type="radio"
          name="size"
          id="sizeSmall"
          value="small"
          onChange={props.handleCardSize}
          checked={props.card.sizeControl == 'small'}
        />
        <label htmlFor="sizeSmall">Small</label>
      </div>
    </div>
  </div>
)

export default Controls
