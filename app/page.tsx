import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Brain, BarChart3, Heart, Check } from "lucide-react"
import logo from "@/public/logo.png"
import cat from "@/public/car.jpg"
import app from "@/public/app.png"
import pet from "@/public/pet.jpg"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cyan-900/50 via-teal-900/50 to-emerald-900/50 border-b border-cyan-800/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Understand Animal Emotions Through Technology
              </h1>
              <p className="max-w-[600px] text-white md:text-xl">
                NeuroClaws leverages mmHg, BPM, HR, Temp measurements and AI-driven analysis to assess animal emotional
                states, presenting insights through detailed graphs and metrics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
                  <Link href="#subscription">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-primary hover:bg-white/10">
                  <Link href="#how-it-works">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={logo}
                alt="NeuroClaws Device"
                width={400}
                height={400}
                className="rounded-lg "
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is NeuroClaws */}
      <section className="w-full py-12 md:py-24 lg:py-32" id="what-is">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200">Innovative Technology</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What is NeuroClaws?</h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                NeuroClaws leverages mmHg, BPM, HR, Temp measurements and AI-driven analysis to assess animal emotional
                states, presenting insights through detailed graphs and bpm metrics.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Image
              src={cat}
              alt="NeuroClaws in action"
              width={500}
              height={500}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li className="flex items-start gap-4">
                  <div className="rounded-full bg-cyan-100 p-2 text-cyan-600">
                    <Activity className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Vital Sign Monitoring</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Tracks mmHg, BPM, HR, and temperature to gather comprehensive data about animal physiological
                      responses.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-full bg-teal-100 p-2 text-teal-600">
                    <Brain className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">AI-Driven Analysis</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Utilizes advanced artificial intelligence to interpret physiological data and determine emotional
                      states.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-full bg-emerald-100 p-2 text-emerald-600">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Detailed Insights</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Presents findings through intuitive graphs and metrics for easy interpretation and understanding.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why do we need it */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cyan-950/30 to-teal-950/30 dark:from-cyan-950/50 dark:to-teal-950/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">Essential Tool</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why do we need it?</h2>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                We need NeuroClaws to accurately interpret animal emotional states, enabling better understanding, care,
                and interaction in fields like research, training, and conservation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-teal-600" />
                  <span>Enhanced animal welfare through better understanding</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-teal-600" />
                  <span>Improved research outcomes in animal behavior studies</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-teal-600" />
                  <span>More effective training and conservation efforts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-teal-600" />
                  <span>Bridging the communication gap between humans and animals</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src={app}
                alt="Animal Care with NeuroClaws"
                // width={400}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How will we use it */}
      <section className="w-full py-12 md:py-24 lg:py-32" id="how-it-works">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">User Experience</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How will we use it?</h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                NeuroClaws will be used through a mobile application that processes mmHg and bpm data via AI, presenting
                results in real-time graphs for easy interpretation.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <Card className="border-cyan-200 hover:shadow-md transition-all">
              <CardHeader className="text-center">
                <div className="mx-auto rounded-full bg-cyan-100 p-3 w-16 h-16 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="mt-4">Data Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Attach the NeuroClaws device to monitor vital signs including mmHg, BPM, heart rate, and temperature.
                </p>
              </CardContent>
            </Card>
            <Card className="border-teal-200 hover:shadow-md transition-all">
              <CardHeader className="text-center">
                <div className="mx-auto rounded-full bg-teal-100 p-3 w-16 h-16 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="mt-4">AI Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Our advanced AI algorithms analyze the collected data to determine emotional states and stress levels.
                </p>
              </CardContent>
            </Card>
            <Card className="border-emerald-200 hover:shadow-md transition-all">
              <CardHeader className="text-center">
                <div className="mx-auto rounded-full bg-emerald-100 p-3 w-16 h-16 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="mt-4">Insight Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  View real-time graphs and metrics on your mobile device to understand the animal's emotional state.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Neurotechnology */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cyan-900/50 via-teal-900/50 to-emerald-900/50 border-y border-cyan-800/20 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Neurotechnology to analyze stress
              </h2>
              <p className="max-w-[600px] md:text-xl">
                NeuroClaws overcomes communication limitations by analyzing mmHg and bpm data to assess animals'
                emotional states. Unlike traditional methods, which rely on behavior, it provides real-time insights
                through AI, enhancing care and interactions. This technology bridges the gap, fostering a deeper
                understanding between humans and animals.
              </p>
              <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
                <Link href="#subscription">Start Using NeuroClaws</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                src={pet}
                alt="NeuroClaws Technology"
                width={400}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="w-full py-12 md:py-24 lg:py-32" id="subscription">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200">Pricing</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Subscription Plans</h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that works best for your needs. Each token is $0.10 USD.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
            <Card className="border-cyan-200 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <CardDescription>For occasional use</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2">10 Tokens</div>
                <div className="text-2xl font-medium text-gray-500 dark:text-gray-400 mb-4">$1.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-cyan-600" />
                    <span>10 analysis sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-cyan-600" />
                    <span>Basic reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-cyan-600" />
                    <span>Email support</span>
                  </li>
                </ul>
              </CardContent>
              </div>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600">
                  Subscribe
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-teal-200 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
              <CardHeader>
                <CardTitle>Standard</CardTitle>
                <CardDescription>For regular use</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2">20 Tokens</div>
                <div className="text-2xl font-medium text-gray-500 dark:text-gray-400 mb-4">$2.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-teal-600" />
                    <span>20 analysis sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-teal-600" />
                    <span>Detailed reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-teal-600" />
                    <span>Priority email support</span>
                  </li>
                </ul>
              </CardContent>
              </div>
              <CardFooter >
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600">
                  Subscribe
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-emerald-200 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
              <CardHeader>
                <CardTitle>Professional</CardTitle>
                <CardDescription>For frequent use</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2">50 Tokens</div>
                <div className="text-2xl font-medium text-gray-500 dark:text-gray-400 mb-4">$4.50</div>
                <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-1 rounded mb-4">
                  Save 10%
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-emerald-600" />
                    <span>50 analysis sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-emerald-600" />
                    <span>Advanced reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-emerald-600" />
                    <span>Phone support</span>
                  </li>
                </ul>
              </CardContent>
              </div>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600">
                  Subscribe
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-cyan-200 hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between">
              <div>
              <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xs font-bold px-3 py-1">
                BEST VALUE
              </div>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For intensive use</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2">100 Tokens</div>
                <div className="text-2xl font-medium text-gray-500 dark:text-gray-400 mb-4">$8.00</div>
                <div className="inline-block bg-cyan-100 text-cyan-800 text-xs font-medium px-2 py-1 rounded mb-4">
                  Save 20%
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-cyan-600" />
                    <span>100 analysis sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-cyan-600" />
                    <span>Premium reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-cyan-600" />
                    <span>24/7 dedicated support</span>
                  </li>
                </ul>
              </CardContent>
              </div>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600">
                  Subscribe
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cyan-950/30 to-teal-950/30 dark:from-cyan-950/50 dark:to-teal-950/50 border-t border-cyan-800/20">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to understand your animals better?
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed mt-4 mb-8">
            Join thousands of researchers, trainers, and animal lovers who are using NeuroClaws to bridge the
            communication gap.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600"
            >
              <Link href="#subscription">Get Started Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
