import { TimeLine, TimeLineItem } from "./ui/ExpTimeLine";

export default function Exprience() {
  return (
    <section className="mx-auto max-w-screen-md">
      <TimeLine>
        <TimeLineItem active>
          <TimeLineItem.Title>
            <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
              fullstack developer • freelancer
            </span>{" "}
            • <span className="text-neutral-200">May 2022 - Present</span>
          </TimeLineItem.Title>
          <TimeLineItem.Description>
            Working as a fullstack developer for many projects, most of the
            projects are e-commerce.
          </TimeLineItem.Description>
        </TimeLineItem>

        <TimeLineItem>
          <TimeLineItem.Title>
            <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
              Fullstack Developer • Flynk
            </span>{" "}
            • <span className="text-neutral-200">Feb 2021 - April 2022</span>
          </TimeLineItem.Title>
          <TimeLineItem.Description>
            Working mainly on Web and mobile app development for event
            management and finance projects
          </TimeLineItem.Description>
        </TimeLineItem>
        <TimeLineItem>
          <TimeLineItem.Title>
            <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
              Fullstack Developer • Passion Fruit Software
            </span>{" "}
            • <span className="text-neutral-200">Oct 2019 - Jan 2021</span>
          </TimeLineItem.Title>
          <TimeLineItem.Description>
            Maintaining and developing real estate platform.
          </TimeLineItem.Description>
        </TimeLineItem>
        <TimeLineItem last>
          <TimeLineItem.Title>
            <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
              Frontend Developer • Sutrix Solution
            </span>{" "}
            • <span className="text-neutral-200">Sep 2018 - Sep 2019</span>
          </TimeLineItem.Title>
          <TimeLineItem.Description>
            Maintaining and developing Management Dashboard for
            Telecommunications.
          </TimeLineItem.Description>
        </TimeLineItem>
      </TimeLine>
    </section>
  );
}
