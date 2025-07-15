import React from 'react';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';

export default function ProgramPage() {
  return (
    <main className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative w-full bg-gray-50 py-16 px-4 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Наша программа</h1>
            <p className="text-xl text-gray-600">
              Образовательная программа Russian TISA разработана с учетом возрастных 
              особенностей детей и направлена на всестороннее развитие языковых навыков
            </p>
          </div>
        </div>
      </section>

      {/* Age Groups Curriculum Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title="Учебный план по возрастным группам"
            subtitle="Наша программа адаптирована для разных возрастов, чтобы обеспечить оптимальное развитие каждого ребенка"
          />
          
          <div className="mt-12 space-y-16">
            {/* Junior Group */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4 text-gold">Младшая группа (3-6 лет)</h3>
                <p className="text-gray-700 mb-4">
                  Для самых маленьких учеников мы создаем игровую среду, где изучение языка 
                  происходит естественно и увлекательно. Основной фокус — на развитии речи, 
                  расширении словарного запаса и знакомстве с русской культурой через сказки и песни.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Развитие речи через игры, песни и стихи</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Знакомство с буквами и звуками русского языка</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Русские народные сказки и детская литература</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Творческие занятия: рисование, лепка, аппликация</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Знакомство с русскими праздниками и традициями</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden order-1 md:order-2">
                <Image
                  src="https://placehold.co/800x600/C9A83D/FFFFFF/png?text=Junior+Group"
                  alt="Младшая группа (3-6 лет)"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Middle Group */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://placehold.co/800x600/C9A83D/FFFFFF/png?text=Middle+Group"
                  alt="Средняя группа (7-9 лет)"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gold">Средняя группа (7-9 лет)</h3>
                <p className="text-gray-700 mb-4">
                  Для детей, которые уже знакомы с основами русского языка, мы предлагаем более 
                  структурированную программу, направленную на развитие чтения, письма и 
                  коммуникативных навыков.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Чтение и анализ детской литературы</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Развитие письменной речи и грамматики</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Проектная деятельность: создание книг, презентаций</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Основы русской истории и географии</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Командные игры и дискуссии на русском языке</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Senior Group */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4 text-gold">Старшая группа (10-12 лет)</h3>
                <p className="text-gray-700 mb-4">
                  Для старших детей программа фокусируется на углубленном изучении языка, 
                  литературы и культуры, а также на развитии критического мышления и 
                  предпринимательских навыков.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Углубленное изучение грамматики и стилистики</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Русская классическая и современная литература</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Дебаты и презентации на русском языке</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Исследовательские проекты по русской культуре</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Подготовка к языковым сертификатам (по желанию)</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden order-1 md:order-2">
                <Image
                  src="https://placehold.co/800x600/C9A83D/FFFFFF/png?text=Senior+Group"
                  alt="Старшая группа (10-12 лет)"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typical Sunday Timeline */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title="Типичное воскресенье в Russian TISA"
            subtitle="Как проходит день в нашей школе"
          />
          
          <div className="mt-12 relative">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 relative">
              {/* Timeline Item 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">9:30 - 10:00</h3>
                  <p className="text-gray-700">Приветствие и утренний круг</p>
                </div>
                <div className="md:w-12 md:flex md:justify-center md:items-center relative">
                  <div className="hidden md:block absolute w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center transform -translate-x-1/2 text-xl font-bold">
                    1
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <p className="text-gray-600">
                    Дети собираются в классе, делятся новостями и настраиваются на занятие. 
                    Преподаватель рассказывает о плане на день.
                  </p>
                </div>
              </div>
              
              {/* Timeline Item 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">10:00 - 11:15</h3>
                  <p className="text-gray-700">Основной учебный блок</p>
                </div>
                <div className="md:w-12 md:flex md:justify-center md:items-center relative">
                  <div className="hidden md:block absolute w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center transform -translate-x-1/2 text-xl font-bold">
                    2
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <p className="text-gray-600">
                    Интенсивная работа с языком: чтение, письмо, грамматика, в зависимости от 
                    возрастной группы. Используем интерактивные методы и работу в малых группах.
                  </p>
                </div>
              </div>
              
              {/* Timeline Item 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">11:15 - 11:30</h3>
                  <p className="text-gray-700">Перерыв и перекус</p>
                </div>
                <div className="md:w-12 md:flex md:justify-center md:items-center relative">
                  <div className="hidden md:block absolute w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center transform -translate-x-1/2 text-xl font-bold">
                    3
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <p className="text-gray-600">
                    Время для отдыха, общения и легкого перекуса. Дети могут поиграть в 
                    настольные игры на русском языке.
                  </p>
                </div>
              </div>
              
              {/* Timeline Item 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">11:30 - 12:30</h3>
                  <p className="text-gray-700">Творческий блок</p>
                </div>
                <div className="md:w-12 md:flex md:justify-center md:items-center relative">
                  <div className="hidden md:block absolute w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center transform -translate-x-1/2 text-xl font-bold">
                    4
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <p className="text-gray-600">
                    Проектная работа, творческие задания, театральные постановки или 
                    подготовка к праздникам — всё это помогает применить языковые навыки на практике.
                  </p>
                </div>
              </div>
              
              {/* Timeline Item 5 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">12:30 - 12:45</h3>
                  <p className="text-gray-700">Подведение итогов</p>
                </div>
                <div className="md:w-12 md:flex md:justify-center md:items-center relative">
                  <div className="hidden md:block absolute w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center transform -translate-x-1/2 text-xl font-bold">
                    5
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <p className="text-gray-600">
                    Обсуждение достижений дня, рефлексия и задания на дом. Дети делятся 
                    впечатлениями и планами на следующую неделю.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title="Фотогалерея"
            subtitle="Моменты из жизни нашей школы"
          />
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={`https://placehold.co/600x400/C9A83D/FFFFFF/png?text=Gallery+${num}`}
                  alt={`Фото из галереи ${num}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="secondary">Смотреть больше фотографий</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gold text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Готовы присоединиться к нам?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Запишитесь на пробное занятие и дайте вашему ребенку возможность полюбить русский язык
          </p>
          <Button variant="secondary">Записаться на пробное занятие</Button>
        </div>
      </section>
    </main>
  );
}
