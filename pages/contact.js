import styles from '../styles/Contact.module.sass'
import Image from 'next/image'
import { Widget } from '@typeform/embed-react'

import React from 'react';
import * as Icon from 'react-feather';

export default function Contact() {
  return (
    <article className={styles.contact}>
        <div>
            <h1>Don&apos;t be a stranger!</h1>
            <br/>
            <Widget id="GieQf6I8" className={styles.form} />
        </div>
    </article>
  )
}
