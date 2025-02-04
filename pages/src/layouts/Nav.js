import { Fragment, useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
const Nav = ({ close, trigger }) => {
  const [toggle_, setToggle_] = useState("");
  useEffect(() => {
    !trigger && setToggle_("");
    setTimeout(() => {
      trigger ? setToggle_("ready") : setToggle_("");
    }, 2000);
  }, [trigger]);

  return (
    <Fragment>
      <a href="#" className="resumo_fn_nav_overlay" onClick={() => close()} />
      <div className="resumo_fn_navigation">
        <a href="#" className="closer" onClick={() => close()} />
        {/* Navigation Content */}
        <div className="nav_in">
          <nav id="nav">
            <h3 className="label">Menu</h3>
            <ul>
              <li style={{ transitionDelay: !trigger ? "0ms" : "700ms" }}>
                <a href="/Accueil" onClick={() => close()}>
                  Home
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "900ms" }}>
                <a onClick={() => close()} href="#about">
                  About
                </a>
              </li>
              
              <li style={{ transitionDelay: !trigger ? "0ms" : "1300ms" }}>
                <a onClick={() => close()} href="#services">
                  Services
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "1500ms" }}>
                <a onClick={() => close()} href="#customers">
                  Customers
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "1700ms" }}>
                <a onClick={() => close()} href="#news">
                  News &amp; Tips
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "1900ms" }}>
                <a onClick={() => close()} href="#contact">
                  Contact
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "1900ms" }}>
                <a onClick={() => close()} href="#social">
                  Social
                </a>
              </li>
            </ul>
          </nav>
          <div className={`nav_footer ${toggle_}`}>
            <div className="social">
              <ul>
                
                <li>
                  <a href="#" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Bold"
                      enableBackground="new 0 0 24 24"
                      height={512}
                      viewBox="0 0 24 24"
                      width={512}
                      className="fn__svg replaced-svg"
                    >
                      <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="#" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Layer_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      xmlSpace="preserve"
                      className="fn__svg replaced-svg"
                    >
                      <path d="M373.659,0H138.341C62.06,0,0,62.06,0,138.341v235.318C0,449.94,62.06,512,138.341,512h235.318    C449.94,512,512,449.94,512,373.659V138.341C512,62.06,449.94,0,373.659,0z M470.636,373.659    c0,53.473-43.503,96.977-96.977,96.977H138.341c-53.473,0-96.977-43.503-96.977-96.977V138.341    c0-53.473,43.503-96.977,96.977-96.977h235.318c53.473,0,96.977,43.503,96.977,96.977V373.659z" />
                      <path d="M370.586,238.141c-3.64-24.547-14.839-46.795-32.386-64.342c-17.547-17.546-39.795-28.746-64.341-32.385    c-11.176-1.657-22.507-1.657-33.682,0c-30.336,4.499-57.103,20.541-75.372,45.172c-18.269,24.631-25.854,54.903-21.355,85.237    c4.499,30.335,20.541,57.102,45.172,75.372c19.996,14.831,43.706,22.619,68.153,22.619c5.667,0,11.375-0.418,17.083-1.265    c30.336-4.499,57.103-20.541,75.372-45.172C367.5,298.747,375.085,268.476,370.586,238.141z M267.791,327.632    c-19.405,2.882-38.77-1.973-54.527-13.66c-15.757-11.687-26.019-28.811-28.896-48.216c-2.878-19.405,1.973-38.77,13.66-54.527    c11.688-15.757,28.811-26.019,48.217-28.897c3.574-0.53,7.173-0.795,10.772-0.795s7.199,0.265,10.773,0.796    c32.231,4.779,57.098,29.645,61.878,61.877C335.608,284.268,307.851,321.692,267.791,327.632z" />
                      <path d="M400.049,111.951c-3.852-3.851-9.183-6.058-14.625-6.058c-5.442,0-10.773,2.206-14.625,6.058    c-3.851,3.852-6.058,9.174-6.058,14.625c0,5.451,2.207,10.773,6.058,14.625c3.852,3.851,9.183,6.058,14.625,6.058    c5.442,0,10.773-2.206,14.625-6.058c3.851-3.852,6.058-9.183,6.058-14.625C406.107,121.133,403.9,115.802,400.049,111.951z" />
                    </svg>
                  </a>
                </li>

                
                <li>
                  <a href="#" target="_blank">
                    <FaLinkedin
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Layer_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      xmlSpace="preserve"
                      className="fn__svg replaced-svg"
                    >
                      <path d="M373.659,0H138.341C62.06,0,0,62.06,0,138.341v235.318C0,449.94,62.06,512,138.341,512h235.318    C449.94,512,512,449.94,512,373.659V138.341C512,62.06,449.94,0,373.659,0z M470.636,373.659    c0,53.473-43.503,96.977-96.977,96.977H138.341c-53.473,0-96.977-43.503-96.977-96.977V138.341    c0-53.473,43.503-96.977,96.977-96.977h235.318c53.473,0,96.977,43.503,96.977,96.977V373.659z" />
                      <path d="M370.586,238.141c-3.64-24.547-14.839-46.795-32.386-64.342c-17.547-17.546-39.795-28.746-64.341-32.385    c-11.176-1.657-22.507-1.657-33.682,0c-30.336,4.499-57.103,20.541-75.372,45.172c-18.269,24.631-25.854,54.903-21.355,85.237    c4.499,30.335,20.541,57.102,45.172,75.372c19.996,14.831,43.706,22.619,68.153,22.619c5.667,0,11.375-0.418,17.083-1.265    c30.336-4.499,57.103-20.541,75.372-45.172C367.5,298.747,375.085,268.476,370.586,238.141z M267.791,327.632    c-19.405,2.882-38.77-1.973-54.527-13.66c-15.757-11.687-26.019-28.811-28.896-48.216c-2.878-19.405,1.973-38.77,13.66-54.527    c11.688-15.757,28.811-26.019,48.217-28.897c3.574-0.53,7.173-0.795,10.772-0.795s7.199,0.265,10.773,0.796    c32.231,4.779,57.098,29.645,61.878,61.877C335.608,284.268,307.851,321.692,267.791,327.632z" />
                      <path d="M400.049,111.951c-3.852-3.851-9.183-6.058-14.625-6.058c-5.442,0-10.773,2.206-14.625,6.058    c-3.851,3.852-6.058,9.174-6.058,14.625c0,5.451,2.207,10.773,6.058,14.625c3.852,3.851,9.183,6.058,14.625,6.058    c5.442,0,10.773-2.206,14.625-6.058c3.851-3.852,6.058-9.183,6.058-14.625C406.107,121.133,403.9,115.802,400.049,111.951z" />
                    </FaLinkedin>
                  </a>
                </li>
              </ul>
            </div>
            <div className="copyright">
              {" "}
              Developed by &nbsp;
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                pledgeandgrow
              </a>
            </div>
          </div>
        </div>

        {/* /Navigation Content */}
      </div>
    </Fragment>
  );
};

export default Nav;
