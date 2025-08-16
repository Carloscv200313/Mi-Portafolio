/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.carlos-calderon.site',
  generateRobotsTxt: true, // Genera también robots.txt automáticamente
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  outDir: './public', // carpeta donde se guardarán los sitemaps
};
