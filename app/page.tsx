"use client";
import React, { use, useState } from 'react';
import { CheckCircle, MessageSquare, Shield, Lock, Facebook, Twitter, Linkedin, Plus } from 'lucide-react';

interface Service {
  number: string;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  isOpen: boolean;
}

const TrueOceanWebsite: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([
    { question: "What products do you currently export?", isOpen: false },
    { question: "How do you ensure quality and consistency?", isOpen: false },
    { question: "Which markets do you serve?", isOpen: false }
  ]);

  const [email, setEmail] = useState<string>("");

  const toggleFAQ = (index: number): void => {
    setFaqs(faqs.map((faq, i) => ({
      ...faq,
      isOpen: i === index ? !faq.isOpen : faq.isOpen
    })));
  };

  const handleSubmit = (): void => {
    if (email) {
      console.log("Email submitted:", email);
      alert(`Thank you! We'll contact you at ${email}`);
      setEmail("");
    }
  };

  const services: Service[] = [
    {
      number: "/01",
      title: "Agricultural Exports",
      description: "We specialize in the export of agricultural commodities, starting with rice and spices. Our focus is on consistency in quality, packaging, and international compliance."
    },
    {
      number: "/02",
      title: "Sourcing & Procurement",
      description: "We work with verified suppliers and follow defined procurement standards to ensure product reliability and traceability."
    },
    {
      number: "/03",
      title: "Quality Control",
      description: "Each shipment follows documented quality checks aligned with export requirements and buyer specifications."
    },
    {
      number: "/04",
      title: "Packaging & Compliance",
      description: "Export grade packaging with attention to labeling, hygiene, and destination specific regulations."
    },
    {
      number: "/05",
      title: "Logistics Coordination",
      description: "Clear documentation, shipment planning, and coordination to ensure predictable delivery timelines."
    },
    {
      number: "/06",
      title: "Scalable Trade Operations",
      description: "Our systems are designed to expand across new products and markets without compromising consistency."
    }
  ];

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <section id="home" className="grid grid-cols-2 min-h-screen bg-gray-50">
        <div className="flex flex-col justify-center px-20 py-24">
          <h1 className="text-6xl font-normal leading-tight mb-8">
            Structured <span className="text-red-900">Export Solutions</span> for connected Global markets
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg">
            <span className="font-semibold text-gray-900">TrueOcean</span> is an export focused company built on reliable sourcing, clear processes, and long-term thinking. We currently export rice and spices, with systems designed to scale responsibly across products and regions.
          </p>
          <button 
            onClick={() => scrollToSection('services')}
            className="bg-red-900 text-white px-10 py-4 hover:bg-red-800 transition w-fit"
          >
            See Services
          </button>
        </div>
        <div
    className="bg-cover bg-center"
    style={{
      backgroundImage: "url('/hero-port.png')"
    }}
  />
      </section>

      {/* About Section */}
      <section id="about" className="grid grid-cols-2 bg-white">
        <div className="px-20 py-24 flex flex-col justify-center">
          <div className="text-red-900 text-sm font-semibold mb-5">About Us</div>
          <h2 className="text-5xl font-normal leading-tight mb-8">
            Structured export operations built on <span className="text-red-900">precision, reliability, and trust</span>
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            <span className="font-semibold text-gray-900">TrueOcean</span> was founded to bring clarity and consistency to global trade. We operate with a process driven approach focusing on quality, documentation, and dependable execution at every stage of export. While we begin with rice and spices, our foundation is built to support a broader portfolio as we grow.
          </p>
          <button className="bg-red-900 text-white px-10 py-4 hover:bg-red-800 transition w-fit">
            Learn More
          </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 bg-gray-50">
          <div className="flex flex-col items-center justify-center p-8 border-b border-r border-gray-200">
            <CheckCircle className="w-12 h-12 text-red-900 mb-4" />
            <p className="text-center text-gray-900 font-medium">Efficient, process led export operations</p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 border-b border-gray-200">
            <MessageSquare className="w-12 h-12 text-red-900 mb-4" />
            <p className="text-center text-gray-900 font-medium">Transparent communication from sourcing to shipment</p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 border-r border-gray-200">
            <Shield className="w-12 h-12 text-red-900 mb-4" />
            <p className="text-center text-gray-900 font-medium">Structured systems designed for scale</p>
          </div>
          <div className="flex flex-col items-center justify-center p-8">
            <Lock className="w-12 h-12 text-red-900 mb-4" />
            <p className="text-center text-gray-900 font-medium">Compliance first approach across markets</p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="grid grid-cols-2 bg-white min-h-[80vh]">



        <div className="bg-contain bg-center bg-no-repeat"
 style={{
          backgroundImage: "url('/founder.png')"
        }}></div>
        <div className="flex flex-col justify-center px-20 py-24">
          <p className="text-2xl text-gray-900 leading-relaxed mb-12">
            With a focus on structure and execution, we aim to build a dependable export organization that values precision over shortcuts. Our approach emphasizes long-term partnerships, ethical sourcing, and repeatable systems that stand the test of time.
          </p>
          <div>
            <div className="text-xl font-semibold text-gray-900 mb-1">Katrina Mendes</div>
            <div className="text-red-900 font-medium">Founder and Director</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-20 py-24 bg-white">
        <div className="text-red-900 text-sm font-semibold mb-5">Services</div>
        <h2 className="text-5xl font-normal mb-16">Our Capabilities</h2>
        <div className="grid grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 border border-gray-200">
              <div className="text-red-900 font-semibold mb-4">{service.number}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="grid grid-cols-2 bg-gray-50">
        <div className="flex flex-col justify-center px-20 py-24">
          <h2 className="text-5xl font-normal mb-8">Every shipment matters</h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
            At the core of <span className="font-semibold text-gray-900">TrueOcean</span> is a commitment to reliability and respect for suppliers, partners, and buyers. Each transaction is handled with care, clarity, and accountability, regardless of scale.
          </p>
          <button className="bg-red-900 text-white px-10 py-4 hover:bg-red-800 transition w-fit">
            Request Consultation
          </button>
        </div>
        <div className="bg-cover bg-center" style={{
          backgroundImage: "url('cta.png')"
        }}></div>
      </section>

      {/* FAQ Section */}
      <section className="px-20 py-24 bg-white">
        <div className="text-red-900 text-sm font-semibold mb-5">Frequently Asked Questions</div>
        <h2 className="text-5xl font-normal mb-16">We Answered All</h2>
        <div className="max-w-4xl">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-8 text-left hover:text-red-900 transition"
              >
                <span className="text-2xl font-normal text-gray-900">{faq.question}</span>
                <Plus className={`w-8 h-8 transition-transform ${faq.isOpen ? 'rotate-45' : ''}`} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="bg-red-900 px-20 py-20">
        <div className="text-white text-sm font-semibold mb-5">Have Any Question?</div>
        <h2 className="text-5xl font-normal text-white mb-12">Let Us Reach You</h2>
        <div className="flex gap-0 max-w-2xl">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-4 text-lg border-2 border-white bg-white text-gray-900"
          />
          <button
            onClick={handleSubmit}
            className="px-12 py-4 bg-red-900 text-white border-2 border-white hover:bg-red-800 transition text-lg font-medium"
          >
            Send
          </button>
        </div>
      </section>

      
    </div>
  );
};

export default TrueOceanWebsite; 