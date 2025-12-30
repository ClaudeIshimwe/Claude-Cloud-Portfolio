import React from 'react';
import Section from './section';
import SummaryItem from './summary-item';

const SectionCertifications = ({ certifications }) => {
  if (!certifications.length) return null;

  return (
    <Section title="Certifications">
      {certifications.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.description}
            </a>
          }
        />
      ))}
    </Section>
  );
};

export default SectionCertifications;
