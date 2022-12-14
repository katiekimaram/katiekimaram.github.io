import styles from '../styles/About.module.sass'
import Image from 'next/image'
import me from './img/me.jpg'

import { PopupButton } from '@typeform/embed-react'

const skills = [];

export default function About() {
  return (
    <article className={styles.about}>
        <div>
            <div className={styles.me}>
                <Image src={me} alt="Katie Kim" />
            </div>

            <h1>About Me</h1>
            <p>Hello, my name is Katie and I make things that live on the internet. My interest in developing, programming, and engineering started when I was 10 years old when I decide to create MySpace layouts and learned HTML & CSS, which lead me to create websites using PHP, and WordPress.</p>
            <p>In the present day, I&#39;ve expanded my knowledge and arsenal. I&#39;ve had the privilege of working at Blizzard Entertainment for so many years, but I had to pursue my dreams of becoming a Software Engineer — eventually a Linux Engineer and entrepreneur. My main focus has been creating my own or taking on freelance work, while actively working for Wipro, contacted to Meta.</p>

            <p> Here&#39;s all the skills and technologies that I&#39;ve gathered with so far, with so much more room for growth!
                <ul>
                    <li>88 WPM</li>
                    <li>Wordpress</li>
                    <li>MySQL / SQL</li>
                    <li>Git</li>
                    <li>Redux.js</li>
                    <li>JIRA</li>
                    <li>Microsoft Office</li>
                    <li>jQuery</li>
                    <li>AJAX</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>Javascript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>Linux</li>
                    <li>Salesforce</li>
                    <li>XML</li>
                    <li>Cybersecurity</li>
                    <li>Confluence</li>
                    <li>Next.js</li>
                    <li>MongoDB</li>
                    <li>Adobe Photoshop</li>
                </ul>
            </p>

            <h2>Looking to connect?</h2>
            <p>
                My inbox is always open if you want to ask any questions or just say hi, and I&#39;ll try my best to get back to you!
            </p>

            <PopupButton id="MXdyjDL3" size="70" className="resume">
                Hello, how are you?
            </PopupButton>

            {/* <button data-tf-popup="MXdyjDL3" data-tf-iframe-props="title=Contact Form" data-tf-medium="snippet" className="resume">Hello, how are you?</button><script src="//embed.typeform.com/next/embed.js" async /> */}
        </div>
    </article>
  )
}
