import { motion } from 'framer-motion';
import { Brain, Code, Database, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'ReactJS', level: 65, icon: Code, color: 'hsl(194 100% 50%)' },
    { name: 'UI/UX', level: 70, icon: Zap, color: 'hsl(271 76% 53%)' },
    { name: 'Python & Rest APIs', level: 60, icon: Brain, color: 'hsl(330 81% 60%)' },
    { name: 'SQL', level: 55, icon: Database, color: 'hsl(180 100% 50%)' },
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

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            variants={itemVariants}
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="glass-card p-8 rounded-2xl">
                <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                      <span className="text-6xl font-bold text-gradient">A</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">
                  Full-Stack & UI/UX Developer
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  As a B.Tech graduate from the class of 2025, I'm passionate about creating 
                  user-centered digital experiences that seamlessly blend aesthetic appeal with 
                  functional excellence. My journey combines design thinking with engineering 
                  precision to craft meaningful and impactful solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in UI/UX design, front-end development, and user research. 
                  My goal is to bridge the gap between user needs and technical possibilities, 
                  creating interfaces that are not only beautiful but also intuitive and accessible.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Core Competencies */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-semibold mb-6">Core Competencies</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Card: TCP/IP Suite */}
                  <div className="rounded-xl p-6 border glass-card">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-lg">C++</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Expert</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">Proficiency</div>
                    <div className="flex items-center mb-2">
                      <div className="w-full h-2 bg-gray-200 rounded-full mr-2">
                        <div className="h-2 bg-green-400 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                      <span className="font-semibold text-sm">95%</span>
                    </div>
                  </div>
                  {/* Card: OSPF Routing */}
                  <div className="rounded-xl p-6 border glass-card">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-lg">Java</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Expert</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">Proficiency</div>
                    <div className="flex items-center mb-2">
                      <div className="w-full h-2 bg-gray-200 rounded-full mr-2">
                        <div className="h-2 bg-green-400 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                      <span className="font-semibold text-sm">92%</span>
                    </div>
                  </div>
                  {/* Card: BGP Protocol */}
                  <div className="rounded-xl p-6 border glass-card">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-lg">Python</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">Advanced</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">Proficiency</div>
                    <div className="flex items-center mb-2">
                      <div className="w-full h-2 bg-gray-200 rounded-full mr-2">
                        <div className="h-2 bg-green-400 rounded-full" style={{ width: '88%' }}></div>
                      </div>
                      <span className="font-semibold text-sm">88%</span>
                    </div>
                  </div>
                  {/* Card: DHCP/ARP */}
                  <div className="rounded-xl p-6 border glass-card">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-lg">JavaScript</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Expert</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">Proficiency</div>
                    <div className="flex items-center mb-2">
                      <div className="w-full h-2 bg-gray-200 rounded-full mr-2">
                        <div className="h-2 bg-green-400 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                      <span className="font-semibold text-sm">90%</span>
                    </div>
                  </div>
                  {/* Card: Network Security */}
                  <div className="rounded-xl p-6 border glass-card">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-lg">HTML</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">Advanced</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">Proficiency</div>
                    <div className="flex items-center mb-2">
                      <div className="w-full h-2 bg-gray-200 rounded-full mr-2">
                        <div className="h-2 bg-green-400 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="font-semibold text-sm">85%</span>
                    </div>
                  </div>
                  {/* Card: Wireless Protocols */}
                  <div className="rounded-xl p-6 border glass-card">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-lg">CSS</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">Advanced</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">Proficiency</div>
                    <div className="flex items-center mb-2">
                      <div className="w-full h-2 bg-gray-200 rounded-full mr-2">
                        <div className="h-2 bg-green-400 rounded-full" style={{ width: '87%' }}></div>
                      </div>
                      <span className="font-semibold text-sm">87%</span>
                    </div>
                  </div>
                    {/* Card: SQL */}
                    <div className="rounded-xl p-6 border glass-card">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-lg">SQL</span>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Expert</span>
                      </div>
                      <div className="text-sm text-muted-foreground mb-1">Proficiency</div>
                      <div className="flex items-center mb-2">
                        <div className="w-full h-2 bg-gray-200 rounded-full mr-2">
                          <div className="h-2 bg-green-400 rounded-full" style={{ width: '93%' }}></div>
                        </div>
                        <span className="font-semibold text-sm">93%</span>
                      </div>
                    </div>
                    {/* Card: Rest API's */}
                    <div className="rounded-xl p-6 border glass-card">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-lg">Rest API's</span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">Advanced</span>
                      </div>
                      <div className="text-sm text-muted-foreground mb-1">Proficiency</div>
                      <div className="flex items-center mb-2">
                        <div className="w-full h-2 bg-gray-200 rounded-full mr-2">
                          <div className="h-2 bg-green-400 rounded-full" style={{ width: '89%' }}></div>
                        </div>
                        <span className="font-semibold text-sm">89%</span>
                      </div>
                    </div>
                </div>
              </div>
              {/* Tools & Technologies */}
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-semibold mb-6">Tools & Technologies</h3>
                <div className="flex flex-col gap-3">
                  {['React', 'MongoDB', 'Docker', 'TensorFlow', 'PyTorch', 'Flask', 'Django', 'OpenCV', 'Figma'].map(tool => (
                    <div key={tool} className="rounded-lg px-4 py-3 text-base font-medium cursor-pointer border glass-card transition">
                      &gt; {tool}
                    </div>
                  ))}
                </div>
                <div className="rounded-xl p-6 mt-8 border glass-card">
                  <h4 className="font-semibold mb-4">Category Overview</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span>Total Skills</span><span className="font-bold">6</span></div>
                    <div className="flex justify-between"><span>Avg. Proficiency</span><span className="font-bold">90%</span></div>
                   
                    <div className="flex justify-between"><span>Tools Mastered</span><span className="font-bold">7</span></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Experience Section */}
            <motion.div variants={itemVariants} className="mt-16">
              <h3 className="text-3xl font-semibold text-left mb-8">
                <span className="text-gradient">Experience</span>
              </h3>
              <div className="w-full glass-card rounded-2xl border shadow flex flex-col md:flex-row p-8 gap-8" style={{background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)'}}>
                {/* Left: Internship Details */}
                <div className="flex-1 min-w-[300px]">
                  {/* Innsotes Solution */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">IS</span>
                    <div>
                      <h4 className="text-2xl font-bold leading-tight">Innsotes Solution</h4>
                      <div className="text-base text-muted-foreground">Frontend Developer Intern</div>
                    </div>
                    <span className="ml-auto bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">2023 Sep - 2023 Nov</span>
                  </div>
                  <ul className="list-disc pl-5 mb-4 text-base">
                    <li>Developed front-end components with React.js and integrated them with backend services using Node.js and Express.js.</li>
                    <li>Worked on SQL-based queries to fetch, filter, and process data for EMS platforms.</li>
                    <li>Integrated AI-based recommendation systems into EMS platforms for enhanced predictive analytics.</li>
                  </ul>
                  <div className="mb-4">
                    <span className="inline-flex items-center font-semibold text-base mb-1">
                      <span className="mr-2">⚡</span>Core Technologies & Expertise:
                    </span>
                    <span className="text-muted-foreground text-sm">
                     •React.js •JavaScript (ES6+) •HTML5 •CSS3 •Responsive UI •Node.js •Express.js •REST API •SQL •Data Filtering •Git •AI Recommendation Systems
                    </span>
                  </div>
                  <a href="https://innostes.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://innostes.com/</a>
                  <hr className="my-6" />
                  {/* BlackBucks */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block w-10 h-10 bg-gradient-to-br from-yellow-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">BB</span>
                    <div>
                      <h4 className="text-2xl font-bold leading-tight">BlackBucks</h4>
                      <div className="text-base text-muted-foreground">UI/UX Designer Intern</div>
                    </div>
                    <span className="ml-auto bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">2025 May - 2025 Aug</span>
                  </div>
                  <ul className="list-disc pl-5 mb-4 text-base">
                    <li>Collaborated with developers to design wireframes using Figma and integrate React.js-based interfaces for live projects.</li>
                    <li>Worked on API and database integration (SQL + MongoDB) between frontend and backend services.</li>
                    <li>Built responsive web components and contributed to frontend optimization for performance and scalability.</li>
                  </ul>
                  {/* Core Technologies & Expertise for BlackBucks as plain text */}
                  <div className="mb-4">
                    <span className="inline-flex items-center font-semibold text-base mb-1">
                      <span className="mr-2">⚡</span>Core Technologies & Expertise:
                    </span>
                    <span className="text-muted-foreground text-sm">
                      •React.js •JavaScript (ES6+) •HTML5 •CSS3 •Responsive UI •Figma •API Integration •SQL •MongoDB •Node.js
                    </span>
                  </div>
                  <a href="https://theblackbucks.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://theblackbucks.com/</a>
                </div>
                {/* Right: Metrics & Tags */}
                <div className="flex-1 flex flex-col gap-8 justify-center min-w-[250px]">
                  <div className="glass-card border rounded-xl p-6 mb-8" style={{background: 'rgba(20,20,20,0.55)', backdropFilter: 'blur(8px)'}}>
                    <h4 className="text-lg font-semibold mb-4 text-white">Performance Metrics</h4>
                    <div className="space-y-4">
                      <div className="glass-card border rounded-xl p-4 shadow flex flex-col items-center" style={{background: 'rgba(20,20,20,0.65)', backdropFilter: 'blur(6px)'}}>
                        <span className="text-2xl font-bold text-white">99.9%</span>
                        <span className="text-muted-foreground text-sm">Network Uptime Achieved</span>
                      </div>
                      <div className="glass-card border rounded-xl p-4 shadow flex flex-col items-center" style={{background: 'rgba(20,20,20,0.65)', backdropFilter: 'blur(6px)'}}>
                        <span className="text-2xl font-bold text-white">40%</span>
                        <span className="text-muted-foreground text-sm">Latency Reduction</span>
                      </div>
                      <div className="glass-card border rounded-xl p-4 shadow flex flex-col items-center" style={{background: 'rgba(20,20,20,0.65)', backdropFilter: 'blur(6px)'}}>
                        <span className="text-2xl font-bold text-white">60%</span>
                        <span className="text-muted-foreground text-sm">Throughput Improvement</span>
                      </div>
                      <div className="glass-card border rounded-xl p-4 shadow flex flex-col items-center" style={{background: 'rgba(20,20,20,0.65)', backdropFilter: 'blur(6px)'}}>
                        <span className="text-2xl font-bold text-white">15+</span>
                        <span className="text-muted-foreground text-sm">Projects Delivered</span>
                      </div>
                    </div>
                  </div>
                  <div className="glass-card border rounded-xl p-6" style={{background: 'rgba(20,20,20,0.55)', backdropFilter: 'blur(8px)'}}>
                    <h4 className="text-lg font-semibold mb-4 text-white">Skills Development</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1"><span className="text-white">Network Architecture</span><span className="text-green-400 font-bold">95% <span className="text-xs">+25%</span></span></div>
                        <div className="h-2 bg-gray-700 rounded-full"><div className="h-2 bg-green-400 rounded-full" style={{ width: '95%' }}></div></div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1"><span className="text-white">Protocol Design</span><span className="text-green-400 font-bold">92% <span className="text-xs">+30%</span></span></div>
                        <div className="h-2 bg-gray-700 rounded-full"><div className="h-2 bg-green-400 rounded-full" style={{ width: '92%' }}></div></div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1"><span className="text-white">Embedded Systems</span><span className="text-green-400 font-bold">88% <span className="text-xs">+40%</span></span></div>
                        <div className="h-2 bg-gray-700 rounded-full"><div className="h-2 bg-green-400 rounded-full" style={{ width: '88%' }}></div></div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1"><span className="text-white">System Optimization</span><span className="text-green-400 font-bold">90% <span className="text-xs">+35%</span></span></div>
                        <div className="h-2 bg-gray-700 rounded-full"><div className="h-2 bg-green-400 rounded-full" style={{ width: '90%' }}></div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;