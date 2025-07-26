import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: 'beforeChildren',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const features = [
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: 'Inovação',
      description:
        'Utilizamos as mais recentes tecnologias e métodos construtivos para garantir eficiência e modernidade.',
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: 'Precisão',
      description:
        'Cada projeto é executado com atenção meticulosa aos detalhes, do planejamento à entrega final.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: 'Qualidade',
      description:
        'Compromisso com materiais de alta qualidade e mão de obra qualificada para resultados duradouros.',
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={imageVariants}>
            <img
              src="https://images.unsplash.com/photo-1581092448348-7b55c41696e4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Engenheiro analisando planta da obra"
              className="rounded-lg shadow-card w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div variants={textVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
              Sobre a <span className="gradient-text">NTC Brasil</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              A NTC Brasil é especializada em soluções inovadoras e eficientes
              para a construção civil. Com uma equipe de especialistas
              dedicados, transformamos visões em estruturas sólidas, garantindo
              qualidade e excelência em cada etapa do processo.
            </p>
            <p className="font-semibold text-xl text-secondary italic mb-8">
              "Construímos com Qualidade, Cuidamos dos Detalhes."
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                >
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark-text">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
