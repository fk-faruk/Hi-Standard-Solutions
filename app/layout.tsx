import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { SplashScreen } from "@/components/splash-screen"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Hi-Standard - Innovative Tech Solutions",
  description: "Leading technology firm delivering cutting-edge solutions for the digital future.",
    generator: 'v0.dev',
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>

    <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SplashScreen />
          <Navigation />
          <main className="min-h-screen">{children}</main>

          <footer className="py-12 bg-gray-50 border-t border-gray-200">
  <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-3 gap-8">
      {/* Contact Information */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Head Office</h3>
        <p className="text-gray-600 leading-relaxed">
          Hi-Standard Solutions Ltd<br />
          75b Ogunnusi Road, Grammar School Bus Stop, Ojodu Berger, Ikeja, Lagos, Nigeria<br />
          <strong>Email:</strong> info@histandardsolutions.com<br />
          <strong>Phone:</strong> +234 7086202957, +234 7036440608<br />
        </p>
        <p className="text-gray-600 mt-4">
          <strong>Business Hours:</strong><br />
          Monday – Friday: 9:00 AM – 5:00 PM<br />
          Saturday – Sunday: Closed
        </p>
      </div>

      {/* Embedded Google Map */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Office Location</h3>
        <div className="w-full h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.907823847949!2d3.368551314801693!3d6.635421723186702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93e5b3a6b6b7%3A0x8f8b8b8b8b8b8b8b!2sHi-Standard%20Solutions%20Ltd!5e0!3m2!1sen!2sng!4v1680000000000!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="">
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Follow Us</h3>
        <div className="flex space-x-4 justify-center">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.917 2.2-4.917 4.917 0 .385.045.76.127 1.122-4.083-.205-7.702-2.159-10.126-5.134-.423.725-.666 1.562-.666 2.457 0 1.697.865 3.194 2.181 4.073-.803-.026-1.56-.247-2.22-.616v.062c0 2.367 1.684 4.342 3.918 4.788-.41.111-.841.171-1.285.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.415-1.68 1.319-3.809 2.105-6.102 2.105-.395 0-.779-.023-1.161-.067 2.179 1.396 4.768 2.212 7.557 2.212 9.054 0 14.002-7.496 14.002-13.986 0-.213-.005-.425-.014-.637.961-.695 1.8-1.562 2.46-2.549z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.381-.447-2.5-1.75-2.5-1.302 0-1.75 1.119-1.75 2.5v5.5h-3v-10h3v1.5c.447-.447 1.302-1.5 2.75-1.5 2.303 0 3.75 1.947 3.75 4.5v5.5z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.013-4.947.072-1.281.059-2.563.334-3.537 1.309-1.075 1.075-1.25 2.256-1.309 3.537-.059 1.28-.072 1.688-.072 4.947s.013 3.667.072 4.947c.059 1.281.334 2.563 1.309 3.537 1.075 1.075 2.256 1.25 3.537 1.309 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.281-.059 2.563-.334 3.537-1.309 1.075-1.075 1.25-2.256 1.309-3.537.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.059-1.281-.334-2.563-1.309-3.537-1.075-1.075-2.256-1.25-3.537-1.309-1.28-.059-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.296 0-4.162-1.866-4.162-4.162s1.866-4.162 4.162-4.162 4.162 1.866 4.162 4.162-1.866 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.441-.645-1.441-1.441s.645-1.441 1.441-1.441 1.441.645 1.441 1.441-.645 1.441-1.441 1.441z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
          {/* <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-gray-400">© {new Date().getFullYear()} Hi-Standard. All rights reserved.</p>
            </div>
          </footer> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
