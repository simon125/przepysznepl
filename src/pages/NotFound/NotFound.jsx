import { Link } from "react-router-dom";
import NOT_FOUND from "../../assets/404.jpg";

export const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <img src={NOT_FOUND} alt="" />
      <Link role="button">Go back to safety</Link>
    </div>
  );
};
