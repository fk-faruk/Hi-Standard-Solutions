"use client"

import { motion } from "framer-motion"
import { Zap, Shield, BarChart, Users, Globe, Smartphone, ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ParallaxSection } from "@/components/parallax-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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

const products = [
  {
    name: "Finance",
    category: "Cloud Management",
    description:
      "We empower financial institutions—banks, fintech startups, microfinance organizations, and insurance firms—with robust and compliant digital solutions that enhance operational efficiency, data security, and customer experience. Our services include:",
    features: ["Automated loan processing systems", "Custom core banking software", "Mobile and internet banking applications", "Payment gateway integrations", "Automated loan processing systems"],
    price: "Starting at $299/month",
    rating: 4.9,
    users: "We focus on helping financial service providers drive digital transformation, reduce fraud, and increase accessibility, especially in emerging markets.",
    icon: Globe,
    badge: "Most Popular",
  },
  {
    name: "Education",
    category: "Business Intelligence",
    description: "Hi-Standard Solution supports the education sector with transformative EdTech tools that improve learning outcomes, enhance student engagement, and simplify administrative processes. Our offerings include:",
    features:[
      "Learning Management Systems (LMS)",
      "Virtual classrooms and e-learning portals",
      "Student information systems",
      "Online admissions and assessment platforms",
      "Integration of AI for personalized learning"
    ],
    price: "Starting at $199/month",
    rating: 4.8,
    users: "We partner with institutions and training providers to bring scalable digital education to students across various geographies and learning needs.",
    icon: BarChart,
    badge: "New",
  },
  {
    name: "Health",
    category: "Cybersecurity",
    description: "Our health-tech solutions focus on improving patient care, optimizing clinical workflows, and enabling secure health data management. We serve hospitals, clinics, laboratories, and health-focused NGOs with:",
    features:  [
      "Electronic Medical Records (EMR) systems",
      "Telemedicine platforms",
      "Health analytics and reporting dashboards",
      "Appointment scheduling and patient management tools",
      "Data security and HIPAA-compliant solutions"
    ],
    price: "Starting at $499/month",
    rating: 4.9,
    users: "With a user-centric approach, we help healthcare providers improve access to care and digitize service delivery.",
    icon: Shield,
    badge: "Enterprise",
  },
  {
    name: "Logistics",
    category: "Productivity",
    description: "The logistics and supply chain industry thrives on speed, accuracy, and visibility. We deliver custom digital platforms that streamline logistics operations, optimize fleet management, and enhance tracking and reporting. Solutions include:",
    features: [
      "Last-mile delivery platforms",
      "Fleet and route optimization tools",
      "Real-time package tracking systems",
      "Warehouse and inventory management software",
      "Integrated logistics dashboards"
    ],
    price: "Starting at $99/month",
    rating: 4.7,
    users: "We help logistics companies scale their operations with real-time insights and automation.",
    icon: Users,
    badge: "",
  },
  {
    name: "Retail",
    category: "Development Tools",
    description: "Hi-Standard Solution equips retail businesses with intelligent systems that improve customer experience, sales performance, and inventory management. We build solutions for both online and brick-and-mortar retailers:",
    features: [
      "E-commerce websites and mobile apps",
      "Point-of-sale (POS) systems",
      "Inventory tracking and analytics tools",
      "Customer loyalty and engagement platforms",
      "Omnichannel retail solutions"
    ],
    price: "Starting at $149/month",
    rating: 4.8,
    users: "Our retail technology is designed to help businesses keep up with evolving consumer expectations and the digital economy.",
    icon: Smartphone,
    badge: "",
  },
  {
    name: "Government",
    category: "DevOps",
    description: "We collaborate with government agencies and public sector organizations to develop transparent, citizen-centric, and digitally inclusive solutions. Our capabilities in the public domain include:",
    features: [
      "E-governance and digital service portals",
      "Workflow automation for public administration",
      "Citizen feedback and engagement platforms",
      "Document and case management systems",
      "Data analytics for public policy"
    ],
    price: "Starting at $399/month",
    rating: 4.9,
    users: "We ensure that our solutions for the public sector are secure, compliant, and aligned with national and regional digital transformation goals.",
    icon: Zap,
    badge: "",
  },
]

