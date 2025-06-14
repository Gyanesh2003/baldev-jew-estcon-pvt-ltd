"use client";
import Image from "next/image";
import {useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const PAST_PROJECTS: {
  title: string;
  desc: string;
  images: string[];
  features: string[];
  location?: string;
}[] = [
  {
    title: "Sidhhi Gyanesh Enclave",
    desc: " A modern residential complex offering comfort, convenience, and green living.",
    images: ["/Gyanesh1.jpg", "/Gyanesh2.jpg"],
    features: ["8+ apartments", "Clubhouse & gym", "Children's play area","24/7 security"],
    location: "6QWC+FX5, Shreekhetra Vihar, Khandagiri, Bhubaneswar, Odisha 751019"
  },
  {
    title: "Radhika Tower",
    desc: "A premium residential complex with modern amenities and lush green surroundings.",
    images: ["/radhika.jpg"],
    features: ["50+ retail outlets", "Ample parking", "24/7 security"],
    location: "Alugadi Overbridge / Flyover, 6QWG+8FQ, Shreekhetra Vihar, Khandagiri, Bhubaneswar, Odisha 501791"
  },
];

const ONGOING_PROJECT: {
  title: string;
  desc: string;
  images: string[];
  features: string[];
  location?: string;
}[] = [
  {
    title: "BHIMSEN GALAXY",
    desc: "Upcoming high-rise apartments blending luxury with sustainability.",
    images: ["/galaxia1.jpg", "/galaxia2.jpg"],
    features: ["Green building", "Sky lounge", "Smart home features"],
  },
];

function ImageSlider({ images, interval = 2000 }: { images: string[], interval?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="w-full h-64 overflow-hidden rounded-xl shadow">
      <Image
        src={images[index]}
        alt="Project"
        width={800}
        height={400}
        className="w-full h-full object-cover transition-opacity duration-500"
      />
    </div>
  );
}

export default function Home() {
  // Smooth scroll handler
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Handler to open lightbox
  const openLightbox = (images: string[], index: number = 0) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    deliveryMethod: 'email' // 'email' or 'whatsapp'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDeliveryOptions, setShowDeliveryOptions] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowDeliveryOptions(true);
  };

  const handleSendMessage = async (method: 'email' | 'whatsapp') => {
    try {
      if (method === 'email') {
        // For email, you would typically send to your backend
        const mailtoLink = `mailto:bbhuyan@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
        window.location.href = mailtoLink;
      } else {
        // For WhatsApp
        const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
        window.open(`https://wa.me/919937060144?text=${whatsappMessage}`, '_blank');
      }
      
      // Reset form after sending
      setFormData({
        name: '',
        email: '',
        message: '',
        deliveryMethod: 'email'
      });
      setShowDeliveryOptions(false);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans text-[#171717]">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-blue-900/10 shadow-sm transition-all">
        <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <span className="text-xl sm:text-2xl font-bold tracking-wide text-blue-900">
            Baldev Jew Estcon <span className="text-yellow-600">Pvt. Ltd.</span>
          </span>
          <ul className="flex gap-6 text-base font-medium">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={e => handleNav(e, link.href)}
                  className="text-blue-900 hover:text-yellow-600 transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 max-w-5xl mx-auto px-4 flex flex-col gap-24">
        {/* About Section */}
        <section id="about" className="flex flex-col items-center text-center gap-8 py-12 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6 relative">
              <span className="relative">
                About Us
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-600"></span>
              </span>
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed font-serif">
                Baldev Jew Estcon Pvt. Ltd. stands as a beacon of excellence in the realm of real estate development. With a legacy built on trust and unwavering commitment to quality, we have established ourselves as a distinguished name in creating architectural masterpieces that blend timeless elegance with modern sophistication.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed font-serif">
                Our portfolio reflects our dedication to crafting spaces that transcend the ordinary, where every detail is meticulously curated to create an environment of luxury and comfort. From premium residential complexes to state-of-the-art commercial developments, each project embodies our vision of creating lasting value while maintaining the highest standards of quality and integrity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-100">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Our Vision</h3>
                  <p className="text-gray-600">To create architectural marvels that stand as testaments to excellence and innovation in real estate development.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-100">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Our Mission</h3>
                  <p className="text-gray-600">To deliver exceptional living spaces that enrich lives while maintaining the highest standards of quality and customer satisfaction.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-100">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Our Values</h3>
                  <p className="text-gray-600">Integrity, Excellence, Innovation, and Customer-Centric approach form the cornerstone of our business philosophy.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="flex flex-col gap-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center mb-2">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Past Projects */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4 border-b-2 border-yellow-600 inline-block">Past Projects</h3>
              <div className="flex flex-col gap-6">
                {PAST_PROJECTS.map((proj) => (
                  <div key={proj.title} className="bg-blue-50 rounded-lg shadow p-5 flex flex-col sm:flex-row gap-4 items-center hover:shadow-lg transition-shadow duration-300">
                    <div className="w-24 h-24 bg-gray-200 rounded overflow-hidden flex-shrink-0 flex items-center justify-center cursor-pointer" onClick={() => openLightbox(proj.images)}>
                      <ImageSlider images={proj.images} interval={2500} />
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="text-lg font-bold text-blue-900">{proj.title}</h4>
                      <p className="text-gray-700 text-sm mb-2">{proj.desc}</p>
                      <ul className="list-disc list-inside text-xs text-gray-600">
                        {proj.features.map(f => <li key={f}>{f}</li>)}
                      </ul>
                      {proj.location && (
                        <p className="text-xs text-gray-600 mt-2">
                          <span className="font-medium">Location:</span> {proj.location}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Upcoming Projects */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4 border-b-2 border-yellow-600 inline-block">Upcoming Projects</h3>
              <div className="flex flex-col gap-6">
                {ONGOING_PROJECT.map((proj) => (
                  <div key={proj.title} className="bg-yellow-50 rounded-lg shadow p-5 flex flex-col sm:flex-row gap-4 items-center hover:shadow-lg transition-shadow duration-300">
                    <div className="w-24 h-24 bg-gray-200 rounded overflow-hidden flex-shrink-0 flex items-center justify-center cursor-pointer" onClick={() => openLightbox(proj.images)}>
                      <ImageSlider images={proj.images} interval={1500} />
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="text-lg font-bold text-yellow-700">{proj.title}</h4>
                      <p className="text-gray-700 text-sm mb-2">{proj.desc}</p>
                      <ul className="list-disc list-inside text-xs text-gray-600">
                        {proj.features.map(f => <li key={f}>{f}</li>)}
                      </ul>
                      {proj.location && (
                        <p className="text-xs text-gray-600 mt-2">
                          <span className="font-medium">Location:</span> {proj.location}
                        </p>
                      )}
                      <button
                        onClick={() => {
                          const contactSection = document.querySelector('#contact');
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                            // Pre-fill the message with project name
                            setFormData(prev => ({
                              ...prev,
                              message: `I am interested in applying for a flat in ${proj.title}. Please provide more information.`
                            }));
                          }
                        }}
                        className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-700 transition-colors duration-200"
                      >
                        Apply for Flat
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="flex flex-col items-center gap-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">Contact Us</h2>
          <form onSubmit={handleSubmit} className="w-full max-w-lg bg-blue-50 rounded-lg shadow p-8 flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              required
              className="p-3 rounded border border-blue-200 focus:border-yellow-600 outline-none transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
              className="p-3 rounded border border-blue-200 focus:border-yellow-600 outline-none transition"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              rows={4}
              required
              className="p-3 rounded border border-blue-200 focus:border-yellow-600 outline-none transition"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-900 text-white font-semibold py-3 rounded hover:bg-yellow-600 transition-colors duration-200 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {showDeliveryOptions && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Choose Delivery Method</h3>
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => handleSendMessage('email')}
                    className="bg-blue-900 text-white font-semibold py-3 rounded hover:bg-yellow-600 transition-colors duration-200"
                  >
                    Send via Email
                  </button>
                  <button
                    onClick={() => handleSendMessage('whatsapp')}
                    className="bg-green-600 text-white font-semibold py-3 rounded hover:bg-green-700 transition-colors duration-200"
                  >
                    Send via WhatsApp
                  </button>
                  <button
                    onClick={() => setShowDeliveryOptions(false)}
                    className="bg-gray-200 text-gray-800 font-semibold py-3 rounded hover:bg-gray-300 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="text-center text-gray-700">
            <p>Email: <span className="text-blue-900 font-medium">bbhuyan@gmail.com</span></p>
            <p>Phone: <span className="text-blue-900 font-medium">+91-9937060144</span></p>
            <p>Address: <span className="text-blue-900 font-medium">297/298/641, Paika Nagar, Bhubaneswar, Odisha</span></p>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="mt-24 py-6 text-center text-gray-500 text-sm border-t border-blue-900/10 bg-white/80">
        &copy; {new Date().getFullYear()} Baldev Jew Estcon Pvt. Ltd. All rights reserved.
      </footer>
      {/* Lightbox Modal */}
      {lightboxOpen && (
        <Lightbox
          slides={lightboxImages.map(src => ({ src }))}
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
        />
      )}
    </div>
  );
}
