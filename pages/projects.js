import styles from '../styles/Projects.module.sass'
import Image from 'next/image'

import React from 'react';
import * as Icon from 'react-feather';


let project = [{
  title: '',
  keywords: [],
  url: '',
  thumbnail: '',
  date: ''
}]

export default function Experience() {
  return (
    <article className={styles.projects}>
        <div>

        {/* What I've built

            All projects
            Should render all github projects and codepen.io by date
            View archive */}
        </div>
    </article>
  )
}