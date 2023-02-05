import React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Home() {
  const bgColors = [
    "bg-rose-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-slate-200",
    "bg-cyan-200",
    "bg-amber-200",
  ];
  const [index, setIndex] = React.useState(0);

  const scrollUp = React.useRef(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    if (document.body.classList.contains("disable-scroll")) return;

    document.body.classList.add("disable-scroll");

    setTimeout(() => {
      document.body.classList.remove("disable-scroll");
    }, 950);

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
      <div className="fixed inset-0 -z-[1] flex flex-col">
        <h1 className="fixed inset-0 -z-[1]  h-screen w-screen grid place-items-center text-[25vw] text-gray-100 font-extrabold">
          section
        </h1>
        <div
          className={`wrapper`}
          style={{
            transform: `translate3d(0, -${index * 100}vh, 0)`,
          }}
        >
          {bgColors.map((color, i) => (
            <motion.div
              key={color}
              className="h-screen w-screen rea z-10 px-20 text-9xl font-extrabold flex justify-between items-center"
            >
              DIV <br></br>#{i + 1}
              <motion.div
                initial={{ scaleY: 0.7, x: 50 }}
                whileInView={{ scaleY: 1, scaleX: 0.8, x: 0 }}
                transition={{ duration: .8, ease: "easeInOut" }}
                viewport={{ margin: "100px" }}
                className={`w-[50vw] h-[70vh] ${color}`}
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}
