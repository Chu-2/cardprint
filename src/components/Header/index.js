import React from 'react'
import Link from 'gatsby-link'
import styles from './styles.module.css'
import Bookmarklet from '../Bookmarklet'

const Header = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>
      <Link
        className={styles.logo}
        to="http://ualibr-cardprint.s3-website-us-west-2.amazonaws.com"
      >
        Kanban card
      </Link>
    </h1>

    <Bookmarklet />
  </div>
)

export default Header
