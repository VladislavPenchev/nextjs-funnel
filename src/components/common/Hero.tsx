import React from "react";

const Hero = () => {
  return (
    <div className="bg-orange-100 flex items-center justify-center relative py-12 px-8">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-4 md:space-y-6 relative z-10">
        <p className="text-gray-700 text-xl md:text-2xl leading-relaxed">
          Книга за разведени майки и бащи, които не искат детето им да страда.
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
          Ще Бъдеш Добър Родител, Дори След Най-Трудното СБОГОМ !
        </h1>
        <p className="text-gray-700 text-base md:text-xl leading-relaxed">
          Без вина, без конфликти и без усещане за загуба
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-orange-200 via-transparent to-transparent" />
    </div>
  );
};

export default Hero;
