import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
                <a
                  href="https://form.jotform.com/240693155617056"
                  target="_blank"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Register
                </a>{" "}
                <a
                  href="https://cartoon-app-frontend.vercel.app/"
                  target="_blank"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Try the app!
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
