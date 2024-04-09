import react from "react";

const About = () => {
  return (
    <>
      <div id="title-body" className="flex-center">
        <div id="title-nav" className="flex-center">
          <div className="nav-section1">
            <p className="Signature flex-start">Kyle William Lee</p>
          </div>

          <div className="nav-section2 flex-end">
            <div className="nav-links">about</div>
            <div className="nav-links">skills</div>
            <div className="nav-links">projects</div>
            <div className="nav-links">contact</div>
            <div className="nav-links menu">menu</div>
          </div>
        </div>

        {/* <div id="title-middle"></div> */}

        <div id="title-lower">

          <div className="title-lower-sections flex-center">
            <div id="about"></div>
          </div>

          <div className="title-lower-sections flex-center">
            <div id="headshot"></div>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;
