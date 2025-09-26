import { Button } from "./ui/button";
import { MoveDown } from "lucide-react";
import { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  animate,
} from "framer-motion";

const AnimatedNumber = ({ to }: { to: number }) => {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useAnimationFrame(() => {
    setDisplay(Math.floor(count.get()));
  });

  useEffect(() => {
    count.set(0);
    count.stop();
    animate(count, to, { duration: 2 });
  }, [to]);

  return (
    <motion.p className="text-[30px] md:text-[70px] text-[#545454]">
      {display}+
    </motion.p>
  );
};

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <section
      id="home"
      className="container relative mx-auto px-4 min-h-[620px] md:px-0 flex flex-col md:flex-row items-center justify-between p-6 gap-8"
    >
      {/* Left side content (text and buttons) */}
      <div className="w-full flex flex-col justify-between gap-16  md:items-start">
        <div className="flex flex-col gap-3.5">
          <h1 className="text-[70px] md:text-[120px] font-medium  text-left">
            Interior Design
          </h1>
          <p className="max-w-[759px] text-[#545454] text-[20px]">
            Step into a world where the art of Interior Design is meticulously
            crafted to bring together timeless elegance and cutting-edge modern
            Innovation, Allowing you to transform your living spaces into the
            epitome of luxury and sophistication
          </p>
        </div>
        <Button
          variant={"default"}
          className="w-[200px] h-[50px] px-4 py-2 rounded-[4px]"
        >
          Start Project
        </Button>
        <div className="flex gap-14 text-center">
          <div>
            <AnimatedNumber to={400} />
            <p className="text-[20px] text-[#545454]">Project Complete</p>
          </div>
          <div>
            <AnimatedNumber to={600} />
            <p className="text-[20px] text-[#545454]">Satisfied Clients</p>
          </div>
          <div>
            <AnimatedNumber to={100} />
            <p className="text-[20px] text-[#545454]">Unique Styles</p>
          </div>
        </div>
      </div>

      {/* Right side content (images) */}

      <div className="hidden xl:block absolute -top-0 -right-0 w-[350px] h-[428px]">
        <motion.img
          src="/images/Image-1.png"
          alt="image-1"
          onLoad={() => setImageLoaded(true)}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{
            opacity: imageLoaded ? 1 : 0,
            filter: imageLoaded ? "blur(0px)" : "blur(10px)",
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
        />
      </div>

      <div className="hidden xl:block absolute z-10 -bottom-0 -right-[-50px]">
        <motion.img
          src="/images/Image-2.png"
          alt="image-2"
          width={480}
          height={300}
          onLoad={() => setImageLoaded(true)}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{
            opacity: imageLoaded ? 1 : 0,
            filter: imageLoaded ? "blur(0px)" : "blur(10px)",
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
        />
      </div>

      <div className="hidden xl:block absolute -bottom-[-175px] -right-[-400px] w-[150px] h-[150px]  border-2 border-black"></div>

      <div
        onClick={() => window.scrollTo({ top: 620, behavior: "smooth" })}
        className="hidden xl:flex text-white  items-center justify-center bg-black absolute z-30 rounded-[0px] -bottom-0 -right-0 w-[100px] h-[100px]"
      >
        <MoveDown size={50} strokeWidth={1} />
      </div>
    </section>
  );
};

export default Hero;
