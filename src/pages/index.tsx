import React from "react";
import {
  Variants,
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
export default function Home() {
  const scrollVariants: Variants = {
    exitUp: {
      y: "100vh",
    },
    exitDown: {
      y: "-100vh",
    },
    initialUp: {
      y: "100vh",
    },
    initialDown: {
      y: "-100vh",
    },
    animate: {
      y: 0,
    },
  };

  const cubizBezier = [0.65, 0, 0.35, 1];

  const [index, setIndex] = React.useState(0);

  const scrollUp = React.useRef(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    console.log("scrollY", value);

    if (document.body.classList.contains("disable-scroll")) return;

    // check if the scroll is going up or down
    if (value > scrollY.getPrevious()) {
      if (index === 5) return;
      setIndex(index + 1);
      scrollUp.current = false;
      window.scrollTo(0, 1300);
    } else {
      if (index === 0) return;
      setIndex(index - 1);
      scrollUp.current = true;
      window.scrollTo(0, 1300);
    }
  });

  return (
    <motion.main className="h-[900vh]">
      <AnimatePresence mode="sync">
        {index === 0 && (
          <motion.div
            initial={!scrollUp.current ? "initialUp" : "initialDown"}
            animate="animate"
            exit={scrollUp.current ? "exitUp" : "exitDown"}
            variants={scrollVariants}
            key="zero"
            className="h-screen w-screen bg-rose-200 fixed inset-0 flex justify-center items-center"
            transition={{ duration: 1, ease: cubizBezier }}
            onAnimationComplete={() => {
              document.body.classList.remove("disable-scroll");
            }}
            onAnimationStart={() => {
              document.body.classList.add("disable-scroll");
            }}
          >
            <div className="w-48 h-96 bg-sky-200 flex items-center justify-center text-9xl font-bold">
              ONE
            </div>
          </motion.div>
        )}
        {index === 1 && (
          <motion.div
            initial={!scrollUp.current ? "initialUp" : "initialDown"}
            animate="animate"
            exit={scrollUp.current ? "exitUp" : "exitDown"}
            variants={scrollVariants}
            key="one"
            className="h-screen w-screen bg-green-200 fixed inset-0 flex justify-center items-center"
            transition={{ duration: 1, ease: cubizBezier }}
            onAnimationComplete={() => {
              document.body.classList.remove("disable-scroll");
            }}
            onAnimationStart={() => {
              document.body.classList.add("disable-scroll");
            }}
          >
            <div className="w-48 h-96 bg-yellow-200 flex items-center justify-center text-9xl font-bold">
              TWO
            </div>
          </motion.div>
        )}
        {index === 2 && (
          <motion.div
            initial={!scrollUp.current ? "initialUp" : "initialDown"}
            animate="animate"
            exit={scrollUp.current ? "exitUp" : "exitDown"}
            variants={scrollVariants}
            key="two"
            className="h-screen w-screen bg-yellow-200 fixed inset-0 flex justify-center items-center"
            transition={{ duration: 1, ease: cubizBezier }}
            onAnimationComplete={() => {
              document.body.classList.remove("disable-scroll");
            }}
            onAnimationStart={() => {
              document.body.classList.add("disable-scroll");
            }}
          >
            <div className="w-48 h-96 bg-green-200 flex items-center justify-center text-9xl font-bold">
              THREE
            </div>
          </motion.div>
        )}
        {index === 3 && (
          <motion.div
            initial={!scrollUp.current ? "initialUp" : "initialDown"}
            animate="animate"
            exit={scrollUp.current ? "exitUp" : "exitDown"}
            variants={scrollVariants}
            key="three"
            className="h-screen w-screen bg-slate-200 flex fixed inset-0 justify-center items-center"
            transition={{ duration: 1, ease: cubizBezier }}
            onAnimationComplete={() => {
              document.body.classList.remove("disable-scroll");
            }}
            onAnimationStart={() => {
              document.body.classList.add("disable-scroll");
            }}
          >
            <div className="w-48 h-96 bg-rose-200 flex items-center justify-center text-9xl font-bold">
              FOUR
            </div>
          </motion.div>
        )}
        {index === 4 && (
          <motion.div
            initial={!scrollUp.current ? "initialUp" : "initialDown"}
            animate="animate"
            exit={scrollUp.current ? "exitUp" : "exitDown"}
            variants={scrollVariants}
            key="four"
            className="h-screen w-screen bg-cyan-200 flex fixed inset-0 justify-center items-center"
            transition={{ duration: 1, ease: cubizBezier }}
            onAnimationComplete={() => {
              document.body.classList.remove("disable-scroll");
            }}
            onAnimationStart={() => {
              document.body.classList.add("disable-scroll");
            }}
          >
            <div className="w-48 h-96 bg-indigo-200 flex items-center justify-center text-9xl font-bold">
              FIVE
            </div>
          </motion.div>
        )}
        {index === 5 && (
          <motion.div
            initial={!scrollUp.current ? "initialUp" : "initialDown"}
            animate="animate"
            exit={scrollUp.current ? "exitUp" : "exitDown"}
            variants={scrollVariants}
            key="five"
            className="h-screen w-screen bg-amber-200 flex fixed inset-0 justify-center items-center"
            transition={{ duration: 1, ease: cubizBezier }}
            onAnimationComplete={() => {
              document.body.classList.remove("disable-scroll");
            }}
            onAnimationStart={() => {
              document.body.classList.add("disable-scroll");
            }}
          >
            <div className="w-48 h-96 bg-emerald-200 flex items-center justify-center text-9xl font-bold">
              SIX
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
