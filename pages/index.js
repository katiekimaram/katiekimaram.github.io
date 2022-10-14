import styles from '../styles/Home.module.sass'

import React from 'react';
import * as Icon from 'react-feather';

export default function Home() {
  return (
    <article className={styles.intro}>
      <div>
        <b>Hi, my name is</b>
        <h1><span>Aram</span> Katie Kim</h1>
        <h2>I am a software engineer and tech enthusiast.</h2>
        <p>I am a software engineer specializing in building exceptional digital experiences. I am open for opportunities to start off my career in this field while actively working as a Project Engineer.</p>
        <Link href="/projects">
          <a className={styles.resume}>Check out my work! <Icon.ArrowRight className={styles.arrow} /></a>
        </Link>
      </div>
  </article>
  )
}
