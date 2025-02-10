import { MetadataRoute } from "next";

export default function robots (): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/css', 'privacy']
			}
		],
		sitemap: `/sitemap.xml`
	}
}