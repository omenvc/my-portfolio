// 🔹 NAV ITEMS
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

// 🔹 GRID SECTION (About Highlights)
export const gridItems = [
  {
    id: 1,
    title:
      "Focused on creating impactful digital products that solve real problems.",
    description: "Building fintech, mobility, and government tech platforms",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "Collaborating seamlessly across cross-functional teams of 6+ developers.",
    description: "Agile methodologies and technical writing",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description:
      "React Native, React.js, Next.js, Vue.js, TypeScript, JavaScript, Node.js, Express, MongoDB, HTML/CSS",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Building fintech, mobility, and government tech platforms with precision.",
    description:
      "Real-time payments, secure authentication, and scalable solutions",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title:
      "Currently working on DevSpax — a platform helping developers gain real-world coding experience.",
    description: "Contributing to core features and challenge architecture 💻",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's build something amazing together 🚀",
    description: "Ready to transform your ideas into reality",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// 🔹 PROJECTS SECTION
export const projects = [
  {
    id: 1,
    title: "BlowPay & BlowMoney (Fintech Apps)",
    des: "Two mobile fintech apps built with React Native for peer-to-peer transfers, wallet funding, withdrawals, and biometric-secured logins. Integrated real Nigerian bank APIs for live payments and transactions.",
    img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/08/20/56/0820565c-255d-2b17-6e47-776075b21653/Hotpot_3.png/460x998bb.webp", // App Store image
    iconLists: ["/re.svg", "/ts.svg", "/node.svg", "/mongo.svg"],
    link: "https://apps.apple.com/us/app/blowpay/id6502171466",
  },
  {
    id: 2,
    title: "COP29 Delegates Portal (GovTech)",
    des: "A secure portal developed for the Nigerian government to manage COP29 delegates. Features registration, verification, role-based access control, and cost-saving workflow automation resulting in ₦10 billion in savings.",
    img: "https://www.uneca.org/eca-events/sites/default/files/styles/event_detail_image/public/eventimages/cop29_official_logo_copy.png?itok=49DhbyK1", // Screenshot
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg"],
    link: "https://cop29.az/en/home",
  },
  {
    id: 3,
    title: "DevSpax (Developer Challenge Platform)",
    des: "An interactive platform for aspiring developers to gain real-world coding experience through hands-on challenges. Contributed to core features and challenge architecture.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NAuTUEZCKuHIXq-wTNQNKrjMjz4dB3LSHQ&s", // Screenshot
    iconLists: ["/re.svg", "/next.svg", "/tail.svg"],
    link: "https://devspax.com",
  },
  {
    id: 4,
    title: "KENDESOFT Landing Page",
    des: "A modern and responsive landing page built to showcase company services, projects, and brand identity. Focused on clean design, mobile responsiveness, SEO optimization, and fast load times.",
    img: "https://www.kendesoft.com/images/kendesoftlogo.svg", // Screenshot
    iconLists: ["/re.svg", "/next.svg", "/tail.svg"],
    link: "https://kendesoft.com",
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Chima's work on our fintech apps was incredible. His React Native expertise and ability to integrate real bank APIs helped us deliver secure, seamless mobile experiences loved by our users.",
    name: "SlantApp TL™",
    title: "Project Lead",
  },
  {
    id: 2,
    quote:
      "Chima led our frontend development for the COP29 Portal. His ability to translate complex government workflows into simple UI experiences saved us over ₦10 billion in operations.",
    name: "Okike Consult",
    title: "Project Manager",
  },
  {
    id: 3,
    quote:
      "Collaborating with Chima on DevSpax was a delight. His dedication to mentorship and clean code helped us scale fast and improve the learning experience for aspiring developers.",
    name: "DevSpax",
    title: "Co-Founder",
  },
];

// 🔹 WORK EXPERIENCE
export const workExperience = [
  {
    id: 1,
    title: "Mobile Software Engineer (Frontend) — SlantApp TL™",
    desc: "Led development of BlowPay and BlowMoney fintech apps using React Native. Integrated real bank APIs for live payments, transfers, and withdrawals. Built secure authentication with biometric login support.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer (Frontend) — VorbTech Innovative Solution",
    desc: "Collaborated with 6+ developers to build a shared ride-hailing mobile app using React Native. Implemented real-time trip booking, live driver tracking, route mapping, and Paystack payment integration.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineer (Frontend) — Okike Consult",
    desc: "Led development of COP29 Nigerian Delegates Portal, a mission-critical platform for managing Nigeria's COP29 participation. Streamlined government workflows, resulting in over ₦10 billion in cost savings.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title:
      "Information Technology Support Technician — Apple & Windows Experience Shop",
    desc: "Provided technical support for hardware and software issues across Apple and Windows devices. Diagnosed and resolved technical issues, performed maintenance, and assisted customers with device setup.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  { id: 1, img: "/git.svg", link: "https://github.com/omenvc" },
  { id: 2, img: "/link.svg", link: "https://linkedin.com/in/chimavalentine" },
];

export const companies = [
  { id: 1, name: "cloudinary", img: "/cloud.svg", nameImg: "/cloudName.svg" },
  { id: 2, name: "appwrite", img: "/app.svg", nameImg: "/appName.svg" },
  { id: 3, name: "HOSTINGER", img: "/host.svg", nameImg: "/hostName.svg" },
  { id: 4, name: "stream", img: "/s.svg", nameImg: "/streamName.svg" },
  { id: 5, name: "docker.", img: "/dock.svg", nameImg: "/dockerName.svg" },
];
