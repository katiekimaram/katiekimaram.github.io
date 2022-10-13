import React from 'react';
import * as Icon from 'react-feather';

export default function Footer() {
  return (
    <footer>
        {/* <button><Icon.Play fill="true" /></button>
            <button id="darkness_my_old_friend"><Icon.Moon fill="true" /></button> */}
        <div><span>austin, tx</span></div>
        <div><span><a href="mailto:me@katiekim.dev" class="mail">me@katiekim.dev</a></span></div>
        <div>
            <a href="" class="social"><Icon.GitHub /></a>
            <a href="" class="social"><Icon.Linkedin /></a>
            <a href="" class="social"><Icon.Instagram /></a>
            <a href="" class="social"><Icon.Twitter /></a>
            <a href="" class="social"><Icon.Codepen /></a>
        </div>
    </footer>
  )
  }