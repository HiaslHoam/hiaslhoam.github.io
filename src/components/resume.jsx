import TimelineObject from "./timelineObject";
import { Timeline } from "./timeline";
import { serverData } from "../data";
import { IconSchool, IconServerCog, IconNotes } from "@tabler/icons-react";

function Resume() {
  return (
    <div className="Resume p-5 flex flex-col gap-14 xl:w-4/5">
      <Timeline
        title="Education"
        icon={<IconSchool size="1.6rem" className="timeline-logo-tile" />}
      >
        {serverData.education
          .sort((a, b) => b.id - a.id)
          .map((education) => (
            <TimelineObject
              key={education.id}
              date={education.date}
              heading={education.title}
              text={education.text}
              collab={education.collab}
            />
          ))}
      </Timeline>
      <Timeline
        title="Work Experience"
        icon={<IconServerCog size="1.6rem" className="timeline-logo-tile" />}
      >
        {serverData.work.map((work) => (
          <TimelineObject
            key={work.id}
            date={work.date}
            heading={work.title}
            link={work.link}
            text={work.text}
          />
        ))}
      </Timeline>
      <Timeline
        title="Publications"
        icon={
          <IconNotes
            className="timeline-logo-tile"
            color="white"
            size="1.6rem"
          />
        }
      >
        {serverData.publications.map((publication) => (
          <TimelineObject
            key={publication.id}
            date={publication.date}
            link={publication.link}
            heading={publication.title}
            text={publication.text}
            collab={publication.collab}
          />
        ))}
      </Timeline>
    </div>
  );
}

export default Resume;
