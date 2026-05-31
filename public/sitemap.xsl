<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="tr">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <title>Sitemap — cilingirciniz.com</title>
        <style>
          *{box-sizing:border-box;margin:0;padding:0}
          body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#07090e;color:#fff;padding:24px 16px 48px}
          h1{font-size:20px;font-weight:800;color:#FFD700;margin-bottom:4px;letter-spacing:.04em}
          p{font-size:12px;color:rgba(255,255,255,.4);margin-bottom:20px}
          table{width:100%;border-collapse:collapse;font-size:12px}
          th{background:rgba(212,175,55,.12);color:#C9A84C;font-weight:700;padding:10px 12px;text-align:left;border-bottom:1px solid rgba(212,175,55,.2);letter-spacing:.06em;font-size:10px}
          td{padding:9px 12px;border-bottom:1px solid rgba(255,255,255,.05);vertical-align:middle;color:rgba(255,255,255,.75)}
          tr:hover td{background:rgba(255,255,255,.03)}
          a{color:#FFD700;text-decoration:none;word-break:break-all}
          a:hover{text-decoration:underline}
          .badge{display:inline-block;padding:2px 8px;border-radius:100px;font-size:10px;font-weight:700}
          .w{background:rgba(212,175,55,.12);color:#FFD700}
          .m{background:rgba(255,255,255,.06);color:rgba(255,255,255,.5)}
          .p10{color:#FFD700;font-weight:800}
          .p08{color:#C9A84C;font-weight:700}
          .p06{color:rgba(255,255,255,.4)}
        </style>
      </head>
      <body>
        <h1>cilingirciniz.com — Sitemap</h1>
        <p><xsl:value-of select="count(sm:urlset/sm:url)"/> URL</p>
        <table>
          <thead>
            <tr>
              <th>URL</th>
              <th>SON GÜNCELLEME</th>
              <th>SIKLIK</th>
              <th>ÖNCELİK</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="sm:urlset/sm:url">
              <tr>
                <td><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
                <td><xsl:value-of select="sm:lastmod"/></td>
                <td>
                  <xsl:choose>
                    <xsl:when test="sm:changefreq='weekly'"><span class="badge w">weekly</span></xsl:when>
                    <xsl:otherwise><span class="badge m"><xsl:value-of select="sm:changefreq"/></span></xsl:otherwise>
                  </xsl:choose>
                </td>
                <td>
                  <xsl:choose>
                    <xsl:when test="sm:priority='1.0'"><span class="p10"><xsl:value-of select="sm:priority"/></span></xsl:when>
                    <xsl:when test="sm:priority='0.8'"><span class="p08"><xsl:value-of select="sm:priority"/></span></xsl:when>
                    <xsl:otherwise><span class="p06"><xsl:value-of select="sm:priority"/></span></xsl:otherwise>
                  </xsl:choose>
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
