import styles from '../styles/Contact.module.sass'
import Image from 'next/image'
import { Popover } from '@typeform/embed-react'

import React from 'react';
import * as Icon from 'react-feather';

export default function Contact() {
  return (
    <article id="contact">
        <div>
            <h1>Get in touch!</h1>
            <Popover id="MXdyjDL3" snippet className="contact"></Popover>
        </div>
    </article>
  )
}
