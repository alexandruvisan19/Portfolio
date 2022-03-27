import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { SiCodewars } from "react-icons/si";
import { about } from "../../portfolio";
import Pdf from "../resume/resume.pdf";
import "./About.css";

const About = () => {
  const { name, role, description, resume, social } = about;

  return (
    <div className="about center">
      {name && (
        <h1>
          Hi, I&apos;m <span className="about__name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about__role">A {role}.</h2>}
      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">
        {resume && (
          <a href={Pdf} target="_blank" rel="noreferrer">
            <span type="button" className="btn btn--outline">
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon">
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon">
                <LinkedInIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.codewars}
                aria-label="codewars"
                className="link link--icon">
                <SiCodewars />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
