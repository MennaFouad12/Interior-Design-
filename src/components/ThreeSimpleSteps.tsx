

"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Rocket, Lightbulb, CircleCheck } from "lucide-react";

const ThreeSimpleSteps = () => {
  const steps = [
    {
      id: 1,
      title: "Start Project",
      description:
        "Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience.",
      icon: Rocket,
    },
    {
      id: 2,
      title: "Craft",
      description:
        "Collaborate closely to achieve design excellence refining your vision and crafting brilliance into every aspect of your space.",
      icon: Lightbulb,
    },
    {
      id: 3,
      title: "Execute",
      description:
        "Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space.",
      icon: CircleCheck,
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.5
      }
    }
  };

  const lineVariants: Variants = {
    hidden: { height: 0 },
    visible: {
      height: 100,
      transition: {
        duration: 0.8,
        delay: 0.5
      }
    }
  };

  return (
    <section
      id="three-simple-steps"
      className="container mx-auto my-60 px-4 md:px-8"
    >
      <motion.div 
        className="flex flex-col px-4 md:px-0 mb-5 justify-between lg:flex-row md:items-center gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Right side : text */}
        <div className="max-w-2xl flex flex-col gap-7 justify-between">
          <motion.h2 
            className="text-[40px] md:text-[40px] text-left font-semibold mb-6"
            variants={itemVariants}
          >
            Designing Your Dream in Three Simple Steps
          </motion.h2>

          <div className="flex flex-col gap-2">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                className="flex flex-row gap-6 justify-between items-center"
                variants={itemVariants}
              >
                <div className="flex flex-col items-center gap-4 mb-4">
                  <motion.div 
                    className="w-12 h-12 p-3 text-white rounded-full bg-black flex items-center justify-center"
                    variants={iconVariants}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <step.icon className="w-7 h-7" />
                  </motion.div>
                  {step.id === 3 ? (
                    <></>
                  ) : (
                    <motion.div 
                      className="h-[100px] w-px border-l border-[#9B9B9B]"
                      variants={lineVariants}
                    />
                  )}
                </div>
                <div className="py-4">
                  <motion.h3 
                    className="text-[30px] font-semibold"
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.3 * step.id, duration: 0.5 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p 
                    className="text-[#545454] max-w-[569px] mt-2"
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.3 * step.id + 0.2, duration: 0.5 }}
                  >
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Left side : image */}
        <motion.div
          variants={imageVariants}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <img
            src="/images/Mask-group-2.png"
            alt="Designing your dream"
            width={650}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ThreeSimpleSteps;
