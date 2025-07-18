import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nathan Boscher",
  initials: "NB",
  url: "https://dillion.io",
  location: "Philadelphia, PA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "A computer enthusiast with a designer to learn and grow. I am a full stack developer with a passion for building and designing for the web. ",
  summary:
    "My objective is to create exceptionally engaging digital experiences that consistently engage users. I am fully prepared and eager to contribute to a prestigious design firm, applying my creative skills in the design and development of first-class web applications.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "html",
    "css",
    "Node.js",
    "Python",
    "figma",
    "penpot",
    "adobe xd",
    "adobe photoshop",
    "adobe illustrator",
    "affinity designer",
    "Docker",
    "Kubernetes",
    
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "nboscher@proton.me",
    tel: "+16107150105",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ndboscher",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/Linkedin-nb",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Freelance Interactive ",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Web Designer, illustrator, Developer",
      logoUrl: "/NB.svg",
      start: "",
      end: "",
      description:
        "Designed and developed websites for local small businesses such as attorneys, architects and insurance companies. Created the layout, visual design, and user interface for websites, ensuring a cohesive and visually appealing look and feel. Developed graphics, images, and other visual elements, including logos, banners, icons, and other graphic assets. • Created intuitive navigation, user-friendly interfaces, and an overall positive user experience on the websites. • Create wireframes and interactive prototypes to illustrate the website's layoutand functionality before development.",
    },
  
  ],
  education: [
  
    {
      school: "Jefferson University",
      href: "https://jefferson.edu",
      degree: "Visual Communications B.S. Graphic Design Communication",
      logoUrl: "/Jef.jpg",
      start: "",
      end: "",
    },
    {
      school: "Montgomery Community College",
      href: "https://mc3.edu",
      degree: "Web Development / Design Associates degree",
      logoUrl: "/MCCC.png",
      start: "",
      end: "",
    },
  ],
  projects: [ 
  
    {
      title: "Trope",
      href: "/Trope",
      dates: "",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "adobe photoshop" ,
        "adobe illustrator" ,
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Artwork/Trope/Trope_Wanted_Poster_1.png",
      video:
        "",
    },
    {
      title: "Creative Symposium concept poster",
      href: "/Symposium",
      dates: "",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "adobe photoshop",
        "adobe illustrator",
      ],
      links: [
        {
          type: "Gallery",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
       
      ],
      image: "/Artwork/Symposium/SymposiumPoster.png",
      video: "",
    },
    {
      title: "Valiant",
      href: "/Valiant",
      dates: "",
      active: true,
      description:
        "a DC/Marvel Crossover",
      technologies: [
        "adobe illustrator",
        "adobe photoshop",
      ],
      links: [
        {
          type: "Gallery",
          href: "/Valiant",
          icon: <Icons.globe className="size-3" />,
        },
    
      ],
      image: "/Artwork/Valiant/Valiant-1.png",
      video: "",
    },
   
    
    {
      title: "El Burrito",
      href: "/EL_Burrito",
      dates: "",
      active: true,
      description:
        "A rebranding of a local burrito shop.",
      technologies: [
        "adobe photoshop" ,
        "adobe illustrator" ,
      ],
      links: [
        {
          type: "Website",
          href: "/EL_Burrito",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Artwork/EL_Burrito/Burrito  Reel-4.png",
      video:
        "",
    },

      {
      title: "Comcast Redesign",
      href: "https://chatcollect.com",
      dates: "",
      active: true,
      description:
        "A redesign exercise of Comcast's Xfinity brand. The goal, to create a new look and feel that was modern and user friendly. while leaning in to their history, i found with consumers to further represent their reputation for connecting communities or to impose an .",
      technologies: [
        "adobe illustrator",
        "adobe photoshop",
        "adobe indesign",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com", 
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Artwork/Comcast/3D Glass Logo Evil Comcast.png",
      video:
        "",
    },
    
    {
      title: "CameraEye",
      href: "/CameraEye",
      dates: "",
      active: true,
      description:
        "A logo for a local photographer.",
      technologies: [
        "adobe illustrator" ,
      ],
      links: [
        {
          type: "Website",
          href: "/CameraEye",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Artwork/CameraEye/CameraEye-1.png",
      video:
        "",
    },
    /*{
      title: "Crypto App",
      href: "/Crypto app",
      dates: "",
      active: true,
      description:
        "A crypto app concept.",
      technologies: [
        "adobe xd" ,
        "adobe illustrator" ,
      ],
      links: [
        {
          type: "Website",
          href: "/Crypto app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Artwork/Crypto app/Avenir Next.jpg",
      video:
        "",
    },*/
    {
      title: "Icons",
      href: "/Icons",
      dates: "",
      active: true,
      description:
        "A collection of icons.",
      technologies: [
        "adobe illustrator" ,
      ],
      links: [
        {
          type: "Website",
          href: "/Icons",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Artwork/Icons/Icon.png",
      video:
        "",
    },
    {
      title: "NB TEXTILES OG",
      href: "/NB TEXTILES OG",
      dates: "",
      active: true,
      description:
        "A textile design.",
      technologies: [
        "adobe illustrator" ,
      ],
      links: [
        {
          type: "Website",
          href: "/NB TEXTILES OG",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Artwork/NB TEXTILES OG/NB TEXTILES OG-1.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Snowboarding",
      dates: "winter-spring",
      location: "North East",
      description:
        "If i could i would live in the mountains and snowboard all day. ",
      image:
        "/SnowBoard.png",
      links: [],
    },
    
    {
      title: "Mountaineering",
      dates: "spring-fall",
      location: "North East",
      description:
        "Currently working on my 46er list, and have climbed 12 of the 46 peaks in the Adirondacks.",
      image:
        "/Mtn.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },

    {
      title: "Rock Climbing",
      dates: "Year Round",
      location: "",
      description:
        "i have been climbing indoors and outside for the past year and have been loving it.",
      image:
        "Climb.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },

    {
      title: "Disc golf",
      dates: "year round, im nuts",
      location: "Philly suburb area and if i can find a course while traveling",
      description:
        "",
      image:
        "/DiscGolf.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    
    
    
  ],
} as const;