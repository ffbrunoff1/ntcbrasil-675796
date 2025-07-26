import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const infoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      label: 'Telefone',
      value: '+55 44 99104-0774',
      href: 'tel:+5544991040774',
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      label: 'Email',
      value: 'ffbrunoff@yahoo.com.br',
      href: 'mailto:ffbrunoff@yahoo.com.br',
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      label: 'Endereço',
      value: 'Padre Lebret 801, G05 Bloco 03',
    },
  ];

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Tem um projeto em mente? Adoraríamos ouvir sobre ele. Preencha o
            formulário ou nos contate diretamente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            className="bg-light-bg p-8 rounded-lg shadow-lg"
            variants={infoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-dark-text">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-lg text-secondary">
                      {item.label}
                    </h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-700 hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-700">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            action="https://formspree.io/f/your_form_id" // Replace with your Formspree ID
            method="POST"
            className="space-y-6"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Sua Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-primary text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Enviar Mensagem
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
