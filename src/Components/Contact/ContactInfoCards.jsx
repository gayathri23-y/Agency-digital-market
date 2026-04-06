import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactInfoCards() {
  const cards = [
    {
      icon: <Mail className="h-8 w-8 text-black" />,
      title: "Email Us",
      line1: "hello@digitalboost.com",
      line2: "We'll respond within 24 hours",
    },
    {
      icon: <Phone className="h-8 w-8 text-black" />,
      title: "Call Us",
      line1: "+1 (555) 123-4567",
      line2: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: <MapPin className="h-8 w-8 text-black" />,
      title: "Visit Us",
      line1: "123 Digital Avenue, Suite 100",
      line2: "New York, NY 10001",
    },
    {
      icon: <Clock className="h-8 w-8 text-black" />,
      title: "Business Hours",
      line1: "Mon-Fri 9AM-6PM EST",
      line2: "Sat-Sun Closed",
    },
  ];

  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-16 py-10 space-y-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-full rounded-3xl border border-gray-200 bg-white p-5 sm:p-6 lg:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div className="h-16 w-16 rounded-2xl bg-gray-100 flex items-center justify-center shrink-0">
              {card.icon}
            </div>

            <div>
              <h3 className="text-2xl font-medium text-black mb-2">
                {card.title}
              </h3>
              <p className="text-lg sm:text-xl text-gray-500 mb-1">
                {card.line1}
              </p>
              <p className="text-base sm:text-lg text-gray-500">
                {card.line2}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

