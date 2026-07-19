<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/html401"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Dexoria XML Sitemap Index</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: #0f172a;
            background-color: #0b0f19;
            margin: 0;
            padding: 40px 20px;
          }
          .container {
            max-width: 900px;
            margin: 0 auto;
            background: #111827;
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 24px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.3);
            padding: 32px;
          }
          .header {
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            padding-bottom: 24px;
            margin-bottom: 28px;
          }
          h1 {
            font-size: 26px;
            font-weight: 900;
            margin: 0 0 8px 0;
            color: #3b82f6;
            letter-spacing: -0.03em;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          p.subtitle {
            color: #94a3b8;
            font-size: 14px;
            margin: 0;
            line-height: 1.6;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
          }
          th {
            background-color: #1e293b;
            color: #94a3b8;
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            padding: 14px 16px;
            border-bottom: 2px solid rgba(255, 255, 255, 0.05);
          }
          tr {
            transition: background-color 150ms ease;
          }
          tr:hover td {
            background-color: rgba(255, 255, 255, 0.02);
          }
          td {
            padding: 14px 16px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            font-size: 13.5px;
            color: #cbd5e1;
            word-break: break-all;
          }
          td.mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 12px;
            color: #64748b;
          }
          a {
            color: #60a5fa;
            text-decoration: none;
            font-weight: 600;
            transition: color 150ms ease;
          }
          a:hover {
            color: #93c5fd;
            text-decoration: underline;
          }
          .badge {
            display: inline-block;
            padding: 4px 10px;
            font-size: 11px;
            font-weight: 800;
            border-radius: 9999px;
            background-color: rgba(59, 130, 246, 0.1);
            color: #60a5fa;
            border: 1px solid rgba(59, 130, 246, 0.15);
          }
          .footer-note {
            margin-top: 32px;
            padding-top: 16px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            font-size: 11px;
            color: #64748b;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Dexoria XML Sitemap</h1>
            <p class="subtitle">
              This is a machine-readable XML Sitemap index designed to help Google, Bing, and other search engine crawlers index all sections and subsections of <strong>Dexoria Space</strong>.
            </p>
          </div>
          
          <xsl:if test="sitemap:sitemapindex">
            <table>
              <thead>
                <tr>
                  <th style="width: 70%">Sub-Sitemap URL</th>
                  <th style="width: 30%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <tr>
                    <td>
                      <xsl:variable name="sitemap_loc">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$sitemap_loc}"><xsl:value-of select="sitemap:loc"/></a>
                    </td>
                    <td class="mono">
                      <xsl:value-of select="sitemap:lastmod"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>

          <xsl:if test="sitemap:urlset">
            <table>
              <thead>
                <tr>
                  <th style="width: 55%">Page Path</th>
                  <th style="width: 15%">Priority</th>
                  <th style="width: 15%">Change Freq</th>
                  <th style="width: 15%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <xsl:variable name="item_loc">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$item_loc}"><xsl:value-of select="sitemap:loc"/></a>
                    </td>
                    <td>
                      <span class="badge"><xsl:value-of select="sitemap:priority"/></span>
                    </td>
                    <td>
                      <xsl:value-of select="sitemap:changefreq"/>
                    </td>
                    <td class="mono">
                      <xsl:value-of select="sitemap:lastmod"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
          
          <div class="footer-note">
            Generated with precision by Dexoria Space. Built for maximum indexability and seamless SEO synchronization.
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
