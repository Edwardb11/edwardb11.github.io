import { getSectionAnimation } from '../animations';
import { Tablist } from '../components';
import { educationSection } from '../utils/portfolio';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.section
      id="education"
      className="max-w-3xl py-32 mx-auto"
      {...getSectionAnimation}
    >
      <h2 className="heading-secondary">{educationSection.title}</h2>
      <Tablist experiences={educationSection.experiences} />
    </motion.section>
  );
};

export default Education;
