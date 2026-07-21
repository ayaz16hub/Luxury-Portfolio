import TimelineCard from "./TimelineCard";
import { timeline } from "./timelineData";

export default function Timeline() {
  return (
    <div className="space-y-8">

      {timeline.map((item) => (
        <TimelineCard
          key={item.title}
          {...item}
        />
      ))}

    </div>
  );
}