// pages/index.js
import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ColdMilk's Portfolio</title>
        {/* NOTE: external stylesheets moved to pages/_document.js as required by Next.js */}
      </Head>

      {/* Load jQuery first, then your original index.js (depends on jQuery), then particles library and your app.js */}
      <Script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
      <Script src="/index.js" strategy="afterInteractive" />
      <Script src="/particles.js" strategy="afterInteractive" />
      <Script src="/app.js" strategy="afterInteractive" />

      <div id="loading">
        <div id="spinner"></div>
      </div>
      <div id="particles-js"></div>
      <div id="box">
        <div className="box1 onlywide animated bounceOutLeft" style={{ animationDelay: '1.7s' }}></div>
        <div className="box2 onlywide animated bounceOutLeft" style={{ animationDelay: '1.8s' }}></div>
        <div className="box2 onlywide animated bounceOutLeft" style={{ animationDelay: '1.9s' }}></div>
        <div className="box2 animated bounceOutRight" style={{ animationDelay: '1.9s' }}></div>
        <div className="box2 onlywide animated bounceOutRight" style={{ animationDelay: '1.8s' }}></div>
        <div className="box2 onlywide animated bounceOutRight" style={{ animationDelay: '1.7s' }}></div>
      </div>
      <a id="about" onClick={() => window.showabout && window.showabout()} className="animated fadeIn" style={{ animationDelay: '2.2s' }}>about</a>
      <a id="work" onClick={() => window.showwork && window.showwork()} className="animated fadeIn" style={{ animationDelay: '2.2s' }}>work</a>
      <a id="contact" onClick={() => window.showcontact && window.showcontact()} className="animated fadeIn" style={{ animationDelay: '2.2s' }}>contact</a>
      <div id="middle" className="animated slideInDown" style={{ animationDelay: '2.0s' }}>
        <h1>ColdMilk</h1>
        <h2>Computer Science Student & Web Developer</h2>
        <div id="menu">
          <a onClick={() => window.showabout && window.showabout()}>about</a>
          <a onClick={() => window.showwork && window.showwork()}>work</a>
          <a onClick={() => window.showcontact && window.showcontact()}>contact</a>
        </div>
        <table>
          <tbody>
            <tr>
  <td className="animated zoomIn" style={{ animationDelay: '2.2s' }}>
    <a 
      className="social" 
      href="https://www.linkedin.com/in/aaron-nylund-3b9041336/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <i className="fab fa-linkedin"></i>
    </a>
  </td>

  <td className="animated zoomIn" style={{ animationDelay: '2.4s' }}>
    <a 
      className="social" 
      href="https://github.com/FakeColdMilk" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <i className="fab fa-github"></i>
    </a>
  </td>
</tr>

          </tbody>
        </table>
      </div>

      <div id="work_container" className="container">
        <div onClick={() => window.closework && window.closework()}><i className="fas fa-angle-right"></i></div>
        <h1>works.</h1>
        <section>
          <h2>placeholder</h2>
          <p>
            placeholder
          </p>
          <div id="used">
            <div><i className="fas fa-circle"></i>&nbsp;HTML</div>
            <div><i className="fas fa-circle"></i>&nbsp;CSS</div>
            <div><i className="fas fa-circle"></i>&nbsp;Javascript</div>
          </div>
          <button className="btn_one">button 1</button>
          <button className="btn_two">button 2</button>
        </section>
      </div>

      <div id="about_container" className="container">
        <div onClick={() => window.closeabout && window.closeabout()}><i className="fas fa-angle-left"></i></div>
        <h1>about.</h1>
        <section>
          <h2>about me</h2>
          <p>
            placeholder
          </p>
          <p>
            placeholder
          </p>
        </section>
        <section>
          <h2>skills</h2>
          <p>i do eveything ;)</p>
        </section>
      </div>

      <div id="contact_container" className="container">
        <div onClick={() => window.closecontact && window.closecontact()}><i className="fas fa-angle-down"></i></div>
        <h1>contact.</h1>
        <section>
          <h2>contact me</h2>
          {/* Fixed: removed <p> wrapper that contained <form> (invalid HTML) */}
          <div>
            <form>
              <input type="text" placeholder="name" required />
              <input type="email" placeholder="email" required /><br />
              <textarea placeholder="your message" required rows="5"></textarea><br />
              <button className="btn_one">send</button>
            </form>
          </div>
        </section>
      </div>

      
    </>
  );
}
