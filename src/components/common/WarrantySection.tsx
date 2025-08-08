import Image from "next/image";

const WarrantySection = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Warranty Badge */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Warranty Badge Image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <Image
                  src="/images/warranty.png"
                  alt="30 дни гаранция"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Guarantee Text */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight text-center">
                30-дневна гаранция за връщане на парите
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                30-дневна 100% гаранция за връщане на парите за &ldquo;След
                раздялата&rdquo;.
              </p>

              <p>
                Имаш 30 дни да тестваш наръчника и да решиш дали ти помага да се
                свържеш отново с детето си.
              </p>

              <p>
                Дори да решиш, че не е за теб – можеш да задържиш файла и пак ще
                ти върна парите.
              </p>

              <p>
                Ако не се чувстваш 100% удовлетворен в рамките на 30 дни, просто
                ми изпрати имейл на [твоя имейл] и ще ти възстановя сумата
                веднага след като банката го обработи.
              </p>
            </div>

            <div className="pt-6">
              <p className="text-xl font-bold text-gray-800 text-center">
                Никакви рискове. Никакви обяснения. Само подкрепа!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarrantySection;
