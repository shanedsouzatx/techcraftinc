/* eslint-disable @next/next/next-script-for-ga */
import React from "react";
import "react-phone-input-2/lib/style.css";
import "aos/dist/aos.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import MyLayout from "@/components/MyLayout";
import { Poppins } from 'next/font/google'
// const lato = Lato({
//   subsets: ["latin"],
//   weight: ["400", "700"], // Specify the weights you want to use
// });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'], // Add desired font weights
  variable: '--font-poppins', // Custom CSS variable for Tailwind
})
// Create a constant for the schema data
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Techcraft",
  "url": "https://techcraftinc.com",
  "logo": "https://techcraftinc.com/assets/images/tech-craft-logo.png",
  "sameAs": [
    "https://www.facebook.com/techcraftinc0",
    "https://x.com/techcraftinc",
    "https://www.linkedin.com/company/tech-craft-inc/",
    "https://www.instagram.com/techcraftinc/"
  ],
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "(667) 423-5532",
    "contactType": "customer service",
    "email": "info@techcraftinc.com",
    "areaServed": "Worldwide",
    "availableLanguage": ["English"]
  }],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "United States"
  },
  "description": "Techcraft is a leading digital marketing and software development agency providing innovative solutions in web development, mobile apps, digital marketing, and software solutions to help businesses grow in the digital age.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "16.00",
    "highPrice": "7999.99",
    "offerCount": "50+"
  }
};

export const metadata: Metadata = {
  metadataBase: new URL('https://techcraftinc.com'), // Replace with your actual domain
  title: "Best Digital Marketing and Software Development Agency | Techcraft",
  description: "Techcraft is a leading digital marketing and software development agency providing innovative solutions in web development, mobile apps, digital marketing, and software solutions to help businesses grow in the digital age.",
  keywords: "digital marketing, software development, web development, mobile apps, SEO, social media marketing, digital transformation, tech solutions, IT services, digital agency",
  
  // OpenGraph metadata
  // openGraph: {
  //   type: 'website',
  //   title: 'Best Digital Marketing and Software Development Agency | Techcraft',
  //   description: 'Techcraft is a leading digital marketing and software development agency providing innovative solutions to help businesses grow in the digital age.',
  //   url: 'https://techcraft.com', // Replace with your actual domain
  //   siteName: 'Techcraft',
  //   images: [
  //     {
  //       url: '/assets/images/tech-craft-logo.png',
  //       width: 1200,
  //       height: 630,
  //       alt: 'Techcraft Logo',
  //     }
  //   ],
  //   locale: 'en_US',
  // },

  // Twitter metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Best Digital Marketing and Software Development Agency | Techcraft',
    description: 'Techcraft is a leading digital marketing and software development agency providing innovative solutions to help businesses grow in the digital age.',
    images: ['/assets/images/tech-craft-logo.png'],
    creator: '@techcraftinc',
    site: '@techcraftinc',
  },

  // Additional social media metadata
  other: {
  
    'facebook': 'https://www.facebook.com/techcraftinc0',
    'twitter': 'https://x.com/techcraftinc',
    'instagram': 'https://www.instagram.com/techcraftinc/',
    'linkedin': 'https://www.linkedin.com/company/tech-craft-inc/',
    
  },

  // Icons
  icons: {
    icon: '/assets/images/tech-craft-logo.png',
    shortcut: '/assets/images/tech-craft-logo.png',
    apple: '/assets/images/apple-touch-icon.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/assets/images/safari-pinned-tab.svg',
      },
    ],
  },

    // Alternate languages
    alternates: {
      canonical: 'https://techcraftinc.com',
      languages: {
        'en-US': 'https://techcraftinc.com',
        'es-ES': 'https://techcraftinc.com',
      },
    },

  

    // Update Schema.org markup in the head section
  
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <head>
          <title>Best Digital Makerting and Software Development Agency | Techcraft</title>
          <meta name="description" content="Techcraft is a leading digital marketing and software development agency that provides innovative solutions to help businesses grow and succeed in the digital age." />
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-NWN5C8N3');
              `,
            }}
          />
          {/* End Google Tag Manager */}

          {/* Social Media Profiles */}
          <link rel="me" href="https://twitter.com/techcraftinc" />
          <link rel="me" href="https://www.linkedin.com/company/techcraftinc" />
          <link rel="me" href="https://www.facebook.com/techcraftinc" />
          <link rel="me" href="https://www.instagram.com/techcraftinc" />
          <link rel="me" href="https://www.youtube.com/@techcraftinc" />
          
          {/* Schema.org markup */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />

          {/* Open Graph Protocol */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Techcraft" />
          <meta property="og:locale" content="en_US" />
          <meta property="article:publisher" content="https://www.facebook.com/techcraftinc" />
          
          {/* Twitter Card */}
          <meta name="twitter:site" content="@techcraftinc" />
          <meta name="twitter:creator" content="@techcraftinc" />
        </head>
        <body className={poppins.className}>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NWN5C8N3"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          {/* End Google Tag Manager (noscript) */}

        
        <MyLayout>
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
        </MyLayout>
       
      </body>
    </html>
  );
}
