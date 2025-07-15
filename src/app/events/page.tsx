import React from 'react';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';

export default function EventsPage() {
  // Array of events for the yearly timeline
  const yearlyEvents = [
    {
      month: 'Октябрь',
      name: 'Осенний спектакль',
      description: 'Театральная постановка на русском языке, подготовленная учениками всех возрастных групп.',
      image: 'https://placehold.co/600x400/C9A83D/FFFFFF/png?text=Autumn+Play'
    },
    {
      month: 'Декабрь',
      name: 'Новогодний праздник',
      description: 'Традиционное празднование Нового года с Дедом Морозом, Снегурочкой и праздничной программой.',
      image: 'https://placehold.co/600x400/C9A83D/FFFFFF/png?text=New+Year'
    },
    {
      month: 'Апрель',
      name: 'Весенний концерт',
      description: 'Музыкальные и поэтические выступления наших учеников, посвященные весенним праздникам.',
      image: 'https://placehold.co/600x400/C9A83D/FFFFFF/png?text=Spring+Concert'
    },
    {
      month: 'Июнь',
      name: 'Выпускной праздник',
      description: 'Торжественное мероприятие, посвященное окончанию учебного года и достижениям наших учеников.',
      image: 'https://placehold.co/600x400/C9A83D/FFFFFF/png?text=Graduation'
    }
  ];

  return (
    <main className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative w-full bg-gray-50 py-16 px-4 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">События и праздники</h1>
            <p className="text-xl text-gray-600">
              В течение года мы проводим различные мероприятия, которые помогают детям
              практиковать русский язык в творческой и праздничной атмосфере
            </p>
          </div>
        </div>
      </section>

      {/* Yearly Timeline Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title="Календарь событий"
            subtitle="Основные мероприятия Russian TISA в течение учебного года"
          />
          
          <div className="mt-12 relative">
            {/* Vertical Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-24 relative">
              {yearlyEvents.map((event, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center">
                  {/* Event Content - alternating left/right */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 order-1 md:order-2'}`}>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                      <span className="inline-block px-3 py-1 bg-gold text-white text-sm font-medium rounded-full mb-3">
                        {event.month}
                      </span>
                      <h3 className="text-2xl font-bold mb-3">{event.name}</h3>
                      <p className="text-gray-700">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Circle */}
                  <div className="md:w-12 md:flex md:justify-center md:items-center relative order-first md:order-none">
                    <div className="hidden md:block absolute w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center transform -translate-x-1/2 text-xl font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Event Image */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'order-first md:order-last' : 'md:pr-12'}`}>
                    <div className="relative h-64 rounded-lg overflow-hidden mt-6 md:mt-0">
                      <Image
                        src={event.image}
                        alt={event.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Events Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title="Дополнительные мероприятия"
            subtitle="Помимо основных событий, мы также организуем:"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Экскурсии</h3>
              <p className="text-gray-700">
                Посещение музеев, театров и других культурных мест, где дети могут практиковать русский язык в реальной среде.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Мастер-классы</h3>
              <p className="text-gray-700">
                Творческие занятия с приглашенными специалистами: художниками, музыкантами, писателями.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Родительские встречи</h3>
              <p className="text-gray-700">
                Регулярные собрания, где родители могут обсудить прогресс детей и поделиться опытом поддержки русского языка в семье.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Involvement Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                title="Участие родителей"
                subtitle="Мы приглашаем родителей принимать активное участие в наших мероприятиях"
                centered={false}
              />
              <p className="mt-6 text-gray-700">
                Родители играют важную роль в нашей школе. Вы можете:
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Помогать в организации праздников и мероприятий</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Участвовать в родительских комитетах</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Делиться своими талантами и профессиональными навыками</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Предлагать идеи для новых мероприятий и проектов</span>
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://placehold.co/800x600/C9A83D/FFFFFF/png?text=Parent+Involvement"
                alt="Родители участвуют в мероприятиях"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gold text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Присоединяйтесь к нашим мероприятиям</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Запишите вашего ребенка в Russian TISA и станьте частью нашего дружного сообщества
          </p>
          <Button variant="secondary">Записаться на пробное занятие</Button>
        </div>
      </section>
    </main>
  );
}
