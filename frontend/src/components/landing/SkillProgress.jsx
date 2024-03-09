import Stack from "react-bootstrap/esm/Stack";
import ProgressBar from "react-bootstrap/esm/ProgressBar";

const SkillProgressLabel = ({ percentage, downLabel, topLabel }) => {
  // doing this by creating span's and positioning them absolutely, one under and one over
  // should only be used next to ProgressBar inside a <div> with position relative

  return (
    <>
      <span
        style={{
          position: "absolute",
          left: `${percentage}%`,
          fontSize: "1.2rem",
          color: "#4d4d4d",
          bottom: "1rem",
        }}
      >
        {topLabel}
      </span>
      <span
        style={{
          position: "absolute",
          left: `${percentage}%`,
          color: "#4d4d4d",
          fontSize: "1.2rem",
          top: "1rem",
        }}
      >
        {downLabel}
      </span>
    </>
  );
};

const SkillProgress = ({ title, levels, now }) => {
  return (
    <Stack>
      <Stack
        direction="horizontal"
        gap={5}
        style={{
          border: "1px solid #dedede",
          padding: "1.5rem",
          borderRadius: "1rem",
        }}
      >
        <h3 style={{ minWidth: "8rem" }}>{title}</h3>
        <div style={{ width: "100%", position: "relative" }}>
          {Object.keys(levels).map((levelName, index) => (
            <SkillProgressLabel
              key={index}
              percentage={(index + 1) * (60 / Object.keys(levels).length)}
              topLabel={levelName}
              downLabel={levels[levelName]}
              //   downLabel={level.level}
            />
          ))}
          <ProgressBar
            now={now !== undefined ? now : Math.floor(Math.random() * 41) + 30}
            style={{ width: "100%" }}
          />
        </div>
      </Stack>
    </Stack>
  );
};

export default SkillProgress;
