"use client"

import { motion } from "framer-motion"
import { Leaf, Heart, Globe, Award, Users, Target } from "lucide-react"
import Image from "next/image"
import { ParallaxSection } from "@/components/parallax-section"
import { Card, CardContent } from "@/components/ui/card"

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

export default function CommitmentPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-sky-500 to-blue-700">
        <div className="absolute inset-0 bg-black/20" />
        <ParallaxSection className="absolute inset-0" speed={0.3}>
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Commitment background"
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
            Our Commitment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-blue-100 leading-relaxed"
          >
            Building a sustainable future through responsible technology, ethical practices, and meaningful
            contributions to society and the environment.
          </motion.p>
        </div>
      </section>

      {/* Commitment Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Leaf,
                title: "Environmental Sustainability",
                description:
                  "We're committed to reducing our carbon footprint through green technology initiatives and sustainable business practices.",
                initiatives: [
                  "Carbon-neutral operations by 2025",
                  "Renewable energy adoption",
                  "Paperless office initiatives",
                  "Green hosting solutions",
                ],
              },
              {
                icon: Heart,
                title: "Social Responsibility",
                description:
                  "Supporting communities and creating positive social impact through technology education and accessibility programs.",
                initiatives: [
                  "Tech education for underserved communities",
                  "Accessibility-first design",
                  "Diversity & inclusion programs",
                  "Mental health support",
                ],
              },
              {
                icon: Globe,
                title: "Global Impact",
                description:
                  "Leveraging technology to address global challenges and create solutions that benefit humanity worldwide.",
                initiatives: [
                  "Healthcare technology solutions",
                  "Educational platform development",
                  "Disaster response systems",
                  "Digital divide bridging",
                ],
              },
              {
                icon: Award,
                title: "Ethical Technology",
                description:
                  "Developing technology with strong ethical foundations, prioritizing privacy, security, and responsible AI practices.",
                initiatives: [
                  "Privacy-by-design approach",
                  "Transparent AI algorithms",
                  "Ethical data handling",
                  "Open-source contributions",
                ],
              },
              {
                icon: Users,
                title: "Community Engagement",
                description:
                  "Actively participating in and supporting the tech community through mentorship, events, and knowledge sharing.",
                initiatives: [
                  "Developer mentorship programs",
                  "Tech conference sponsorships",
                  "Open-source contributions",
                  "Industry collaboration",
                ],
              },
              {
                icon: Target,
                title: "Quality Excellence",
                description:
                  "Maintaining the highest standards of quality in everything we do, from code to customer service.",
                initiatives: [
                  "Rigorous testing protocols",
                  "Continuous improvement culture",
                  "Customer feedback integration",
                  "Industry best practices",
                ],
              },
            ].map((commitment, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full flex items-center justify-center mb-6">
                      <commitment.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">{commitment.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{commitment.description}</p>
                    <ul className="space-y-2">
                      {commitment.initiatives.map((initiative, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                          {initiative}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
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
              Our Impact in Numbers
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Measurable progress toward our commitment goals and positive impact on society.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              { number: "50%", label: "Carbon Footprint Reduction", desc: "Since 2020" },
              { number: "10K+", label: "Students Educated", desc: "Through our programs" },
              { number: "100%", label: "Renewable Energy", desc: "In our data centers" },
              { number: "25+", label: "Open Source Projects", desc: "Contributing to community" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 font-poppins">{stat.number}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                    <p className="text-sm text-gray-600">{stat.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Future Goals */}
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-poppins">Our 2030 Goals</h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Carbon Neutral Operations",
                    desc: "Achieve complete carbon neutrality across all operations and supply chain",
                  },
                  {
                    title: "100K Students Reached",
                    desc: "Expand our education programs to reach 100,000 students globally",
                  },
                  {
                    title: "Accessibility Standard",
                    desc: "Ensure all our products meet the highest accessibility standards",
                  },
                  {
                    title: "Community Investment",
                    desc: "Invest $10M in community technology programs and initiatives",
                  },
                ].map((goal, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">{goal.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{goal.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Future goals"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-sky-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-8 font-poppins">
              Join Our Mission
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-blue-100 mb-12 leading-relaxed">
              Together, we can create technology that not only drives business success but also makes a positive impact
              on the world.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <motion.a
                href="/join"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-md transition-colors"
              >
                Learn How to Get Involved
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
