import { Link } from "react-router-dom";

const GlobalBtn = ({
  btnText,
  btnLink,
  btnBgColor = "#DB4444",
  btnTextColor = "#FAFAFA",
  btnPadding = [16, 48],
  btnBorderRadius = 4,
}: {
  btnText: string;
  btnLink: string;
  btnBgColor?: string;
  btnTextColor?: string;
  btnPadding?: [number, number];
  btnBorderRadius?: number;
}) => {
  return (
    <>
      <Link
        to={btnLink}
        style={{
          color: btnTextColor,
          display: "inline-block",
          backgroundColor: btnBgColor,
          padding: `${btnPadding[0]}px ${btnPadding[1]}px`,
          borderRadius: `${btnBorderRadius}px`,
          fontWeight: 600,
        }}
      >
        {btnText}
      </Link>
    </>
  );
};

export default GlobalBtn;
