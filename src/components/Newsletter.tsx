import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Newsletter = () => {
  return (
    <section
      id="newsletter"
      className="relative container mx-auto mt-36 pb-[80px]"
    >
      <div>
        {/* All Text */}
        <div>
          <h2 className="text-[40px] font-semibold mb-6 text-center">
            Subscribe to Our Newsletter <br /> for Design Insights
          </h2>
          <p className="text-[#545454] max-w-[569px] mt-2 text-center mx-auto">
            Be the first to discover trends, inspirations, and special offers as
            we bring the world of design directly to your inbox
          </p>
        </div>

        {/* Input and button */}
        <div className="absolute left-1/2 bottom-[-30px]  -translate-x-1/2 bg-white justify-center items-center px-2.5 gap-4 w-[450px] md:w-[650px] h-[60px] mx-auto flex shadow-lg rounded-md">
          <Input
            placeholder={` Enter your email address`}
            className="w-[500px] border-none shadow-none"
          />

          <Button
            variant="default"
            className="w-[120px] h-[45px] px-4 py-2 rounded-[4px]"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
