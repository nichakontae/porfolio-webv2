import { ProjectSectionType } from "../types/home";

// เขียนเรียงโปรเจคแรกสุด อยู่แรกสุด อันล่าสุดควรอยู่หลังสุด
export const projects: ProjectSectionType[] = [
  {
    icon: "src/assets/images/proj/modlife-icon.png",
    projectName: "Modlife",
    preview: "src/assets/images/test2.png",
    // waiting forrrrr
    desc: "It is a project developed in 2022—Modlife is a website that aims to assist KMUTT students in living on campus by providing various features such as restaurant information, airdrop services, announcements, and more. This project is divided into multiple modules, with each group being responsible for their respective module. My friend and I were responsible for the Announcement module that can announce news for KMUTT to all students.",
    code: "https://github.com/CSSIT22/studentlife",
  },
  {
    icon: "src/assets/images/proj/gdsc-icon.jpg",
    projectName: "GDSC gallery",
    preview: "src/assets/images/test2.png",
    // waiting forrrr
    desc: "In 2022, I had the opportunity to develop the GDSC Gallery website. The website showcases a vast collection of photos taken during various workshops organized by the Google Developer Student Clubs (GDSC) - KMUTT. The gallery serves as a visual representation of the enriching experiences and learning moments captured throughout these workshops.",
    websiteName: "gdsc.gallery.com",
    link: "#",
    code: "https://github.com/KNattawat89/gdsc-project",
  },
  {
    icon: "src/assets/images/proj/moddormy-icon.png",
    projectName: "ModDormy",
    preview: "src/assets/images/proj/moddormy.png",
    desc: "In 2023, I developed ModDormy, an application designed to assist KMUTT students in easily finding dormitories that fit their budget and preferences. Additionally, ModDormy serves as a platform for dormitory owners to connect with potential customers, making it easier for them to reach out to their target audience.",
    code: "https://github.com/KNattawat89/ModDormy",
  },
  {
    icon: "src/assets/images/proj/backdrop-icon.png",
    projectName: "Backdrop SIT Hackathon 2023",
    preview: "src/assets/images/proj/backdrop.png",
    desc: "In 2023, I developed the Backdrop mini project as part of the SIT Hackathon 2023. As a first-year student, my specific responsibility was the Countdown component.",
    code: "https://github.com/fxhPhxrxchxyx/BackdropSIThackathon2023",
  },
  {
    icon: "src/assets/images/proj/gift2grow-icon.png",
    projectName: "Gift2Grow",
    preview: "src/assets/images/proj/gift2grow.png",
    desc: "It is a project developed in 2023—an app designed to facilitate the donation of student uniforms and learning materials. What distinguishes us from other donation apps is our direct partnership with schools, enabling us to receive specific information about their donation requirements. This unique approach allows us to provide app users with targeted information about schools and students in need of these donated items.",
    code: "https://github.com/nichakontae/gift2grow",
  },
  {
    icon: "src/assets/images/profile.jpg",
    projectName: "New ivelse.com",
    preview: "src/assets/images/proj/ivelse.png",
    desc: "In 2023, I developed a new portfolio website to showcase the skills I have honed since creating my first-year university portfolio website. The website features a fresh design and offers both light and dark modes, automatically adapting to the user's preferred color scheme using the `prefers-color-scheme` feature. Additionally, I have updated the projects I worked on since my first year and added some work experience to further enhance the content of the portfolio.",
    code: "https://github.com/nichakontae/porfolio-webv2",
    // don't forgot to change visibility to public
  },
];
