const greeting = {
  username: "Mohammed Farrokhaali",
  title: "Hi all, I'm Farrokh",
  subTitle: emoji(
    "DevOps & Cloud Engineer 🚀 with 3+ years of experience in automating CI/CD pipelines, deploying infrastructure on Azure & AWS, and supporting real-time cloud applications. I’ve worked on Python-based web automation, Terraform IaC, Kubernetes clusters, and cross-team DevOps collaboration."
  ),
  resumeLink:
    "https://drive.google.com/file/d/your-resume-link/view?usp=sharing", // Replace with your real link
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/farrokh786",
  linkedin: "https://linkedin.com/in/farrokh786",
  gmail: "farrokhali78@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I Do",
  subTitle:
    "CLOUD-FIRST ENGINEER SPECIALIZING IN SCALABLE DEVOPS, AUTOMATION & TESTING",
  skills: [
    emoji("⚡ Automate CI/CD pipelines using Azure DevOps and GitHub Actions"),
    emoji("⚡ Deploy & monitor scalable apps using Kubernetes, Docker & Helm"),
    emoji("⚡ Build cloud infrastructure using Terraform & Ansible"),
    emoji("⚡ Set up automation and scraping pipelines using Azure Functions + Python"),
    emoji("⚡ Collaborate in agile teams & contribute to both DevOps and QA workflows")
  ],
  softwareSkills: [
    { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Terraform", fontAwesomeClassname: "fas fa-tools" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" },
    { skillName: "Jira", fontAwesomeClassname: "fas fa-tasks" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Indiana Wesleyan University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master's in Project Management (STEM)",
      duration: "Jan 2024 - Aug 2025",
      desc: "Focus on project leadership, cloud systems, and agile team collaboration."
    },
    {
      schoolName: "Andhra Loyola Institute of Engineering",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "B.Tech in Electrical Engineering",
      duration: "Jun 2017 - Oct 2020",
      desc: "Hands-on lab projects, automation, and system design."
    }
  ]
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "DevOps & Cloud Intern",
      company: "Nova Media",
      date: "May 2024 – Present",
      desc: "Reduced processing time by 90% by automating asset scraping and upload workflows using Azure Functions, Python, and Logic Apps. Integrated APIs to upload files to Google Drive and created low-code triggers for non-technical teams."
    },
    {
      role: "Cloud & DevOps Engineer",
      company: "TCS (Client: E-commerce)",
      date: "Jan 2021 – Aug 2023",
      desc: "Contributed to infrastructure automation and deployment of microservices using Terraform, Docker, and YAML pipelines. Supported Dev and QA teams, deployed VMs, and integrated CI/CD with Git strategies and monitoring tools like Grafana."
    }
  ]
};

const bigProjects = {
  title: "Projects",
  subtitle: "Highlighted cloud and DevOps projects",
  projects: [
    {
      image: require("./assets/images/project.png"),
      projectName: "Inventory Automation Platform",
      projectDesc:
        "Built asset scraping and notification automation using Azure Functions, Logic Apps, and Python scripts.",
      footerLink: [
        {
          name: "View GitHub",
          url: "https://github.com/farrokh786/Inventory-Project-function"
        }
      ]
    },
    {
      image: require("./assets/images/project.png"),
      projectName: "Terraform Infra Provisioning",
      projectDesc:
        "Provisioned multi-cloud infrastructure with Terraform. Managed VM deployments, NSGs, subnets, and automated cost-saving configurations.",
      footerLink: [
        {
          name: "View GitHub",
          url: "https://github.com/farrokh786/Terraformm"
        }
      ]
    }
  ],
  display: true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "Open to DevOps & Cloud roles. Let's connect!",
  number: "+1 (201) 978-7901",
  email_address: "farrokhali78@gmail.com"
};

const isHireable = true;

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  bigProjects,
  contactInfo,
  isHireable
};
