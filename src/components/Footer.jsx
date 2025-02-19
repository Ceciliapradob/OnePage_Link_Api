import React from 'react'
import FooterLogo from "/logo-footer.svg";
import iconFacebook from "/icon-facebook.svg";
import iconInstagram from "/icon-instagram.svg";
import iconTwitter from "/icon-twitter.svg";
import iconPinterest from "/icon-pinterest.svg";


export default function Footer() {
  return (
    <>
    <footer>
        <div className='footer-section'>
          <a href="#" >
            <img src={FooterLogo} alt="Shortly" />
          </a>

          <dl className='footer-nav'>
            <div >
              <dt>Features</dt>
              <dd>
                <a href="#">
                  Link Shortening
                </a>
              </dd>
              <dd>
                <a href="#">
                  Branded Links
                </a>
              </dd>
              <dd>
                <a href="#">
                  Analytics
                </a>
              </dd>
            </div>
            <div >
              <dt>Resources</dt>
              <dd>
                <a href="#">
                  Blog
                </a>
              </dd>
              <dd>
                <a href="#">
                  Developers
                </a>
              </dd>
              <dd>
                <a href="#">
                  Support
                </a>
              </dd>
            </div>
            <div >
              <dt>Company</dt>
              <dd>
                <a href="#">
                  About
                </a>
              </dd>
              <dd>
                <a href="#">
                  Our Team
                </a>
              </dd>
              <dd>
                <a href="#">
                  Careers
                </a>
              </dd>
              <dd>
                <a href="#">
                  Contact
                </a>
              </dd>
            </div>
          </dl>

          <div className='social-nav'>
              <a href="/#"> <img  src={iconFacebook}  alt={'icon facebook'}  /> </a>
              <a href="/#"> <img  src={iconTwitter}  alt={'icon twitter'}  /> </a>
              <a href="/#"> <img  src={iconPinterest}  alt={'icon pinterest'}  /> </a>
              <a href="/#"> <img  src={iconInstagram}  alt={'icon instagram'}  /> </a>
          </div>
        </div>
    </footer>
    
    </>
  )
}
