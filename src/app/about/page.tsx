import React from 'react';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import TeacherCard from '@/components/TeacherCard';
import Button from '@/components/Button';

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen pt-20">
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

      {/* Vision & Mission Statement Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                title="Наше видение"
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
                  <span className="text-gold mr-2">•</span>
                  <span>Свободно говорить, читать и писать на русском языке</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Познакомиться с богатством русской культуры и традиций</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Развить лидерские качества и предпринимательское мышление</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Найти друзей в русскоязычном сообществе Лейдена</span>
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://placehold.co/800x600/C9A83D/FFFFFF/png?text=Our+Vision"
                alt="Дети изучают русский язык"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title="Наши ценности"
            subtitle="Принципы, которыми мы руководствуемся в нашей работе"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Уважение к языку</h3>
              <p className="text-gray-700">
                Мы относимся к русскому языку как к ценному наследию, которое нужно бережно передавать следующим поколениям.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Творческий подход</h3>
              <p className="text-gray-700">
                Мы верим, что обучение должно быть увлекательным и вдохновляющим процессом, который развивает творческое мышление.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Сообщество</h3>
              <p className="text-gray-700">
                Мы создаем дружную среду, где дети и родители чувствуют себя частью большой семьи, объединенной русским языком и культурой.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TISA Method Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title="Метод TISA"
            subtitle="Как мы адаптировали предпринимательский подход TISA для изучения русского языка"
          />
          
          <div className="mt-12 bg-gray-50 p-8 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Практическое обучение</h3>
                <p className="text-gray-600">
                  Вместо скучных упражнений — увлекательные проекты, где русский язык становится 
                  инструментом для решения творческих задач.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Командная работа</h3>
                <p className="text-gray-600">
                  Дети учатся сотрудничать, выражать свои идеи и слушать других — всё это на 
                  русском языке в дружественной атмосфере.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold flex items-center justify-center text-white text-2xl font-bold">
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

      {/* Leadership Team Section */}
      <section id="team" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title="Руководство школы"
            subtitle="Познакомьтесь с основателями Russian TISA"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <TeacherCard
              image="https://placehold.co/400x400/C9A83D/FFFFFF/png?text=Karina"
              name="Карина Медведева"
              title="Сооснователь и публичный спикер"
              bio="Вдохновитель проекта, определяет видение школы, проводит выступления и организует праздники. Карина верит, что русский язык — это не только средство общения, но и ключ к богатому культурному наследию."
            />
            
            <TeacherCard
              image="https://placehold.co/400x400/C9A83D/FFFFFF/png?text=Ekaterina"
              name="Екатерина"
              title="Директор школы"
              bio="Руководит повседневной работой школы и образовательным процессом. Профессиональный педагог с многолетним опытом, Екатерина создает эффективную и вдохновляющую образовательную среду для детей всех возрастов."
            />
          </div>
        </div>
      </section>

      {/* Teacher Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title="Наши преподаватели"
            subtitle="Профессионалы, которые делают Russian TISA особенной"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <TeacherCard
              image="https://placehold.co/400x400/C9A83D/FFFFFF/png?text=Maria"
              name="Мария Петрова"
              title="Преподаватель"
              bio="Опытный педагог русского языка и литературы. Работает с детьми разных возрастов, создает увлекательные уроки, которые развивают не только языковые навыки, но и творческое мышление."
            />
            
            <TeacherCard
              image="https://placehold.co/400x400/C9A83D/FFFFFF/png?text=Elena"
              name="Елена Васильева"
              title="Преподаватель младшей группы"
              bio="Специалист по раннему развитию, создает игровую среду для самых маленьких учеников. Елена помогает детям полюбить русский язык через игры, песни и творческие занятия."
            />
            
            <TeacherCard
              image="https://placehold.co/400x400/C9A83D/FFFFFF/png?text=Natalia"
              name="Наталья Кузнецова"
              title="Преподаватель старшей группы"
              bio="Филолог с богатым опытом преподавания. Наталья работает со старшими детьми, помогая им углубить знание русского языка, литературы и культуры через исследовательские проекты и дискуссии."
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
      <section className="py-12 px-4 bg-gold text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold mb-6">Хотите узнать больше о нашей школе?</h2>
          <Button variant="secondary">Записаться на пробное занятие</Button>
        </div>
      </section>
    </main>
  );
}
