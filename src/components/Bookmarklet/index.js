import React from 'react'
import styles from './styles.module.css'

const Bookmarklet = props => (
  <div>
    <div className={styles.wrapper}>
      <h3>Bookmarklet</h3>
      <a href="javascript:!function(){var e=document.getElementById('content').getElementsByTagName('h2')[0].innerText.split('#').pop(),t=document.getElementsByClassName('subject')[0].getElementsByTagName('h3')[0].innerText;window.open('http://ualibr-cardprint.s3-website-us-west-2.amazonaws.com/?number='+e+'&subject='+t,'_blank')}();">
        cardprint 📋
      </a>
    </div>
  </div>
)

export default Bookmarklet
