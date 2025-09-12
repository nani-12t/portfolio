import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Chat Bot',
      description: 'Intelligent chatbot leveraging NLP and machine learning for real-time query handling and seamless user interaction.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
      tags: ['Python', 'OpenCV', 'TensorFlow', 'Machine Learning'],
      github: 'https://github.com/nani-12t/chatbot',
      demo: 'https://github.com',
      category: 'AI/ML'
    },
    {
      title: 'Speech Emotion Recognition',
      description: 'Advanced neural network model that analyzes vocal patterns to detect and classify human emotions in real-time.',
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=400&fit=crop',
      tags: ['Python', 'Deep Learning', 'Audio Processing', 'Neural Networks'],
      github: 'https://github.com/nani-12t/speech-emotion-recognition',
      demo: 'https://github.com',
      category: 'AI/ML'
    },
    {
      title: 'HealthCare Management System',
      description: 'Comprehensive healthcare management system enabling patient record management, appointment scheduling, and seamless doctor–patient interaction.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/nani-12t/startup-healthcare',
      demo: 'https://github.com',
      category: 'Frontend'
    },
    {
      title: 'Smart Data Analytics Platform',
      description: 'Full-stack application for data analysis with interactive visualizations and predictive modeling capabilities.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      tags: ['React', 'Node.js', 'PostgreSQL', 'D3.js'],
      github: 'https://github.com/nani-12t/smart-data-analytic',
      demo: 'https://github.com',
      category: 'Full Stack'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            variants={cardVariants}
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          
          <motion.p 
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
            variants={cardVariants}
          >
            Explore my latest work in AI, web development, and creative technology solutions
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="glass-card p-6 rounded-2xl group hover:scale-[1.02] transition-all duration-500"
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-neon-blue/20 border-neon-blue/30 text-neon-blue">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-3 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-neon-purple/30 text-neon-purple hover:bg-neon-purple/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="btn-neon flex-1"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Eye className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    className="glass-card border-neon-blue/30 hover:border-neon-blue text-foreground hover:bg-neon-blue/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            variants={cardVariants}
          >
            <Button
              size="lg"
              variant="outline"
              className="glass-card border-neon-blue/30 hover:border-neon-blue text-foreground hover:bg-neon-blue/10"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;