import React from 'react'
import Link from 'gatsby-link'
import styles from './styles.module.css'
import Bookmarklet from '../Bookmarklet'

function handlePrintClick() {
  if (typeof window !== 'undefined') {
    window.print()
  }
}

const Header = props => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>
      <Link
        className={styles.logo}
        to="http://ualibr-cardprint.s3-website-us-west-2.amazonaws.com"
      >
        Kanban card
      </Link>
    </h1>

    <div className={styles.actions}>
      <div
        style={{
          marginRight: `1rem`
        }}
      >
        <a onClick={handlePrintClick} className={styles.link}>
          Print
        </a>
      </div>
      <Bookmarklet />
    </div>
  </div>
)

export default Header
