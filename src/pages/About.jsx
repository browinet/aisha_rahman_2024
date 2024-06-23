import SiteLayout from "../layouts/SiteLayout";
import { AboutMe } from "../data/AboutMe";

function About() {
  const about = AboutMe;
  return (
    <SiteLayout>
      <div className="about">
        <div className="about-text">
          <h1>{about[0].intro}</h1>
          <p>
            I&apos;m Aisha Rahman a graphic designer based in Toronto, Ontario.
            I would describe myself as a designer who enjoys wearing many hats.
            With so many different digital mediums available these days, I
            relish diving in and exploring to learn something new. Currently,
            I&apos;m actively seeking full-time employment.
          </p>
          <p>
            When I&apos;m not designing, I enjoy baking from scratch and
            creating basic food staples. For example, my current obsession is
            making yogurt from scratch; it&apos;s just so hard to recreate the
            right consistency.
          </p>
        </div>
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="tool-list">
            <h3>Tools</h3>
            <ul>
              {about[0].tool.slice().map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="tool-list">
            <h3>Development</h3>
            <ul>
              {about[0].coding.slice().map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}

export default About;
