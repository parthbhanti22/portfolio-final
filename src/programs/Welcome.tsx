import WelcomeIcon from "components/WelcomeIcon/WelcomeIcon";
import styles from "./Welcome.module.css";
import linkedin from "../../assets/linkedin.png";
import outlook from "../../assets/outlook_large.png";
import gallery from "../../assets/folder_image.png";
import pdf from "../../assets/pdf.png";
import github from "../../assets/github.png";
import cmd from "../../assets/cmd.png";
import users from "../../assets/users.png";
import butterfly from "../../assets/butterfly.png";
import { AppDirectory } from "@/appData";
import store from "@/redux/store";
import { addTab, setBackBtn } from "@/redux/tabSlice";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { RootState } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import userprofile from "../../assets/userprofile.jpg";
import userprofile2 from "../../assets/userprofile2.jpg";
import ebc1 from "../../assets/ebc1.jpg";
import ebc2 from "../../assets/ebc2.jpg";

const INTRO = `Hi, I'm Parth Bhanti, I am a dedicated student with a strong academic track record. Throughout school, I excelled as a top student, 
particularly in physics, which has always fascinated me. 
Now, I'm pursuing a Btech in Computer Science and Engineering while maintaining my passion for physics.
`;

const WHYSITE = `I am always eager to learn and implement things to the best of my abilities.
I have always loved computers, to the extent that I used to spend all my day on my dad's computer
doing nothing but exploring. I wasn't much of a programmer while in school. Right now I am pursuing
Bachelors in technology for Computer Science and Engineering. Since I have been using computers for so long
One of the best memories I have is with Windows XP, thus, I got the idea of turning my portfolio into a windows xp
desktop. `;

const INTERESTS = `Other than my interest in developing websites and apps for fun, I love exploring different
cultures. I haven't been a traveller due to some reasons, but I would very much like to when I get the opportunity.
Besides all of that, I have a particularly keen interest in Physics, I have loved physics since childhood, I used to 
wonder about it all day long. And when it was time to finally know more about it, I dived in! Quantum Mechanics and
Astrophysics have been my main subjects of interest. I am currently exploring more in the STR and String Theory.`;

const INTERESTS2 = `I really enjoy watching movies, and they’re one of my favorite ways to relax. My top favorite is The Lord of the Rings 
because of its amazing story and epic battles. I also love Star Wars, especially the original trilogy and how it creates such an interesting 
universe with lightsabers, Jedi, and space battles. Christopher Nolan’s movies are another favorite of mine—Inception is incredible with
 how it explores dreams and layers of reality, and Interstellar blew me away with its ideas about space and time. 
 I also like movies that are based on real events, like The Imitation Game, which tells the story of Alan Turing and 
 how he helped crack codes during World War II, and The Social Network, which shows the story behind Facebook. 
 Marvel movies are fun too, but I enjoy mixing in thought-provoking films with all the action-packed ones.`;

const INTERESTS3 = `I joined the Google Developer Groups (GDG) at my college as a simple team member, eager to learn and contribute.
 Over time, my enthusiasm and involvement grew, and I took on more responsibilities. Now, I’m proud to be the Non-Technical Co-Lead and 
 the Student Coordinator of the club. This journey has been an incredible experience, allowing me to develop leadership skills, 
 collaborate with a great team, and help organize events and initiatives. Alongside my role in the club, I’ve also developed a strong interest 
 in Machine Learning. I enjoy exploring its potential and learning how it can be applied to solve real-world problems, which aligns well with the 
 innovative environment of GDGC.
`;

interface props {
  id: number;
}

const Welcome = ({ id }: props) => {
  const currTabID = useSelector((state: RootState) => state.tab.id);
  const backBtnActive = useSelector(
    (state: RootState) =>
      state.tab.tray[state.tab.tray.findIndex((tab) => tab.id === id)]
        .backBtnActive
  );

  const [aboutmeView, setAboutmeView] = useState(false);

  const handleRunApp = (e: number) => {
    const newTab = { ...AppDirectory.get(e), id: uuidv4(), zIndex: currTabID };
    store.dispatch(addTab(newTab));
  };
  const handleSwitchView = () => {
    setAboutmeView(true);
    store.dispatch(setBackBtn({ id: id, backBtnActive: true }));
  };
  useEffect(() => {
    setAboutmeView(backBtnActive);
  }, [backBtnActive]);
  return (
    <div className={styles.main}>
      {!aboutmeView ? (
        <div>
          <h3 className={styles.welcome_text}>
            Welcome To Parth Bhanti&apos;s Personal Website
          </h3>
          <p className={styles.subtitle}>
            Learn more about me by clicking any of the icons below to get
            started!
          </p>
          <div className={styles.content}>
            <div className={styles.leftpanel}>
              <WelcomeIcon
                img={butterfly}
                text={"About Me"}
                tooltip="Who am I?"
                onClick={handleSwitchView}
              />
              <WelcomeIcon
                img={github}
                text={"My GitHub Profile"}
                tooltip="My Brain Dump"
                onClick={() => {
                  window.open(
                    "https://github.com/parthbhanti22",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
              <WelcomeIcon
                img={linkedin}
                text={"My Linkedin"}
                tooltip="Connect with me!"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/parth-bhanti-63791b215/",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
              <WelcomeIcon
                img={pdf}
                text={"My Resume"}
                tooltip="My Curriculum Vitae"
                onClick={() => {
                  window.open("./Resume.pdf");
                }}
              />
            </div>
            <div className={styles.rightpanel}>
              <WelcomeIcon
                img={cmd}
                text={"My Work"}
                tooltip="Interesting projects I have done"
                onClick={() => handleRunApp(2)}
              />
              <WelcomeIcon
                img={outlook}
                text={"Send Me An Email"}
                tooltip="Reach out to me!"
                onClick={() => handleRunApp(1)}
              />
              <WelcomeIcon
                img={gallery}
                text={"My Photography Collection"}
                tooltip="Click to view!"
                onClick={() => handleRunApp(4)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className={styles.welcome_text}>About Me</h3>
          <p className={styles.subtitle}></p>
          <div className={styles.content}>
            <div className={styles.pic_col}>
              <Image
                alt="profile_pic"
                src={userprofile.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={userprofile2.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={ebc1.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
              <Image
                alt="profile_pic"
                src={ebc2.src}
                width={200}
                height={200}
                className={styles.profile_pic}
              />
            </div>
            <div className={styles.text_col}>
              <p className={styles.subtitle}>{INTRO}</p>
              <h3 className={styles.subtitle_header}>
                Why a personal website like this?
              </h3>
              <p className={styles.subtitle}>{WHYSITE}</p>
              <h3 className={styles.subtitle_header}>
                What are your interests?
              </h3>
              <p className={styles.subtitle}>{INTERESTS}</p>
              <br></br>
              <p className={styles.subtitle}>{INTERESTS2}</p>
              <br></br>
              <p className={styles.subtitle}>{INTERESTS3}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
