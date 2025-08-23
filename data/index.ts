export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "TasteHub - Social Food Discovery Platform",
    des: "A MERN stack social platform for food enthusiasts featuring recipe sharing, restaurant reviews, and community-driven culinary experiences.",
    img: "/th.png",
    iconLists: ["/re.svg", "/node.svg", "/mongo.svg", "/express.svg"],
    link: "https://tastehub-main-ten.vercel.app",
  },
  {
    id: 2,
    title: "EventWave - Full Stack Event Management Platform",
    des: "A comprehensive MERN stack event management application with real-time features, user authentication, and seamless event creation and booking system.",
    img: "/ew.png",
    iconLists: ["/re.svg", "/node.svg", "/mongo.svg", "/express.svg"],
    link: "https://event-app-peach-six.vercel.app",
  },
  {
    id: 3,
    title: "YC Directory - Startup Discovery Platform",
    des: "A full stack Next.js application with Sanity CMS integration for browsing and discovering Y Combinator startups with advanced filtering and search capabilities.",
    img: "/yc.png",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/sanity.svg"],
    link: "https://yc-app-five.vercel.app",
  },
  {
    id: 4,
    title: "Fitness Tracker - Personal Health Dashboard",
    des: "A React fitness application powered by RapidAPI integration featuring workout tracking, progress analytics, and personalized health insights.",
    img: "/fa.png",
    iconLists: ["/re.svg", "/rapid.svg"],
    link: "https://fitness-app-wrmv.vercel.app",
  },
];

// "@/data" file
export const testimonials = [
  {
    id: 1, // Add a unique id
    quote:
      "Working with you on TasteHub was exceptional. Your ability to create an intuitive food discovery platform that connects our community of food enthusiasts was remarkable. The seamless user experience and robust MERN stack implementation exceeded our expectations. Your attention to detail in building our recipe sharing and review system was outstanding.",
    name: "Emeka",
    title: "Founder of TasteHub",
  },
  {
    id: 2, // Add a unique id
    quote:
      "Your work on EventWave transformed our vision into reality. The comprehensive event management system you built handles everything from user authentication to real-time event booking flawlessly. Your expertise in full-stack development and dedication to delivering a scalable solution made EventWave the success it is today.",
    name: "Zhiri John",
    title: "Founder of EventWave",
  },
  {
    id: 3, // Add a unique id
    quote:
      "Having you as our lead frontend developer on the Bayobo betting web app was a game-changer for Uleval. Your technical skills, leadership, and ability to deliver complex betting interfaces with precision were instrumental to our success. Your professionalism and innovative approach to frontend development truly elevated our platform.",
    name: "Gbenga",
    title: "CEO of Uleval",
  },
];
export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer Intern - Uleval Tech",
    desc: "Built a comprehensive betting web app using React.js and modern frontend technologies, focusing on real-time betting interfaces and user experience optimization.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Developer - TasteHub & EventWave",
    desc: "Led frontend development for two MERN stack applications - a social food discovery platform and an event management system, working closely with backend APIs and databases.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Mobile App Developer - Destiny Client",
    desc: "Built a complete chat application using React Native with real-time messaging capabilities. Successfully delivered APK with plans for app store deployment.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Mobile App Developer - Covet App",
    desc: "Developed a mobile application using React Native with modern UI/UX design principles. Currently in final stages before app store deployment.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
