import { Icon } from "@iconify/react";

// export const BadgeIcon = ({ icon = "" }) => {
//   return (
//     <div className="py-2 pr-2">
//       <Icon icon={icon} className="w-4" />
//     </div>
//   );
// };
export const BadgeIcon = ({ icon = "" }) => {
  return (
    <div className="badge-group--icon">
      <Icon icon={icon} className="w-4" />
    </div>
  );
};
