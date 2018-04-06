import React from 'react'
import Link from 'gatsby-link'
import styles from './styles.module.css'

const Header = () => (
  <div className={styles.wrapper}>
    <h1>
      <Link
        className={styles.logo}
        to="http://ualibr-cardprint.s3-website-us-west-2.amazonaws.com"
      >
        cardprint
      </Link>
    </h1>
  </div>
)

export default Header
