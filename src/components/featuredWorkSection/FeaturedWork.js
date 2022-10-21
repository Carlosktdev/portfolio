import "./FeaturedWork.css";

const FeaturedWork = () => {
  const projects = [
    {
      projectName: "Test 1",
      sourse:
        "https://www.slideteam.net/media/catalog/product/cache/1280x720/p/r/project_management_steps_and_process_powerpoint_presentation_sli_Slide03.jpg",
      projectDesc: "Test desc 1",
    },
    {
      projectName: "Test 2",
      sourse:
        "https://www.slideteam.net/media/catalog/product/cache/1280x720/p/r/project_management_steps_and_process_powerpoint_presentation_sli_Slide03.jpg",
      projectDesc: "Test desc 1",
    },
    {
      projectName: "Test 3",
      sourse:
        "https://www.slideteam.net/media/catalog/product/cache/1280x720/p/r/project_management_steps_and_process_powerpoint_presentation_sli_Slide03.jpg",
      projectDesc: "Test desc 1",
    },
    {
      projectName: "Test 4",
      sourse:
        "https://www.slideteam.net/media/catalog/product/cache/1280x720/p/r/project_management_steps_and_process_powerpoint_presentation_sli_Slide03.jpg",
      projectDesc: "Test desc 1",
    },
    {
      projectName: "Test 5",
      sourse:
        "https://www.slideteam.net/media/catalog/product/cache/1280x720/p/r/project_management_steps_and_process_powerpoint_presentation_sli_Slide03.jpg",
      projectDesc: "Test desc 1",
    },
    {
      projectName: "Test 6",
      sourse:
        "https://www.slideteam.net/media/catalog/product/cache/1280x720/p/r/project_management_steps_and_process_powerpoint_presentation_sli_Slide03.jpg",
      projectDesc: "Test desc 1",
    },
  ];
  return (
    <section id="portfolio" className="container centered">
      <h1>Featured Works</h1>
      <div className="mainProjectContainer">
        {projects.map((item, index) => {
          return (
            <div className="projectContainer" key={index}>
              <h1 className="projectName">{item.projectName}</h1>
              <h1 className="">{item.projectDesc}</h1>
              <img
                src={
                  "https://www.slideteam.net/media/catalog/product/cache/1280x720/p/r/project_management_steps_and_process_powerpoint_presentation_sli_Slide03.jpg"
                }
                alt=""
                className="img"
              />
              <h1 className="learnButton">Learn more...</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedWork;
