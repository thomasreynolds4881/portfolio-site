module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Thomas Reynolds',
    // Main Site Title
    title: `Thomas Reynolds`,
    // Description that goes under your name in main bio
    description: `Aspiring technical talent in the Twin Cities area`,
    // Optional: Twitter account handle
    // Optional: Github account URL
    github: `https://github.com/thomasreynolds4881`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/thomas-reynolds-212917104/`,
    // Content of the About Me section
    about: `Hello! I'm a recent Computer Science and Data Analytics graduate from Drake University. My skillset includes over four years of experience with several programming languages, frameworks, and theoretical aspects of computer science. I've also worked in the IT field, in which I've gained valuable experience working with end users and honing my general troubleshooting skills. I aspire to deepen my computing knowledge and work as a full-stack software developer or similar position within the Twin Cities area.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'GiveMeFilm Movie Recommendation Website',
        description:
          'Worked with a small team to create a website using React and Flask to generate movie recommendations for users. We stored user information using MongoDB Atlas.',
        link: 'http://movie.givemefilm.com',
      },
      {
        name: 'Habitat For Humanity Case Study',
        description:
          'Using data given by Habitat For Humanity as well as external data from the Iowa Polk County assessor database, I worked with a team to create an easy to use web app that would predict the cost of a given project. We used a GLM to generate these predictions, and worked closely with our client to ensure we made a meaningful product.',
        link: '',
      },
      {
        name: 'Bank Failure Research',
        description:
          'Prepared and automated the process of adding data to a SQL database using Python. The data was prepared for machine learning questions regarding what historically causes bank failure.',
        link: '',
      },
      {
        name: 'Keypoint Pose Estimation with Animals',
        description:
          'Used Mask R-CNN to predict keypoint and bounding box position in different animals using PyTorch framework.',
        link: 'https://github.com/thomasreynolds4881/Animal-Keypoint-Estimation',
      },
      {
        name: 'Sims Status Bars',
        description:
          'Simple web app that automatically ticks down certain traits, emulating the "needs" mechanic from the Sims games.',
        link: 'http://sims-status.s3-website-us-east-1.amazonaws.com/',
      },
      {
        name: 'Twitter Text-To-Speech Bot',
        description:
          'A Twitter bot using the Python tweepy library that automatically reads certain tweets (filterable by keywords, account, location) out loud based on how it\'s been configured.',
        link: 'https://github.com/thomasreynolds4881/TwitterTTSBot',
      },
      {
        name: 'Shamir Secret Sharing',
        description:
          'An implementation of an ecyption method that uses a linear function to modify text.',
        link: 'https://github.com/thomasreynolds4881/Shamir-Secret-Sharing'
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Covetrus',
        description: 'IT Technician, June 2021 - Aug 2021',
        link: '',
      },
      {
        name: 'Drake University',
        description: 'IT Help Desk, Aug 2020 - May 2022',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programming Languages',
        description: 'Python, JavaScript, Java, C#.',
      },
      {
        name: 'Databases',
        description: 'MongoDB, MySQL.',
      },
      {
        name: 'Cloud Computing',
        description:
          'Currently working on a Amazon Web Services (AWS) Cloud Practitioner certification, experience with Google Cloud Platform (GCP) and Microsoft Azure as well.',
      },
      {
        name: 'Data Manipulation and Visualization',
        description:
          'Experience with aggregating and visualizing data using R, Tableau, Python, and Excel.',
      },
      {
        name: 'Machine Learning',
        description:
          'Have used PyTorch, TensorFlow, scikit-learn, and algorithms from scratch using Python to solve complex problems in the realms of machine learning, artificial intelligence, and computer vision.'
      },
      {
        name: 'Technical End User Support',
        description:
          'Experience with both in-person and remote troubleshooting with network devices, various software issues, user accounts, etc.',
      },
      {
        name: 'Microsoft Office Suite',
        description:
          'Excel, Access, Word, etc.'
      }
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "thomas-reynolds-website",
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
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
