import React from "react";
import './Exprience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="exprience">
      <h5>What Skis I Have</h5>
      <h2>My Exprience</h2>

      <div className="container exprience_container">
        {/* ======================FRONTEND =========================*/}
        <div className="exprience_frontend">
          <h3>Frontend Devlopment</h3>
          <div className="exprience_content">

              <article className="exprience_details">
                <BsFillPatchCheckFill className="exprience_details-icon"/>
                <div>
                <h4>HTML</h4>
                <small className="text-light">Exprience</small>

                </div>
              </article>
              <article className="exprience_details">
                <BsFillPatchCheckFill className="exprience_details-icon"/>
                <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>

                </div>
              </article>
              <article className="exprience_details">
                <BsFillPatchCheckFill className="exprience_details-icon"/>
                <div>
                <h4>JavaScript</h4>
                <small className="text-light">Exprience</small>

                </div>
              </article>
              <article className="exprience_details">
                <BsFillPatchCheckFill className="exprience_details-icon"/>
                <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Exprience</small>

                </div>
              </article>
              <article className="exprience_details">
                <BsFillPatchCheckFill className="exprience_details-icon"/>
                <div>
                <h4>Tailwind</h4>
                <small className="text-light">Exprience</small>

                </div>
              </article>
              <article className="exprience_details">
                <BsFillPatchCheckFill className="exprience_details-icon"/>
                <div>
                <h4>ReactJs</h4>
                <small className="text-light">Exprience</small>

                </div>
              </article>

          </div>
        </div>

        {/* ======================BACKEND =========================*/}
        <div className="exprience_backend">
          <h3>Backtend Devlopment</h3>
          <div className="exprience_content">
          <article className="exprience_details">
                <BsFillPatchCheckFill className="exprience_details-icon"/>
                <dir>
                <h4>NodeJs</h4>
                <small className="text-light">Exprience</small>

                </dir>
              </article>
              <article className="exprience_details">
                <BsFillPatchCheckFill className="exprience_details-icon"/>
                <dir>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>

                </dir>
              </article>
              <article className="exprience_details">
                <BsFillPatchCheckFill className="exprience_details-icon"/>
                <dir>
                <h4>PHP</h4>
                <small className="text-light">Exprience</small>

                </dir>
              </article>
              <article className="exprience_details">
                <BsFillPatchCheckFill className="exprience_details-icon"/>
                <dir>
                <h4>MySQL</h4>
                <small className="text-light">Exprience</small>

                </dir>
              </article>
              <article className="exprience_details">
                <BsFillPatchCheckFill className="exprience_details-icon"/>
                <dir>
                <h4>Python</h4>
                <small className="text-light">Exprience</small>

                </dir>
              </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
