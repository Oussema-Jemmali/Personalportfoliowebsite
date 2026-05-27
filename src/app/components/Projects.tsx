import { motion } from 'motion/react';
import { Network, Activity, Shield, AlertTriangle, ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      icon: Network,
      title: "SME Enterprise LAN Infrastructure",
      description: "Designed and implemented a complete enterprise network infrastructure for a small-to-medium business, featuring multi-VLAN segmentation, inter-VLAN routing, DHCP services, and hierarchical network design with core, distribution, and access layers.",
      technologies: ["Cisco IOS", "VLANs", "OSPF", "STP", "DHCP", "ACLs"],
      highlights: [
        "Implemented 5 VLANs for department segregation",
        "Configured redundant links with STP",
        "Set up inter-VLAN routing with Layer 3 switch",
        "Deployed security policies with ACLs"
      ],
      color: "cyan",
      status: "Completed"
    },
    {
      icon: Activity,
      title: "Network Monitoring System",
      description: "Built a custom network monitoring solution using Python that performs real-time device health checks via ICMP and SSH, monitors bandwidth usage, tracks uptime statistics, and provides automated alerting for network anomalies.",
      technologies: ["Python", "ICMP", "SSH", "Linux", "Bash", "Cron"],
      highlights: [
        "Automated ping sweep for device discovery",
        "SSH-based configuration backup",
        "Real-time bandwidth monitoring",
        "Email alerting for downtime events"
      ],
      color: "emerald",
      status: "Completed"
    },
    {
      icon: Shield,
      title: "VLAN Segmentation & Firewall Lab",
      description: "Simulated a secure enterprise environment with network segmentation using VLANs, implemented firewall rules to control inter-VLAN traffic, configured port security, and deployed access control lists to enforce security policies.",
      technologies: ["Packet Tracer", "VLANs", "ACLs", "Port Security", "Firewall Rules"],
      highlights: [
        "Isolated guest, staff, and server networks",
        "Implemented stateful firewall rules",
        "Configured port security on all access switches",
        "Tested and documented security policies"
      ],
      color: "cyan",
      status: "Completed"
    },
    {
      icon: AlertTriangle,
      title: "Intrusion Detection System (Concept)",
      description: "Research and design proposal for implementing a network-based intrusion detection and prevention system. Explored signature-based and anomaly-based detection methods, evaluated open-source IDS/IPS solutions, and designed a deployment architecture.",
      technologies: ["Snort", "Suricata", "Wireshark", "Network Analysis", "Security Policies"],
      highlights: [
        "Researched IDS/IPS technologies",
        "Designed network tap architecture",
        "Created rule sets for common attacks",
        "Planned integration with SIEM"
      ],
      color: "emerald",
      status: "In Planning"
    }
  ];

  const getColorClasses = (color: string) => {
    return color === 'cyan'
      ? { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', hover: 'hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]' }
      : { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', hover: 'hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]' };
  };

  return (
    <section id="projects" className="py-20 relative">
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
              <span className="text-cyan-400">&gt;</span> Projects
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-emerald-400"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const colors = getColorClasses(project.color);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-6 ${colors.bg} border ${colors.border} backdrop-blur-sm ${colors.hover} transition-all duration-300 group`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 ${colors.bg} border ${colors.border} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <project.icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <div>
                        <h3 className={`font-mono ${colors.text} mb-1`}>{project.title}</h3>
                        <span className={`text-xs ${colors.text} opacity-70 font-mono`}>{project.status}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-mono text-gray-400 mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                          <span className={colors.text}>▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 text-xs ${colors.bg} border ${colors.border} ${colors.text} font-mono`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-gray-800">
                    <button className={`flex items-center gap-2 px-4 py-2 ${colors.bg} border ${colors.border} ${colors.text} text-sm font-mono hover:bg-opacity-20 transition-all duration-300`}>
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </button>
                    <button className={`flex items-center gap-2 px-4 py-2 ${colors.bg} border ${colors.border} ${colors.text} text-sm font-mono hover:bg-opacity-20 transition-all duration-300`}>
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
