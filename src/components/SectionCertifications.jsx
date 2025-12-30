import React from 'react';
import Section from './section';

const SectionCertifications = ({ certifications }) => {
  if (!certifications.length) return null;

  return (
    <Section title="Certifications">
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((item) => {
          const content = (
            <>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              {item.description && <p className="text-gray-600">{item.description}</p>}
            </>
          );

          // If link exists, wrap in <a> for clickable link
          return item.link ? (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border rounded hover:bg-gray-100 transition"
            >
              {content}
            </a>
          ) : (
            <div
              key={item.name}
              className="block p-4 border rounded bg-gray-50 text-gray-700"
            >
              {content}
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default SectionCertifications;
