"use client";

import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Cloud,
  Brain,
  Shield,
  Zap,
  ArrowRight,
  SettingsIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ParallaxSection } from "@/components/parallax-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const services = [
  {
    icon: Smartphone,
    title: "Mobile & Web App Development",
    description: ` 
  <em>Engage your customers and improve accessibility through seamless apps and platforms.</em><br />
  At <strong>Hi-Standard Solutions</strong>, we specialize in turning bold ideas into powerful web and mobile applications. Rather than relying on generic solutions, we craft tailored digital experiences that spotlight each brand’s unique identity. Partner with us to elevate your online presence—where innovation meets impact and your brand stands out in the digital world.
  <br /><br />
  <strong>• Native & Cross-Platform Mobile Apps:</strong> We specialize in the design and development of high-performance native and cross-platform mobile applications tailored to meet the needs of both startups and established enterprises. Our native app solutions are built specifically for iOS (using Swift/Objective-C) and Android (using Kotlin/Java), ensuring optimal performance, security, and user experience. For clients looking to optimize development time and cost without compromising quality, we offer cross-platform solutions using frameworks like Flutter, React Native, and Xamarin.<br />
  Our mobile app development services include:<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o End-to-end development lifecycle: from ideation to app store deployment.<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Offline functionality, real-time updates, and push notifications.<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Integration with third-party APIs and back-end services.<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Ongoing maintenance and version updates.<br /><br />

  <strong>• Scalable Web Applications:</strong> We build robust and scalable web applications that are secure, responsive, and tailored for growth. Whether it's a single-page application (SPA), enterprise-level solution, or custom SaaS platform, our development approach ensures seamless performance and scalability.<br />
  Key capabilities include:<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Development using modern technologies such as React.js, Angular, Vue.js, .NET, Node.js, and Django.<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Cloud-native architecture and containerization for scalability (e.g., using AWS, Azure, Docker, Kubernetes).<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Custom dashboard interfaces, user authentication, and real-time data processing.<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Responsive design optimized for all devices (desktop, tablet, mobile).<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o API development and integration for data synchronization and interoperability.<br /><br />

  <strong>• E-Commerce Solutions:</strong> We provide comprehensive e-commerce solutions designed to enhance customer experience, increase conversions, and streamline backend operations. From small-scale online shops to complex multi-vendor marketplaces, we tailor our solutions to your specific business model and goals.<br />
  Our offerings include:<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Custom-built e-commerce platforms or solutions based on Shopify, WooCommerce, Magento, or BigCommerce.<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Integration with secure payment gateways (e.g., Paystack, Flutterwave, Stripe, PayPal).<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Inventory, order, and logistics management systems.<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o SEO-optimized architecture and performance enhancements for faster load times.<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Loyalty programs, promotions, coupon systems, and advanced analytics.<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Mobile-first and omnichannel experiences for maximum reach.<br /><br />

  <strong>• UI/UX Design:</strong> We deliver intuitive, user-centered UI/UX design that enhances engagement and usability across digital products. Our design team focuses on creating seamless user journeys through deep research, empathy-driven design, and iterative testing.<br />
  Our UI/UX process includes:<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o User research, persona creation, and journey mapping.<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Wireframing, prototyping, and visual design using tools like Figma, Adobe XD, and Sketch.<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Usability testing and analytics-based refinements.<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Accessibility compliance (WCAG standards) and design consistency across platforms.<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o UI kits and design systems that scale with your product.

`,
    features: [
      "iOS Development",
      "Android Development",
      "React Native",
      "Flutter Applications",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Computing Solutions",
    description:`
  <em>At Hi-Standard Solutions, we redefine cloud computing by delivering more than just basic hosting or storage.</em><br />
  We provide intelligent, cloud-native solutions designed to power your growth, improve your efficiency, and strengthen your security. Our cloud infrastructure is built to be <strong>scalable</strong>, <strong>cost-effective</strong>, and <strong>accessible from anywhere</strong> — empowering businesses to innovate without limits.<br />
  Whether you’re a growing startup or an established enterprise, our cloud services are engineered to evolve with your needs, enabling you to harness the full power of <strong>remote access</strong>, <strong>digital mobility</strong>, and <strong>operational resilience</strong>.<br /><br />
  Through strategic collaborations & partnerships with the world’s top cloud service providers such as <strong>AWS, Microsoft Azure, and Google Cloud</strong>, and deep expertise in cloud-native technologies, we empower our clients to unlock the full potential of modern cloud platforms with unmatched performance, availability, and security.<br /><br />
  Our team of certified professionals ensures your systems are architected to best-in-class standards. <strong>Security is at the core</strong> of our infrastructure solutions. We incorporate end-to-end encryption, identity and access management, secure data backups, and regulatory compliance (e.g., <strong>GDPR, ISO, NDPR</strong>) to safeguard your critical data and ensure uninterrupted operations.<br /><br />

  <strong>• Cloud Strategy & Roadmapping:</strong> We assess your business needs and align them with a custom cloud adoption roadmap. This includes:<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Cloud readiness assessment<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Hybrid or multi-cloud planning<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o TCO (Total Cost of Ownership) analysis<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Cloud architecture design<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Governance and security planning<br />
  <strong>Outcome:</strong> A detailed strategy that helps you migrate to or optimize within the cloud with confidence and clarity.<br /><br />

  <strong>• Cloud Migration:</strong> Whether you're moving legacy systems to the cloud or adopting new SaaS platforms, we ensure a seamless, secure, and downtime-free migration, including:<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Data center-to-cloud migrations<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Application rehosting, refactoring, or replatforming<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Minimal-disruption cutover planning<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Migration of workloads, databases, email systems, and user environments<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Post-migration testing and stabilization<br />
  <strong>Outcome:</strong> Faster time-to-value with reduced risk and improved system performance.<br /><br />

  <strong>• Cloud Management & Optimization:</strong> Our cloud management services are designed to maximize performance while controlling costs. We offer:<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o 24/7 cloud monitoring and support<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Cloud resource provisioning and scaling<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Cost optimization and usage analysis<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Security monitoring and compliance management<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Disaster recovery and automated backups<br />
  <strong>Outcome:</strong> Increased operational efficiency, optimized spend, and robust cloud security posture.
`,
    features: [
      "AWS/Azure/GCP",
      "Cloud Migration",
      "DevOps & CI/CD",
      "Microservices Architecture",
    ],
  },
  {
    icon: Brain,
    title: "AI-Driven Applications",
    description: `
  <strong>Harness the power of AI</strong> to transform your business with smarter decision-making and automation.<br />
  Leverage the transformative power of <strong>Artificial Intelligence</strong> to revolutionize your business operations, enhance customer experiences, and make data-driven decisions with confidence.
  <em>Hi-Standard Solutions</em> integrates cutting-edge AI capabilities into its platform, empowering clients with tools that learn, adapt, and deliver results in real time.<br /><br />

  <strong>• Predictive Analytics:</strong> Anticipate future trends, customer behaviors, and business outcomes by unlocking the hidden patterns within your data. Predictive analytics uses historical and real-time data to:<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Forecast demand<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Optimize inventory<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Personalize marketing strategies<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Mitigate operational risks<br />
  <strong>Outcome:</strong> Better decision-making and higher ROI.<br /><br />

  <strong>• Natural Language Processing (NLP):</strong> Enable your systems to understand, interpret, and respond to human language more effectively. With NLP, Hi-Standard Solutions enhances communication between customers, support agents, and platforms through:<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Intelligent chatbots and virtual assistants<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Automated sentiment analysis<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Voice-enabled commands<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Real-time language translation<br />
  <strong>Outcome:</strong> A seamless and responsive user experience across multiple touch points.<br /><br />

  <strong>• Intelligent Automation:</strong> Streamline workflows and eliminate repetitive tasks through AI-powered process automation. From order fulfillment to customer support, intelligent automation increases operational efficiency by:<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Reducing human error<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Speeding up service delivery<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Lowering overhead costs<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Enabling 24/7 operations<br />
  <strong>Outcome:</strong> More time for your team to focus on high-value tasks while ensuring accuracy and scalability.<br /><br />

  <strong>• Machine Learning:</strong> Drive continuous improvement by enabling systems to learn from data and evolve over time. Machine learning algorithms help:<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Personalize customer interactions<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Optimize delivery routes<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Recommend products<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Detect anomalies or fraud in real time<br />
  <strong>Outcome:</strong> As more data flows through the system, performance improves—making your platform smarter, faster, and more responsive.
`,
 features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Chatbots & Virtual Assistants",
    ],
  },
  {
    icon: Shield,
    title: "IT Consulting & Advisory",
    description: `
  <strong>Expert guidance on IT strategy, infrastructure, and innovation.</strong> <br />
  Empowering Your Business with Strategic Technology Insight
  At the core of every successful modern enterprise lies a robust, forward-thinking IT strategy. Our IT Consulting & Advisory Services are designed to align your technology infrastructure with your business goals—helping you innovate, stay secure, and remain competitive in a rapidly evolving digital landscape.<br />
  We offer comprehensive, customized guidance to organizations looking to modernize operations, improve efficiency, and future-proof their technology investments.<br /><br />

  <strong>• Cybersecurity Consulting:</strong> Protecting your digital assets and ensuring compliance.<br />
  In today’s hyperconnected world, cybersecurity is not optional—it’s essential. Our cybersecurity consultants provide a 360-degree assessment of your security landscape. We identify vulnerabilities, assess risks, and develop a comprehensive strategy to secure your IT environment.<br />
  <strong>Key Focus Areas:</strong><br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Security architecture review & design<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Threat detection and response planning<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Compliance with industry standards (e.g., ISO 27001, GDPR, NIST)<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Business continuity & disaster recovery planning<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Employee awareness & training programs<br /><br />

  <strong>• Technology Assessment:</strong> Evaluating the performance and scalability of your current IT systems.<br />
  Our consultants conduct a deep-dive analysis of your existing technology stack to identify strengths, inefficiencies, gaps, and opportunities for improvement. The goal is to provide an unbiased, expert view of how your IT infrastructure supports your business today—and what changes can unlock greater value tomorrow.<br />
  <strong>Assessment Includes:</strong><br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Hardware and software infrastructure audit<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Network performance and scalability analysis<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Cloud readiness and migration feasibility<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Licensing and cost-efficiency review<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Recommendations for upgrades or replacements<br /><br />

  <strong>• Digital Innovation Roadmaps:</strong> Strategic planning for digital transformation and growth.<br />
  Technology is evolving rapidly, and staying ahead means having a clear roadmap. We help you define and implement a tailored innovation strategy, integrating emerging technologies like AI, cloud computing, IoT, and automation into your business operations.<br />
  <strong>What We Deliver:</strong><br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Vision-aligned digital transformation planning<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Short- and long-term IT investment strategies<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Phased rollout of new tools and platforms<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o Stakeholder alignment and change management plans<br />
  &nbsp;&nbsp;&nbsp;&nbsp;o KPIs and success metrics to track digital maturity
`,
    features: [
      "Security Audits",
      "Penetration Testing",
      "Compliance Management",
      "Incident Response",
    ],
  },
  {
    icon: Zap,
    title: "Digital Transformation Services",
    description: `
  <strong>Streamline operations, improve efficiency, and deliver superior customer experiences using cutting-edge digital tools.</strong><br /><br />
  In response to the widespread inefficiencies caused by manual operations across various industries, Hi-Standard Solutions delivers cutting-edge process automation solutions designed to streamline workflows and boost operational efficiency. By eliminating repetitive tasks, we empower organizations to focus on strategic priorities and core business growth.<br /><br />
  At Hi-Standard Solutions, we innovate with purpose—developing both tailored enterprise solutions and scalable Software-as-a-Service (SaaS) products that address critical needs in sectors of national importance. Whether for small teams or large enterprises, our solutions are engineered to simplify, accelerate, and optimize processes.<br /><br />
  In today’s fast-paced digital world, Hi-Standard Solutions stands out as a trusted partner—resolving operational pain points, unlocking measurable value, and redefining the future of automation across Africa. Our mission is clear: to help businesses strengthen their digital identity, increase conversion rates, and establish a powerful, lasting digital presence.<br /><br />

  <strong>• Process Automation:</strong> We design and deploy automation solutions that replace repetitive, time-consuming tasks with intelligent, self-operating systems. This enables your team to focus on higher-value functions like innovation, growth, and strategic planning. From workflow optimization to end-to-end digital process management, we bring speed, accuracy, and efficiency to every layer of your operations.<br /><br />

  <strong>• Business Intelligence & Analytics:</strong> Data is the new oil—but only when refined. Our Business Intelligence services turn raw data into actionable insights. Using modern analytics tools and dashboards, we help businesses uncover trends, monitor KPIs, and make informed decisions with confidence. Whether you need real-time reporting or predictive forecasting, we empower you with the intelligence to stay ahead.<br /><br />

  <strong>• Omnichannel Customer Experience:</strong> Today’s customer expects seamless, personalized interactions—anytime, anywhere. We help businesses create unified customer experiences across web, mobile, social, and in-person touch points. Our customer experience solutions integrate CRM, AI-driven support, and feedback loops to ensure consistent satisfaction, loyalty, and brand engagement.
`,
    features: [
      "Process Automation",
      "Digital Strategy",
      "Change Management",
      "Technology Consulting",
    ],
  },
  {
    icon: Code,
    title: "Enterprise Software Development",
    description: `
    <strong>Custom software solutions to support mission-critical operations.</strong><br /><br />
    At Hi-Standard Solutions, we specialize in developing enterprise-grade software solutions tailored to streamline, optimize, and scale mission-critical operations for businesses across industries. Our custom-built platforms empower organizations to achieve operational excellence, enhance collaboration, and unlock new levels of productivity.<br /><br />
  
    <strong>• ERP & CRM Solutions:</strong> We design and implement robust Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) systems that are uniquely aligned with your business processes. Our ERP systems consolidate core business functions — such as inventory management, procurement, finance, and human resources — into one unified platform, enabling real-time visibility and data-driven decision-making.<br />
    Our CRM platforms help you manage the complete customer lifecycle — from lead generation to sales conversion and after-sales support — ensuring customer satisfaction, retention, and growth.<br /><br />
  
    <strong>• Workflow Automation:</strong> We engineer intelligent automation systems to eliminate repetitive tasks, reduce human error, and accelerate workflows. Whether it’s order processing, employee onboarding, report generation, or compliance checks, our automation solutions help your team focus on high-value tasks, reducing operational costs and improving turnaround time.<br /><br />
  
    <strong>• Integration with Legacy Systems:</strong> Many enterprises still rely on legacy software for critical business functions. Our expert developers build integration layers and APIs that bridge the gap between modern software platforms and your existing legacy infrastructure, enabling seamless data exchange and system interoperability — without the need for a complete system overhaul.
  `
,  
    features: [
      "Web Applications",
      "Enterprise Software",
      "API Development",
      "Legacy System Modernization",
    ],
  },
  {
    icon: SettingsIcon,
    title: "Support & Maintenance",
    description: `
  <strong>Ensuring peak performance, reliability, and security for your technology systems.</strong><br /><br />
  At Hi-Standard Solutions, our Support & Maintenance services are designed to provide comprehensive, end-to-end care for your technology systems. We understand that even a moment of downtime can impact your operations, revenue, and customer trust — which is why we offer a robust framework to keep your business running smoothly, securely, and efficiently at all times.<br /><br />

  <strong>• 24/7 Technical Support:</strong> Our dedicated technical support team is available around the clock — 24 hours a day, 7 days a week — to resolve issues swiftly and minimize disruptions. Whether it’s a minor query or a critical system failure, you can rely on us for fast, knowledgeable assistance via multiple channels: phone, email, chat, or on-site intervention.<br />
  &nbsp;&nbsp;o Real-time incident response and troubleshooting<br />
  &nbsp;&nbsp;o Escalation protocols for high-priority cases<br />
  &nbsp;&nbsp;o Multi-tiered support structure (L1, L2, L3)<br />
  &nbsp;&nbsp;o SLA-backed response and resolution times<br /><br />

  <strong>• Regular Updates & Security Patches:</strong> Keeping your systems updated is key to ensuring optimal performance, enhanced features, and protection against vulnerabilities. We manage your updates proactively and seamlessly.<br />
  &nbsp;&nbsp;o Scheduled OS and software updates<br />
  &nbsp;&nbsp;o Automated patch management for security and compliance<br />
  &nbsp;&nbsp;o Compatibility checks with third-party integrations<br />
  &nbsp;&nbsp;o Performance tuning and system optimization<br /><br />

  <strong>• Disaster Recovery & Data Backup:</strong> We implement resilient backup and disaster recovery plans tailored to your business needs, ensuring that your data is always safe, accessible, and recoverable — no matter what happens.<br />
  &nbsp;&nbsp;o Secure, automated, and encrypted backups<br />
  &nbsp;&nbsp;o Offsite and cloud-based backup options<br />
  &nbsp;&nbsp;o Disaster recovery planning and failover systems<br />
  &nbsp;&nbsp;o Business continuity strategies and regular recovery drills<br /><br />

  Our commitment is not just to support — it's to empower. With Hi-Standard Solutions, you gain a technology partner who monitors, maintains, and protects your systems as if they were our own. This allows your internal team to focus on growth, innovation, and customer service, while we handle the technical backbone.
`
,
    features: [
      "Web Applications",
      "Enterprise Software",
      "API Development",
      "Legacy System Modernization",
    ],
  },
];

