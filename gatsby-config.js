module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://thomasreynoldscode.com/`,
    // Your Name
    name: 'Thomas Reynolds',
    // Main Site Title
    title: `Thomas Reynolds | Portfolio`,
    // Description that goes under your name in main bio
    description: `Software Engineer`,
    // Optional: Resume
    resume: `src/images/reynolds_resume.pdf`,
    // Optional: Github account URL
    github: `https://github.com/thomasreynolds4881`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/thomas-reynolds-212917104/`,
    // Content of the About Me section
    about: `I’ve been interested in programming since middle school, where I started out by coding some simple scripts and text-based games in BASIC. My technical skillset includes several programming languages, frameworks, and other aspects of computer science. I've also worked in the IT field, in which I've gained valuable experience working directly with end users and honing my general troubleshooting skills. Some of my hobbies include speedcubing, mountain biking, and mixology.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    education: [
      {
        name: 'Drake University',
        description: 'Bachelor\'s Degree in Computer Science and Data Analytics, May 2022'
      }
    ],
    projects: [
      {
        name: 'GiveMeFilm Movie Recommendation Website',
        description:
          'Worked with a small team to create a website that generates movie recommendations for users.',
        link: 'http://movie.givemefilm.com',
      },
      {
        name: 'Our Daily Drink',
        description:
          'A website for users to get a new drink recipe every day!',
        link: 'https://ourdailydrink.com',
      },
      {
        name: 'Habitat For Humanity Case Study',
        description:
          'Using data given by Habitat For Humanity as well as external data from the Iowa Polk County assessor, I worked with a team to create an easy to use web app that would predict the cost of a given HFH project. We used a statistical model to generate these predictions, and worked closely with our client to ensure we made a meaningful product.',
        link: '',
      },
      {
        name: 'Bank Failure Research',
        description:
          'Prepared and automated the process of adding data to a SQL database using Python. The data was prepared for machine learning questions regarding what historically causes bank failure.',
        link: '',
      },
      {
        name: 'Sims Status Bars',
        description:
          'Work-in-progress React app that automatically ticks down user-defined conditions, emulating the "needs" mechanic from the Sims games.',
        link: 'http://sims-status.s3-website-us-east-1.amazonaws.com/',
      },
      {
        name: 'Keypoint Pose Estimation with Animals',
        description:
          'Used Mask R-CNN to predict keypoint and bounding box position in different animals. Used PyTorch.',
        link: 'https://github.com/thomasreynolds4881/Animal-Keypoint-Estimation',
      },
      {
        name: 'Twitter Text-To-Speech Bot',
        description:
          'A Twitter bot using the Python tweepy library that automatically reads certain tweets (filterable by keywords, account, location) out loud based on how it\'s been configured.',
        link: 'https://github.com/thomasreynolds4881/TwitterTTSBot',
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Corelation — Software Developer, July 2022 - Present',
        description: 'Create, revise and maintain core C++ software to meet client business needs. Complete functional testing of software prior to code review and client delivery.',
        link: '',
      },
      {
        name: 'Covetrus — IT Technician, June 2021 - Aug 2021',
        description: 'Staged printers and workstations for a new Warehouse Management System. Provided remote support for different distribution centers.',
        link: '',
      },
      {
        name: 'Drake University — IT Help Desk, Aug 2020 - May 2022',
        description: 'Took phone calls and responded to tickets, troubleshooted issues remotely and directly with end users.',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programming Languages',
        description: 'Work experience with C++. Many projects using Python and JavaScript. Experience with many other languages such as Java, C#, C, and Lua. Experience with many frameworks including but not limited to Flask, React, web2py, and JavaFX.',
      },
      {
        name: 'Databases and APIs',
        description: 'Experience creating and querying databases using SQL and MongoDB. Experience making and testing API calls.',
      },
      {
        name: 'Data Manipulation and Visualization',
        description:
          'Experience with aggregating and visualizing data using R, Python, and Excel. General statistics knowledge.',
      },
      {
        name: 'Cloud Computing',
        description:
          'Experience using AWS to host projects; EC2, S3, CloudFront, Lambda. General cloud service knowledge.',
      },
      {
        name: 'Machine Learning',
        description:
          'Have used PyTorch, TensorFlow, scikit-learn, and algorithms to solve complex problems in the realms of machine learning, artificial intelligence, and computer vision.'
      },
      {
        name: 'Technical Support',
        description:
          'Experience with both in-person and remote troubleshooting with network devices, various software issues, user accounts, etc.',
      },
      {
        name: 'Microsoft Office Suite',
        description:
          'Work experience using and troubleshooting Excel, Access, Word, etc.'
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
        bucketName: "thomasreynoldscode.com",
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
        trackingId: `UA-232885350-1`, // Optional Google Analytics
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
