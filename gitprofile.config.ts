// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Muhammadkafaby',
  },
  base: '/gitprofile/',
  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 10,
        exclude: {
          forks: false,
          projects: [],
        },
      },
    },
    external: {
      header: 'Featured Projects',
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio of Muhammad Kafaby',
    description: 'Full Stack Developer & Computer Science Student at Telkom University',
    imageURL: '',
  },
  social: {
    linkedin: 'muhammad-kafaby-8223b4268',
    facebook: 'muhammadkafaby1933',
    instagram: 'ahmad_kafaaa',
    dev: 'muhammadkafaby',
    phone: '+6289529202742',
    email: 'kafaby@student.telkomuniversity.ac.id',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1fzv3WUed18OGpaMv4sfhRuXARIRfqgg1/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [],
  certifications: [],
  educations: [
    {
      institution: 'Telkom University',
      degree: 'Software Engineering',
      from: '2022',
      to: 'Present',
    },
  ],
  publications: [
    {
  title: 'Real-time Earthquake Monitoring Application',
  conferenceName: '',
  journalName: 'Personal Project',
  authors: 'Muhammad Kafaby',
  link: 'https://monitor-earthquake.netlify.app/',
  description:
    'This project is a real-time earthquake monitoring web application that visualizes global seismic activity using an interactive map. It integrates live earthquake data APIs, filters results, and displays key metrics such as magnitude, location, and recent activity, providing users with an intuitive and informative dashboard.',
},
{
  title: 'Islamic Bot – Daily Worship Companion App',
  conferenceName: '',
  journalName: 'Personal Project',
  authors: 'Muhammad Kafaby',
  link: 'https://islamic-dev.netlify.app/',
  description:
    'A web-based Islamic companion application that provides daily worship information, including prayer schedules, daily prayers, daily Quran verses, and Qibla direction. Integrated with AI for enhanced user interaction, this project aims to make accessing Islamic resources easier and more intuitive for daily use.',
},

  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'Muhammadkafaby', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/Muhammadkafaby/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
