// components/JsonLd.tsx

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Appsosa",
    url: "https://YOUR-DOMAIN.com",
    logo: "https://YOUR-DOMAIN.com/logo.png",
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