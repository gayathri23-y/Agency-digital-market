import { Calendar } from "lucide-react";

export default function FreeStrategySession() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-16 py-10">
      <div className="w-full rounded-3xl bg-[#02031a] px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <h2 className="text-2xl sm:text-3xl font-medium text-white mb-4">
          Free Strategy Session
        </h2>

        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300 max-w-4xl mb-8">
          Book a 30-minute consultation with our experts to discuss your goals and get a custom strategy recommendation.
        </p>

        <button className="w-full rounded-2xl bg-white px-6 py-4 text-black text-base sm:text-lg font-medium flex items-center justify-center gap-3 hover:opacity-90 transition">
          <Calendar className="h-5 w-5" />
          <span>Schedule Free Consultation</span>
        </button>
      </div>
    </section>
  );
}
