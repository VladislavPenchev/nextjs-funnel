import { Card, CardContent } from "@/components/ui/card";

const RecognitionSection = () => {
  return (
    <div className="bg-white">
      <div className="relative bg-orange-100 py-8">
        <div className="absolute top-0 left-0 w-full h-8 overflow-hidden">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 32"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C300,32 600,0 900,32 C1050,48 1200,16 1200,32 L1200,0 Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Вероятно ще се разпознаеш...
          </h2>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-8 overflow-hidden">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 32"
            preserveAspectRatio="none"
          >
            <path
              d="M0,32 C300,0 600,32 900,0 C1050,-16 1200,16 1200,0 L1200,32 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Main content area */}
      <div className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-8">
          <Card className="border-orange-200 bg-orange-50 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6 text-gray-800 leading-relaxed">
                <p className="text-lg">
                  Разделихте се. Може би по взаимно съгласие, а може би не. Може
                  би още боли. А детето... пита, мълчи, сърди се и страда. А ти
                  се чудиш как да му кажеш истината, без да го нараниш. Мислиш
                  как да се справиш с вината, която те настига вечер, когато
                  останеш сам или сама. Опитваш се да комуникираш с другия
                  родител без скандали и обвинения, но не винаги успяваш. Чудиш
                  се как да обясниш новия партньор, особено ако детето отказва
                  да го приеме. И в един момент се питаш: „Нормално ли е всичко
                  това? Или просто съм лош родител?“
                </p>

                <p className="text-lg">
                  Ако си майка, която се чувства изоставена и трябва сама да
                  бъде силна пред детето си... Ако си баща, който се страхува,
                  че ще загуби връзката с детето си... Ако не знаеш какво да
                  кажеш, когато детето плаче, пита или мълчи... Ако сърцето ти
                  се къса, но не искаш да го покажеш... тази книга е за теб.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RecognitionSection;
