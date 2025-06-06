"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import Image from "next/image"
import { ParallaxSection } from "@/components/parallax-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-sky-500 to-blue-700">
        <div className="absolute inset-0 bg-black/20" />
        <ParallaxSection className="absolute inset-0" speed={0.3}>
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Contact background"
            fill
            className="object-cover opacity-20"
          />
        </ParallaxSection>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 font-poppins"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-blue-100 leading-relaxed"
          >
           Ready to start your digital transformation journey?
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16"
          >
            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins">Send us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          type="text"
                          className="mt-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          className="mt-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        className="mt-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Company
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        className="mt-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        className="mt-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        rows={6}
                        className="mt-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
                        placeholder="Tell us about your project or requirements..."
                      />
                    </div>

                    <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 font-poppins">Get in Touch</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We'd love to hear from you. Whether you have a question about our services, need a custom solution, or
                  want to explore partnership opportunities, our team is ready to help.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "info@histandardsolutions.com",
                    subtitle: "We'll respond within 24 hours",
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "+234 7036440608, +234 7086202957",
                    subtitle: "Mon-Fri 9AM - 5PM ",
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    content: `Hi-Standard Solutions Ltd
75b Ogunnusi Road, Grammar School Bus Stop, Ojodu Berger, Ikeja, Lagos, Nigeria
`,
                    subtitle: "Schedule an appointment",
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    content: "Monday - Friday: 9:00 AM - 5:00 PM ",
                    subtitle: "Weekend support available",
                  },
                ].map((contact, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <contact.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1 font-poppins">{contact.title}</h3>
                          <p className="text-gray-900 font-medium">{contact.content}</p>
                          <p className="text-sm text-gray-600 mt-1">{contact.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      {/* <ParallaxSection className="py-24 bg-gradient-to-r from-gray-50 to-blue-50" speed={0.2}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Our Global Presence
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With offices around the world, we're always close to our clients and ready to provide local support with
              global expertise.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                city: "San Francisco",
                address: "123 Innovation Drive, CA 94105",
                phone: "+1 (555) 123-4567",
                type: "Headquarters",
              },
              {
                city: "New York",
                address: "456 Tech Avenue, NY 10001",
                phone: "+1 (555) 234-5678",
                type: "East Coast Office",
              },
              {
                city: "London",
                address: "789 Digital Street, EC1A 1BB",
                phone: "+44 20 1234 5678",
                type: "European Office",
              },
            ].map((office, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">{office.city}</h3>
                    <p className="text-blue-600 font-medium mb-4">{office.type}</p>
                    <div className="space-y-2 text-gray-600">
                      <p className="text-sm">{office.address}</p>
                      <p className="text-sm font-medium">{office.phone}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ParallaxSection> */}

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Frequently Asked Questions
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed">
              Quick answers to common questions about our services and processes.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on complexity and scope. Most projects range from 3-12 months, with smaller projects completing in 4-8 weeks.",
              },
              {
                question: "Do you work with startups or only enterprise clients?",
                answer:
                  "We work with businesses of all sizes, from innovative startups to Fortune 500 companies. Our solutions are scalable and adaptable to your needs.",
              },
              {
                question: "What technologies do you specialize in?",
                answer:
                  "We specialize in modern web technologies, cloud platforms, AI/ML, mobile development, and emerging technologies like blockchain and IoT.",
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer:
                  "Yes, we offer comprehensive support and maintenance packages to ensure your solution continues to perform optimally after launch.",
              },
            ].map((faq, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 font-poppins">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
