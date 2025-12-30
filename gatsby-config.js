module.exports = {
  siteMetadata: {
    siteUrl: `https://monumental-chimera-b1ace3.netlify.app/`,
    name: 'Claude Ishimwe',
    title: `Claude Ishimwe | Azure Cloud Engineer`,
    description: `Azure Cloud Engineer`,
    author: ``,
    github: `https://github.com/ClaudeIshimwe`,
    linkedin: `https://www.linkedin.com/in/claudeishimwe/`,

    about: `Azure Cloud Engineer with strong experience in Azure infrastructure, CI/CD pipelines, and Infrastructure as Code.
Specialized in DevOps practices and FinOps-driven cost optimization to improve reliability, scalability, and cloud spend efficiency.`,

    projects: [
      {
        name: 'Onboard Automator',
        description:
          'Streamline and automate the process of onboarding a new employee into Azure AD and assigning necessary Azure resources.',
        link: 'https://github.com/ClaudeIshimwe/onboard-automator',
      },
      {
        name: 'ShareSafely - File Share Web App',
        description:
          'Secure file upload and sharing platform using Azure Blob Storage with time-limited access links.',
        link: 'https://github.com/ClaudeIshimwe/sharesafely',
      },
      {
        name: 'VM Fleet Commander',
        description:
          'Infrastructure-as-Code solution to provision and manage Azure VMs using ARM templates and Bicep.',
        link: 'https://github.com/ClaudeIshimwe/vm-fleet-commander',
      },
      {
        name: 'NetMaze Explorer',
        description:
          'Hybrid networking architecture connecting on-premises environments securely to Azure.',
        link: 'https://github.com/ClaudeIshimwe/netmaze-explorer',
      },
      {
        name: 'InsightScape',
        description:
          'Centralized monitoring and observability solution using Azure Monitor and Log Analytics.',
        link: 'https://github.com/ClaudeIshimwe/insightscape',
      },
    ],

    certifications: [
      {
        name: 'Microsoft Certified: Azure Administrator Associate (AZ-104)',
        description:
          'Validates skills in implementing, managing, and monitoring Azure environments.',
      },
      {
        name: 'FinOps Certified Practitioner',
        description:
          'Demonstrates expertise in cloud financial management and cost optimization.',
      },
    ],

    skills: [
      {
        name: 'Azure Core Services',
        description:
          'App Service, AKS, Virtual Machines, Storage, Key Vault, Azure Monitor',
      },
      {
        name: 'Infrastructure & Automation',
        description:
          'Terraform, Bicep, ARM Templates, Azure DevOps, GitHub Actions',
      },
      {
        name: 'Containers & Scripting',
        description:
          'Docker, Kubernetes, Helm, Python, Bash',
      },
      {
        name: 'Monitoring & Optimization',
        description:
          'Azure Monitor, Cost Optimization, Resource Rightsizing',
      },
      {
        name: 'Security & Governance',
        description:
          'Microsoft Entra ID, Azure Policy, RBAC, Microsoft Defender for Cloud',
      },
    ],
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-manifest`,
  ],
};
