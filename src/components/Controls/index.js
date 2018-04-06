import React from 'react'
import { GithubPicker } from 'react-color'
import styles from './styles.module.css'

const Controls = props => (
  <div className={styles.wrapper}>
    <GithubPicker
      color={props.card.background}
      onChangeComplete={props.handleCardBgColor}
      className={styles.colorPicker}
    />

    <div>
      <h3 className={styles.fgChooserHeader}>Text Color</h3>

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

    <div>
      <h3 className={styles.sizeChooserHeader}>Size</h3>

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
