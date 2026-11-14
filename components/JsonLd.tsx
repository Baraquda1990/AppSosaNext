// components/JsonLd.tsx

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Appsosa",
    url: "https://appsosa.am",
    logo: "https://appsosa.am",
    description:
      "A marketplace connecting businesses and buyers to monetize surplus products and reduce waste.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}