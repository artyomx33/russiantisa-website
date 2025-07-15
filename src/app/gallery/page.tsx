import React from 'react';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';

export default function GalleryPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gray-50 py-16 px-4 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Галерея</h1>
            <p className="text-xl text-gray-600">
              Фотографии из жизни Russian TISA: занятия, праздники и наша команда
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filter Section */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-6 py-2 rounded-full bg-gold text-white font-medium hover:bg-opacity-90 transition-colors">
              Все фото
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition-colors">
              Занятия
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition-colors">
              Праздники
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition-colors">
              Команда
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src={`https://placehold.co/600x600/C9A83D/FFFFFF/png?text=Gallery+${index + 1}`}
                  alt={`Фото ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="secondary">Загрузить еще</Button>
          </div>
        </div>
      </section>

      {/* Category Description Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader 
            title="Наши фотографии"
            subtitle="Моменты из жизни Russian TISA"
          />
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-gold">Занятия</h3>
              <p className="text-gray-700">
                Фотографии с наших регулярных занятий, где дети изучают русский язык через игры, творчество и проектную работу.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-gold">Праздники</h3>
              <p className="text-gray-700">
                Яркие моменты с наших праздничных мероприятий: Осенний спектакль, Новогодний праздник, Весенний концерт и Выпускной.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-gold">Команда</h3>
              <p className="text-gray-700">
                Наши преподаватели и сотрудники — профессионалы, которые создают теплую и вдохновляющую атмосферу в Russian TISA.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
