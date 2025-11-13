"use client";
import Head from 'next/head';
import Script from 'next/script';
import React from 'react';

export default function Home() {
    const [name, setName] = React.useState('ColdMilk');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    async function handleSubmit(event) {
        event.preventDefault();
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });
        if (response.ok) {
            alert('Message sent successfully!');
            setName('');
            setEmail('');
            setMessage('');
        } else {
            alert('Failed to send message.');
        }
    }
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
        <h1>works</h1>
        <section>
          <h2>Skills & Technologies
</h2>
          <p>
            Here are some of the technologies and skills I have experience with:


          </p>
          <div id="used">
            <div><i className="fas fa-circle"></i>&nbsp;HTML</div>
            <div><i className="fas fa-circle"></i>&nbsp;CSS</div>
            <div><i className="fas fa-circle"></i>&nbsp;Javascript</div>
               <div><i className="fas fa-circle"></i>&nbsp;Tailwind CSS</div>
               <div><i className="fas fa-circle"></i>&nbsp;Typescript</div>
            <div><i className="fas fa-circle"></i>&nbsp;React</div>
            <div><i className="fas fa-circle"></i>&nbsp;Next.js</div>
            <div><i className="fas fa-circle"></i>&nbsp;Node.js</div>
            <div><i className="fas fa-circle"></i>&nbsp;Express.js</div>
           
            <div><i className="fas fa-circle"></i>&nbsp;SQL</div>
            <div><i className="fas fa-circle"></i>&nbsp;Git</div>
            
            <div><i className="fas fa-circle"></i>&nbsp;Authentication</div>

          </div>
          <button
  className="btn_one"
  onClick={() => window.open("https://github.com/FakeColdMilk/plinko-app", "_blank")}
>
  Plinko
</button>

<button
  className="btn_two"
  onClick={() => window.open("https://github.com/FakeColdMilk/project2", "_blank")}
>
  Game CRUD App
</button>

        </section>
      </div>

      <div id="about_container" className="container">
        <div onClick={() => window.closeabout && window.closeabout()}><i className="fas fa-angle-left"></i></div>
        <h1>about me</h1>
        <section>
          <h2>about me</h2>
          <p>
            I have been studying computer science for the last 3 years, and I am passionate about web development and creating impactful digital experiences.
          </p>
          <p>
            In my free time, I enjoy exploring new technologies, contributing to open-source projects, and enhancing my skills through continuous learning. I also do game modding — creating custom content, tools, and scripts to extend gameplay, learn game systems, and experiment with mechanics and assets.
          </p>
        </section>
        <section>
          <h2>Learning</h2>
          <p>Linux, Java, Phyton and C</p>
        </section>
      </div>

      <div id="contact_container" className="container">
        <div onClick={() => window.closecontact && window.closecontact()}><i className="fas fa-angle-down"></i></div>
        <h1>contact</h1>
        <section>
          <h2>contact me</h2>
          {/* Fixed: removed <p> wrapper that contained <form> (invalid HTML) */}
          <div>
            <form onSubmit={handleSubmit}>
              <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="name" required />
              <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="email" required /><br />
              <textarea placeholder="your message" onChange={(e)=>setMessage(e.target.value)} required rows="5"></textarea><br />
              <button className="btn_one">send</button>
            </form>
          </div>
        </section>
      </div>

      
    </>
  );
}
