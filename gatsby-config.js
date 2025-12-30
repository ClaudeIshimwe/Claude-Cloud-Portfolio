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
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'ShareSafely - File Share Web App',
        description:
          'A web application where users can securely upload files to Azure Blob Storage. Once uploaded, the application generates a unique, time-limited link for the user to share.',
        link: 'https://extensionkit.io/?ref=devfolio',
      },
      {
        name: 'VM Fleet Commander',
        description:
          'Implement an infrastructure-as-code approach to provision and manage virtual machines in Azure, using ARM templates and Bicep.',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'NetMaze Explorer',
        description:
          'Design a hybrid networking environment where on-premises networks connect securely to Azure resources using Azure\'s networking capabilities, ensuring secure data transition and effective resource access control.',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'InsightScape',
        description:
          'Design a comprehensive monitoring dashboard to gain insights, troubleshoot, and ensure smooth operations for all your previous projects.',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    certifications: [
      {
        name: 'Microsoft Certified: Azure Administrator Associate',
        description: 'Validates skills in implementing, managing, and monitoring Azure solutions',
      },
      {
        name: 'FinOps Certified Practitioner',
        description: 'Demonstrates expertise in cloud financial management and cost optimization',
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
        description: 'Terraform, Bicep, ARM Templates, Azure DevOps, GitHub Actions',
      },
      {
        name: 'Containers & Scripting',
        description: 'Docker, Kubernetes, Helm, Python, Bash',
      },
      {
        name: 'Monitoring & Optimization',
        description: 'Azure Monitor, Grafana, Cost Optimization, Resource Rightsizing',
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Claude Ishimwe Portfolio`,
        short_name: `Claude`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/icon.png`, // ensure this exists and is committed
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.nodes.map(node => ({
                title: node.frontmatter.title,
                description: node.excerpt,
                date: node.frontmatter.date,
                url: site.siteMetadata.siteUrl + node.fields.slug,
                guid: site.siteMetadata.siteUrl + node.fields.slug,
                custom_elements: [{ "content:encoded": node.html }],
              })),
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  nodes {
                    excerpt
                    html
                    fields { slug }
                    frontmatter { title date }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Claude Ishimwe RSS Feed",
          },
        ],
      },
    },
  ],
};
