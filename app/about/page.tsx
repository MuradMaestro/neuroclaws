import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import jamil from "@/public/Jamil.jpeg"
import sadigov from "@/public/Sadigov.jpeg"
import rashad from "@/public/rashad.jpeg"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cyan-900/50 via-teal-900/50 to-emerald-900/50 border-b border-cyan-800/20">
        <div className="container px-4 md:px-6 text-center">
          <Badge className="bg-white/20 text-white hover:bg-white/30 mb-4">Our Story</Badge>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
            Meet the Team Behind NeuroClaws
          </h1>
          <p className="mx-auto max-w-[700px] text-white/80 md:text-xl/relaxed mt-4">
            Get to know the creators who are revolutionizing how we understand animal emotions through technology.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200">Our Founders</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Creators</h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the innovative minds behind NeuroClaws who are passionate about bridging the gap between humans and
                animals.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Muhammed Jamil Mammadov */}
            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-square relative">
                <Image
                  src={jamil}
                  alt="Muhammed Jamil Mammadov"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold">Muhammed Jamil Mammadov</h3>
                <p className="text-cyan-400 font-medium mb-4">Founder & CEO</p>
                <p className="text-gray-500 dark:text-gray-400">
                  Jamil is the visionary behind NeuroClaws. With a background in neuroscience and animal behavior, he
                  identified the need for better tools to understand animal emotions and founded NeuroClaws to bridge
                  this gap.
                </p>
              </CardContent>
            </Card>

            {/* Tamerlan Sadigov */}
            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-square relative">
                <Image
                  src={sadigov}
                  alt="Tamerlan Sadigov"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold">Tamerlan Sadigov</h3>
                <p className="text-teal-400 font-medium mb-4">Co-Founder & CTO</p>
                <p className="text-gray-500 dark:text-gray-400">
                  Tamerlan brings extensive expertise in AI and machine learning to NeuroClaws. He developed the core
                  algorithms that analyze vital signs data to determine animal emotional states with unprecedented
                  accuracy.
                </p>
              </CardContent>
            </Card>

            {/* Tamerlan Askarov */}
            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-square relative">
                <Image
                  src={rashad}
                  alt="Tamerlan Askarov"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold">Tamerlan Askarov</h3>
                <p className="text-emerald-400 font-medium mb-4">Co-Founder & COO</p>
                <p className="text-gray-500 dark:text-gray-400">
                  Tamerlan oversees the operational aspects of NeuroClaws, ensuring that our technology reaches those
                  who need it most. His background in business and animal welfare helps guide the company's strategic
                  direction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cyan-950/30 to-teal-950/30 dark:from-cyan-950/50 dark:to-teal-950/50 border-y border-cyan-800/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">Our Mission</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Bridging the Communication Gap
              </h2>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                At NeuroClaws, our mission is to revolutionize how humans understand and interact with animals. We
                believe that by providing insights into animal emotional states, we can foster better care, more
                effective training, and deeper bonds between species.
              </p>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                Our team is dedicated to continuous innovation in the field of animal emotion analysis, pushing the
                boundaries of what's possible with technology and neuroscience.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400&text=NeuroClaws+Mission"
                alt="NeuroClaws Mission"
                width={400}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Our Values</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Stand For</h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our core values guide everything we do at NeuroClaws.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-cyan-200 hover:shadow-md transition-all">
              <CardContent className="p-6 text-center">
                <div className="mx-auto rounded-full bg-cyan-100 p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-cyan-600"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m7 10 2 2 6-6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We constantly push the boundaries of what's possible in animal emotion analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-md transition-all">
              <CardContent className="p-6 text-center">
                <div className="mx-auto rounded-full bg-teal-100 p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-teal-600"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Compassion</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We care deeply about animal welfare and strive to improve it through our technology.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 hover:shadow-md transition-all">
              <CardContent className="p-6 text-center">
                <div className="mx-auto rounded-full bg-emerald-100 p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-emerald-600"
                  >
                    <path d="M2 12h20"></path>
                    <path d="M12 2v20"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Accuracy</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We are committed to providing precise, reliable data that users can trust.
                </p>
              </CardContent>
            </Card>

            <Card className="border-cyan-200 hover:shadow-md transition-all">
              <CardContent className="p-6 text-center">
                <div className="mx-auto rounded-full bg-cyan-100 p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-cyan-600"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We believe our technology should be available to all who work with and care for animals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cyan-900/50 via-teal-900/50 to-emerald-900/50 border-t border-cyan-800/20 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Join Us in Revolutionizing Animal Care
          </h2>
          <p className="mx-auto max-w-[700px] md:text-xl/relaxed mt-4 mb-8">
            Be part of the movement to better understand and care for the animals in our lives.
          </p>
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-cyan-600 shadow transition-colors hover:bg-gray-100">
            <a href="/contact">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  )
}
