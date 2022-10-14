import styles from '../styles/Contact.module.sass'
import Image from 'next/image'
import { Widget } from '@typeform/embed-react'

import React from 'react';
import * as Icon from 'react-feather';

export default function Contact() {
  return (
    <article className={styles.contact}>
        <div>
            <h1>Keep in touch!</h1>
            Let&apos;s get to know each other, don&apos;t be a stranger! I&apos;ll try to my best to get back to you swiftly 😊
            <Widget id="MXdyjDL3" className={styles.form} />
        </div>
    </article>
  )
}
