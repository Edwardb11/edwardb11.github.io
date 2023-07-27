import { getSectionAnimation } from '../animations';
import { HeroImage, ListItem, Wrapper } from '../components';
import { getId } from '../utils/helper';
import { aboutSection, author } from '../utils/portfolio';
import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is Edward Brito, I'm a Full-Stack developer with around 2 years of experience in developing web applications.
          </p>

          <p>
          I have a strong passion for technology and am always looking for ways to improve my skills and learn new ones. I am an enthusiastic collaborator and believe in working in a team to achieve common goals.

</p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <HeroImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
