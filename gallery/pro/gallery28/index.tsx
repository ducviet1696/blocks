"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/alex-tyson-2Fv_otxbGtg-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jason-leung-6uoj7DL6BFk-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jonathan-borba-UisC7KLAWjs-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jean-philippe-delberghe-fnIIuaEHvII-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jonathan-borba-YdomJdFdbDo-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jose-angel-rios-ux9cu6FLsFE-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/zhao-yangyang-4uMRVFnJcP4-unsplash.jpg",
];

const Gallery28 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <h2 className="mb-4 text-center text-4xl font-semibold">
          Beautiful Interiors.
        </h2>
        <p className="text-muted-foreground text-center text-sm">
          Explore our curated collection of stunning interior designs.
          <br />
          Each space tells a unique story through thoughtful design and
          attention to detail.
        </p>
        <div className="mt-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mx-auto w-full max-w-6xl"
          >
            <CarouselContent
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              {images.map((image, index) => (
                <CarouselItem key={index} className="basis-1/2">
                  <img
                    src={image}
                    alt="placeholder"
                    className="aspect-[3.8/5] w-full rounded-xl object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="scale-120 left-5 border-none bg-black/30 text-white hover:bg-black/50 hover:text-white dark:bg-black/30 dark:hover:bg-black/50" />
            <CarouselNext className="scale-120 right-5 border-none bg-black/30 text-white hover:bg-black/50 hover:text-white dark:bg-black/30 dark:hover:bg-black/50" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Gallery28 };
