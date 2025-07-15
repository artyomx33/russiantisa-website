"use client";

import React, { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';

export default function ApplyPage() {
  // show confirmation after form submit
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative w-full bg-gray-50 py-16 px-4 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Записаться на занятия</h1>
            <p className="text-xl text-gray-600">
              Заполните форму ниже, чтобы записать вашего ребенка в Russian TISA 
              или задать интересующие вас вопросы
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Details Block */}
            <div className="md:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Контактная информация</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gold">Адрес</h4>
                    <p className="mt-1">
                      TISA Education Center<br />
                      Hoofdstraat 123<br />
                      2333 AB Leiden
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gold">Email</h4>
                    <p className="mt-1">info@russiantisa.nl</p>
                  </div>
                  
                  <div>
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

                {/* Google Map */}
                <div className="mt-6">
                  <iframe
                    title="TISA Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.1805882989885!2d4.4775!3d52.1505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sHoofdstraat%20123%2C%20Leiden!5e0!3m2!1sen!2snl!4v0000000000000"
                    width="100%"
                    height="220"
                    loading="lazy"
                    className="rounded-md border-0"
                  />
                </div>
              </div>
            </div>
            
            {/* Application Form or Confirmation Message */}
            <div className="md:col-span-2">
              {submitted ? (
                <div className="bg-gray-50 p-8 rounded-lg text-center">
                  <h3 className="text-2xl font-bold mb-4 text-gold">Спасибо за вашу заявку!</h3>
                  <p className="text-gray-700">
                    Мы свяжемся с вами в течение 24 часов для подтверждения записи.
                  </p>
                </div>
              ) : (
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
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
                  
                  {/* Privacy Policy */}
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-gold focus:ring-gold border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="privacy" className="font-medium text-gray-700">
                        Я согласен с <a href="#" className="text-gold underline">политикой конфиденциальности</a> *
                      </label>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <div>
                    <Button type="submit" fullWidth>
                      Отправить заявку
                    </Button>
                    <p className="text-sm text-gray-500 mt-4">
                      * Обязательные поля
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader 
            title="Часто задаваемые вопросы"
            subtitle="Ответы на популярные вопросы о нашей школе"
          />
          
          <div className="mt-12 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">Нужно ли ребенку знать русский язык для начала занятий?</h3>
              <p className="text-gray-700">
                Нет, мы принимаем детей с любым уровнем владения русским языком. Наша методика 
                адаптируется под индивидуальные потребности каждого ребенка.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">Как часто проходят занятия?</h3>
              <p className="text-gray-700">
                Занятия проходят один раз в неделю по воскресеньям. Продолжительность занятия 
                зависит от возрастной группы и составляет от 1,5 до 2 часов.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">Сколько стоят занятия?</h3>
              <p className="text-gray-700">
                Стоимость занятий зависит от выбранной программы и частоты посещений. 
                Пожалуйста, свяжитесь с нами для получения актуальной информации о ценах.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">Можно ли присутствовать родителям на занятиях?</h3>
              <p className="text-gray-700">
                Для младшей группы (3-6 лет) родители могут присутствовать на первых занятиях, 
                чтобы помочь ребенку адаптироваться. Для старших групп мы рекомендуем детям 
                заниматься самостоятельно для развития независимости.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
