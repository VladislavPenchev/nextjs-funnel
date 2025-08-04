"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

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
  const { register, handleSubmit, watch, setValue } = useForm<OrderFormData>();

  const onSubmit = (data: OrderFormData) => {
    console.log("Order data:", data);
    // Handle order submission
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                ЩАСТЛИВО РАЗВЕДЕНИ
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                Превърни болката и страданието от раздялата в щастливо ново
                начало
              </p>
              <p className="text-gray-600">
                Книга за родители, които не се отказват - дори когато
                семейството се разпада
              </p>
            </div>

            {/* Bonus 1 */}
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">
                  Подарък 1: Аудио афирмации за разведени родители{" "}
                  <span className="font-normal text-gray-600">
                    (стойност 11.90лв.)
                  </span>
                </h3>
                <p className="text-gray-700 mt-2">
                  Слушай. Отпусни се. Преосмисли родителството си с вътрешна
                  сила. Получаваш достъп до 5 кратки, но силно въздействащи
                  аудио записа с позитивни утвърждения, създадени специално за
                  разведени майки и бащи. Подкрепят те в моменти на съмнение,
                  вина или тревожност.
                </p>
              </div>
            </div>

            {/* Bonus 2 */}
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">
                  Подарък 2: Речник на детските нужди{" "}
                  <span className="font-normal text-gray-600">
                    (стойност 5.90лв.)
                  </span>
                </h3>
                <p className="text-gray-700 mt-2">
                  PDF списък с най-честите емоционални нужди на децата след
                  раздяла + как да ги разпознаеш и как да реагираш.
                </p>
              </div>
            </div>

            {/* Book Cover */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-48 h-64 shadow-lg rounded-lg overflow-hidden">
                <Image
                  src="/images/kniga_korica.jpg"
                  alt="ЩАСТЛИВО РАЗВЕДЕНИ Book Cover"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Order Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Customer Information */}
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
                      placeholder="Въведете вашето име"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Адрес</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="your@email.com"
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
                      placeholder="+359 888 123 456"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Адрес</Label>
                    <Input
                      id="address"
                      {...register("address", { required: true })}
                      placeholder="Улица, номер"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">Град</Label>
                    <Input
                      id="city"
                      {...register("city", { required: true })}
                      placeholder="София"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="useDifferentBilling"
                      {...register("useDifferentBilling")}
                      className="rounded"
                    />
                    <Label htmlFor="useDifferentBilling">
                      Използвай различен адрес на фактуриране
                    </Label>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Метод на доставка</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="destructive" disabled className="w-full">
                    Няма налични методи за доставка!
                  </Button>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Метод на плащане</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="cashOnDelivery"
                      {...register("cashOnDelivery")}
                      className="rounded"
                    />
                    <Label htmlFor="cashOnDelivery">Наложен платеж</Label>
                  </div>
                </CardContent>
              </Card>

              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Информация за поръчка</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Product */}
                  <div className="flex items-center space-x-3">
                    <div className="relative w-12 h-16">
                      <Image
                        src="/images/kniga_korica.jpg"
                        alt="Book cover"
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">ЩАСТЛИВО РАЗВЕДЕНИ</p>
                      <p className="text-sm text-gray-500 line-through">
                        29.90лв / €15.29
                      </p>
                      <p className="font-bold">29.90лв / €15.29</p>
                    </div>
                  </div>

                  {/* Bonuses */}
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                      <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Бонуси към Книгата</p>
                      <p className="text-green-600">0.00лв / €0.00</p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between">
                      <span>Междинна сума:</span>
                      <span>29.90лв / €15.29</span>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="space-y-2">
                    <button type="button" className="text-blue-600 text-sm">
                      Въведи промо код
                    </button>
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Код за отстъпка"
                        {...register("promoCode")}
                      />
                      <Button type="button" variant="outline">
                        Приложи
                      </Button>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Общо:</span>
                      <span>29.90лв / €15.29</span>
                    </div>
                    <p className="text-sm text-gray-500 line-through">
                      Общо: 57.70лв / €29.50
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg"
              >
                ✓ ВЗЕМИ ОФЕРТАТА
              </Button>

              {/* Guarantees */}
              <div className="text-center space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-center space-x-2">
                  <span>✓</span>
                  <span>14 дни право на връщане</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span>🔒</span>
                  <span>Гарантирани резултати</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
