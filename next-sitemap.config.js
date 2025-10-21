/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://lawcost.ch',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin']
      },
    ],
  },
}
