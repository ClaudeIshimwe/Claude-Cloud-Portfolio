import React from 'react';
import Section from './section';

const SectionCertifications = ({ certifications }) => {
  if (!certifications.length) return null;

  return (
    <Section title="Certifications">
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((item) => (
          <a
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded hover:bg-gray-100 transition"
          >
            <h3 className="font-semibold text-lg">{item.name}</h3>
            {item.description && <p className="text-gray-600">{item.description}</p>}
          </a>
        ))}
      </div>
    </Section>
  );
};

export default SectionCertifications;
