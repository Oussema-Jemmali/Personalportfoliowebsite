import { motion } from 'motion/react';
import { Server, Shield, Code, Terminal } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Server,
      title: "Network Infrastructure",
      description: "Hands-on experience with VLAN configuration, routing protocols, switching, DHCP services, and access control lists in enterprise environments"
    },
    {
      icon: Shield,
      title: "Security Fundamentals",
      description: "Strong foundation in network security concepts, firewall configuration, basic penetration testing, and security best practices"
    },
    {
      icon: Code,
      title: "Automation & Scripting",
      description: "Proficient in Python scripting for network automation, security tools development, and system administration tasks"
    },
    {
      icon: Terminal,
      title: "Tools & Technologies",
      description: "Extensive experience with Cisco Packet Tracer, Linux system administration, Wireshark packet analysis, and security monitoring tools"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-mono mb-4">
              <span className="text-cyan-400">&gt;</span> About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-emerald-400"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a junior network engineering and cybersecurity student with a passion for building secure, efficient network infrastructures.
                My journey in IT has been driven by hands-on experience in networking labs and enterprise environments, where I've developed
                practical skills in network design, security implementation, and system administration.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Through academic projects and internship experience, I've gained expertise in configuring VLANs, implementing routing protocols,
                managing switching infrastructure, and securing networks with firewalls and access control lists. I'm proficient in using industry-standard
                tools like Cisco Packet Tracer for network simulation, Linux for system management, Python for automation, and Wireshark for network analysis.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently expanding my skillset into <span className="text-emerald-400 font-mono">DevSecOps</span>, I'm exploring how security
                can be integrated into every stage of the development and operations lifecycle. My goal is to bridge the gap between network operations,
                security, and automation to build resilient, secure infrastructure for the future.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex gap-4 p-4 bg-gradient-to-r from-cyan-950/20 to-transparent border-l-2 border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-950/30 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-mono text-cyan-400 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
