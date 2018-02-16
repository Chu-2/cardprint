import React from 'react'
import Link from 'gatsby-link'
import styles from './styles.module.css'

const Header = () => (
  <div className={styles.wrapper}>
    <h1>
      <Link className={styles.logo}>cardprint</Link>
    </h1>
  </div>
)

export default Header
