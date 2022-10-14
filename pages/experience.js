import styles from '../styles/Experience.module.sass'
import Image from 'next/image'

import React from 'react';
import * as Icon from 'react-feather';

export default function Experience() {
  return (
    <article className={styles.exp}>
        <div>
          <h1>Where I&apos;ve worked</h1>
        
          Wipro @ Meta / Facebook
          Blizzard Entertainment
          
          <h2>Certificates & education</h2>
          University of Phoenix
          freeCodeCamp
          The Odin Project
          Hack Reactor

        </div>
    </article>
  )
}