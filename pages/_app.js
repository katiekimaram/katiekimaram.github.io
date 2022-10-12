import '../styles/globals.sass'

function MyApp({ Component, pageProps }) {
  return (
    <html lang="en">
      <nav>
        <div>
          <button><i data-feather="play"></i></button>
          <button id="darkness_my_old_friend"><i data-feather="moon"></i></button>
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

      <main>
        <Component {...pageProps} />
      </main>

      <footer>
        <div>
          <span>austin, tx</span>
        </div>
        <div>
          <span><a href="mailto:me@katiekim.dev" class="mail">me@katiekim.dev</a></span>
        </div>
        <div>
          <a href="" class="social"></a>
          <a href="" class="social"><i data-feather="linkedin"></i></a>
          <a href="" class="social"><i data-feather="instagram"></i></a>
          <a href="" class="social"><i data-feather="twitter"></i></a>
          <a href="" class="social"><i data-feather="codepen"></i></a>
        </div>
      </footer>
    </html>
  )
}

export default MyApp
