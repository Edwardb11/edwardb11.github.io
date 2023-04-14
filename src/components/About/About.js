import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/my-image.jpeg";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/resume.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
            I'm a Full-Stack developer with around 2 years of experience in
            developing web applications. My specialization is in Full-Stack
            development using JavaScript, React.js with TypeScript, Material UI,
            GraphQL, and Node.js with Nest.js, Express.js, TypeORM, Postgres,
            and Docker.
          </StyledParagraph>
          <StyledParagraph>
            I have a strong passion for technology and am always looking for
            ways to improve my skills and learn new ones. I am an enthusiastic
            collaborator and believe in working in a team to achieve common
            goals.
          </StyledParagraph>
          <StyledParagraph>
            If you're interested in my profile, please don't hesitate to contact
            me. 😊 I'm available to discuss exciting job opportunities in the
            world of technology.
          </StyledParagraph>
          <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="resumen-edward-brito">
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
