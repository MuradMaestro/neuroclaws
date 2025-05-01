import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cyan-900/50 via-teal-900/50 to-emerald-900/50 border-b border-cyan-800/20">
        <div className="container px-4 md:px-6 text-center">
          <Badge className="bg-white/20 text-white hover:bg-white/30 mb-4">Legal</Badge>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
            Terms of Service
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
              Welcome to NeuroClaws. These Terms of Service ("Terms") govern your use of our website, products, and
              services ("Services"). By accessing or using our Services, you agree to be bound by these Terms.
            </p>
            <p>
              Please read these Terms carefully before using our Services. If you do not agree to these Terms, you may
              not access or use our Services.
            </p>

            <h2>Use of Services</h2>
            <h3>Account Registration</h3>
            <p>
              To access certain features of our Services, you may be required to register for an account. You agree to
              provide accurate, current, and complete information during the registration process and to update such
              information to keep it accurate, current, and complete.
            </p>

            <h3>Account Security</h3>
            <p>
              You are responsible for safeguarding the password that you use to access our Services and for any
              activities or actions under your password. We encourage you to use "strong" passwords (passwords that use
              a combination of upper and lower case letters, numbers, and symbols) with your account.
            </p>

            <h2>Subscription and Payment</h2>
            <h3>Subscription Plans</h3>
            <p>
              NeuroClaws offers various subscription plans with different features and pricing. By selecting a
              subscription plan, you agree to pay the applicable fees as described at the time of your purchase.
            </p>

            <h3>Billing</h3>
            <p>
              We use third-party payment processors to bill you through a payment account linked to your account. The
              processing of payments will be subject to the terms, conditions, and privacy policies of the payment
              processor in addition to these Terms.
            </p>

            <h3>Refunds</h3>
            <p>All purchases are final and non-refundable, except as required by law or at our sole discretion.</p>

            <h2>Intellectual Property</h2>
            <h3>Our Content</h3>
            <p>
              Our Services and their contents, features, and functionality are owned by NeuroClaws and are protected by
              copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>

            <h3>User Content</h3>
            <p>
              By submitting, posting, or displaying content on or through our Services, you grant us a worldwide,
              non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, create
              derivative works from, distribute, perform, and display such content.
            </p>

            <h2>Prohibited Uses</h2>
            <p>You agree not to use our Services:</p>
            <ul>
              <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
              <li>
                To transmit, or procure the sending of, any advertising or promotional material, including any "junk
                mail," "chain letter," "spam," or any other similar solicitation
              </li>
              <li>
                To impersonate or attempt to impersonate NeuroClaws, a NeuroClaws employee, another user, or any other
                person or entity
              </li>
              <li>
                To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services, or
                which may harm NeuroClaws or users of the Services
              </li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              In no event shall NeuroClaws, its directors, employees, partners, agents, suppliers, or affiliates be
              liable for any indirect, incidental, special, consequential, or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use the Services</li>
              <li>Any conduct or content of any third party on the Services</li>
              <li>Any content obtained from the Services</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>

            <h2>Disclaimer of Warranties</h2>
            <p>
              Our Services are provided on an "AS IS" and "AS AVAILABLE" basis, without any warranties of any kind,
              either express or implied. NeuroClaws disclaims all warranties, express or implied, including, but not
              limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United States, without
              regard to its conflict of law provisions.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material, we will provide at least 30 days' notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <ul>
              <li>By email: legal@neuroclaws.com</li>
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
