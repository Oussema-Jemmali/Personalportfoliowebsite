import { motion } from "motion/react";
import { Server, Shield, Code, Terminal } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Server,
      title: "Network Infrastructure",
      description:
        "Hands-on experience with VLAN configuration, routing protocols, switching, DHCP services, and access control lists in enterprise environments",
    },
    {
      icon: Shield,
      title: "CyberSecurity",
      description:
        "Strong foundation in network security concepts, firewall configuration, basic penetration testing, and security best practices",
    },
    {
      icon: Terminal,
      title: "Tools & Technologies",
      description:
        "Hands-on experience with Cisco Packet Tracer, Linux administration, Wireshark traffic analysis, and cybersecurity tools including Suricata, ClamAV, Nmap, Hydra, and Gobuster for network management, monitoring, and security operations",
    },
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
              <span className="text-cyan-400">&gt;</span> About
              Me
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
                I'm a computer engineering student specialized
                in networks and systems, passionate about
                building secure and reliable IT infrastructures.
                My experience combines networking,
                cybersecurity, Linux administration, and cloud
                technologies through internships, freelance
                mentoring, and hands-on technical projects.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I have worked on network architecture, VLAN
                configuration, DHCP, VPNs, ACLs, and Linux-based
                infrastructure security. During my internships
                and projects, I used technologies such as
                Kubernetes, Docker, ELK Stack, Suricata, and
                ClamAV, while also developing monitoring and
                automation solutions using Python and Flask.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Currently expanding my expertise in{" "}
                <span className="text-emerald-400 font-mono">
                  Cybersecurity & DevSecOps
                </span>
                , I enjoy exploring the intersection of
                networking, security, cloud, and automation to
                design scalable and resilient systems. I'm also
                actively involved in technical communities and
                cybersecurity education through mentoring and
                training activities.
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
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index,
                  }}
                  className="flex gap-4 p-4 bg-gradient-to-r from-cyan-950/20 to-transparent border-l-2 border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-950/30 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-mono text-cyan-400 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {item.description}
                    </p>
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