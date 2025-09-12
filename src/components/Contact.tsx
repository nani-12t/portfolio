import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'teajaaravind.bandaru@gmail.com',
      href: 'mailto:teajaaravind.bandaru@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8074235640',
      href: 'tel:+918074235640'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-neon-blue'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aravindbandaru/',
      color: 'hover:text-neon-purple'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:teajaaravind.bandaru@gmail.com',
      color: 'hover:text-neon-pink'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            variants={itemVariants}
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          
          <motion.p 
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Ready to collaborate or have a project in mind? Let's connect and build something amazing together.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-gradient">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="glass-card border-neon-blue/30 focus:border-neon-blue bg-background/50"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="glass-card border-neon-blue/30 focus:border-neon-blue bg-background/50"
                      />
                    </div>
                  </div>
                  
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="glass-card border-neon-blue/30 focus:border-neon-blue bg-background/50"
                  />
                  
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="glass-card border-neon-blue/30 focus:border-neon-blue bg-background/50 resize-none"
                  />
                  
                  <Button
                    type="submit"
                    className="btn-neon w-full animate-glow"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-gradient">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <motion.div
                      key={info.label}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-neon-blue/5 transition-colors cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-3 rounded-lg bg-neon-blue/10 border border-neon-blue/30">
                        <info.icon className="w-5 h-5 text-neon-blue" />
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-gradient">
                  Let's Connect
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  Follow me on social media for updates on my latest projects and tech insights.
                </p>
                
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 glass-card rounded-lg transition-all duration-300 ${social.color} hover:scale-110`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;