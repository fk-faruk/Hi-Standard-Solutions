"use client"

import { motion } from "framer-motion"
import { Users, Briefcase, GraduationCap, Heart, ArrowRight, MapPin, Clock, DollarSign } from "lucide-react"
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

const jobOpenings = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salary: "$120K - $180K",
    description: "Join our engineering team to build scalable web applications using modern technologies.",
    requirements: ["5+ years experience", "React/Node.js", "Cloud platforms", "Agile methodology"],
    badge: "Hot",
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "New York, NY / Remote",
    type: "Full-time",
    salary: "$90K - $140K",
    description: "Create beautiful and intuitive user experiences for our cutting-edge products.",
    requirements: ["3+ years experience", "Figma/Sketch", "User research", "Design systems"],
    badge: "New",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Austin, TX / Remote",
    type: "Full-time",
    salary: "$110K - $160K",
    description: "Build and maintain our cloud infrastructure and deployment pipelines.",
    requirements: ["4+ years experience", "AWS/Azure", "Kubernetes", "CI/CD pipelines"],
    badge: "",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Seattle, WA / Remote",
    type: "Full-time",
    salary: "$130K - $190K",
    description: "Drive product strategy and work with cross-functional teams to deliver amazing products.",
    requirements: ["5+ years experience", "Product strategy", "Data analysis", "Stakeholder management"],
    badge: "",
  },
  {
    title: "Data Scientist",
    department: "Analytics",
    location: "Boston, MA / Remote",
    type: "Full-time",
    salary: "$115K - $170K",
    description: "Extract insights from complex datasets to drive business decisions and product improvements.",
    requirements: ["PhD/Masters preferred", "Python/R", "Machine learning", "Statistical analysis"],
    badge: "",
  },
  {
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Los Angeles, CA / Remote",
    type: "Full-time",
    salary: "$70K - $110K",
    description: "Develop and execute marketing campaigns to grow our brand and customer base.",
    requirements: ["3+ years experience", "Digital marketing", "Content creation", "Analytics tools"],
    badge: "",
  },
]

export default function JoinPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-sky-500 to-blue-700">
        <div className="absolute inset-0 bg-black/20" />
        <ParallaxSection className="absolute inset-0" speed={0.3}>
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Join us background"
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
            Join Our Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-blue-100 leading-relaxed"
          >
            Be part of a team that's shaping the future of technology. Discover exciting career opportunities and make a
            meaningful impact with Hi-Standard.
          </motion.p>
        </div>
      </section>

      {/* Why Join Us */}
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
              Why Join Hi-Standard?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer more than just a job – we provide a platform for growth, innovation, and making a real difference
              in the world.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Users,
                title: "Amazing Team",
                description:
                  "Work with brilliant minds from diverse backgrounds who share your passion for innovation.",
              },
              {
                icon: GraduationCap,
                title: "Continuous Learning",
                description: "Access to training, conferences, and educational resources to advance your skills.",
              },
              {
                icon: Heart,
                title: "Work-Life Balance",
                description: "Flexible schedules, remote work options, and comprehensive wellness programs.",
              },
              {
                icon: Briefcase,
                title: "Career Growth",
                description: "Clear advancement paths and mentorship opportunities to accelerate your career.",
              },
            ].map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Job Openings */}
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
              Open Positions
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our current job openings and find the perfect role to advance your career.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {jobOpenings.map((job, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden">
                  {job.badge && (
                    <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-blue-600 to-sky-500 text-white">
                      {job.badge}
                    </Badge>
                  )}
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">{job.title}</h3>
                      <p className="text-blue-600 font-medium">{job.department}</p>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">{job.description}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-blue-600" />
                        {job.type}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <DollarSign className="h-4 w-4 mr-2 text-blue-600" />
                        {job.salary}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Company Culture */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Company culture"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl -z-10" />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-poppins">Life at Hi-Standard</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Our culture is built on collaboration, innovation, and mutual respect. We believe that diverse
                  perspectives lead to better solutions and a more inclusive workplace.
                </p>
                <p>
                  From flexible work arrangements to professional development opportunities, we're committed to
                  supporting our team members' growth both personally and professionally.
                </p>
                <p>
                  Join us for regular team events, hackathons, learning sessions, and community service projects that
                  make work both meaningful and enjoyable.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/team">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4">
                    Meet Our Team
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-sky-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-8 font-poppins">
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-blue-100 mb-12 leading-relaxed">
              Don't see the perfect role? We're always interested in connecting with talented individuals. Send us your
              resume and let's explore opportunities together.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                Submit Your Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
                >
                  Contact HR Team
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