export default function ProductsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-sky-500 to-blue-700">
        <div className="absolute inset-0 bg-black/20" />
        <ParallaxSection className="absolute inset-0" speed={0.3}>
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Products background"
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
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-blue-100 leading-relaxed"
          >
           Smart, Scalable, and Secure Digital Tools
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
     
      {/* Features Comparison */}
      <ParallaxSection className="py-24 bg-gradient-to-r from-gray-50 to-blue-50" speed={0.2}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Why Choose Our Products?
            </motion.h2> */}
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Hi-Standard Solutions Ltd, we are committed to shaping the future by developing a comprehensive suite of proprietary technology solutions designed to solve some of the most persistent challenges faced by businesses and institutions today. With deep industry insights and a forward-thinking approach, our product development pipeline focuses on delivering high-impact, scalable solutions across key sectors such as:
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "Financial Management",
                desc: "We are building intelligent financial tools to help individuals, SMEs, and enterprises gain better control over their finances. Our solutions will include features such as automated accounting, real-time cash flow tracking, expense forecasting, invoicing, digital wallets, and secure multi-channel payment processing. These tools are designed to reduce financial friction, improve transparency, and streamline decision-making.",
                // icon: Shield,
              },
              {
                title: "Education Portals",
                desc: "Our education technology platforms aim to revolutionize the learning experience for both institutions and learners. These solutions will offer robust Learning Management Systems (LMS), student engagement portals, virtual classrooms, and assessment analytics. With a focus on accessibility, personalization, and performance tracking, our portals will empower educators and drive better learning outcomes across primary, secondary, and tertiary levels.",
                icon: Zap,
              },
              {
                title: "Supply Chain & Inventory",
                desc: "We’re developing powerful logistics and inventory management systems that simplify complex supply chain operations for businesses. These solutions will feature real-time inventory tracking, order fulfillment automation, vendor coordination, demand forecasting, and delivery logistics. Designed for industries ranging from retail to manufacturing, our systems will reduce waste, minimize delays, and increase operational efficiency.",
                icon: Users,
              },
              {
                title: "Business Intelligence Dashboards",
                desc: "In a data-driven world, making informed decisions is more critical than ever. Our Business Intelligence (BI) dashboards will provide dynamic reporting, visual analytics, KPI tracking, and predictive modeling — all integrated into a single, intuitive interface. These dashboards will empower business leaders to make fast, evidence-based decisions while identifying new opportunities and mitigating risks",
                icon: Users,
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      {/* <feature.icon className="h-8 w-8 text-white" /> */}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">{feature.title}</h3>
                    <p className="text-gray-600 text-left leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ParallaxSection>


       <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center font-poppins"
          >
           Industries We Serve
          </motion.h2>

        <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-3xl mb-8 mx-auto leading-relaxed">
            At Hi-Standard Solutions Ltd, we are committed to shaping the future by developing a comprehensive suite of proprietary technology solutions designed to solve some of the most persistent challenges faced by businesses and institutions today. With deep industry insights and a forward-thinking approach, our product development pipeline focuses on delivering high-impact, scalable solutions across key sectors such as:
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >


            {products.map((product, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg group relative overflow-hidden">
                  {/* {product.badge && (
                    <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-blue-600 to-sky-500 text-white">
                      {product.badge}
                    </Badge>
                  )} */}
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <product.icon className="h-8 w-8 text-white" />
                    </div>

                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">{product.name}</h3>
                      {/* <p className="text-sm text-blue-600 font-medium">{product.category}</p> */}
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <p className=" text-gray-500">{product.users}</p>
                      </div>
                    </div>

                    {/* <div className="border-t pt-6">
                      <p className="text-lg font-semibold text-gray-900 mb-4">{product.price}</p>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div> */}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-sky-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-8 font-poppins">
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-blue-100 mb-12 leading-relaxed">
              Start your free trial today and experience the power of Hi-Standard's innovative solutions.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
                >
                  Request Demo
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
