import { profile } from "@/data/profile";
import { workItems } from "@/data/work";
import { getSiteUrl, siteDescription, siteName, siteTitle } from "@/lib/site";

export function JsonLd() {
  const site = getSiteUrl();

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site}/#website`,
        url: site,
        name: siteName,
        description: siteDescription,
        inLanguage: "ru-RU",
        publisher: { "@id": `${site}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${site}/#profilepage`,
        url: site,
        name: siteTitle,
        isPartOf: { "@id": `${site}/#website` },
        about: { "@id": `${site}/#person` },
        inLanguage: "ru-RU",
      },
      {
        "@type": "Person",
        "@id": `${site}/#person`,
        name: profile.name,
        jobTitle: profile.role,
        url: site,
        image: `${site}/opengraph-image`,
        email: `mailto:${profile.email}`,
        sameAs: [profile.github, profile.telegram, profile.hh],
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "Vue",
          "Nuxt",
          "Админ-панели",
          "SEO",
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${site}/#work`,
        name: "Проекты",
        itemListElement: workItems.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.title,
          url: item.live?.href ?? site,
          description: item.lead,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
