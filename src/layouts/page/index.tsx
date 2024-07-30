import { cn } from "@/lib/utils";
import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";

type Props = HTMLMotionProps<"section"> & {
  children?: React.ReactNode;
  className?: string;
  secondClassName?: string;
  page?: "MainFirstPage" | "FirstPage" | "Page";
};

const staggerContainer = (staggerChildren?: any, delayChildren?: any) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

const Page = ({
  children,
  className,
  secondClassName,
  page = "Page",
  ...props
}: Props) => {
  return (
    <motion.section
      {...props}
      variants={staggerContainer()}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "0px 0px -250px 0px" }}
      className={cn("flex w-full justify-center", className)}
    >
      <div
        id={secondClassName}
        className={cn(
          "relative flex w-full flex-col [&>article]:overflow-hidden",
          page == "MainFirstPage"
            ? "mainFirstPageSpacing"
            : page == "FirstPage"
              ? "firstPageSpacing"
              : "pageSpacing",
          secondClassName,
        )}
      >
        {children}
      </div>
    </motion.section>
  );
};

export default Page;
