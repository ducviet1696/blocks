import { Button } from "@/components/ui/button";

const Hero49 = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto flex flex-col items-center px-4 pt-10">
        <div className="flex max-w-3xl flex-col items-center gap-8 text-center">
          <h1 className="text-foreground text-5xl font-semibold lg:text-8xl">
            Master your monetary matters
          </h1>
          <p className="text-4 text-muted-foreground max-w-xl leading-[165%] tracking-tight">
            Minimize financial stress and build wealth with our intuitive,
            AI-enhanced budgeting tool. Our platform analyzes your spending and
            offers insights for smarter financial decisions.
          </p>
          <Button className="flex h-fit w-fit items-center gap-[8px] rounded-full px-8 py-5 text-base font-medium transition-all hover:scale-95">
            <img
              alt="google play and app store download icons"
              loading="lazy"
              width="44"
              height="18"
              decoding="async"
              data-nimg="1"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/hero49/download.svg"
            />
            <p>Get started now</p>
          </Button>
        </div>
        <div className="relative translate-x-[14.7%]">
          {/* Image inside Iphone */}
          <div className="left-[36.5%]! h-[67%]! w-[31%]! bg-muted absolute top-[12%] -translate-x-[52%] overflow-hidden rounded-[10px]">
            <img
              className="min-h-full min-w-full"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-7-tall.svg"
              alt=""
            />
          </div>
          {/* Iphone Image  */}
          <img
            alt=""
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/hero49/iphone.png"
            className="relative z-10"
            loading="lazy"
            width="1008.71"
            height="857"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero49 };
