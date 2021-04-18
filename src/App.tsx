import React from 'react';
import logo from './logo.svg';

const Header: React.FunctionComponent<any> = ({ data }) => (
  <div>
    <a id="homey"></a>
    <header>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="logo">
              <p className="lmain">{data.title}</p>
              <p className="lsub">{data.subTitle}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="flexslider">
              <ul className="slides">
                {data.slides.map((s: any) => (
                  <li>
                    <img src={s.url} alt={s.alt} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-10 col-sm-push-1">
            <div className="cta">
              {/* <a href="#"><i className="icon-download"></i> Downloady My vCard</a>*/}
              {data.phone?.number && <a href={`tel:${data.phone.number}`}><i className="icon-phone"></i> {data.phone.number}</a>}
              {data.email && <a href={`mailto:${data.email.address}?Subject=${data.email.subject}`}><i className="icon-envelope"></i> Contact Me Now</a>}
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>);
const Navigation: React.FunctionComponent<any> = ({ data }) => (
  <div className="navigation">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="navs">
            <div className="box">
              <div className="box-r box-d">
                <a href="#location" className="anchorLink" id="content-r">
                  <p className="top">About Me</p>
                  <p className="bor"></p>
                  <p className="bot">Something about me</p>
                </a>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="box">
              <div className="box-g box-d">
                <a href="#location" className="anchorLink" id="content-g">
                  <p className="top">Resume</p>
                  <p className="bor"></p>
                  <p className="bot">Skills and Experience</p>
                </a>
              </div>
              <div className="clearfix"></div>
            </div>
            {/* <div className="box">
              <div className="box-b box-d">
                <a href="#location" className="anchorLink" id="content-b">
                  <p className="top">Portfolio</p>
                  <p className="bor"></p>
                  <p className="bot">What i did in past</p>
                </a>
              </div>
              <div className="clearfix"></div>
            </div> */}
            <div className="box">
              <div className="box-y box-d">
                <a href="#location" className="anchorLink" id="content-y">
                  <p className="top">Contact Me</p>
                  <p className="bor"></p>
                  <p className="bot">How to contact me</p>
                </a>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
const Content: React.FunctionComponent<any> = ({ data }) => (
  <div>
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <a id="location"></a>
          </div>
          <div className="col-sm-12">
            <div className="content-r content-d">
              <h2>About Me</h2>
              <div className="border"></div>
              <img src={data.picture} alt="" className="profile" />
              <div className="social-icons">
                {data.social.facebook.url && <a target="_blank" href={data.social.facebook.url} className="facebook"><i data-original-title={data.social.facebook.title} className="fa fa-facebook tip"></i></a>}
                {data.social.twitter.url && <a target="_blank" href={data.social.twitter.url} className="twitter"><i data-original-title={data.social.twitter.title} className="fa fa-twitter tip"></i></a>}
                {data.social.linkedin.url && <a target="_blank" href={data.social.linkedin.url} className="linkedin"><i data-original-title={data.social.linkedin.title} className="fa fa-linkedin tip"></i></a>}
                {data.social.instagram.url && <a target="_blank" href={data.social.instagram.url} className="instagram"><i data-original-title={data.social.instagram.title} className="fa fa-instagram tip"></i></a>}
                {data.social.github.url && <a target="_blank" href={data.social.github.url} className="github"><i data-original-title={data.social.github.title} className="fa fa-github tip"></i></a>}
                {data.social.gitlab.url && <a target="_blank" href={data.social.gitlab.url} className="gitlab"><i data-original-title={data.social.gitlab.title} className="fa fa-gitlab tip"></i></a>}

              </div>
              <p>{data.aboutme}</p>
              <div className="clearfix"></div>
            </div>
            <div className="content-g content-d">
              <h2>Resume</h2>
              <div className="border"></div>
              <div className="resume">
                <div className="row">
                  <div className="col-sm-3">
                    <h3>Career Summary</h3>
                  </div>
                  <div className="col-sm-8">
                    <div className="rcontent">
                      {/* <h4>K.L.N. College of Engineering, Madurai</h4>
                      <p className="tag">B.Tech (Information Technology) - 2003-2017 - 89%</p> */}
                      <p>{data.career_sumary}</p>
                    </div>
                  </div>
                </div>
                <div className="border"></div>
                <div className="row">
                  <div className="col-sm-3">
                    <h3>Education</h3>
                  </div>
                  <div className="col-sm-8">
                    {data.education.map((ed: any) => (
                      <div className="rcontent">
                        <h4>{ed.title}</h4>
                        <p className="tag">{ed.period}</p>
                        <p>{ed.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border"></div>
                <div className="row">
                  <div className="col-sm-3">
                    <h3>Skills</h3>
                  </div>
                  <div className="col-sm-8">
                    {data.skills.map((s: any) => (
                      <div className="rcontent">
                        <h4>{s.tag}</h4>
                        <p className="tag">{s.detail}</p>
                        <div className="skills">
                          <ul>
                            {s.skills.map((s: any) => (
                              <span className="skill">{s}</span>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border"></div>
                <div className="row">
                  <div className="col-sm-3">
                    <h3>Work Experience</h3>
                  </div>
                  <div className="col-sm-8">
                    {data.experience.map((e: any) => (
                      <div className="rcontent">
                        <h4>{e.company}</h4>
                        <p className="tag">{e.actas} - {e.period}</p>
                        <p>{e.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="content-b content-d">
              <h2>Portfolio</h2>
              <div className="border"></div>
              <div className="portfolio">
                <a href={`${process.env.PUBLIC_URL}/img/photos/1.jpg`} className="prettyPhoto[pp_gal]"><img
                  src={`${process.env.PUBLIC_URL}/img/photos/tn_1.jpg`} alt="" /></a>
                <a href={`${process.env.PUBLIC_URL}/img/photos/2.jpg`} className="prettyPhoto[pp_gal]"><img
                  src={`${process.env.PUBLIC_URL}/img/photos/tn_2.jpg`} alt="" /></a>
                <a href={`${process.env.PUBLIC_URL}/img/photos/3.jpg`} className="prettyPhoto[pp_gal]"><img
                  src={`${process.env.PUBLIC_URL}/img/photos/tn_3.jpg`} alt="" /></a>
                <a href={`${process.env.PUBLIC_URL}/img/photos/4.jpg`} className="prettyPhoto[pp_gal]"><img
                  src={`${process.env.PUBLIC_URL}/img/photos/tn_4.jpg`} alt="" /></a>
                <a href={`${process.env.PUBLIC_URL}/img/photos/5.jpg`} className="prettyPhoto[pp_gal]"><img
                  src={`${process.env.PUBLIC_URL}/img/photos/tn_5.jpg`} alt="" /></a>
                <a href={`${process.env.PUBLIC_URL}/img/photos/6.jpg`} className="prettyPhoto[pp_gal]"><img
                  src={`${process.env.PUBLIC_URL}/img/photos/tn_6.jpg`} alt="" /></a>
                <a href={`${process.env.PUBLIC_URL}/img/photos/7.jpg`} className="prettyPhoto[pp_gal]"><img
                  src={`${process.env.PUBLIC_URL}/img/photos/tn_7.jpg`} alt="" /></a>
                <a href={`${process.env.PUBLIC_URL}/img/photos/8.jpg`} className="prettyPhoto[pp_gal]"><img
                  src={`${process.env.PUBLIC_URL}/img/photos/tn_8.jpg`} alt="" /></a>
              </div>
            </div> */}
            <div className="content-y content-d">
              <h2>Contact Me</h2>
              <div className="border"></div>
              <div className="contact">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form" style={{ overflow: 'hidden' }}>
                      <div id={`foxyform_embed_link_${process.env.REACT_APP_FOXFORM_ID}`} style={{ overflow: 'hidden' }}></div>
                    </div>
                    {/* <div className="form">
                      <form className="form-horizontal">
                        <div className="control-group">
                          <label className="control-label" htmlFor="name">Name</label>
                          <div className="controls">
                            <input type="text" className="input-medium" id="name" />
                          </div>
                        </div>
                        <div className="control-group">
                          <label className="control-label" htmlFor="email">Email</label>
                          <div className="controls">
                            <input type="text" className="input-medium" id="email" />
                          </div>
                        </div>
                        <div className="control-group">
                          <label className="control-label" htmlFor="website">Website</label>
                          <div className="controls">
                            <input type="text" className="input-medium" id="website" />
                          </div>
                        </div>
                        <div className="control-group">
                          <label className="control-label" htmlFor="comment">Comment</label>
                          <div className="controls">
                            <textarea className="input-madium" id="comment" rows={3}></textarea>
                          </div>
                        </div>
                        <div className="form-actions">
                          <button type="submit" className="btn">Submit</button>
                          <button type="reset" className="btn">Reset</button>
                        </div>
                      </form>
                    </div> */}
                  </div>
                  <div className="col-sm-5">
                    <div className="gmap">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124450.96878886671!2d-38.490145423008876!3d-12.901755682792146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716112050422ebd%3A0xf71c84369573db9d!2sSalvador%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1618008988259!5m2!1spt-BR!2sbr" height="175" scrolling="no" style={{ border: 0 }} allowFullScreen={false} loading="lazy"></iframe>
                    </div>
                    <div className="border"></div>
                    <div className="address">
                      <div className="row">
                        <div className="col-sm-3">
                          <address>
                            <span className="color bold company">{data.company.name}</span><br></br>
                            {data.company.addressLine1}<br></br>
                            {data.company.addressLine2}<br></br>
                          </address>
                        </div>
                        <div className="col-sm-2">
                          <address>
                            {data.email.address && <div><a href={`mailto:${data.email.address}?Subject=${data.email.subject}`}>{data.email.address}</a><br></br></div>}
                            {data.email.phone && <div><abbr title="Phone">P:</abbr> {data.email.phone.number}</div>}
                          </address>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="top-animation">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="top-goo">
              <a className="top-go anchorLink" href="#homey"><i className="icon-circle-arrow-up"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div >
);

const Footer: React.FunctionComponent<any> = ({ data }) => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <p>Copyright &copy; {data.lastModification.getFullYear()} - <a href={data.site}>{data.title}</a></p>
        </div>
        <div className="col-sm-3 col-sm-push-6">
          <div className="social">
            {data.social.facebook.url && <a target="_blank" href={data.social.facebook.url} className="facebook"><i data-original-title={data.social.facebook.title} className="fa fa-facebook tip"></i></a>}
            {data.social.twitter.url && <a target="_blank" href={data.social.twitter.url} className="twitter"><i data-original-title={data.social.twitter.title} className="fa fa-twitter tip"></i></a>}
            {data.social.linkedin.url && <a target="_blank" href={data.social.linkedin.url} className="linkedin"><i data-original-title={data.social.linkedin.title} className="fa fa-linkedin tip"></i></a>}
            {data.social.instagram.url && <a target="_blank" href={data.social.instagram.url} className="instagram"><i data-original-title={data.social.instagram.title} className="fa fa-instagram tip"></i></a>}
            {data.social.github.url && <a target="_blank" href={data.social.github.url} className="github"><i data-original-title={data.social.github.title} className="fa fa-github tip"></i></a>}
            {data.social.gitlab.url && <a target="_blank" href={data.social.gitlab.url} className="gitlab"><i data-original-title={data.social.gitlab.title} className="fa fa-gitlab tip"></i></a>}
          </div>
        </div>
        <div className="col-sm-6">
          <p>Hey! This resume was made with React + TypeScript + GitHub Pages <a href={data.source} target='_blank'>(source here)</a></p>
        </div>
      </div>
    </div>
  </footer>
);
interface AppProps {
  data:any
}
const App: React.FunctionComponent<AppProps> = ({ data }) => {

  return (
    <div className="App">
      <Header data={data} />
      <Navigation data={data} />
      <Content data={data} />
      <Footer data={data} />
    </div>
  );
}

export default App;
