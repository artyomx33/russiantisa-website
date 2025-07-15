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
                src="https://placehold.co/800x600/C9A83D/FFFFFF/png?text=Russian+TISA+Kids"
                alt="Happy children learning Russian"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* О школе Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title="О школе"
            subtitle="Наша миссия и ценности"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="flex flex-col justify-center">
              <p className="text-lg text-gray-700 mb-6">
                Русская школа TISA — это место, где дети сохраняют связь с русским языком, культурой и традициями через современное образование и творческий подход.
              </p>
              <blockquote className="border-l-4 border-gold pl-4 italic text-gray-700 mb-6">
                "Язык — это ключ к идентичности, связь с корнями и инвестиция в будущее наших детей."
                <footer className="text-sm mt-2 text-gray-500">— Карина Медведева, сооснователь</footer>
              </blockquote>
              <p className="text-lg text-gray-700">
                Мы создаем теплую и вдохновляющую среду, где русский язык становится не просто предметом изучения, а живым инструментом общения, творчества и самовыражения.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://placehold.co/800x600/C9A83D/FFFFFF/png?text=About+Us"
                alt="Children in Russian TISA school"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Метод TISA Section */}
      <section id="method" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title="Метод TISA"
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
          
          <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">Почему метод TISA работает</h3>
            <p className="text-gray-700">
              Наша методика позволяет детям не просто заучивать правила и слова, а использовать язык как живой инструмент коммуникации и творчества. Когда ребенок видит практическую пользу от владения языком, его мотивация к обучению значительно возрастает.
            </p>
          </div>
        </div>
      </section>

      {/* Команда Section */}
      <section id="team" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title="Карина Медведева"
            subtitle="Сооснователь и вдохновитель Russian TISA"
          />
          
          <div className="mt-12 flex justify-center">
            <TeacherCard
              image="https://placehold.co/400x400/C9A83D/FFFFFF/png?text=Karina"
              name="Карина Медведева"
              title="Сооснователь"
              bio="Вдохновитель проекта, публичный спикер. Определяет видение школы, проводит выступления и организует праздники."
            />
          </div>
        </div>
      </section>

      {/* Воскресный день Section */}
      <section id="sunday" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title="Воскресный день"
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
                    Ваш ребенок присоединяется к кругу друзей, где дети делятся новостями и настраиваются на день. Преподаватель рассказывает о плане занятий.
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
                    Погружение в русский язык через интерактивные задания. Дети работают индивидуально и в малых группах, развивая навыки чтения, письма и речи.
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
                    Время для отдыха и общения. Дети могут перекусить и поиграть в настольные игры на русском языке, укрепляя дружеские связи.
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
                    Ваш ребенок участвует в творческих проектах, театральных постановках или подготовке к праздникам, применяя полученные языковые навыки на практике.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы Section */}
      <section id="testimonials" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader 
            title="Отзывы"
            subtitle="Что говорят родители о нашей школе"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  "
                </div>
                <div>
                  <h4 className="font-bold">Семья Ивановых</h4>
                  <p className="text-sm text-gray-500">Родители Миши, 7 лет</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "Мы видим, как наш сын с радостью бежит в школу каждое воскресенье!"
              </blockquote>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  "
                </div>
                <div>
                  <h4 className="font-bold">Елена Петрова</h4>
                  <p className="text-sm text-gray-500">Мама Софии, 5 лет</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "Karina and the team create a magical space — not just lessons, but memories."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* --- removed Apply & CTA sections as they belong to /apply page now --- */}
                    <h4 className="font-medium text-gold">Телефон</h4>
                    <p className="mt-1">+31 6 12345678</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gold">Время работы</h4>
                    <p className="mt-1">
                      Воскресенье: 9:30 - 17:30<br />
                      Административные вопросы:<br />
                      Пн-Пт: 9:00 - 17:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Application Form */}
            <div className="md:col-span-2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Parent Name */}
                  <div>
                    <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">
                      Имя родителя *
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  
                  {/* Child Name */}
                  <div>
                    <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-1">
                      Имя ребенка *
                    </label>
                    <input
                      type="text"
                      id="childName"
                      name="childName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="Мария Иванова"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Child Age */}
                  <div>
                    <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-1">
                      Возраст ребенка *
                    </label>
                    <input
                      type="number"
                      id="childAge"
                      name="childAge"
                      min="3"
                      max="12"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="7"
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="ivan@example.com"
                    />
                  </div>
                </div>
                
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="+31 6 12345678"
                  />
                </div>
                
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Расскажите нам о вашем ребенке и что вы ожидаете от занятий"
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <div>
                  <Button type="submit" fullWidth>
                    Отправить заявку
                  </Button>
                  <p className="text-sm text-gray-600 mt-2">
                    Мы свяжемся с вами в течение 24 часов.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-gold text-white">
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
