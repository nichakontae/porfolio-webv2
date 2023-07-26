import { GitHubIcon, LinkedInIcon, MessengerIcon } from "../resources/icons";
import { IntroEachPageType } from "../types/intro";
export const IntroEachPage: IntroEachPageType[] = [
  {
    path: "/home",
    image: "src/assets/images/profile.jpg",
    smallTopic: "Hi, I’m Eve 👋",
    topic: "Full-stack software developer",
    topic2: "Photographer",
    desc: "Welcome to my web portfolio! I'm a 20-year-old computer science student who is passionate about web programming, and photography. Here, I showcase my abilities and projects that reflect my interests. I like developing user-friendly websites, and capturing captivating moments through photography. Join me on this journey as I showcase my work and share my excitement for these fascinating topics. Let's connect and work on future projects together!",
    contact: [
      {
        icon: MessengerIcon,
        platform: "Messenger",
        url: "https://m.me/nichakon.e",
      },
      {
        icon: LinkedInIcon,
        platform: "LinkedIn",
        url: "https://linkedin.com/in/nichakon-seehabong-173790285",
      },
      {
        icon: GitHubIcon,
        platform: "Github",
        url: "https://github.com/nichakontae",
      },
      {
        platform: "Email",
        url: "mailto:hello.eve555@gmail.com",
      },
    ],
  },
  {
    path: "/projects",
    image: "src/assets/images/profile.jpg",
    topic: "Projects",
    desc: "Welcome to my project showcase! In this section, I present my latest web development projects and share my passion for creating innovative and user-friendly websites. Each project represents my skills and expertise in various technologies and showcases my problem-solving abilities. Explore the projects, get inspired, and discover the possibilities of web development. Let's build something amazing together!",
  },
  {
    path: "/photographs",
    image: "src/assets/images/profile.jpg",
    topic: "Photographs",
    desc: "Step into the world of photography with me! Here, I unleash my creativity and capture captivating moments through the lens. From stunning landscapes to vibrant portraits, I strive to convey emotions and tell stories through my photographs. Join me on this photography tour to see the world's beauty via my lens. Feel free to browse through the galleries and let the pictures speak to your heart.",
  },
  {
    path: "/about",
    image: "src/assets/images/profile.jpg",
    topic: "About",
    desc: "Welcome to my personal space! I'm excited to tell you more about myself and my story. I'm a 20-year-old student studying computer science with an intense passion for web programming. In addition to my passion of coding, I also find comfort in photography since it allows me to capture lovely moments in time. I want to use this website to share my work, my experiences, and to meet other like-minded people. Let's work together, share ideas, and take on fascinating initiatives. Join me on this adventure as I continue to learn, grow, and explore the vast possibilities of the digital world.",
  },
];
