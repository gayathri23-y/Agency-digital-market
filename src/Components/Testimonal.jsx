import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

// 🔥 CountUp Component
function CountUp({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;

      const percentage = Math.min(progress / duration, 1);
      const value = Math.floor(percentage * end);

      setCount(value);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    text: "DigitalBoost transformed our online presence completely. Our website traffic increased by 300% and lead generation improved dramatically. Their team is professional, responsive, and truly understands digital marketing.",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthCorp",
    text: "Working with DigitalBoost has been a game-changer for our business. Their data-driven approach and creative campaigns helped us achieve a 250% ROI on our marketing spend. Highly recommended!",
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, Local Eats",
    text: "The team at DigitalBoost helped us establish our brand online from scratch. Their comprehensive strategy covered everything from SEO to social media, and the results speak for themselves.",
    initials: "ER",
  },
  {
    name: "David Thompson",
    role: "VP of Sales, SolutionsPro",
    text: "DigitalBoost’s PPC campaigns have been incredibly effective. They managed to reduce our cost per lead by 40% while increasing conversion rates.",
    initials: "DT",
  },
  {
    name: "Lisa Park",
    role: "E-commerce Manager, StyleHub",
    text: "Our e-commerce sales skyrocketed after partnering with DigitalBoost. Their optimized funnel and email marketing campaigns have been phenomenal.",
    initials: "LP",
  },
  {
    name: "Robert Kim",
    role: "Business Owner, FitnessPro",
    text: "DigitalBoost helped us pivot our business model during challenging times. Their digital strategy not only kept us afloat but helped us thrive.",
    initials: "RK",
  },
];
// 🔥 MAIN COMPONENT
export default function TestimonialSection() {
  return (
    <section className=" py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            What Our Clients Say
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
  Do not just take our word for it. Here is what some of our amazing clients have to say about working with us.
</p>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 shadow-sm"
            >
              <div className="flex mb-3 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-600 text-sm mb-4">
                "{item.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-sm font-semibold">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 Bottom Stats (WORKING) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-14">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
              <CountUp end={98} suffix="%" />
            </h3>
            <p className="text-gray-500 text-sm">Client Satisfaction</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
              <CountUp end={200} suffix="+" />
            </h3>
            <p className="text-gray-500 text-sm">Happy Clients</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
              <CountUp end={150} suffix="%" />
            </h3>
            <p className="text-gray-500 text-sm">Average ROI</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
              <CountUp end={24} suffix="/7" />
            </h3>
            <p className="text-gray-500 text-sm">Support Available</p>
          </div>
        </div>

      </div>
    </section>
  );
}