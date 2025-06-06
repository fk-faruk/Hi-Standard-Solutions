"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail } from "lucide-react"
import Image from "next/image"
import { ParallaxSection } from "@/components/parallax-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
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

export default function TeamPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-sky-500 to-blue-700">
        <div className="absolute inset-0 bg-black/20" />
        <ParallaxSection className="absolute inset-0" speed={0.3}>
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Team background"
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
            Meet Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-blue-100 leading-relaxed"
          >
            The brilliant minds behind Hi-Standard's success. Our diverse team of experts brings together decades of
            experience and a shared passion for innovation.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Culture Section */}
      <ParallaxSection className="py-24 bg-gradient-to-r from-gray-50 to-blue-50" speed={0.2}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Our Culture
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We foster an environment where creativity thrives, collaboration flourishes, and every team member can
              reach their full potential.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">Innovation First</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We encourage experimentation and creative problem-solving, providing our team with the resources and
                    freedom to explore new ideas and technologies.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">Work-Life Balance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We believe that great work comes from happy, well-rested minds. Our flexible policies support both
                    professional growth and personal well-being.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">Continuous Learning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We invest in our team's growth through training programs, conferences, and educational opportunities
                    to stay at the forefront of technology.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Team culture"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Join Team CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-sky-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-8 font-poppins">
              Join Our Amazing Team
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-blue-100 mb-12 leading-relaxed">
              We're always looking for talented individuals who share our passion for innovation and excellence.
              Discover exciting career opportunities with Hi-Standard.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                View Open Positions
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
