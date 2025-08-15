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
  experiences: [
    {
  company: 'Transtrack.ID',
  position: 'DevSecOps Intern',
  from: '2024',
  to: '2025',
  description:
    'Assisted in implementing and managing security measures within the software development lifecycle, focusing on integrating security into CI/CD pipelines. Monitored and analyzed vulnerabilities using tools like SIEM and vulnerability scanners. Collaborated with the DevOps team to enhance infrastructure security, automate compliance checks, and ensure secure deployment processes. Contributed to documentation and incident response procedures to improve organizational resilience.',
},
{
  company: 'Himadira Telkom University',
  position: 'Head of Community Service Department',
  from: '2024',
  to: '2025',
  description:
    'Led the Community Service Department, responsible for planning, coordinating, and executing community outreach programs. Managed team operations, resource allocation, and collaboration with external partners to deliver impactful social initiatives.',
},
{
  company: 'Himadira Telkom University',
  position: 'Head of National Program "Membangun Negeri 2024"',
  from: '2024',
  to: '2024',
  description:
    'Directed the implementation of the national program in collaboration with the Ministry of Education, focusing on community empowerment through education and technology. Oversaw event planning, budgeting, and stakeholder engagement.',
},
{
  company: 'Himadira Telkom University',
  position: 'Security Division Staff – Dies Natalis D3 Software Engineering 2023',
  from: '2023',
  to: '2023',
  description:
    'Served in the security division for the anniversary event of D3 Software Engineering, ensuring safety, managing risk, and coordinating security protocols to maintain a safe event environment.',
},
{
  company: 'Himadira Telkom University',
  position: 'Logistics Coordinator – ONION 11MTILESS',
  from: '2023',
  to: '2023',
  description:
    'Coordinated logistics for the ONION 11MTILESS event, managing transportation, inventory, and venue arrangements to ensure smooth execution of all event activities.',
},
{
  company: 'Himadira Telkom University',
  position: 'Committee Member – Dira Mengajar',
  from: '2023',
  to: '2023',
  description:
    'Participated as a committee member in the Dira Mengajar program, focused on providing community education and support. Assisted in teaching, program scheduling, and event facilitation.',
},
{
  company: 'Himadira Telkom University',
  position: 'Person in Charge – Charity Program',
  from: '2023',
  to: '2023',
  description:
    'Oversaw planning and execution of the Charity Program, managing fundraising activities, coordinating with donors, and distributing aid to beneficiaries.',
},
  ],
  certifications: [
  { name: 'Meta AR Developer', authority: 'Meta', year: '2024' },
  { name: 'Using AR Foundation in Unity', authority: 'Meta', year: '2024' },
  { name: 'AR for Web Using JavaScript', authority: 'Meta', year: '2024' },
  { name: 'AR Games Using Vuforia SDK', authority: 'Meta', year: '2024' },
  { name: 'AR in Marketing Using Meta Spark', authority: 'Meta', year: '2024' },
  { name: 'Foundations of AR', authority: 'Meta', year: '2024' },
  { name: 'Unity and C# Basics', authority: 'Meta', year: '2024' },
  { name: 'Neural Networks and Deep Learning', authority: 'DeepLearning.AI', year: '2024' },
  { name: 'Structuring Machine Learning Projects', authority: 'DeepLearning.AI', year: '2024' },
  { name: 'Improving Deep Neural Networks', authority: 'DeepLearning.AI', year: '2024' },
  { name: 'Mathematics for Machine Learning: Linear Algebra', authority: 'Imperial College London', year: '2024' },
  { name: 'Mathematics for Machine Learning: Multivariate Calculus', authority: 'Imperial College London', year: '2024' },
  { name: 'Mathematics for Machine Learning: PCA', authority: 'Imperial College London', year: '2024' },
  { name: 'Certification Ethical Hacker', authority: 'Cisco Networking Academy', year: '2023' },
  { name: 'Cloud Practitioner Essentials', authority: 'Dicoding Academy', year: '2023' },
  { name: 'Cyber Threat Management', authority: 'Cisco Networking Academy', year: '2023' },
  { name: 'Introduction to Cybersecurity', authority: 'Cisco Networking Academy', year: '2023' },
  { name: 'Network Defense', authority: 'Cisco Networking Academy', year: '2023' },
  { name: 'MongoDB Indexes', authority: 'MongoDB', year: '2023' },
  { name: 'MongoDB Transactions', authority: 'MongoDB', year: '2023' },
  { name: 'Learn Basic SQL', authority: 'Dicoding Academy', year: '2023' },
  { name: 'Learn Basic Git with GitHub', authority: 'Dicoding Academy', year: '2023' }
  ],
  educations: [
    {
  institution: 'Telkom University',
  degree: 'S1 Informatika',
  from: '2022',
  to: 'Present',
},
{
  institution: 'SMA NU Kaplongan',
  degree: 'IPA',
  from: '2019',
  to: '2022',
},
{
  institution: 'Pondok Pesantren Darul Ma`arif',
  degree: 'Pendidikan Agama',
  from: '2016',
  to: '2022',
},
{
  institution: 'SMP Darul Ma`arif',
  degree: '-',
  from: '2016',
  to: '2019',
},
{
  institution: 'SDN KERTASEMAYA 1',
  degree: '-',
  from: '2010',
  to: '2016',
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
