"use client";

import {
  Bell,
  Book,
  ChevronRight,
  FileText,
  Globe,
  Grid,
  HelpCircle,
  Info,
  LucideIcon,
  Menu,
  X,
} from "lucide-react";
import { Fragment, useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

interface MenuLink {
  label: string;
  description?: string;
  url?: string;
  icon?: {
    component: LucideIcon;
    color: string;
  };
}
interface MenuItem {
  title: string;
  url?: string;
  links?: MenuLink[];
}

interface DesktopMenuItemProps {
  item: MenuItem;
  index: number;
}

interface MobileNavigationMenuProps {
  open: boolean;
}

interface MenuSubLinkProps {
  link: MenuLink;
}

const LOGO = {
  url: "https://www.shadcnblocks.com",
  src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
  alt: "logo",
  title: "Shadcnblocks.com",
};

const NAVIGATION: MenuItem[] = [
  {
    title: "Products",
    links: [
      {
        label: "Company Blog",
        description: "Insights & updates",
        url: "#",
        icon: {
          component: FileText,
          color: "#10b981",
        },
      },
      {
        label: "Our Platform",
        description: "Empower your work",
        url: "#",
        icon: {
          component: Grid,
          color: "#6366f1",
        },
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "About Our Team",
        url: "#",
        description: "Our mission & values",
        icon: {
          component: Info,
          color: "#f59e0b",
        },
      },
      {
        label: "Help & Support Center",
        url: "#",
        description: "Get quick help",
        icon: {
          component: HelpCircle,
          color: "#3b82f6",
        },
      },
      {
        label: "Latest News",
        url: "#",
        description: "Product updates",
        icon: {
          component: Bell,
          color: "#f97316",
        },
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Documentation",
        url: "#",
        description: "Guides & references",
        icon: {
          component: Book,
          color: "#8b5cf6",
        },
      },
      {
        label: "API Reference",
        url: "#",
        description: "Explore our API",
        icon: {
          component: Globe,
          color: "#ef4444",
        },
      },
    ],
  },
  {
    title: "Pricing",
    url: "#",
  },
  {
    title: "Contact",
    url: "#",
  },
];

const PRIMARY_BUTTON = {
  label: "Sign up",
  url: "#",
};

const MOBILE_BREAKPOINT = 1024;

const Navbar9 = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleMobileMenu = () => {
    const nextOpen = !open;
    setOpen(nextOpen);
  };

  return (
    <Fragment>
      <section className="z-999 bg-background dark pointer-events-auto relative">
        <div className="container h-16">
          <div className="flex h-full items-center justify-between">
            <a
              href={LOGO.url}
              className="flex max-h-8 items-center gap-2 text-lg font-semibold tracking-tighter"
            >
              <img
                src={LOGO.src}
                alt={LOGO.alt}
                className="inline-block size-8 invert"
              />
              <span className="text-foreground hidden md:inline-block">
                {LOGO.title}
              </span>
            </a>
            <NavigationMenu className="hidden lg:flex" viewport={false}>
              <NavigationMenuList className="">
                {NAVIGATION.map((item, index) => (
                  <DesktopMenuItem
                    key={`desktop-link-${index}`}
                    item={item}
                    index={index}
                  />
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-4">
              <GithubStars repoUrl="https://github.com/shadcn/ui" />
              <Button asChild>
                <a href={PRIMARY_BUTTON.url}>{PRIMARY_BUTTON.label}</a>
              </Button>
              <div className="lg:hidden">
                <Button variant="ghost" size="icon" onClick={handleMobileMenu}>
                  {open ? (
                    <X className="size-5.5 stroke-foreground" />
                  ) : (
                    <Menu className="size-5.5 stroke-foreground" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MobileNavigationMenu open={open} />
    </Fragment>
  );
};

const DesktopMenuItem = ({ item, index }: DesktopMenuItemProps) => {
  if (item.links) {
    return (
      <NavigationMenuItem key={`desktop-menu-item-${index}`} value={`${index}`}>
        <NavigationMenuTrigger className="text-foreground h-fit bg-transparent font-normal focus:!bg-transparent data-[active=true]:!bg-transparent">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="!rounded-xl !p-0">
          <ul className="w-[20rem] p-2.5">
            {item.links.map((link, index) => (
              <li key={`desktop-nav-sublink-${index}`}>
                <MenuSubLink link={link} />
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={`desktop-menu-item-${index}`} value={`${index}`}>
      <NavigationMenuLink
        href={item.url}
        className={`${navigationMenuTriggerStyle()} text-foreground h-fit bg-transparent font-normal`}
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const MenuSubLink = ({ link }: MenuSubLinkProps) => {
  return (
    <a
      href={link.url}
      className="hover:bg-muted flex items-center gap-4 rounded-lg p-2"
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-2.5">
          {link.icon && (
            <link.icon.component
              className="size-5"
              style={{ stroke: link.icon.color }}
            />
          )}
          <div className="flex flex-col gap-1.5">
            <h3 className="text-foreground text-sm leading-none">
              {link.label}
            </h3>
            <p className="text-muted-foreground/80 text-sm leading-[1.2]">
              {link.description}
            </p>
          </div>
        </div>
        <ChevronRight className="stroke-muted-foreground size-3.5 opacity-100" />
      </div>
    </a>
  );
};

const MobileNavigationMenu = ({ open }: MobileNavigationMenuProps) => {
  return (
    <Sheet open={open}>
      <SheetContent
        aria-describedby={undefined}
        side="top"
        className="z-998 bg-background dark inset-0 h-dvh w-full pt-16 [&>button]:hidden"
      >
        <div className="flex-1 overflow-y-auto">
          <div className="container pb-12">
            <div className="mask-clip-border absolute -m-px h-px w-px overflow-hidden whitespace-nowrap text-nowrap border-0 p-0">
              <SheetTitle className="text-primary">
                Mobile Navigation
              </SheetTitle>
            </div>
            <div className="flex h-full flex-col justify-between gap-20">
              <Accordion type="multiple" className="w-full">
                {NAVIGATION.map((item, index) =>
                  renderMobileMenuItem(item, index),
                )}
              </Accordion>
              <div className="pb-20">
                <Button asChild className="w-full">
                  <a href={PRIMARY_BUTTON.url}>{PRIMARY_BUTTON.label}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const renderMobileMenuItem = (item: MenuItem, index: number) => {
  if (item.links) {
    return (
      <AccordionItem key={item.title} value={`nav-${index}`}>
        <AccordionTrigger className="text-muted-foreground h-[3.75rem] items-center p-0 text-base font-normal leading-[3.75] hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent>
          {item.links.map((subItem) => (
            <MenuSubLink key={subItem.label} link={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a
      key={item.title}
      href={item.url}
      className="text-muted-foreground ring-ring/10 outline-ring/50 nth-last-1:border-0 flex h-[3.75rem] items-center border-b p-0 text-left text-base font-normal leading-[3.75] transition-all focus-visible:outline-1 focus-visible:ring-4"
    >
      {item.title}
    </a>
  );
};

interface GithubStarsProps {
  repoUrl: string;
}

const GithubStars = ({ repoUrl }: GithubStarsProps) => {
  const [stargazersCount, setStargazersCount] = useState<string>("");

  const [owner, repo] = repoUrl.split("github.com/")[1].split("/");
  const githubApiEndpoint = `https://api.github.com/repos/${owner}/${repo}`;

  const formatStargazers = (count: number | ""): string => {
    if (count === "") return "";
    if (count < 1000) return count.toString();
    return `${Math.round(count / 1000)}k`;
  };

  useEffect(() => {
    const getStars = async () => {
      try {
        const response = await fetch(githubApiEndpoint);
        const json = await response.json();
        const formattedCount = formatStargazers(json.stargazers_count);
        setStargazersCount(formattedCount);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      }
    };

    getStars();
  }, [githubApiEndpoint]);

  return (
    <Button
      variant="ghost"
      asChild
      className="bg-muted text-foreground flex items-center gap-1.5"
    >
      <a href={repoUrl}>
        <svg width="800px" height="800px" viewBox="0 0 20 20">
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              transform="translate(-140.000000, -7559.000000)"
              fill="currentColor"
            >
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <path
                  d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                  id="github-[#142]"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <span>{stargazersCount}</span>
      </a>
    </Button>
  );
};

export { Navbar9 };
