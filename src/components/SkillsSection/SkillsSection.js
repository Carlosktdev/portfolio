import Sliders from "../common/sliders/Sliders";
import "./SkillsSection.css";

const SkillsSection = () => {
  const skills = [
    { skill: "React Js", value: "85%" },
    { skill: "Bootstrap", value: "85%" },
    { skill: "JavaScript", value: "85%" },
    { skill: "Material Design", value: "85%" },
    { skill: "NextJs", value: "80%" },
    { skill: "TypeScript", value: "75%" },
    { skill: "HTML", value: "75%" },
    { skill: "CSS", value: "75%" },
    { skill: "Node Js", value: "75%" },
    { skill: "Phyton", value: "65%" },
    { skill: "Express", value: "70%" },
    { skill: "GIT", value: "60%" },
    { skill: "MongoDB", value: "60%" },
    { skill: "Tailwind", value: "50%" },
  ];
  return (
    <section className="container centeredTexts" id="skills">
      <h1>What My Programing skills include?</h1>
      <h4>
        I have extensive mid-senior level knowledge of various web programming
        technologies, both front and back end. Especially in MERN stack and
        NEXT.js, besides this I also have medium knowledge about mobile
        development with react-native and various third party libraries. In
        addition to this, I also have knowledge in libraries such as: bootstrap,
        tailwind, material ui design, and much more.
      </h4>
      <div className="slidersContainer">
        {skills.map((item, index) => {
          return (
            <div className="slides" key={index}>
              <Sliders lenguage={item.skill} value={item.value} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
