"use client";

import { useEffect } from "react";
import {
  CheckCircle,
  Gift,
  Heart,
  ArrowRight,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";

const ThankYouPage = () => {
  useEffect(() => {
    // Track thank you page view
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "purchase_completed", {
        event_category: "ecommerce",
        event_label: "Thank You Page",
      });
    }

    // Clear the order completion cookie when leaving the page
    const handleBeforeUnload = () => {
      document.cookie =
        "order-completed=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-8 py-6">
          <div className="flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Поръчката е приета успешно!
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Благодарим Ви!
          </h2>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Вашата поръчка за книгата{" "}
            <strong>&ldquo;ЩАСТЛИВО РАЗВЕДЕНИ&rdquo;</strong> беше получена
            успешно. Очаквайте скоро да се свържем с Вас за потвърждение.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">
                  Бърза обработка
                </h3>
                <p className="text-sm text-gray-600">
                  Ще се свържем с Вас в рамките на 24 часа за потвърждение
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6 text-center">
                <Gift className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">
                  Безплатни бонуси
                </h3>
                <p className="text-sm text-gray-600">
                  Аудио афирмации + Речник на детските нужди включени
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardContent className="p-6 text-center">
                <ShieldCheck className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">
                  30 дни гаранция
                </h3>
                <p className="text-sm text-gray-600">
                  &ldquo;Любовта остава&rdquo; - без риск, без въпроси
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Order Summary */}
        <Card className="mb-8 border-2 border-green-200">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Вашата поръчка
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <div className="relative w-20 h-28 flex-shrink-0">
                  <Image
                    src="/images/kniga_korica.jpg"
                    alt="ЩАСТЛИВО РАЗВЕДЕНИ Book Cover"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">
                    ЩАСТЛИВО РАЗВЕДЕНИ
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Превърни болката от раздялата в щастливо ново начало
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500 line-through text-sm">
                      39.90лв
                    </span>
                    <span className="font-bold text-green-600 text-lg">
                      29.90лв
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">
                  Включени бонуси:
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Gift className="w-4 h-4 text-red-500" />
                    <span className="text-sm">
                      Аудио афирмации (стойност 11.90лв)
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Gift className="w-4 h-4 text-red-500" />
                    <span className="text-sm">
                      Речник на детските нужди (стойност 5.90лв)
                    </span>
                  </div>
                </div>
                <div className="border-t pt-3 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Обща стойност:</span>
                    <span className="font-bold text-xl text-green-600">
                      29.90лв
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Button
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300"
            onClick={() => (window.location.href = "/")}
          >
            <Heart className="w-5 h-5 mr-2" />
            Към началната страница
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          <p className="text-gray-600 text-sm mt-4">
            Благодарим Ви, че избрахте да инвестирате в щастливото бъдеще на
            Вашето семейство!
          </p>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default ThankYouPage;
