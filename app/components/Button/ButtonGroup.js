import { getTextAlign } from "../../utils/helper";
import { SectionContainer } from "../Section/SectionContainer";

export const ButtonGroup = ({ className = "", alignment, children }) => {
  const alignClass = getTextAlign(alignment);
  return (
    <SectionContainer className="btn-group">
      <div
        className={`btn-group--container ${className && className} ${
          alignClass && alignClass
        }`}
      >
        {children}
      </div>
    </SectionContainer>
  );
};
