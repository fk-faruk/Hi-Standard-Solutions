"use client"

import { motion } from "framer-motion"
import { Target, Eye, Award, Users, Globe, Lightbulb } from "lucide-react"
import Image from "next/image"
import { ParallaxSection } from "@/components/parallax-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Mail } from "lucide-react"

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

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Chief Executive Officer",
    bio: "Visionary leader with 15+ years in tech innovation and strategic business development.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Michael Rodriguez",
    role: "Chief Technology Officer",
    bio: "Expert in emerging technologies with a passion for scalable architecture and AI solutions.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Emily Johnson",
    role: "Head of Design",
    bio: "Award-winning designer focused on creating intuitive and beautiful user experiences.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    bio: "Full-stack engineer specializing in modern web technologies and cloud infrastructure.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Lisa Thompson",
    role: "Project Manager",
    bio: "Agile expert ensuring seamless project delivery and client satisfaction.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "James Wilson",
    role: "Data Scientist",
    bio: "Machine learning specialist turning complex data into actionable business insights.",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-sky-500 to-blue-700">
        <div className="absolute inset-0 bg-black/20" />
        <ParallaxSection className="absolute inset-0" speed={0.3}>
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="About us background"
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
            About Hi-Standard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-blue-100 leading-relaxed"
          >
            Pioneering Africa’s Digital Future, we've been transforming businesses with innovative solutions
            that drive growth and success.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 font-poppins">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                Founded in 2024 and headquartered in Ikeja, Lagos, Nigeria, Hi-Standard Solutions Ltd is committed to revolutionizing business operations through tailored IT solutions. Our mission is to empower organizations to drive digital transformation, achieve operational efficiency, and maintain a competitive edge through innovative software services
                </p>
                <p>
                We work with a range of clients — from startups to enterprises and government agencies — across key industries such as finance, healthcare, telecoms, and manufacturing. Our customer-centric approach ensures every solution is tailored, scalable, and aligned with business goals.
                </p>
                {/* <p>
                  Today, we stand as industry leaders, having delivered over 1,000 successful projects across 50+
                  countries, always staying true to our core values of excellence, integrity, and innovation.
                </p> */}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Our story"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <ParallaxSection className="py-24 bg-gradient-to-r from-gray-50 to-blue-50" speed={0.2}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-xl">
                <CardContent className="p-12">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full flex items-center justify-center mb-8">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                  To deliver innovative and scalable IT solutions that empower businesses to enhance efficiency, scalability, and growth.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-xl">
                <CardContent className="p-12">
                  <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center mb-8">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                  To be a leading IT solutions provider in Africa, driving digital transformation and innovation across industries.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Our Core Values
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These fundamental principles guide everything we do and shape our culture of excellence.
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
                icon: Award,
                title: "Excellence",
                desc: "We strive for perfection in every project, delivering solutions that exceed expectations and set new industry standards.",
              },
              {
                icon: Users,
                title: "Collaboration",
                desc: "We believe in the power of teamwork, fostering partnerships that create innovative solutions and lasting relationships.",
              },
              {
                icon: Globe,
                title: "Global Impact",
                desc: "Our solutions transcend borders, creating positive change and driving progress in communities worldwide.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                desc: "We continuously push boundaries, embracing new technologies and methodologies to solve tomorrow's challenges today.",
              },
              {
                icon: Target,
                title: "Integrity",
                desc: "Honesty and transparency form the foundation of our relationships with clients, partners, and team members.",
              },
              {
                icon: Eye,
                title: "Vision",
                desc: "We see beyond the present, anticipating future needs and preparing solutions that stand the test of time.",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
             Our Team
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Hi-Standard Solutions Ltd, our strength lies in our people. We are a diverse team of software developers, data scientists, IT consultants, project managers, and designers united by a common goal — delivering excellence.

            <br /> <br />

            We invest in our team’s growth through continuous learning, certifications, and hands-on experience with the latest technologies. Together, we drive innovation and ensure our clients get the best solutions possible.
            </motion.p>

          </motion.div>

                    <motion.div
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                      {teamMembers.map((member, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                          <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                            <CardContent className="p-8 text-center">
                              <div className="relative mb-6">
                                <Image
                                  src={member.image || "/placeholder.svg"}
                                  alt={member.name}
                                  width={200}
                                  height={200}
                                  className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-r from-blue-600 to-sky-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                              </div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">{member.name}</h3>
                              <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                              <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
                              <div className="flex justify-center space-x-4">
                                <Button variant="ghost" size="sm" className="p-2 hover:bg-blue-50">
                                  <Linkedin className="h-4 w-4 text-blue-600" />
                                </Button>
                                <Button variant="ghost" size="sm" className="p-2 hover:bg-blue-50">
                                  <Twitter className="h-4 w-4 text-blue-600" />
                                </Button>
                                <Button variant="ghost" size="sm" className="p-2 hover:bg-blue-50">
                                  <Mail className="h-4 w-4 text-blue-600" />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>

          {/* <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Award,
                title: "Excellence",
                desc: "We strive for perfection in every project, delivering solutions that exceed expectations and set new industry standards.",
              },
              {
                icon: Users,
                title: "Collaboration",
                desc: "We believe in the power of teamwork, fostering partnerships that create innovative solutions and lasting relationships.",
              },
              {
                icon: Globe,
                title: "Global Impact",
                desc: "Our solutions transcend borders, creating positive change and driving progress in communities worldwide.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                desc: "We continuously push boundaries, embracing new technologies and methodologies to solve tomorrow's challenges today.",
              },
              {
                icon: Target,
                title: "Integrity",
                desc: "Honesty and transparency form the foundation of our relationships with clients, partners, and team members.",
              },
              {
                icon: Eye,
                title: "Vision",
                desc: "We see beyond the present, anticipating future needs and preparing solutions that stand the test of time.",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div> */}
        </div>
      </section>
      {/* Stats Section */}
      {/* <section className="py-24 bg-gradient-to-r from-blue-600 to-sky-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "1000+", label: "Projects Completed" },
              { number: "50+", label: "Countries Served" },
              { number: "200+", label: "Team Members" },
              { number: "15+", label: "Years of Excellence" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-white">
                <div className="text-5xl md:text-6xl font-bold mb-4 font-poppins">{stat.number}</div>
                <div className="text-xl text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}
    </div>
  )
}
