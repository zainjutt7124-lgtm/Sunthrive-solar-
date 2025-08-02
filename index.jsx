import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import logo from "@/public/sunthrive-logo.png"; // Ensure this file is available

export default function SunthriveWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-yellow-400 py-6 px-8 shadow-md flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Sunthrive Logo" width={50} height={50} />
          <div className="text-2xl font-bold text-blue-900">Sunthrive Solar</div>
        </div>
        <div className="text-sm text-right">
          <p>Email: sunthrivesolar@gmail.com</p>
          <p>Phone: 0315-6603672</p>
        </div>
      </header>

      <section className="text-center py-20 px-6 bg-gradient-to-br from-yellow-200 to-blue-100">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Your Trusted Partner in Solar Energy</h1>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          We provide professional solar energy solutions for homes and businesses, helping you reduce electricity costs and contribute to a greener planet.
        </p>
        <Button className="text-white bg-blue-900 hover:bg-blue-800">Request a Free Survey</Button>
      </section>

      <section className="px-8 py-12 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Our Business Model</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Consultation & Survey</h3>
              <p>We begin with a site survey and consultation to understand your energy needs and space availability.</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Custom Solar Design</h3>
              <p>Our engineers design a tailored solar solution that maximizes energy output and system efficiency.</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Installation & Setup</h3>
              <p>Our professional installation team ensures safe and reliable setup with full system testing.</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">After-Sales Support</h3>
              <p>We provide long-term support including maintenance, monitoring, and system upgrades.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-8 py-12 bg-blue-50">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Get a Free Survey</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Input placeholder="Full Name" required />
          <Input placeholder="Email Address" type="email" required />
          <Input placeholder="Phone Number" required />
          <Input placeholder="Location (City/Area)" required />
          <Input placeholder="Estimated Monthly Electricity Bill" required />
          <Input placeholder="Property Type (Home/Office)" required />
          <Button className="col-span-1 md:col-span-2 bg-blue-900 text-white hover:bg-blue-800">Submit</Button>
        </form>
      </section>

      <footer className="bg-blue-900 text-white text-center py-6 mt-12">
        <p>© 2025 Sunthrive Solar. All rights reserved.</p>
      </footer>
    </div>
  );
}