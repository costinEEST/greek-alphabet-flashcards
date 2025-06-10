#!/usr/bin/env node

import { writeFileSync } from 'fs';

// Main favicon SVG (32x32)
const faviconSVG = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="pageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f8f9fa;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Book spine/binding -->
  <rect x="14" y="4" width="4" height="24" fill="url(#bookGradient)" rx="1"/>
  
  <!-- Left page -->
  <path d="M 4 6 Q 14 4 14 8 L 14 26 Q 14 28 4 28 Z" fill="url(#pageGradient)" stroke="#ddd" stroke-width="0.5"/>
  
  <!-- Right page -->
  <path d="M 18 8 Q 28 4 28 6 L 28 28 Q 18 28 18 26 Z" fill="url(#pageGradient)" stroke="#ddd" stroke-width="0.5"/>
  
  <!-- Alpha letter on left page -->
  <text x="9" y="18" text-anchor="middle" font-family="serif" font-size="10" font-weight="bold" fill="#667eea">Α</text>
  
  <!-- Omega letter on right page -->
  <text x="23" y="18" text-anchor="middle" font-family="serif" font-size="10" font-weight="bold" fill="#667eea">Ω</text>
  
  <!-- Book shadow -->
  <ellipse cx="16" cy="29" rx="12" ry="2" fill="rgba(0,0,0,0.1)"/>
</svg>`;

// 16x16 favicon SVG
const favicon16SVG = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bookGradient16" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Book spine -->
  <rect x="7" y="2" width="2" height="12" fill="url(#bookGradient16)" rx="0.5"/>
  
  <!-- Left page -->
  <path d="M 2 3 Q 7 2 7 4 L 7 13 Q 7 14 2 14 Z" fill="white" stroke="#ccc" stroke-width="0.3"/>
  
  <!-- Right page -->
  <path d="M 9 4 Q 14 2 14 3 L 14 14 Q 9 14 9 13 Z" fill="white" stroke="#ccc" stroke-width="0.3"/>
  
  <!-- Alpha on left -->
  <text x="4.5" y="9" text-anchor="middle" font-family="serif" font-size="5" font-weight="bold" fill="#667eea">Α</text>
  
  <!-- Omega on right -->
  <text x="11.5" y="9" text-anchor="middle" font-family="serif" font-size="5" font-weight="bold" fill="#667eea">Ω</text>
</svg>`;

try {
  // Write favicon files
  writeFileSync('favicon.svg', faviconSVG);
  writeFileSync('favicon-16.svg', favicon16SVG);
  writeFileSync('favicon.ico', faviconSVG); // Modern browsers can handle SVG in .ico files
  
  console.log('✓ Generated favicon.svg');
  console.log('✓ Generated favicon-16.svg');
  console.log('✓ Generated favicon.ico');
  console.log('Favicons generated successfully!');
} catch (error) {
  console.error('Error generating favicons:', error);
  process.exit(1);
}