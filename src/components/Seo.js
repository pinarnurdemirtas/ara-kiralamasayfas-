import { Helmet } from "react-helmet-async";

function SEO() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CarRental",
    "name": "Kırklareli Araç Kiralama",
    "url": "https://seninsiten.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kırklareli",
      "addressCountry": "TR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+905522523997",
      "contactType": "customer service"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Helmet>
  );
}

export default SEO;
