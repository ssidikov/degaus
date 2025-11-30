import Button from "@/components/Button";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center pb-0 mt-0 md:mt-28"
      >
        <div className="relative flex items-center justify-center md:rounded-3xl overflow-hidden max-w-6xl w-full px-5 py-10 pt-28 md:pt-10">
          <div className="text-center flex flex-col gap-10 z-10">
            <h1 className="text-4xl md:text-6xl md:leading-none text-balance font-extrabold text-foreground max-w-lg md:max-w-2xl mx-auto">
              These aren't the droids you are looking for
            </h1>
            <p className="text-foreground max-w-lg md:max-w-2xl mx-auto text-2xl md:text-3xl">
              The page you are looking for does not exist.
            </p>
            <Button href="/" size="large">
              Go to Home
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
