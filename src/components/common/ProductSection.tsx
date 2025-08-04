import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Gift, ShieldCheck } from "lucide-react";

const ProductSection = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-80 h-auto md:w-96 lg:w-[500px] aspect-[3/4] rounded-lg overflow-hidden">
            <Image
              src="/images/kniga_korica.jpg"
              alt="ЩАСТЛИВО РАЗВЕДЕНИ Book Cover"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">
              ЩАСТЛИВО РАЗВЕДЕНИ
            </h2>
            <p className="text-xl text-gray-800 font-semibold">
              Превърни болката и страданието от раздялата в щастливо ново начало
            </p>
            <p className="italic text-gray-700">
              Книга за родители, които не се отказват – дори когато семейството
              се разпада
            </p>
          </div>

          <div className="flex items-start">
            <Gift className="flex-shrink-0 mt-1 w-10 h-10 text-red-500" />
            <div className="ml-3 text-left">
              <h3 className="font-bold text-lg text-gray-700">
                Подарък 1: Аудио афирмации за разведени родители{" "}
                <span className="font-semibold italic text-orange-500">
                  (стойност 11.90лв.)
                </span>
              </h3>
              <p className="text-gray-700 mt-3">
                🎧 Слушай. Отпусни се. Преосмисли родителството си с вътрешна
                сила.
              </p>
              <p className="text-gray-700 mt-3">
                Получаваш достъп до 5 кратки, но силно въздействащи аудио записа
                с позитивни утвърждения, създадени специално за разведени майки
                и бащи. Подкрепят те в моменти на съмнение, вина или тревожност.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Gift className="flex-shrink-0 mt-1 w-10 h-10 text-red-500" />
            <div className="ml-3 text-left">
              <h3 className="font-bold text-lg text-gray-700">
                Подарък 2: Речник на детските нужди{" "}
                <span className="font-semibold italic text-orange-500">
                  (стойност 5.90лв.)
                </span>
              </h3>
              <p className="text-gray-700 mt-3">
                PDF списък с най-честите емоционални нужди на децата след
                раздяла + как да ги разпознаеш и как да реагираш.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-700 font-bold text-2xl">
              Обща Стойност На Всичко
            </p>
            <p className="text-3xl md:text-3xl font-bold text-orange-500 line-through mt-2">
              57.70лв / €29.50
            </p>
            <p className="text-4xl md:text-4xl font-bold text-gray-700 mt-2">
              САМО СЕГА{" "}
              <span className="text-3xl md:text-3xl font-bold text-orange-500 line-through mt-2">
                29.90лв / €15.29
              </span>
            </p>
          </div>

          <div className="text-center mt-4">
            <Button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-8 px-16 rounded-full text-xl transition-colors duration-300 cursor-pointer w-full max-w-md">
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold">КУПИ СЕГА</p>
                <p className="text-sm font-normal">
                  Остават по - малко от 50 броя
                </p>
              </div>
            </Button>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-blue-400 fill-current flex-shrink-0" />
              <p className="font-semibold text-base">
                30 дни гаранция &ldquo;Любовта остава&rdquo;
              </p>
            </div>
            <p className="text-sm mt-1">
              Ако не усетиш промяна ще ви върнем парите. Без риск. Без въпроси.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
