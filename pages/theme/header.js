import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import styles from '../../styles/Nav.module.sass'

import React from 'react';
import * as Icon from 'react-feather';

export default function Header() {
  return (
    <nav className={styles.nav}>
        <div>
            
        </div>      
        <div>
            <Link href="/about">About Me</Link>
            <Link href="/exp">Experience</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
            <Link href="https://katiekimdev.medium.com">Blog</Link>
            <Link href="/download/resume.pdf" className={styles.resume}>Resume</Link>
        </div>
    </nav>
    )
}