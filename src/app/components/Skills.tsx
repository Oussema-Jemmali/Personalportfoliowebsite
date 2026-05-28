import { motion } from "motion/react";
import { Network, Shield, Zap, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: Network,
      title: "Networking",
      color: "cyan",
      skills: [
        { name: "Cisco Technologies", level: 85 },
        { name: "VLANs & Trunking", level: 90 },
        { name: "Routing (RIP, OSPF, EIGRP)", level: 80 },
        { name: "Switching & STP", level: 85 },
        { name: "DHCP, DNS & NAT", level: 88 },
        { name: "ACLs & Network Segmentation", level: 82 },
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      color: "emerald",
      skills: [
        { name: "Network Security Fundamentals", level: 80 },
        { name: "Firewall Configuration", level: 78 },
        { name: "IDS/IPS Concepts", level: 72 },
        { name: "Vulnerability Assessment", level: 74 },
        { name: "Security Monitoring & Hardening", level: 76 },
        { name: "SIEM & Log Analysis Basics", level: 68 },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      color: "cyan",
      skills: [
        { name: "GNS3", level: 70 },
        { name: "Cisco Packet Tracer", level: 92 },
        { name: "Wireshark", level: 88 },
        { name: "Linux System Administration", level: 85 },
        { name: "Nmap", level: 80 },
        { name: "Kali Linux", level: 78 },
        { name: "Kubernetes Basics", level: 70 },
        { name: "Docker", level: 72 },
        { name: "Git & GitHub", level: 75 },
        { name: "Python Scripting", level: 60 },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    return color === "cyan"
      ? {
          bg: "bg-cyan-500/10",
          border: "border-cyan-500/30",
          text: "text-cyan-400",
          progress: "bg-cyan-400",
          glow: "shadow-cyan-400/50",
        }
      : {
          bg: "bg-emerald-500/10",
          border: "border-emerald-500/30",
          text: "text-emerald-400",
          progress: "bg-emerald-400",
          glow: "shadow-emerald-400/50",
        };
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-transparent via-[#0a0a0a] to-transparent"
    >
      <div className="container mx-auto px-6">
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
              Technical Skills
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-emerald-400"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const colors = getColorClasses(category.color);
              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: categoryIndex * 0.1,
                  }}
                  className={`p-6 ${colors.bg} border ${colors.border} backdrop-blur-sm hover:${colors.glow} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-3 ${colors.bg} border ${colors.border} rounded-lg`}
                    >
                      <category.icon
                        className={`w-6 h-6 ${colors.text}`}
                      />
                    </div>
                    <h3
                      className={`text-xl font-mono ${colors.text}`}
                    >
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map(
                      (skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-300 font-mono">
                              {skill.name}
                            </span>
                            <span
                              className={`text-xs ${colors.text} font-mono`}
                            >
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{
                                width: `${skill.level}%`,
                              }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1,
                                delay: 0.2 + skillIndex * 0.05,
                              }}
                              className={`h-full ${colors.progress} rounded-full`}
                              style={{
                                boxShadow: `0 0 10px ${category.color === "cyan" ? "rgba(6, 182, 212, 0.5)" : "rgba(16, 185, 129, 0.5)"}`,
                              }}
                            />
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-6 bg-gradient-to-r from-cyan-950/20 via-emerald-950/20 to-cyan-950/20 border border-cyan-500/20 backdrop-blur-sm"
          >
            <h3 className="text-xl font-mono text-cyan-400 mb-4">
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Network Design & Implementation",
                "Security Architecture",
                "Troubleshooting & Problem Solving",
                "Technical Documentation",
                "Team Collaboration",
                "Continuous Learning",
                "Project Management",
                "Security Awareness",
              ].map((competency, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                  }}
                  className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-mono hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 cursor-default"
                >
                  {competency}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}