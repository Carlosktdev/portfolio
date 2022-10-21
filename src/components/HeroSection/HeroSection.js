import CommentCard from "../common/comments/CommentCard";
import "./HeroSection.css";

const HeroSection = () => {
  const comments = [
    {
      name: "Jesus G Fuentes",
      comment:
        "“Fue un placer trabajar con Carlos, algo que me gustó mucho es que entrega más de lo que promete!”",
      page: "www.workana.com",
    },
    {
      name: "Jorge Estrada",
      comment: "““Entrega en tiempo y alcance. Buena comunicación.””",
      page: "www.workana.com",
    },
    {
      name: "Andres Bartolucci ",
      comment: "“Excelente profesional, muy recomendable”",
      page: "www.workana.com",
    },
    {
      name: "Omar Leiva",
      comment:
        "“Fue un placer trabajar con Carlos, algo que me gustó mucho es que entrega más de lo que promete!”",
      page: "TICTEAMS",
    },
  ];
  return (
    <section className="container" id="home">
      <div className="heroSection">
        <h1>CARLOS FERNANDEZ</h1>
        <h2>MID SENIOR FULL-STACK WEB DEVELOPER</h2>
        <h3 className="heroText">
          Self-taught developer who loves making beautiful web applications , I
          know how to use html,css,javascript,typescript,phyton. With multiple
          external libraries, databases, api calls, xml, ReactJS,NodeJs a bit of
          everything. I also love working in a team and I am very good at
          communicating ideas and strategies.
        </h3>
      </div>
      <div className="cardsContainer">
        {comments.map((card) => {
          return <CommentCard comments={card} />;
        })}
      </div>
    </section>
  );
};

export default HeroSection;
