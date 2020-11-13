import FixedWrapper from "@components/common/Wrappers/FixedWrapper";
import { withStyleDeep } from "styletron-react";

const S = {};
S.PositionFixed = withStyleDeep(FixedWrapper, {
  width: "100%",
  top: 0,
  left: 0,
  height: "var(--itg-navigator-height)",
  backgroundColor: "var(--itg-navigator-background)",
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
});

const LayoutHeader = ({ children }) => {
  return <S.PositionFixed>{children}</S.PositionFixed>;
};

export default LayoutHeader;
