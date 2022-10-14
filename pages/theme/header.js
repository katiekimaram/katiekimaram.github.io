import Link from 'next/link';
import styles from '../../styles/Nav.module.sass'

export default function Header() {
  return (
    <nav className={styles.nav}>
        <div>
            
        </div>      
        <div>
            <Link href="/about">About Me</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
            <Link href="https://katiekimdev.medium.com">Blog</Link>
            <Link href="/download/resume.pdf"><span className={styles.resume}>Resume</span></Link>
        </div>
    </nav>
    )
}