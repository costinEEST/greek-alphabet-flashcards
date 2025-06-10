import base64
from io import BytesIO

# Create SVG for 192x192 icon
svg_192 = '''<?xml version="1.0" encoding="UTF-8"?>
<svg width="192" height="192" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <circle cx="96" cy="96" r="90" fill="url(#bgGradient)" stroke="#4CAF50" stroke-width="4"/>
  <text x="96" y="75" text-anchor="middle" font-family="serif" font-size="48" font-weight="bold" fill="white">Α</text>
  <text x="96" y="125" text-anchor="middle" font-family="serif" font-size="32" font-weight="bold" fill="white">α</text>
  <circle cx="40" cy="40" r="3" fill="#4CAF50" opacity="0.8"/>
  <circle cx="152" cy="40" r="3" fill="#4CAF50" opacity="0.8"/>
  <circle cx="40" cy="152" r="3" fill="#4CAF50" opacity="0.8"/>
  <circle cx="152" cy="152" r="3" fill="#4CAF50" opacity="0.8"/>
</svg>'''

# Create SVG for 512x512 icon
svg_512 = '''<?xml version="1.0" encoding="UTF-8"?>
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <circle cx="256" cy="256" r="240" fill="url(#bgGradient)" stroke="#4CAF50" stroke-width="10"/>
  <text x="256" y="200" text-anchor="middle" font-family="serif" font-size="128" font-weight="bold" fill="white">Α</text>
  <text x="256" y="330" text-anchor="middle" font-family="serif" font-size="86" font-weight="bold" fill="white">α</text>
  <circle cx="100" cy="100" r="8" fill="#4CAF50" opacity="0.8"/>
  <circle cx="412" cy="100" r="8" fill="#4CAF50" opacity="0.8"/>
  <circle cx="100" cy="412" r="8" fill="#4CAF50" opacity="0.8"/>
  <circle cx="412" cy="412" r="8" fill="#4CAF50" opacity="0.8"/>
</svg>'''

# Write SVG files (browsers can use SVG as PNG)
with open('icon-192.png', 'w') as f:
    f.write(svg_192)

with open('icon-512.png', 'w') as f:
    f.write(svg_512)

print("Icon files created as SVG (compatible with browsers)")
