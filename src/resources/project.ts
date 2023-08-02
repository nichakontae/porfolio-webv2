import { ProjectSectionType } from "../types/home";

// เขียนเรียงโปรเจคแรกสุด อยู่แรกสุด อันล่าสุดควรอยู่หลังสุด
export const projects: ProjectSectionType[] = [
  {
    icon: "./assets/images/proj/old-ivelse-icon.png",
    projectName: "Old ivelse",
    preview: "./assets/images/proj/old-ivelse.png",
    desc: "In July to August 2022, I developed ivelse.com, which was my very first project. I applied the knowledge that I had learned before to build this website, and I did my best to bring ivelse.com to life.",
    code: "https://github.com/nichakontae/portfolio-web",
  },
  {
    icon: "./assets/images/proj/modlife-icon.png",
    projectName: "Modlife",
    preview: "./assets/images/proj/modlife.png",
    desc: "It is a project developed in September to December 2022—Modlife is a website that aims to assist KMUTT students in living on campus by providing various features such as restaurant information, airdrop services, announcements, and more. This project is divided into multiple modules, with each group being responsible for their respective module. My friend and I were responsible for the Announcement module that can announce news for KMUTT to all students.",
    code: "https://github.com/CSSIT22/studentlife",
  },
  {
    icon: "./assets/images/proj/gdsc-icon.jpg",
    projectName: "GDSC gallery",
    preview: "./assets/images/proj/gdsc-gallery.png",
    // waiting for weblink
    desc: "In January 2023, I had the opportunity to develop the GDSC Gallery website. The website showcases a vast collection of photos taken during various workshops organized by the Google Developer Student Clubs (GDSC) - KMUTT. The gallery serves as a visual representation of the enriching experiences and learning moments captured throughout these workshops.",
    websiteName: "gdsc.gallery.com",
    link: "https://gdsc.sit.kmutt.ac.th/",
    code: "https://github.com/KNattawat89/gdsc-project",
  },
  {
    icon: "./assets/images/proj/moddormy-icon.png",
    projectName: "ModDormy",
    preview: "./assets/images/proj/moddormy.png",
    desc: "In April to May 2023, I developed ModDormy, an application designed to assist KMUTT students in easily finding dormitories that fit their budget and preferences. Additionally, ModDormy serves as a platform for dormitory owners to connect with potential customers, making it easier for them to reach out to their target audience.",
    code: "https://github.com/KNattawat89/ModDormy",
  },
  {
    icon: "./assets/images/proj/backdrop-icon.png",
    projectName: "Backdrop SIT Hackathon 2023",
    preview: "./assets/images/proj/backdrop.png",
    desc: "In May 2023, I developed the Backdrop mini project as part of the SIT Hackathon 2023. As a first-year student, my specific responsibility was the Countdown component.",
    code: "https://github.com/fxhPhxrxchxyx/BackdropSIThackathon2023",
  },
  {
    icon: "./assets/images/proj/gift2grow-icon.png",
    projectName: "Gift2Grow",
    preview: "./assets/images/proj/gift2grow.png",
    desc: "It is a project developed in May to June 2023—an app designed to facilitate the donation of student uniforms and learning materials. What distinguishes us from other donation apps is our direct partnership with schools, enabling us to receive specific information about their donation requirements. This unique approach allows us to provide app users with targeted information about schools and students in need of these donated items.",
    code: "https://github.com/nichakontae/gift2grow",
  },
  {
    icon: "./assets/images/proj/ivelse-icon.png",
    projectName: "New ivelse.com",
    preview: "./assets/images/proj/ivelse.png",
    desc: "In July 2023, I developed a new portfolio website to showcase the skills I have honed since creating my first-year university portfolio website. The website features a fresh design and offers both light and dark modes, automatically adapting to the user's preferred color scheme using the `prefers-color-scheme` feature. Additionally, I have updated the projects I worked on since my first year and added some work experience to further enhance the content of the portfolio.",
    code: "https://github.com/nichakontae/porfolio-webv2",
    // don't forgot to change visibility to public
  },
  {
    icon: "./assets/images/proj/ivelse-icon.png",
    projectName: "Shorten URL",
    preview: "./assets/images/proj/shortUrl.png",
    desc: "In July 2023, I developed a Shorten URL application, which allows users to create memorable and easy-to-share URLs. During this project, I gained knowledge about MongoDB and learned how to host a website with a proxy using Nginx.",
    code: "https://github.com/nichakontae/url-shortner",
    websiteName: "sv.ivelse.com",
    link: "https://sv.ivelse.com",
    // don't forgot to change visibility to public
  },
];
