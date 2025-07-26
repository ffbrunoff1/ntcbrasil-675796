import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-white"
    >
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>
      <motion.div
        className="relative z-20 text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
          variants={itemVariants}
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
        >
          Transformando Ideias em{' '}
          <span className="text-primary">Realidade</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl max-w-3xl mx-auto mb-8"
          variants={itemVariants}
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}
        >
          Excelência e Inovação na Construção Civil
        </motion.p>
        <motion.div variants={itemVariants}>
          <a
            href="#contato"
            className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-block"
          >
            Construir Juntos
          </a>
        </motion.div>
      </motion.div>
      <motion.a
        href="#sobre"
        className="absolute bottom-10 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        <ArrowDown size={32} className="text-white" />
      </motion.a>
    </section>
  );
}
