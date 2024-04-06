import Link from "next/link";
import { SectionContainer } from "../Section/SectionContainer";
import { getTextAlign } from "../../utils/helper";

// export const BadgeGroup = ({ alignment, link, children, className }) => {
//   const Element = link ? Link : "div";
//   const href =
//     typeof link === "string" ? link : link?.href != null ? link.href : "";
//   const alignClass = getTextAlign(alignment);

//   return (
//     <SectionContainer className="w-full">
//       <Element
//         href={href}
//         className={`inline-flex text-sm mb-8 w-auto items-center rounded-full border border-neutral-300 bg-white px-1 py-[2px] font-medium text-badgeText ${
//           link ? "transition-colors duration-300" : ""
//         } ${alignClass ? alignClass : ""} ${className && className}`}
//       >
//         {children}
//       </Element>
//     </SectionContainer>
//   );
// };
export const BadgeGroup = ({ alignment, link, children, className }) => {
  const Element = link ? Link : "div";
  const href =
    typeof link === "string" ? link : link?.href != null ? link.href : "";
  const alignClass = getTextAlign(alignment);

  return (
    <SectionContainer className="badge-group w-full">
      <Element
        href={href}
        className={`badge-group--container ${
          link ? "badge-group--link" : ""
        } ${alignClass ? alignClass : ""} ${className && className}`}
      >
        {children}
      </Element>
    </SectionContainer>
  );
};
