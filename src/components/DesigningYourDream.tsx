

"use client";

import { useState } from "react";
import { motion, AnimatePresence} from "framer-motion";
import type { Variants } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

const DesigningYourDream = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  
  const toggleItem = (index: number) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter(item => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };
  
  const designItems = [
    {
      title: "Living Room Interior Design",
      content: "Transform your living space with our expert design solutions that blend comfort, style, and functionality for the perfect gathering space."
    },
    {
      title: "Commercial Office Room Interior Design",
      content: "Create productive and inspiring work environments with our commercial interior design services tailored to your business needs."
    }
  ];

  // Properly typed animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="design-your-dream" className="container mx-auto mb-48 my-28">
      <motion.div 
        className="flex flex-col justify-between lg:flex-row items-center gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left side : image */}
        <motion.div 
          className="px-4 md:px-0"
          variants={imageVariants}
        >
          <motion.img
            src="/images/Mask-group.png"
            alt="Designing your dream"
            width={650}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        {/* Right side : text */}
        <motion.div 
          className="max-w-xl flex flex-col gap-8 justify-between min-h-[600px] p-8"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-[40px] font-semibold mb-6"
            variants={itemVariants}
          >
            Designing Your Dream With Brilliance
          </motion.h2>

          <motion.p 
            className="text-[20px] text-[#545454]"
            variants={itemVariants}
          >
            Elevate your spaces with bespoke interior designs that reflect your
            unique style and aspirations, crafted with precision and brilliance
            for an unforgettable living experience
          </motion.p>

          <motion.div 
            className="mt-6"
            variants={itemVariants}
          >
            {designItems.map((item, index) => (
              <div key={index} className="mb-4">
                <motion.div 
                  className="flex items-center justify-between my-4 cursor-pointer p-2 rounded-lg"
                  onClick={() => toggleItem(index)}
                  whileHover={{ backgroundColor: "#f5f5f5" }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="font-semibold text-[20px]">
                    {item.title}
                  </p>
                  {expandedItems.includes(index) ? (
                    <Minus className="inline-block ml-2" size={20} />
                  ) : (
                    <Plus className="inline-block ml-2" size={20} />
                  )}
                </motion.div>
                
                <AnimatePresence>
                  {expandedItems.includes(index) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pl-2"
                    >
                      <p className="text-[#545454] py-2">{item.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <hr />
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={"default"}
              className="w-[200px] h-[50px] px-4 py-2 mt-3.5 rounded-[4px]"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DesigningYourDream;
