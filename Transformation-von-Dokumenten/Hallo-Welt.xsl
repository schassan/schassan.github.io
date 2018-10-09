<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet 
    xmlns:tei="http://www.tei-c.org/ns/1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="tei xs"
    version="2.0">
    
    <xsl:template match="/">
        <html>
            <head>
                <title><xsl:value-of select="//tei:title"/></title>
                <link rel="stylesheet" media="all" href="Hallo-Welt.css"/>
            </head>
            <body>
                <p><xsl:apply-templates select="//tei:body"/></p>
            </body>
        </html>
    </xsl:template>
    
</xsl:stylesheet>