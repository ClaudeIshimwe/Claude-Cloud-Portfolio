module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://monumental-chimera-b1ace3.netlify.app/`,
    // Your Name
    name: 'Claude Ishimwe',
    // Main Site Title
    title: `Claude Ishimwe | Azure Cloud Engineer`,
    // Description that goes under your name in main bio
    description: `Azure Cloud Engineer | DevOps & FinOps`,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Github account URL
    github: `https://github.com/ClaudeIshimwe`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/claudeishimwe/`,
    // Content of the About Me section
    about: `Azure Cloud Engineer specializing in designing and implementing secure, scalable cloud infrastructure that delivers business value. Focused on end-to-end cloud migrations, Infrastructure as Code, and DevOps automation to optimize costs and accelerate digital transformation.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
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
    // Certifications section
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
    // Optional: List your skills, they must have `name` and `description`.
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
    // Services section
    services: [
      {
        name: 'Azure Cloud Architecture & Administration',
        description: 'Design and manage scalable, secure Azure environments with optimized performance and reliability',
      },
      {
        name: 'Cloud Migration & Modernization',
        description: 'End-to-end migration planning and execution, modernizing legacy applications for cloud-native operations',
      },
      {
        name: 'FinOps & Cloud Cost Optimization',
        description: 'Implement FinOps practices to reduce cloud spend while maintaining performance and scalability',
      },
      {
        name: 'Infrastructure as Code & DevOps Automation',
        description: 'Automate deployment and management using Terraform, Bicep, and CI/CD pipelines',
      },
      {
        name: 'Cloud Security & Governance',
        description: 'Implement security best practices, compliance frameworks, and governance controls for Azure environments',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
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
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
