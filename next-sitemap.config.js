/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://aligndesk.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://aligndesk.com/server-sitemap.xml',
    ],
  },
} 