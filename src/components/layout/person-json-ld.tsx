export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Samuel Adams",
    url: "https://samuelkadams.com",
    jobTitle: "Full-Stack Developer",
    sameAs: [
      "https://github.com/samadams412",
      "https://linkedin.com/in/samadams412",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
