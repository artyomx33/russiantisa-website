import React from 'react';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import TeacherCard from '@/components/TeacherCard';
import Button from '@/components/Button';

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gray-50 py-16 px-4 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">О нашей школе</h1>
            <p className="text-xl text-gray-600">
              Russian TISA — это воскресная школа русского языка в Лейдене, 
              где дети сохраняют связь с русским языком и культурой через 
              современные образовательные методики.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                title="Наша миссия"
                subtitle="Мы стремимся сохранить русский язык и культуру для детей, живущих за рубежом"
                centered={false}
              />
              <p className="mt-6 text-gray-700">
                Мы верим, что знание родного языка — это ключ к культурной идентичности и 
                интеллектуальному развитию ребенка. Наша миссия — создать вдохновляющую 
                образовательную среду, где дети могут:
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#C52233] mr-2">•</span>
                  <span>Свободно говорить, читать и писать на русском языке</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C52233] mr-2">•</span>
                  <span>Познакомиться с богатством русской культуры и традиций</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C52233] mr-2">•</span>
                  <span>Развить лидерские качества и предпринимательское мышление</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C52233] mr-2">•</span>
                  <span>Найти друзей в русскоязычном сообществе Лейдена</span>
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://placehold.co/800x600/C52233/FFFFFF/png?text=Our+Mission"
                alt="Дети изучают русский язык"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TISA Method Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title="Метод TISA"
            subtitle="Как мы адаптировали предпринимательский подход TISA для изучения русского языка"
          />
          
          <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#C52233] flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Практическое обучение</h3>
                <p className="text-gray-600">
                  Вместо скучных упражнений — увлекательные проекты, где русский язык становится 
                  инструментом для решения творческих задач.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#C52233] flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Командная работа</h3>
                <p className="text-gray-600">
                  Дети учатся сотрудничать, выражать свои идеи и слушать других — всё это на 
                  русском языке в дружественной атмосфере.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#C52233] flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Культурный контекст</h3>
                <p className="text-gray-600">
                  Язык неотделим от культуры, поэтому наши занятия всегда включают элементы 
                  русской литературы, истории и традиций.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 border-t border-gray-100">
              <h3 className="text-xl font-bold mb-4">Почему это работает?</h3>
              <p className="text-gray-700">
                Методика TISA, адаптированная для изучения языка, позволяет детям не просто 
                заучивать правила и слова, а использовать язык как живой инструмент коммуникации 
                и творчества. Когда ребенок видит практическую пользу от владения языком, его 
                мотивация к обучению значительно возрастает.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Bios Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title="Наши преподаватели"
            subtitle="Познакомьтесь с командой профессионалов, которые делают Russian TISA особенной"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <TeacherCard
              image="https://placehold.co/400x400/C52233/FFFFFF/png?text=Teacher+1"
              name="Анна Иванова"
              title="Основатель и главный преподаватель"
              bio="Профессиональный педагог с 15-летним опытом преподавания русского языка. Окончила филологический факультет МГУ, имеет международные сертификаты по методике преподавания РКИ. Анна создала уникальную методику, которая делает обучение увлекательным и эффективным."
            />
            
            <TeacherCard
              image="https://placehold.co/400x400/C52233/FFFFFF/png?text=Teacher+2"
              name="Михаил Петров"
              title="Преподаватель литературы и истории"
              bio="Историк по образованию, писатель и журналист. Более 10 лет преподает русскую литературу и историю детям разных возрастов. Автор нескольких книг для детей о русской культуре. Михаил умеет превращать сложные темы в увлекательные истории."
            />
            
            <TeacherCard
              image="https://placehold.co/400x400/C52233/FFFFFF/png?text=Teacher+3"
              name="Елена Смирнова"
              title="Преподаватель для младших групп"
              bio="Педагог дошкольного образования с опытом работы более 8 лет. Специализируется на раннем языковом развитии. Елена создает игровую среду, где самые маленькие ученики с удовольствием погружаются в мир русского языка через песни, игры и творчество."
            />
          </div>
          
          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Наш подход к преподаванию</h3>
            <p className="text-gray-700 mb-6">
              Все наши преподаватели — носители русского языка с педагогическим образованием и 
              опытом работы с детьми. Мы регулярно проводим методические семинары и обмениваемся 
              опытом, чтобы сделать наши занятия максимально эффективными и интересными.
            </p>
            <p className="text-gray-700">
              Мы верим, что ключ к успешному обучению — это индивидуальный подход к каждому 
              ребенку. Поэтому наши группы небольшие (до 10 детей), что позволяет уделить 
              внимание каждому ученику.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold mb-6">Хотите узнать больше о нашей школе?</h2>
          <Button>Записаться на пробное занятие</Button>
        </div>
      </section>
    </main>
  );
}
