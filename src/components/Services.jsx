import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Ruler, Wrench, Building2 } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <HardHat className="w-12 h-12 text-primary" />,
      title: 'Planejamento e Gestão de Obras',
      description:
        'Coordenação completa do seu projeto, desde a concepção até a entrega, garantindo prazos e orçamentos.',
    },
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: 'Construções Residenciais e Comerciais',
      description:
        'Executamos construções de todos os portes, com foco na qualidade estrutural, segurança e acabamento impecável.',
    },
    {
      icon: <Wrench className="w-12 h-12 text-primary" />,
      title: 'Reformas e Ampliações',
      description:
        'Modernizamos e adaptamos espaços para atender às suas novas necessidades, valorizando seu imóvel.',
    },
    {
      icon: <Ruler className="w-12 h-12 text-primary" />,
      title: 'Projetos Estruturais',
      description:
        'Desenvolvemos projetos estruturais otimizados e seguros, utilizando tecnologia de ponta para cálculos precisos.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="servicos" className="section-padding bg-light-bg">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text">
            Nossas Soluções em Construção
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Oferecemos um portfólio completo de serviços para atender a todas as
            demandas da sua obra com máxima eficiência.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col text-center items-center"
              variants={cardVariants}
            >
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-text mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              <div className="mt-auto pt-6">
                <a
                  href="#contato"
                  className="font-semibold text-primary hover:text-secondary transition-colors duration-300"
                >
                  Saber Mais &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
