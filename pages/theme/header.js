import Link from 'next/link';
import styles from '../../styles/Nav.module.sass'
import Image from 'next/image'
import logo from '/public/logo.svg'

export default function Header() {
  return (
    <nav className={styles.nav}>
        <div>
            <Link href="/">
                <Image src={logo} width={75} height={75} alt="logo" />
            </Link>
        </div>      
        <div>
            <Link href="/about">About Me</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
            <Link href="https://katiekimaram.medium.com">Blog</Link>
            <Link href="/download/resume.pdf" passHref>
                <a className={styles.resume} target="_blank">Resume</a>
            </Link>
        </div>
    </nav>
    )
}