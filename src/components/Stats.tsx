import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 200, suffix: "+", label: "Clients" },
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Completed Projects" },
  { value: 15, suffix: "+", label: "Awards Won" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-serif font-bold text-primary-foreground">
      {count}
      {suffix}
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-section-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-glow mb-3">Our Track Record</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-section-dark-foreground">
            At the Forefront of Engineering Innovation
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <CountUp target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm font-medium text-section-dark-foreground/60 uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;