export default function ServicesPage() {
  const [expandedCards, setExpandedCards] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleText = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-sky-500 to-blue-700">
        <div className="absolute inset-0 bg-black/20" />
        <ParallaxSection className="absolute inset-0" speed={0.3}>
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Services background"
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-blue-100 leading-relaxed"
          >
            Comprehensive IT Solutions Tailored to Your Business Needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-1 lg:grid-cols-1 gap-8"
          >
            {services.map((service, index) => {
              const isExpanded = expandedCards[index];
              const truncatedDescription =
                service.description.length > 1000 && !isExpanded
                  ? service.description.slice(0, 1000) + "..."
                  : service.description;

              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4 transition-all duration-300" dangerouslySetInnerHTML={{ __html: truncatedDescription }}>
                        {/* {truncatedDescription} */}
                      </p>
                      {/* <p className="text-gray-600 leading-relaxed mb-6 transition-all duration-300">
                        {service.description2}
                      </p> */}
                      <Button
                        onClick={() => toggleText(index)}
                        variant="ghost"
                        className="text-blue-600 hover:text-blue-700 p-0"
                      >
                        {isExpanded ? "Show less" : "Show more"}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <ParallaxSection
        className="py-24 bg-gradient-to-r from-gray-50 to-blue-50"
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
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins"
            >
              Our Process
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              We follow a proven methodology that ensures successful project
              delivery and exceeds client expectations every time.
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
              {
                step: "01",
                title: "Discovery",
                desc: "Understanding your business needs and objectives",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "Developing a comprehensive solution roadmap",
              },
              {
                step: "03",
                title: "Development",
                desc: "Building and testing your custom solution",
              },
              {
                step: "04",
                title: "Deployment",
                desc: "Launching and supporting your new system",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-sky-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white mb-8 font-poppins"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-blue-100 mb-12 leading-relaxed"
            >
              Let's discuss how our services can transform your business and
              drive your success forward.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
                >
                  View Our Products
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
