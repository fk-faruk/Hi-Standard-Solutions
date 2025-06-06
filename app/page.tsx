"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Zap, Shield, Award, TrendingUp, Brain, Code2Icon, SettingsIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ParallaxSection } from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel } from "@/components/carousel"
import { TestimonialCard } from "@/components/testimonial-card"
import { InteractiveCounter } from "@/components/interactive-counter"
import { Description } from "@radix-ui/react-dialog"

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

const testimonials = [
  {
    quote:
      "Hi-Standard transformed our business with their innovative solutions. Their team's expertise and dedication exceeded our expectations at every turn.",
    author: "Sarah Johnson",
    role: "CTO",
    company: "Global Innovations",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    quote:
      "Working with Hi-Standard was a game-changer for our company. Their cutting-edge technology solutions helped us stay ahead of the competition.",
    author: "Michael Chen",
    role: "CEO",
    company: "TechForward",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    quote:
      "The team at Hi-Standard delivered beyond our expectations. Their attention to detail and commitment to excellence is unmatched in the industry.",
    author: "Jessica Williams",
    role: "Director of Operations",
    company: "Nexus Enterprises",
    image: "/placeholder.svg?height=120&width=120",
  },
]

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-sky-500 to-blue-700 dark:from-blue-900 dark:via-blue-800 dark:to-blue-950">
        <div className="absolute inset-0 bg-black/20" />
        <ParallaxSection className="absolute inset-0" speed={0.3}>
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Tech background"
            fill
            className="object-cover opacity-20"
          />
        </ParallaxSection>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-poppins"
          >
            Empowering African 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white dark:from-blue-300 dark:to-white">
            Businesses Through Innovative IT Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
        Transforming operations with cutting-edge digital technologies tailored for growth and scalability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
              <Link href="/services">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-600 px-8 py-4 text-lg font-semibold"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 dark:hover:bg-blue-800 dark:hover:text-white px-8 py-4 text-lg font-semibold"
            >
              Get in Touch
            </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-poppins"
            >
              Empowering Businesses through Innovative IT Solutions
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Hi-Standard Solutions Ltd, based in Lagos, Nigeria, is a leading software company focused on transforming business operations across Africa. 
              We help businesses of all sizes scale through cloud computing, AI-driven apps, and enterprise software that boost efficiency and growth. <br />


              {/* <p className="" style={{marginTop: 10}}>
              Partner with us to stay ahead in a rapidly evolving digital world.
              </p> */}
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                icon: Code,
                title: "Advanced Development",
                desc: "Cutting-edge software solutions built with the latest technologies",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "Optimized performance that scales with your business needs",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                desc: "Bank-level security protocols protecting your valuable data",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg 
                  hover:translate-y-[-8px] bg-white dark:bg-gray-800"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-transform hover:scale-110 duration-300">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 font-poppins">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Offerings Carousel */}
      <ParallaxSection
        className="py-24 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950"
        speed={0.2}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-poppins"
            >
              Our Key Offerings
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Explore our comprehensive range of services designed to transform your business
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="h-[500px] md:h-[400px]"
          >
            <Carousel>
              {[
                // {
                //   title: "Custom Software Development",
                //   description: "Tailored solutions designed specifically for your business requirements",
                //   icon: Code,
                //   image: "/placeholder.svg?height=400&width=600",
                // },
                // {
                //   title: "Digital Transformation",
                //   description: "Complete modernization of your business processes and systems",
                //   icon: Award,
                //   image: "/placeholder.svg?height=400&width=600",
                // },
                // {
                //   title: "AI & Machine Learning",
                //   description: "Intelligent automation and predictive analytics solutions",
                //   icon: TrendingUp,
                //   image: "/placeholder.svg?height=400&width=600",
                // },


                {
                  icon: Code,
                  title: "Digital Transformation Services",
                  description: "Cutting-edge software solutions built with the latest technologies",
                  image: "/assets/global.jpg",
                },
                {
                  icon: Zap,
                  title: "Cloud Computing Solutions",
                  description: "Optimized performance that scales with your business needs",
                  image: "/assets/556.jpg",
                },
                {
                  icon: Brain,
                  title: "AI-Driven Application Development",
                  description: "Bank-level security protocols protecting your valuable data",
                  image: "/assets/aidriven.jpg",
                },
                {
                  icon: Code,
                  title: "Enterprise Software Development",
                  description: "Cutting-edge software solutions built with the latest technologies",
                  image: "/assets/enterprise.jpg",
                },
                {
                  icon: Award,
                  title: "IT Consulting & Advisory",
                  description: "Optimized performance that scales with your business needs",
                  image: "/assets/consultancy.jpg",
                },
                {
                  icon: Code2Icon,
                  title: "Mobile & Web App Development",
                  description: "Bank-level security protocols protecting your valuable data",
                  image: "/assets/mobileweb.jpg",
                },
                {
                  icon: SettingsIcon,
                  title: "Ongoing Support & Maintenance",
                  description: "Bank-level security protocols protecting your valuable data",
                  image: "/assets/support.jpg",
                },



              ].map((offering, index) => (
                <div key={index} className="h-full w-full px-4">
                  <Card className="h-full border-0 shadow-xl overflow-hidden bg-white dark:bg-gray-800">
                    <CardContent className="p-0 h-full">
                      <div className="grid md:grid-cols-2 h-full">
                        <div className="relative h-48 md:h-full">
                          <Image
                            src={offering.image || "/placeholder.svg"}
                            alt={offering.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-sky-500/40" />
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full flex items-center justify-center mb-6">
                            <offering.icon className="h-8 w-8 text-white" />
                          </div>
                          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 font-poppins">
                            {offering.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                            {/* {offering.description} */}
                          </p>
                          <Button className="self-start bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                            Learn More
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Carousel>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Stats Section with Interactive Counters */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-poppins"
            >
              Why Choose Us?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              At Hi-Standard Solutions, we build with purpose and scale with intent. Our digital products and services are crafted for impact—whether for startups, SMEs, or large-scale enterprises. We specialize in developing both custom enterprise software and plug-and-play SaaS platforms that serve industries of national relevance, from retail and logistics to healthcare, education, and public administration.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-xl mt-5 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              We are more than a tech company—we are your transformation partner, helping you strengthen your digital identity, enhance operational visibility, increase conversion rates, build a resilient, future-proof business.
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
              { suffix: "Industry Expertise", label: "Our consultants have decades of combined experience across finance, healthcare, retail, education, logistics, and more." },
              { suffix: "Proven Frameworks", label: "We use established methodologies and global best practices tailored to your specific needs." },
              {  suffix: "Future-Focused Strategy", label: "We don't just solve today's problems—we anticipate tomorrow’s opportunities." },
              // { number: 15, suffix: "+", label: "Years of Excellence" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-8px] bg-white dark:bg-gray-800">
                  <CardContent className="p-8 text-center">
                    {/* <InteractiveCounter
                      end={stat.number}
                      suffix={stat.suffix}
                      className="text-5xl md:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4 font-poppins"
                    /> */}
                    <h5 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 font-poppins">{stat.suffix}</h5>
                    <p className="text-md md:text-lg text-gray-700 dark:text-gray-300">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <ParallaxSection
        className="py-24 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950"
        speed={0.2}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-poppins"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Hear from businesses that have transformed with our solutions
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="h-[400px] md:h-[300px]"
          >
            <Carousel>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="h-full w-full px-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </Carousel>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-800 dark:to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-8 font-poppins">
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-blue-100 mb-12 leading-relaxed">
              Join hundreds of companies that trust Hi-Standard to deliver exceptional results. Let's build something
              amazing together.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 dark:bg-blue-900 dark:text-white dark:hover:bg-blue-800 px-8 py-4 text-lg font-semibold"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-white px-8 py-4 text-lg font-semibold"
                >
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
