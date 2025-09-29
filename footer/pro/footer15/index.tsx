"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
  })
  .required({ email: true });

const SOCIAL_LINKS = [
  {
    icon: Github,
    href: "#",
  },
  {
    icon: Linkedin,
    href: "#",
  },
  {
    icon: Facebook,
    href: "#",
  },
  {
    icon: Twitter,
    href: "#",
  },
];

const NAVIGATION = [
  {
    title: "Platform",
    links: [
      { name: "Overview", href: "#" },
      { name: "Use Cases", href: "#" },
    ],
  },
  {
    title: "About Us",
    links: [
      { name: "Team", href: "#" },
      { name: "Support", href: "#" },
      { name: "Legal", href: "#" },
      { name: "Security", href: "#" },
    ],
  },
  {
    title: "Learn",
    links: [
      { name: "Tutorials", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Quickstart", href: "#" },
    ],
  },
];

const NewsletterFrom = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="flex items-start gap-2">
          <div className="w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      id="emailInput"
                      placeholder="Enter your email"
                      className="placeholder-muted-foreground block h-10 w-full border bg-inherit px-3 py-2 text-sm placeholder:text-sm"
                    />
                  </FormControl>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />
          </div>
          <div className="shrink-0">
            <Button
              type="submit"
              className="border-muted h-10 w-10 rounded-lg border"
              size="icon"
              variant="secondary"
            >
              <ArrowRight className="stroke-foreground size-4" />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

const Footer15 = () => {
  return (
    <section className="bg-background dark py-32">
      <footer className="container flex flex-col gap-32">
        <div className="flex w-full flex-col justify-between gap-y-24 lg:flex-row">
          <div className="flex shrink-0 grow-0 basis-auto flex-col items-start justify-start gap-6">
            {/* Logo */}
            <a href="https://shadcnblocks.com">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-wordmark-white.svg"
                alt="Shadcnblocks"
                title="Shadcnblocks"
                className="h-10"
              />
            </a>
            <p className="max-w-54 text-muted-foreground w-full text-base leading-normal md:text-lg">
              Enhance and tailor your digital experiences effortlessly, at
              scale.
            </p>
            <div className="flex w-full items-center justify-start gap-7">
              {SOCIAL_LINKS.map((item, i) => (
                <a
                  href={item.href}
                  key={`social-link-${i}`}
                  className="flex size-6 opacity-100 transition-opacity hover:opacity-50"
                >
                  <item.icon className="stroke-foreground m-auto size-full" />
                </a>
              ))}
            </div>
            <div className="pt-6">
              <Badge className="border-muted bg-background text-foreground rounded-full p-0">
                <a href="#" className="flex items-center gap-2 px-3 py-2">
                  <div className="relative size-[0.4375rem]">
                    <span className="-translate-1/2 absolute left-1/2 top-1/2 z-10 size-[0.6875rem] animate-pulse rounded-full bg-green-400/50" />
                    <span className="-translate-1/2 absolute left-1/2 top-1/2 z-20 size-full rounded-full bg-green-500" />
                  </div>
                  <div className="text-[0.9375rem] font-normal leading-none">
                    All systems operational
                  </div>
                </a>
              </Badge>
            </div>
          </div>
          <div className="flex flex-col gap-24">
            <nav className="flex flex-wrap gap-24 md:gap-40">
              {NAVIGATION.map((section, _) => (
                <div
                  key={section.title}
                  className="flex flex-col items-start justify-start gap-4"
                >
                  <p className="text-foreground mb-2 text-sm font-semibold md:text-base">
                    {section.title}
                  </p>
                  {section.links.map((link, _) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-foreground text-sm font-medium leading-none opacity-50 transition-opacity hover:opacity-100"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-y-4 md:flex-row">
          <div className="text-muted-foreground text-sm font-medium">
            © 2025 shadcnblocks.com
          </div>
          <div className="text-muted-foreground flex items-center gap-2 text-sm font-medium">
            Made in the USA{" "}
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/flags/united-states.png"
              alt="California"
              className="h-5 rounded-sm"
            />
          </div>
        </div>
      </footer>
    </section>
  );
};

export { Footer15 };
