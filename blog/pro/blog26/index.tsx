import { AspectRatio } from "@/components/ui/aspect-ratio";

interface post {
  thumbnail?: string;
  title: string;
  summary?: string;
  author: {
    name: string;
    link: string;
  };
  link: string;
  date: string;
}

const TOP_POST: post = {
  thumbnail: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  title: "The Future of AI Innovation",
  summary:
    "Explore how cutting-edge AI technologies are revolutionizing business processes, enhancing productivity, and creating unprecedented opportunities for growth across diverse sectors.",
  author: {
    name: "Christian Buehner",
    link: "#",
  },
  link: "#",
  date: "March 15, 2024",
};

const POSTS: Array<post> = [
  {
    title:
      "AI for Marketers: The Latest Tools of the Trade and How to Master Them",
    link: "#",
    author: {
      name: "Christian Buehner",
      link: "#",
    },
    date: "March 12, 2024",
  },
  {
    title: "6 AI Tools to Simplify and Accelerate Your Podcast Production",
    link: "#",
    author: {
      name: "Christian Buehner",
      link: "#",
    },
    date: "March 10, 2024",
  },
  {
    title: "If Your YouTube Channel Growth Has Stalled, Try This",
    link: "#",
    author: {
      name: "Christian Buehner",
      link: "#",
    },
    date: "March 8, 2024",
  },
];

const Post = ({ title, author, date, link }: post) => {
  return (
    <div className="flex w-full flex-col gap-[1.875rem] border-b py-10 lg:max-w-[28.125rem]">
      <a
        href={link}
        className="group inline-block text-2xl font-semibold leading-[1.22] hover:underline"
      >
        {title}
      </a>
      <div className="flex w-full flex-col gap-5">
        <div className="flex items-center gap-2">
          <a
            className="text-muted-2-foreground text-sm font-medium hover:underline"
            href={author.link}
          >
            by {author.name}
          </a>
          <span className="text-muted-foreground text-sm">•</span>
          <span className="text-muted-foreground text-sm">{date}</span>
        </div>
      </div>
    </div>
  );
};

const Blog26 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-10 grid grid-cols-[minmax(18.75rem,1fr)] items-start justify-start gap-2.5 md:mb-20 lg:mb-24 lg:grid-cols-[minmax(18.75rem,1fr)_minmax(12.5rem,28.125rem)] lg:gap-20">
          <h1 className="text-6xl font-bold leading-[1.22] md:text-[5rem] md:font-semibold lg:text-[7.5rem]">
            Blog
          </h1>
          <div className="pb-5">
            <p className="text-foreground text-base sm:text-lg">
              <span className="text-muted-foreground">
                Inspiration meets innovation
              </span>
              <br />
              <strong>The Company Blog</strong>
            </p>
            <div className="mt-6 rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/christian-buehner-DItYlc26zVI-unsplash 1.jpg"
                  alt="Author profile"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">Christian Buehner</p>
                  <p className="text-muted-foreground text-xs">
                    Content Writer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-[minmax(18.75rem,1fr)] gap-20 pb-[6.25rem] lg:grid-cols-[minmax(18.75rem,1fr)_minmax(12.5rem,28.125rem)]">
          <div>
            <div className="flex flex-col gap-[1.875rem]">
              <a
                href={TOP_POST.link}
                className="group flex aspect-[1.736111111] w-full overflow-hidden rounded-[0.625rem]"
              >
                <AspectRatio
                  ratio={1.736111111}
                  className="m-auto overflow-hidden"
                >
                  <img
                    src={TOP_POST.thumbnail}
                    alt={TOP_POST.title}
                    className="block size-full object-cover object-center"
                  />
                </AspectRatio>
              </a>
              <div className="flex w-full flex-col gap-5">
                <a
                  href={TOP_POST.link}
                  className="group inline-block text-2xl font-semibold leading-[1.22] hover:underline md:text-4xl"
                >
                  {TOP_POST.title}
                </a>
                <p className="text-foreground text-lg">{TOP_POST.summary}</p>
              </div>
              <div className="flex w-full flex-col gap-5">
                <div className="flex items-center gap-2">
                  <a
                    className="text-muted-2-foreground text-sm font-medium hover:underline"
                    href={TOP_POST.author.link}
                  >
                    by {TOP_POST.author.name}
                  </a>
                  <span className="text-muted-foreground text-sm">•</span>
                  <span className="text-muted-foreground text-sm">
                    {TOP_POST.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="text-5xl font-semibold leading-[1.2]">Latest</div>
            <div className="-mt-10 flex flex-col">
              {POSTS.map((post, i) => (
                <Post {...post} key={`${post.title}-${i}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Blog26 };
