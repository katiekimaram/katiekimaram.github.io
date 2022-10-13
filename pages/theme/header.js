import Head from 'next/head'
import Image from 'next/image'

import React from 'react';
import * as Icon from 'react-feather';

export default function Header() {
  return (
    <nav>
        <div>
            <button><Icon.Play fill /></button>
            <button id="darkness_my_old_friend"><Icon.Moon fill /></button>
        </div>      
        <div>
            <a href="#about">About Me</a>
            <a href="#exp">Experience</a>
            <a href="#projects">Projects</a>
            <a>Contact</a>
            <a href="https://katiekimdev.medium.com">Blog</a>
            <a href="/download/resume.pdf" class="resume">Resume</a>
        </div>
    </nav>
    )
}