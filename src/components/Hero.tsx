import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="container mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          variants={itemVariants}
        >
          Hi, I'm{' '}
          <span className="text-gradient animate-pulse-neon">
            Aravind
          </span>
        </motion.h1>

        <motion.h2 
          className="text-2xl md:text-3xl font-light mb-8 text-muted-foreground"
          variants={itemVariants}
        >
          Full-Stack & UI/UX Developer
        </motion.h2>

        <motion.p 
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-muted-foreground/80"
          variants={itemVariants}
        >
          B.Tech Graduate 2025 | Creating intuitive digital experiences through thoughtful design and seamless engineering
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <Button 
            size="lg" 
            className="btn-neon animate-glow"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="glass-card border-neon-blue/30 hover:border-neon-blue text-foreground"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-6 mb-12"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-card hover:bg-neon-blue/10 transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-6 h-6 group-hover:text-neon-blue transition-colors" />
          </motion.a>
          
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-card hover:bg-neon-blue/10 transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-6 h-6 group-hover:text-neon-blue transition-colors" />
          </motion.a>
          
          <motion.a
            href="mailto:aravind@example.com"
            className="p-3 glass-card hover:bg-neon-blue/10 transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-6 h-6 group-hover:text-neon-blue transition-colors" />
          </motion.a>
        </motion.div>

        <motion.button
          className="animate-float"
          variants={itemVariants}
          onClick={scrollToAbout}
        >
          <ArrowDown className="w-8 h-8 text-neon-blue animate-bounce" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;