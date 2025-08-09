const BenefitsSection = () => {
  const positiveBenefits = [
    "Усетиш отново близост и доверие в отношенията ви",
    "Изразиш любовта си по начин, който детето разбира и запомня",
    "Бъдеш спокоен, че си добър родител – дори когато не си до него",
  ];

  const negativeAvoid = [
    "Водиш дълги и тежки разговори с бившия партньор",
    "Прекарваш часове в търсене на „правилните думи",
    "Чувстваш вина, че не си перфектен родител",
  ];

  return (
    <section className="bg-orange-100 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          Кажи сбогом на чувството, че губиш връзката с детето си като
        </h2>

        <p className="text-2xl font-semibold text-gray-700 mb-8 text-center">
          Най-накрая ще можеш да:
        </p>

        <div className="space-y-2 mb-8 flex flex-col items-center">
          {positiveBenefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start justify-start space-x-2 w-full max-w-lg px-4"
            >
              <span className="text-green-600 text-xl font-bold w-6 text-center flex-shrink-0 mt-1">
                ✔
              </span>
              <span className="text-gray-800 text-xl font-semibold leading-relaxed">
                {benefit}
              </span>
            </div>
          ))}
        </div>

        <p className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          И всичко това без да:
        </p>

        <div className="space-y-2 flex flex-col items-center">
          {negativeAvoid.map((item, index) => (
            <div
              key={index}
              className="flex items-start justify-start space-x-2 w-full max-w-lg px-4"
            >
              <span className="text-red-600 text-xl font-bold w-6 text-center flex-shrink-0 mt-1">
                Х
              </span>
              <span className="text-gray-800 text-xl font-semibold leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
