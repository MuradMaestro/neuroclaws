import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cyan-900/50 via-teal-900/50 to-emerald-900/50 border-b border-cyan-800/20">
        <div className="container px-4 md:px-6 text-center">
          <Badge className="bg-white/20 text-white hover:bg-white/30 mb-4">Legal</Badge>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
            Privacy Policy
          </h1>
          <p className="mx-auto max-w-[700px] text-white/80 md:text-xl/relaxed mt-4">Last updated: May 2, 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Introduction</h2>
            <p>
              NeuroClaws ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
              please do not access the site or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Data</h3>
            <p>We may collect personal identification information, including but not limited to:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing address</li>
              <li>Payment information</li>
            </ul>

            <h3>Usage Data</h3>
            <p>We may also collect information on how the service is accessed and used. This data may include:</p>
            <ul>
              <li>Your computer's Internet Protocol address (IP address)</li>
              <li>Browser type and version</li>
              <li>Pages of our service that you visit</li>
              <li>Time and date of your visit</li>
              <li>Time spent on those pages</li>
              <li>Device identifiers</li>
            </ul>

            <h3>Animal Data</h3>
            <p>
              When using our NeuroClaws device and application, we collect data related to animal vital signs,
              including:
            </p>
            <ul>
              <li>Blood pressure (mmHg)</li>
              <li>Heart rate (BPM)</li>
              <li>Temperature</li>
              <li>Other physiological measurements</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul>
              <li>Provide, operate, and maintain our services</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Understand and analyze how you use our services</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you about updates, security alerts, and support</li>
              <li>Process transactions and send related information</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to maintain the safety of your personal
              data. However, no method of transmission over the Internet or electronic storage is 100% secure, and we
              cannot guarantee absolute security.
            </p>

            <h2>Data Retention</h2>
            <p>
              We will retain your personal data only for as long as necessary for the purposes set out in this Privacy
              Policy. We will retain and use your data to the extent necessary to comply with our legal obligations,
              resolve disputes, and enforce our policies.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              We may employ third-party companies and individuals to facilitate our service, provide the service on our
              behalf, perform service-related services, or assist us in analyzing how our service is used. These third
              parties have access to your personal data only to perform these tasks on our behalf and are obligated not
              to disclose or use it for any other purpose.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for use by children under the age of 13. We do not knowingly collect
              personally identifiable information from children under 13. If you are a parent or guardian and you are
              aware that your child has provided us with personal data, please contact us.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
              are effective when they are posted on this page.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li>By email: privacy@neuroclaws.com</li>
              <li>By phone: +1 (555) 123-4567</li>
              <li>By mail: 123 Innovation Drive, Tech City, TC 12345, United States</li>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <Link href="/" className="text-cyan-600 dark:text-cyan-400 hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
