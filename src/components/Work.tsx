import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projectData = [
  {
    title: "Agentic AI System",
    category: "AI / Workflow Automation",
    tools: "LangChain, LangGraph, Python, LLMs",
    description: "A LangChain and LangGraph-based multi-agent system designed for orchestrating complex workflows. It features intelligent agents capable of dynamic task routing and contextual memory management. The system ensures high fault tolerance and seamless integration with a broad ecosystem of tools. It provides a scalable end-to-end pipeline for scheduled automation and detailed reporting.",
    image: "/images/agentic-ai.webp"
  },
  {
    title: "DermalScan",
    category: "Computer Vision / Healthcare",
    tools: "MobileNetV2 CNN, Haar Cascades, React UI",
    description: "A deep learning application that accurately detects and quantifies facial skin aging features. It leverages a sophisticated EfficientNetB0 CNN model combined with custom preprocessing techniques. The app analyzes user-uploaded images to identify wrinkles, dark spots, puffy eyes, and clear skin areas. It provides real-time, annotated visual feedback through a React-based web frontend.",
    image: "/images/dermalscan.webp"
  },
  {
    title: "Early Warning System",
    category: "Predictive Analytics / Logistics",
    tools: "Predictive AI Models, Machine Learning, Data Analytics",
    description: "An AI-powered system designed to help logistics companies manage delivery commitments and predict risks 48-72 hours in advance. It analyzes diverse data inputs including ETAs, weather, traffic, and external news signals. The model recommends precise interventions like rerouting or alternative carriers. This proactive approach significantly improves SLA adherence and operational reliability.",
    image: "/images/early-warning.webp"
  },
  {
    title: "Creator Operating System",
    category: "Machine Learning / Social Media",
    tools: "Multi-Platform APIs, ML Libraries, React",
    description: "A unified Super App platform developed to simplify multi-platform management for content creators. It consolidates notifications, posting, messaging, and analytics into a single dashboard. Features include an AI performance prediction model that forecasts reach, alongside an AI caption generator. It provides seamless multi-platform orchestration to enhance creator productivity.",
    image: "/images/creator-os.webp"
  },
  {
    title: "Pet Care Super App",
    category: "Complete Pet Ecosystem",
    tools: "Mobile App APIs, Database Management, Web Dashboard",
    description: "A digital platform connecting pet owners, veterinarians, shelters, and pet-related businesses. It resolves the struggle of managing scattered health records by providing a consolidated pet management system. Features include a digital health card, vet bookings, adoption listings, and emergency SOS. The app delivers a complete digital ecosystem for all pet needs.",
    image: "/images/pet-care.webp"
  },
  {
    title: "IoT-Based Healthcare System",
    category: "IoT / Healthcare Monitoring",
    tools: "IoT Sensors, Cloud Architecture, Analytics Dashboard",
    description: "An IoT-enabled solution for continuous, real-time patient vital monitoring. It automatically measures heart rate, temperature, blood pressure, SpO2, and activity levels. Data is seamlessly transmitted to a centralized cloud platform for remote viewing by healthcare professionals. This system enables early diagnosis, lowers costs, and prevents delayed medical interventions.",
    image: "/images/iot-healthcare.webp"
  }
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: 0.001, // Adds a 1-second lag for butter-smooth effect
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projectData.map((project, index) => (
            <div className="work-box work-noTouch" key={index}>
              <div className="work-border1">
                <svg width="100%" height="100%">
                  <line
                    x1="0"
                    y1="0"
                    x2="100%"
                    y2="0"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                  <line
                    x1="0"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                </svg>
              </div>
              <div className="work-border2">
                <svg width="100%" height="100%">
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="100%"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="7,7"
                  />
                  <line
                    x1="100%"
                    y1="0"
                    x2="100%"
                    y2="100%"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="7,7"
                  />
                </svg>
              </div>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <div
                  className="work-description"
                  style={{
                    marginTop: "1rem",
                    fontSize: "1.2rem",
                    lineHeight: "1.6",
                    color: "#c0c0c0",
                  }}
                >
                  <p>{project.description}</p>
                </div>
                <div className="work-content-reveal">
                  <h5>Skillset & tools</h5>
                  <div className="work-content-flex">
                    {project.tools.split(', ').map((tool, i) => (
                      <div className="work-tags" key={i}>{tool}</div>
                    ))}
                  </div>
                  <div className="work-arrow"></div>
                </div>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
