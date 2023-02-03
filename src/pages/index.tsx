import React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
export default function Home() {
  const [index, setIndex] = React.useState(0);

  const scrollUp = React.useRef(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    if (document.body.classList.contains("disable-scroll")) return;

    document.body.classList.add("disable-scroll");

    setTimeout(() => {
      document.body.classList.remove("disable-scroll");
    }, 1050);

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
    <motion.main className="h-[900vh] no-scroll">
      <div className="fixed inset-0 flex flex-col">
        <div
          className={`wrapper`}
          style={{
            transform: `translateY(-${index * 100}vh)`,
          }}
        >
          <motion.div className="h-screen w-screen bg-rose-200 flex justify-center items-center">
            <div className="w-48 h-96 bg-sky-200 flex items-center justify-center text-9xl font-bold">
              ONE
            </div>
          </motion.div>
          <motion.div className="h-screen w-screen bg-green-200 flex justify-center items-center">
            <div className="w-48 h-96 bg-yellow-200 flex items-center justify-center text-9xl font-bold">
              TWO
            </div>
          </motion.div>
          <motion.div className="h-screen w-screen bg-yellow-200 flex justify-center items-center">
            <div className="w-48 h-96 bg-green-200 flex items-center justify-center text-9xl font-bold">
              THREE
            </div>
          </motion.div>
          <motion.div className="h-screen w-screen  bg-slate-200 flex  justify-center items-center">
            <div className="w-48 h-96 bg-rose-200 flex items-center justify-center text-9xl font-bold">
              FOUR
            </div>
          </motion.div>
          <motion.div className="h-screen w-screen  bg-cyan-200 flex  justify-center items-center">
            <div className="w-48 h-96 bg-indigo-200 flex items-center justify-center text-9xl font-bold">
              FIVE
            </div>
          </motion.div>
          <motion.div className="h-screen w-screen  bg-amber-200 flex  justify-center items-center">
            <div className="w-48 h-96 bg-emerald-200 flex items-center justify-center text-9xl font-bold">
              SIX
            </div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}
