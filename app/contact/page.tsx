"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would connect to backend in production
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cyan-900/50 via-teal-900/50 to-emerald-900/50 border-b border-cyan-800/20">
        <div className="container px-4 md:px-6 text-center">
          <Badge className="bg-white/20 text-white hover:bg-white/30 mb-4">Get in Touch</Badge>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
            Contact Us
          </h1>
          <p className="mx-auto max-w-[700px] text-white/80 md:text-xl/relaxed mt-4">
            Have questions about NeuroClaws? We're here to help. Reach out to our team.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Get in Touch</h2>
                <p className="text-muted-foreground md:text-lg">
                  We'd love to hear from you. Whether you have a question about our product, pricing, or anything else,
                  our team is ready to answer all your questions.
                </p>
              </div>

              <div className="grid gap-6">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="rounded-full bg-cyan-100 p-3 text-cyan-600">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Email Us</h3>
                      <p className="text-muted-foreground">neuroclaws@gmail.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="rounded-full bg-teal-100 p-3 text-teal-600">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Call Us</h3>
                      <p className="text-muted-foreground">+994 (50) 216-20-31</p>
                      <p className="text-muted-foreground">Mon-Fri: 9AM - 5PM</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="rounded-full bg-emerald-100 p-3 text-emerald-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Visit Us</h3>
                      <p className="text-muted-foreground">
                        14 Markazi bulvar str,
                        <br />
                        Baku City,
                        <br />
                        Azerbaijan
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="lg:sticky lg:top-20">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cyan-950/30 to-teal-950/30 border-y border-cyan-800/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200">Location</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Find Us</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Visit our headquarters to learn more about NeuroClaws technology.
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-[400px] md:h-[500px]">
            {/* Google Maps iframe - Replace with your actual location */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.0848331588268!2d49.878066590597314!3d40.38481239781733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d4baa8d0d87%3A0x89d711e666d0f950!2sMaestro%20School!5e0!3m2!1saz!2slt!4v1746140099149!5m2!1saz!2slt"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NeuroClaws Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">FAQ</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about NeuroClaws.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">How accurate is NeuroClaws?</h3>
                <p className="text-muted-foreground">
                  NeuroClaws has been tested extensively and achieves an accuracy rate of over 90% in determining basic
                  emotional states such as stress, contentment, and excitement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Which animals can NeuroClaws work with?</h3>
                <p className="text-muted-foreground">
                  Currently, NeuroClaws is optimized for mammals, including dogs, cats, horses, and various wildlife
                  species. We're continuously expanding our capabilities to include more species.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">How do I use the tokens?</h3>
                <p className="text-muted-foreground">
                  Each token allows for one complete analysis session. Simply attach the NeuroClaws device to your
                  animal, start a session in the app, and one token will be deducted from your account.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Do you offer custom solutions?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer custom solutions for research institutions, veterinary practices, and other professional
                  settings. Please contact our team to discuss your specific needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
