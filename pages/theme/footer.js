import Link from 'next/link';
import styles from '../../styles/Footer.module.sass'

import React from 'react';
import * as Icon from 'react-feather';



export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <button>
          <Icon.Play fill="true" />
        </button>
        <button id="darkness_my_old_friend" >
          <Icon.Moon fill="true" />
        </button>
      </div>
      <div><span>austin, tx</span></div>
      <div><span><a href="mailto:me@katiekim.dev" className="mail">me@katiekim.dev</a></span></div>
      <div>
          <Link href="https://github.com/katiekimaram"><a className={styles.social}><Icon.GitHub /></a></Link>
          <Link href="https://www.linkedin.com/in/katiekimaram/"><a className={styles.social}><Icon.Linkedin /></a></Link>
          <Link href="https://www.instagram.com/katievaxen/"><a className={styles.social}><Icon.Instagram /></a></Link>
          <Link href="https://twitter.com/vaxenvixen"><a className={styles.social}><Icon.Twitter /></a></Link>
          <Link href="https://codepen.io/katiekimaram"><a className={styles.social}><Icon.Codepen /></a></Link>
      </div>
    </footer>
  )
  }