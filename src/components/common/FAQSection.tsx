"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: "1",
    question: "За кого е подходящ този наръчник?",
    answer:
      "Наръчникът е създаден специално за разведени майки и бащи, които искат да запазят или възстановят връзката с детето си след раздялата – независимо дали го виждат често или не.",
  },
  {
    id: "2",
    question: "Ами ако детето ми не иска да общува с мен?",
    answer:
      "Наръчникът съдържа техники, които действат дори при ограничен или прекъснат контакт. Ще научиш как да изпращаш сигнали за обич и сигурност, които достигат до детето – дори без директни разговори.",
  },
  {
    id: "3",
    question: "Подходящ ли е за родители на тийнейджъри?",
    answer:
      "Да! Има специална секция с конкретни стратегии за тийнейджъри, които често се затварят емоционално след раздяла в семейството.",
  },
  {
    id: "4",
    question: "А ако другият родител ме настройва срещу детето?",
    answer:
      "В наръчника ще откриеш начини да изградиш доверие и стабилност, дори в трудна ситуация. Ще се научиш как да присъстваш в живота на детето без конфликти и доказване.",
  },
  {
    id: "5",
    question: "Колко време ще ми отнеме да го приложа?",
    answer:
      "Само 5–15 минути на ден. Наръчникът е създаден за заети хора и дава бързи, практични стъпки, които не изискват дълги подготовки или разговори.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            НАЙ-ЧЕСТО ЗАДАВАНИ ВЪПРОСИ
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:text-gray-600 py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
