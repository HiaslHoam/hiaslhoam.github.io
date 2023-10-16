import { IconCircleArrowUpFilled } from "@tabler/icons-react";

export const Timeline = ({ icon, title, children }) => {
  return (
    <ol className="relative border-l border-contrast">
      <div className="flex">
        <div className="timeline-logo mb-5 p-5 bg-contrast w-2 h-2 rounded-2xl">
          {icon}
        </div>
        <div className="timeline-title text-xl font-semibold relative">
          {title}
        </div>
      </div>
      {children}
      <div className="timeline-end">
        <IconCircleArrowUpFilled size="1.1rem" className="timeline-logo-end" />
      </div>
    </ol>
  );
};
