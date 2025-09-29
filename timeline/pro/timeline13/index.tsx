import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Timeline13 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col">
          <h1 className="mb-2 text-3xl font-semibold md:text-5xl">
            Journey to Product Launch
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Follow the essential steps to bring your innovative idea to market
            and ensure a successful product debut.
          </p>
        </div>
        <div className="border-border bg-card mt-8 flex flex-col gap-6 rounded-xl border p-4 sm:p-8 lg:p-11">
          <div className="contents items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold tracking-tight">
              Guidance from industry leaders
            </h2>
            <Button className="order-last">Request a demo</Button>
          </div>
          <div className="mt-3 flex gap-4 sm:flex-col">
            <div className="relative">
              <div className="grid h-full w-4 justify-center gap-10 sm:h-4 sm:w-auto sm:grid-cols-3 sm:items-center">
                <div className="bg-ring absolute inset-0 left-1/2 w-px -translate-x-1/2 sm:inset-auto sm:left-auto sm:h-px sm:w-full sm:-translate-x-0" />
                <span className="bg-ring relative top-3 size-2 rounded-full sm:top-0" />
                <span className="bg-ring relative top-3 size-2 rounded-full sm:top-0" />
                <span className="bg-ring relative top-3 size-2 rounded-full sm:top-0" />
              </div>
              <div className="animate-timeline-reveal absolute inset-0 grid h-full w-4 justify-center gap-10 sm:h-4 sm:w-auto sm:grid-cols-3 sm:items-center">
                <div className="bg-primary absolute inset-0 left-1/2 w-px -translate-x-1/2 sm:inset-auto sm:left-auto sm:h-px sm:w-full sm:-translate-x-0" />
                <span className="bg-primary relative top-3 size-2 rounded-full sm:top-0" />
                <span className="bg-primary relative top-3 size-2 rounded-full sm:top-0" />
                <span className="bg-primary relative top-3 size-2 rounded-full sm:top-0" />
              </div>
            </div>
            <div className="grid gap-10 sm:grid-cols-3">
              <div className="flex h-full flex-col justify-between gap-4">
                <div className="flex flex-col">
                  <div className="bg-border border-border flex h-8 w-fit items-center gap-px overflow-hidden rounded-md border text-sm font-medium">
                    <span className="bg-background grid h-full place-items-center px-2">
                      01
                    </span>
                    <span className="bg-background grid h-full place-items-center px-2">
                      Ideation
                    </span>
                  </div>
                  <h3 className="mt-5 font-medium">
                    Brainstorm and validate your concept
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Gather insights from market research, customer interviews,
                    and competitor analysis to refine your product idea.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Progress value={15} className="h-1 flex-1" />
                    <span className="text-muted-foreground w-8 text-right text-xs">
                      15%
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-1 text-xs">~2 weeks</p>
                </div>
              </div>
              <div className="flex h-full flex-col justify-between gap-4">
                <div className="flex flex-col">
                  <div className="bg-border border-border flex h-8 w-fit items-center gap-px overflow-hidden rounded-md border text-sm font-medium">
                    <span className="bg-background grid h-full place-items-center px-2">
                      02
                    </span>
                    <span className="bg-background grid h-full place-items-center px-2">
                      Development
                    </span>
                  </div>
                  <h3 className="mt-5 font-medium">Build your MVP</h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Design, prototype, and develop the minimum viable product.
                    Iterate quickly based on early feedback and testing.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Progress value={85} className="h-1 flex-1" />
                    <span className="text-muted-foreground w-8 text-right text-xs">
                      85%
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-1 text-xs">~6 weeks</p>
                </div>
              </div>
              <div className="flex h-full flex-col justify-between gap-4">
                <div className="flex flex-col">
                  <div className="bg-border border-border flex h-8 w-fit items-center gap-px overflow-hidden rounded-md border text-sm font-medium">
                    <span className="bg-background grid h-full place-items-center px-2">
                      03
                    </span>
                    <span className="bg-background grid h-full place-items-center px-2">
                      Launch
                    </span>
                  </div>
                  <h3 className="mt-5 font-medium">Go to market</h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Execute your launch plan with marketing campaigns, outreach,
                    and customer support to maximize impact and adoption.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Progress value={100} className="h-1 flex-1" />
                    <span className="text-muted-foreground w-8 text-right text-xs">
                      100%
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-1 text-xs">
                    Launch complete
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
        /* Mobile: Top to bottom animation */
        @keyframes timeline-reveal-mobile {
          from {
            clip-path: inset(0 0 100% 0);
          }
          to {
            clip-path: inset(0% 0 0 0);
          }
        }
        
        /* Desktop: Left to right animation */
        @keyframes timeline-reveal-desktop {
          from {
            clip-path: inset(0 100% 0 0);
          }
          to {
            clip-path: inset(0 0% 0 0);
          }
        }
        
        .animate-timeline-reveal {
          animation: timeline-reveal-mobile 5s linear;
        }
        
        @media (min-width: 640px) {
          .animate-timeline-reveal {
            animation: timeline-reveal-desktop 5s linear;
          }
        }
        `}
      </style>
    </section>
  );
};

export { Timeline13 };
