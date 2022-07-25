import * as CONSTANTS from "../../services/constants/mapConstants";

const pinStyle = {
  cursor: "pointer",
  fill: "#d00",
  stroke: "none"
};

const CityPin = ({ size }) => {
  return <>
    <a href={CONSTANTS.mapLINK} target="_blank" rel="noreferrer">
      <svg
        height={size}
        viewBox="0 0 24 24"
        style={{
          ...pinStyle,
          transform: `translate(${-size / 2}px,${-size}px)`
        }}
      >
        <path d={CONSTANTS.pinICON} />
      </svg>
    </a>
  </>;
}

export default CityPin;