const SolutionSection = () => {
  return (
    <section className="bg-orange-100 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Какво е решението?
          </h2>

          <div className="space-y-6 text-gray-800 leading-relaxed text-lg">
            <p>
              Представи си, че връзката между теб и детето ти е като тиха,
              невидима нишка. Тя не се къса лесно, но с времето, ако не я
              поддържаш – избледнява.
            </p>

            <p>
              Много родители се опитват да компенсират с подаръци, редки срещи
              или случайни разговори. Но ако няма емоционална сигурност – детето
              се затваря. А връзката ви отслабва.
            </p>

            <p>
              Истинският проблем не е в това колко време прекарвате заедно, а
              дали детето се чувства свързано с теб – дори когато не си до него.
            </p>

            <p>
              Наръчникът След раздялата работи по различен начин – той не те учи
              как да говориш правилно или да постъпиш зряло.
            </p>

            <p>
              Той ти показва как с малки, но дълбоки жестове – само за няколко
              минути на ден – можеш да изградиш усещане за близост, доверие и
              стабилност, без натиск, без вина и без да чакаш подходящия момент.
            </p>

            <p>И тогава се случва нещо истинско:</p>

            <ul className="space-y-4 text-left max-w-2xl mx-auto">
              <li className="flex items-start space-x-3">
                <span className="text-2xl">👶</span>
                <span>Да се смее с теб.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-2xl">👧</span>
                <span>Детето започва да ти пише първо.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-2xl">🫂</span>
                <span>Да се чувства сигурно, дори отдалечено.</span>
              </li>
            </ul>

            <p className="text-xl font-bold mt-8">
              А ти – да знаеш, че си добър родител, който оставя следа.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
