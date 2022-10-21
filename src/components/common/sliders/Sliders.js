import "./Sliders.css";

const Sliders = ({ lenguage, value }) => {
  return (
    <div>
      <div className="textContainer">
        <h3>{lenguage}</h3>
        <h3>{value}</h3>
      </div>
      <div className="slider">
        <div
          style={{
            width: value,
            height: "100%",
            backgroundColor: "var(--Primary_Light)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <div className="slidePointer"></div>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
