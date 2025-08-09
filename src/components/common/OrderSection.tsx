"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Gift, ShieldCheck } from "lucide-react";
import { createClient } from "@/lib/supabase";

interface OrderFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  useDifferentBilling: boolean;
  cashOnDelivery: boolean;
  promoCode: string;
}

const OrderSection = () => {
  const { register, handleSubmit, reset } = useForm<OrderFormData>();

  const onSubmit = async (data: OrderFormData) => {
    try {
      const supabase = await createClient();
      const { error } = await supabase.from("orders").insert([
        {
          full_name: data.fullName,
          email: data.email,
          phone: data.phone,
          address: data.address,
          city: data.city,
          delivery_method: "speedy-office",
          payment_method: "cash-on-delivery",
          total_price: "29.90лв / €15.29",
          promo_code: data.promoCode || "",
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        console.error("Error inserting order:", error);
        alert("Грешка при изпращане на поръчката. Моля, опитайте отново.");
      } else {
        reset();
        // Track successful order
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "purchase", {
            event_category: "ecommerce",
            event_label: "Book Purchase - ЩАСТЛИВО РАЗВЕДЕНИ",
            value: 29.9,
          });
        }
        // Redirect to thank you page
        window.location.href = "/thank-you";
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Грешка при изпращане на поръчката. Моля, опитайте отново.");
    }
  };

  return (
    <section id="order-form" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Product Info */}
          <div className="space-y-8">
            <div className="flex flex-col items-center justify-center text-center space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold">
                  ЩАСТЛИВО РАЗВЕДЕНИ
                </h2>
                <p className="text-xl text-gray-800 font-semibold">
                  Превърни болката и страданието от раздялата в щастливо ново
                  начало
                </p>
                <p className="italic text-gray-700">
                  Книга за родители, които не се отказват – дори когато
                  семейството се разпада
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
                    🎧 Слушай. Отпусни се. Преосмисли родителството си с
                    вътрешна сила.
                  </p>
                  <p className="text-gray-700 mt-3">
                    Получаваш достъп до 5 кратки, но силно въздействащи аудио
                    записа с позитивни утвърждения, създадени специално за
                    разведени майки и бащи. Подкрепят те в моменти на съмнение,
                    вина или тревожност.
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
            </div>

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
          </div>

          {/* Right Column - Order Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Информация за клиента</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Име и Фамилия</Label>
                    <Input
                      id="fullName"
                      {...register("fullName", { required: true })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Имейл Адрес</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", { required: true })}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Address */}
              <Card>
                <CardHeader>
                  <CardTitle>Адрес за доставка</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="phone">Телефонен номер</Label>
                    <Input
                      id="phone"
                      {...register("phone", { required: true })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Адрес</Label>
                    <Input
                      id="address"
                      {...register("address", { required: true })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">Град</Label>
                    <Input
                      id="city"
                      {...register("city", { required: true })}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Метод на доставка</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value="speedy-office"
                        defaultChecked
                        className="w-5 h-5"
                        suppressHydrationWarning
                      />
                      <span className="text-gray-800 font-medium">
                        ДОСТАВКА ДО ОФИС НА СПИДИ
                      </span>
                    </div>
                    <span className="text-gray-800 font-medium">
                      4.99лв / €2.55
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Метод на плащане</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash-on-delivery"
                      defaultChecked
                      className="w-5 h-5"
                      suppressHydrationWarning
                    />
                    <Label htmlFor="cashOnDelivery">Наложен платеж</Label>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Информация за поръчка</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative w-12 h-16">
                        <Image
                          src="/images/kniga_korica.jpg"
                          alt="Book cover"
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">ЩАСТЛИВО РАЗВЕДЕНИ</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 line-through">
                        39.90лв / €20.40
                      </p>
                      <p className="font-bold">29.90лв / €15.29</p>
                    </div>
                  </div>

                  {/* Bonuses */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Gift className="flex-shrink-0 mt-1 w-10 h-10 text-red-500" />
                      <div>
                        <p className="font-semibold">Бонуси към Книгата</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 line-through">
                        17.80лв / €9.10
                      </p>
                      <p className="font-bold">0.00лв / €0.00</p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Общо:</span>
                      <span>29.90лв / €15.29</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 line-through">
                        Общо: 57.70лв / €29.50
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center mt-4">
                <Button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-8 px-16 rounded-full text-xl transition-colors duration-300 cursor-pointer w-full max-w-md">
                  <div className="flex flex-col items-center">
                    <p className="text-xl font-bold">ПОРЪЧАЙ СЕГА</p>
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
                  Ако не усетиш промяна ще ви върнем парите. Без риск. Без
                  въпроси.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
