


"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Quote, ArrowRight, ArrowLeft } from "lucide-react";

const CustomersFeedbacks = () => {
  // Animation variants
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const feedbackVariants: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants: Variants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.5
      }
    },
    hover: {
      scale: 1.1,
      backgroundColor: "#E5E5E5",
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section
      id="customers-feedbacks"
      className="container mx-auto my-28 relative min-h-[620px] md:px-0 flex flex-col items-center justify-between p-6 gap-8"
    >
      {/* the pic */}
      <motion.div 
        className="hidden xl:block absolute -top-0 -left-0 "
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <img
          src="/images/home.jpg"
          alt="home"
          width={711}
          height={400}
          style={{
            clipPath:
              "polygon(0% 0%, 0% 100%, 44% 100%, 44% 30%, 100% 30%, 100% 100%, 58% 100%, 49% 100%, 100% 100%, 100% 0%)",
          }}
        />
      </motion.div>
      
      {/* the text */}
      <motion.div 
        className="self-center xl:absolute -top-0 -right-[-70px]"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h1 className="text-[30px] md:text-[40px] font-semibold text-center xl:text-left">
          What Our Customers <br /> Say About Us
        </h1>
      </motion.div>

      {/* the reviews */}
      <motion.div 
        className="absolute -bottom-0 -right-0 z-10 flex gap-11 text-white flex-row"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* comment 1 */}
        <motion.div 
          className="hidden md:flex w-[450px] h-[450px] flex-col justify-between bg-[#1F1F1F] p-8"
          variants={feedbackVariants}
        >
          <div>
            <Quote size={50} />
          </div>
          <div className="text-[22px]">
            Working with your design team was an absolute pleasure. The
            attention to detail and creativity exceeded my expectations. Thank
            you for making my home beautiful!
          </div>
          <div className="flex items-center gap-6">
            <motion.img
              src="/images/user-1.png"
              alt="customer-1"
              width={50}
              height={50}
              className="rounded-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            />
            <div>
              <p className="font-semibold">Sophie Cartere</p>
              <p className="text-sm text-[#929292]">New York, USA</p>
            </div>
          </div>
        </motion.div>

        {/* comment 2 */}
        <motion.div 
          className="w-[300px] md:w-[450px] md:h-[450px] -translate-x-[20px] md:translate-x-0 flex flex-col gap-10 justify-between bg-[#1F1F1F] p-8"
          variants={feedbackVariants}
        >
          <div>
            <Quote size={50} />
          </div>
          <div className="text-[18px] md:text-[22px]">
            Exceptional service! From the initial consultation to the final
            reveal, your team demonstrated professionalism and a keen eye for
            design. Highly recommend!
          </div>
          <div className="flex items-center gap-6">
            <motion.img
              src="/images/user-2.png"
              alt="customer-1"
              width={50}
              height={50}
              className="rounded-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            />
            <div>
              <p className="font-semibold">James Bennett</p>
              <p className="text-sm text-[#929292]">Toronto, Canada</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* arrow buttons */}
      <motion.div 
        className="flex gap-4 absolute -bottom-0 right-0 xl:-bottom-0 xl:-left-0 z-30"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="flex items-center justify-center w-[73px] h-[73px] text-black bg-[#F1F1F1]"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <ArrowLeft size={40} />
        </motion.div>
        <motion.div 
          className="flex items-center justify-center w-[73px] h-[73px] bg-[#F1F1F1]"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <ArrowRight size={40} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CustomersFeedbacks;