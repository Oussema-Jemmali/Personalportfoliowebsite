import { motion } from "motion/react";
import {
  Network,
  Activity,
  Shield,
  AlertTriangle,
  ExternalLink,
  Github,
  Building2,
  Server,
  Database,
  Globe,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      icon: Building2,
      title: "Banking Enterprise Network Infrastructure",
      description:
        "Designed and implemented a secure banking network infrastructure in Cisco Packet Tracer using hierarchical network architecture, VLAN segmentation, dynamic routing, subnetting, and enterprise-level network services.",
      technologies: [
        "Cisco Packet Tracer",
        "OSPF",
        "VLANs",
        "Subnetting",
        "Routing",
        "ACLs",
      ],
      highlights: [
        "Designed multiple subnetworks for banking departments",
        "Configured OSPF dynamic routing between routers",
        "Implemented VLAN segmentation for secure communication",
        "Applied ACLs to restrict unauthorized access",
        "Created scalable enterprise topology",
      ],
      color: "cyan",
      status: "Completed",
    },

    {
      icon: Activity,
      title: "LAN Monitoring & Analysis System",
      description:
        "Developed a Flask-based LAN monitoring system capable of analyzing local network devices, performing ICMP connectivity tests, calculating CIDR ranges, and monitoring host availability in real time.",
      technologies: [
        "Python",
        "Flask",
        "ICMP",
        "Linux",
        "CIDR",
        "Networking",
      ],
      highlights: [
        "Implemented automated ping checks for LAN devices",
        "Calculated and analyzed CIDR subnet ranges",
        "Displayed active hosts connected to the LAN",
        "Built backend logic using Python and Flask",
        "Created lightweight monitoring dashboard",
      ],
      color: "emerald",
      status: "Completed",
    },

    {
      icon: Shield,
      title: "Enterprise VLAN Segmentation & Security Lab",
      description:
        "Built a secure enterprise lab environment with VLAN segmentation, trunking, inter-VLAN routing, firewall configuration, and network security policies to simulate real-world enterprise infrastructure.",
      technologies: [
        "Cisco IOS",
        "VLANs",
        "Trunking",
        "ACLs",
        "Firewall",
        "STP",
      ],
      highlights: [
        "Separated employee, guest, and server networks",
        "Configured secure trunk links between switches",
        "Implemented ACL-based traffic filtering",
        "Simulated enterprise security policies",
        "Tested network isolation and connectivity",
      ],
      color: "cyan",
      status: "Completed",
    },

    {
      icon: Server,
      title: "Multi-Site HQ & Branch Network Architecture",
      description:
        "Designed and configured a multi-site enterprise network connecting headquarters and branch offices with routing, VLANs, firewall integration, redundancy, and secure communication between sites.",
      technologies: [
        "OSPF",
        "Cisco IOS",
        "VLANs",
        "Firewall",
        "VPN Concepts",
        "GNS3",
      ],
      highlights: [
        "Connected HQ and branch office infrastructures",
        "Configured inter-site routing and subnetting",
        "Integrated firewall protection into the topology",
        "Implemented scalable VLAN architecture",
        "Simulated enterprise WAN communication",
      ],
      color: "emerald",
      status: "Completed",
    },

    {
      icon: Database,
      title: "DHCP & DNS Server Deployment Lab",
      description:
        "Configured and deployed DHCP and DNS services using Linux virtual machines on VirtualBox to simulate enterprise network services and automated IP address management.",
      technologies: [
        "Linux",
        "VirtualBox",
        "DHCP",
        "DNS",
        "Ubuntu Server",
        "Networking",
      ],
      highlights: [
        "Configured dynamic IP address allocation with DHCP",
        "Implemented DNS name resolution services",
        "Connected multiple virtual machines in a lab network",
        "Tested client-server communication and connectivity",
        "Simulated enterprise infrastructure services",
      ],
      color: "cyan",
      status: "Completed",
    },

    {
      icon: Globe,
      title: "SDN Topology Simulation with Mininet & OpenDaylight",
      description:
        "Created a simple Software-Defined Networking (SDN) environment using Mininet and OpenDaylight to simulate network topologies, test host connectivity, and analyze ping statistics using Python scripts.",
      technologies: [
        "Mininet",
        "OpenDaylight",
        "Python",
        "SDN",
        "Linux",
        "OpenFlow",
      ],
      highlights: [
        "Built custom virtual network topologies with Mininet",
        "Integrated OpenDaylight SDN controller",
        "Tested host-to-host communication and latency",
        "Developed Python scripts for ping statistics analysis",
        "Explored SDN concepts and traffic management",
      ],
      color: "emerald",
      status: "Completed",
    },
  ];

  const getColorClasses = (color: string) => {
    return color === "cyan"
      ? {
          bg: "bg-cyan-500/10",
          border: "border-cyan-500/30",
          text: "text-cyan-400",
          hover:
            "hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
        }
      : {
          bg: "bg-emerald-500/10",
          border: "border-emerald-500/30",
          text: "text-emerald-400",
          hover:
            "hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
        };
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
              <span className="text-cyan-400">&gt;</span>{" "}
              Projects
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
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className={`p-6 ${colors.bg} border ${colors.border} backdrop-blur-sm ${colors.hover} transition-all duration-300 group`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 ${colors.bg} border ${colors.border} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <project.icon
                          className={`w-6 h-6 ${colors.text}`}
                        />
                      </div>
                      <div>
                        <h3
                          className={`font-mono ${colors.text} mb-1`}
                        >
                          {project.title}
                        </h3>
                        <span
                          className={`text-xs ${colors.text} opacity-70 font-mono`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-mono text-gray-400 mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map(
                        (highlight, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-gray-400 flex items-start gap-2"
                          >
                            <span className={colors.text}>
                              ▸
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(
                        (tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-2 py-1 text-xs ${colors.bg} border ${colors.border} ${colors.text} font-mono`}
                          >
                            {tech}
                          </span>
                        ),
                      )}
                    </div>
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