import Image from "next/image";
import Button from "@/components/Button";
import PillarCard from "@/components/PillarCard";
import TeacherCard from "@/components/TeacherCard";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gray-50 py-20 px-4 md:py-32">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Русская школа TISA в Лейдене
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Сохраняем язык и культуру через современное образование для детей от 3 до 12 лет
            </p>
            <Button>Записаться</Button>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="https://placehold.co/800x600/C52233/FFFFFF/png?text=Russian+TISA+Kids"
                alt="Happy children learning Russian"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Pillars Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title="Наши основы"
            subtitle="Три принципа, на которых строится наша образовательная программа"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <PillarCard
              icon="/icons/language.svg"
              title="Язык"
              description="Погружение в русский язык через игры, чтение и творческие занятия, адаптированные для детей разного возраста."
            />
            <PillarCard
              icon="/icons/entrepreneur.svg"
              title="Предпринимательство"
              description="Развитие креативного мышления и лидерских качеств через проектную деятельность и решение практических задач."
            />
            <PillarCard
              icon="/icons/community.svg"
              title="Сообщество"
              description="Создание дружной среды, где дети и родители становятся частью русскоязычного комьюнити Лейдена."
            />
          </div>
        </div>
      </section>

      {/* Teacher Teaser Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title="Наши преподаватели"
            subtitle="Познакомьтесь с командой профессионалов, которые делают Russian TISA особенной"
          />
          
          <div className="flex justify-center mt-12">
            <TeacherCard
              image="https://placehold.co/400x400/C52233/FFFFFF/png?text=Teacher"
              name="Анна Иванова"
              title="Основатель и главный преподаватель"
              bio="Профессиональный педагог с 15-летним опытом преподавания русского языка. Анна создала уникальную методику, которая делает обучение увлекательным и эффективным."
              className="max-w-md"
            />
          </div>
          
          <div className="text-center mt-8">
            <Button variant="secondary">Познакомиться со всеми преподавателями</Button>
          </div>
        </div>
      </section>

      {/* Schedule & Location Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title="Расписание и локация"
            subtitle="Наши занятия проходят каждое воскресенье в центре Лейдена"
          />
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Время занятий</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">10:00 - 12:00:</span>
                    <span>Младшая группа (3-6 лет)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">12:30 - 14:30:</span>
                    <span>Средняя группа (7-9 лет)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">15:00 - 17:00:</span>
                    <span>Старшая группа (10-12 лет)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Адрес</h3>
                <p className="mb-4">TISA Education Center<br />Hoofdstraat 123<br />2333 AB Leiden</p>
                <p className="text-sm text-gray-600">5 минут пешком от центрального вокзала Лейдена</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-[#C52233] text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Присоединяйтесь к Russian TISA</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Запишите вашего ребенка на пробное занятие и станьте частью нашего сообщества
          </p>
          <Button variant="secondary">Записаться на пробное занятие</Button>
        </div>
      </section>
    </main>
  );
}
