import { Card, CardContent, CardHeader } from "@/components/ui/card";

const stepsData = [
  {
    id: 1,
    title: "Осъзнай какво наистина усеща gememo mu (gopu без да ти го казва)",
    content:
      "В първата част на книгата ще научиш как да разчиташ сигналите зад мълчанието, дистанцията или странното поведение на детето след раздялата – без да се налага то да говори открито. Това ти дава ясна представа от какво има нужда и как можеш да го подкрепиш.",
  },
  {
    id: 2,
    title:
      'Изгради "невидима нишка" - техника за емоционална сигурност c 5 минути на ден',
    content:
      "Ще откриеш прост, но силен ритуал, който можеш да правиш всеки ден – независимо къде се намираш. Без драми, без дълги разговори, без нужда от разрешение от другия родител. С тази техника детето ще знае, че винаги си там, дори когато не си физически до него.",
  },
  {
    id: 3,
    title: "Заздрави доверието с думи и действия, които остават в сърцето",
    content:
      "Ще получиш готови изрази, идеи за бележки, подаръци и малки жестове, които изграждат доверие и стабилност. Това е начин да покажеш любовта си по начин, който детето разбира и запомня – без натиск, вина или чувство за загуба.",
  },
];

const StepsSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stepsData.map((step) => (
            <Card
              key={step.id}
              className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-green-600 to-green-800 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
            >
              <CardHeader className="text-white text-center pb-3 flex-shrink-0">
                <h3 className="font-bold text-lg">Стъпка {step.id}</h3>
              </CardHeader>
              <CardContent className="px-6 pb-6 pt-0 flex-1 flex flex-col">
                <h4 className="text-white text-xl font-semibold mb-3 leading-tight text-center">
                  {step.title}
                </h4>
                <div className="bg-white/90 text-gray-700 p-4 rounded-lg backdrop-blur-sm flex-1">
                  <p className="text-sm leading-relaxed">{step.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
