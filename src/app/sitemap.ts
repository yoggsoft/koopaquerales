import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "http://koopaquerales.com",
      lastModified: new Date()
    }
  ]
};
