import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "IT Infrastructure Intern",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "June 2025 - Present",
      description: "Supporting enterprise network infrastructure and providing technical assistance for network operations and security initiatives.",
      responsibilities: [
        "Assisted in configuring and deploying network equipment including switches, routers, and access points",
        "Performed routine network troubleshooting and resolved connectivity issues for 100+ end users",
        "Documented network topology, IP addressing schemes, and configuration standards",
        "Supported firewall rule updates and monitored security logs for suspicious activity",
        "Participated in infrastructure upgrade projects, including VLAN reconfiguration and equipment replacement",
        "Created technical documentation and standard operating procedures for common network tasks"
      ],
      technologies: ["Cisco IOS", "Windows Server", "Linux", "Network Monitoring", "Active Directory", "VPN"],
      color: "cyan"
    },
    {
      title: "Network Lab Assistant",
      company: "University Technology Department",
      location: "Campus",
      period: "January 2025 - May 2025",
      description: "Provided technical support for networking courses and maintained lab infrastructure for hands-on student learning.",
      responsibilities: [
        "Set up and maintained Cisco lab equipment for networking classes",
        "Assisted students with Packet Tracer simulations and troubleshooting exercises",
        "Configured lab networks for various scenarios including routing, switching, and security labs",
        "Prepared lab guides and documentation for common configuration tasks",
        "Monitored lab equipment health and reported hardware issues"
      ],
      technologies: ["Packet Tracer", "Cisco Equipment", "Network Troubleshooting", "Technical Support"],
      color: "emerald"
    }
  ];

  const getColorClasses = (color: string) => {
    return color === 'cyan'
      ? { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', accent: 'bg-cyan-400' }
      : { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', accent: 'bg-emerald-400' };
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-transparent via-[#0a0a0a] to-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-mono mb-4">
              <span className="text-cyan-400">&gt;</span> Experience
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-emerald-400"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-emerald-400 to-cyan-400"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const colors = getColorClasses(exp.color);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative pl-8 md:pl-20"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-[-6px] md:left-[26px] top-2 w-4 h-4 ${colors.accent} rounded-full border-4 border-black`}
                      style={{ boxShadow: `0 0 20px ${exp.color === 'cyan' ? 'rgba(6, 182, 212, 0.6)' : 'rgba(16, 185, 129, 0.6)'}` }}
                    ></div>

                    <div className={`p-6 ${colors.bg} border ${colors.border} backdrop-blur-sm hover:border-opacity-100 transition-all duration-300`}>
                      <div className="mb-4">
                        <h3 className={`text-xl font-mono ${colors.text} mb-2`}>{exp.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            <span className="font-mono">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span className="font-mono">{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className="font-mono">{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-sm font-mono text-gray-400 mb-3">Key Responsibilities:</h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                              <span className={`${colors.text} mt-1 flex-shrink-0`}>▸</span>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-mono text-gray-400 mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-3 py-1 text-xs ${colors.bg} border ${colors.border} ${colors.text} font-mono`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-6 bg-gradient-to-r from-cyan-950/20 to-emerald-950/20 border border-cyan-500/20"
          >
            <h3 className="text-lg font-mono text-cyan-400 mb-3">Additional Qualifications</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>• Currently pursuing industry certifications (CCNA, CompTIA Security+)</p>
              <p>• Active member of university cybersecurity club and networking society</p>
              <p>• Participated in CTF competitions and security workshops</p>
              <p>• Strong foundation in networking protocols (TCP/IP, DNS, DHCP, HTTP/HTTPS)</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
