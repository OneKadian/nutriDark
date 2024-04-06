import { SectionContainer } from "../Section/SectionContainer";

export const CardGroup = ({ children, className = "" }) => {
  return (
    <SectionContainer className="card-group">
      <div className={`card-group--container ${className && className}`}>
        {children}
      </div>
    </SectionContainer>
  );
};
