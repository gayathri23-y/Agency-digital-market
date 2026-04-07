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

// 🔥 Testimonials Data (6 cards)
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    text: "DigitalBoost transformed our online presence completely. Our website traffic increased by 300% and lead generation improved dramatically.",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthCorp",
    text: "Working with DigitalBoost has been a game-changer for our business. Their campaigns helped us achieve massive ROI.",
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, Local Eats",
    text: "They helped us build our brand from scratch. SEO and social media strategy was perfect.",
    initials: "ER",
  },
  {
    name: "David Thompson",
    role: "VP of Sales, SolutionsPro",
    text: "Our cost per lead dropped by 40% after working with them. Highly effective campaigns.",
    initials: "DT",
  },
  {
    name: "Lisa Park",
    role: "E-commerce Manager, StyleHub",
    text: "Our sales skyrocketed with their optimized funnels and email marketing.",
    initials: "LP",
  },
  {
    name: "Robert Kim",
    role: "Business Owner, FitnessPro",
    text: "They helped us pivot our business and grow even during tough times.",
    initials: "RK",
  },
];

// 🔥 MAIN COMPONENT
export default function TestimonialSection() {
  return (
    <section className="bg-[#f9fafb] py-12 sm:py-16 px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
            What Our Clients Say
          </h2>

          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
            Do not just take our word for it. Here is what some of our amazing clients have to say about working with us.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between h-full"
            >
              {/* Stars */}
              <div className="flex mb-3 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-xs sm:text-sm mb-6 leading-relaxed">
                "{item.text}"
              </p>

              {/* Profile */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full text-sm font-semibold">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mt-14">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              <CountUp end={98} suffix="%" />
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm">Client Satisfaction</p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              <CountUp end={200} suffix="+" />
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm">Happy Clients</p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              <CountUp end={150} suffix="%" />
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm">Average ROI</p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              <CountUp end={24} suffix="/7" />
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm">Support Available</p>
          </div>
        </div>

      </div>
    </section>
  );
}