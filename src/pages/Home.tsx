import React from 'react';
import { Link } from 'react-router-dom';
import { BookText, Droplets, BookOpen } from 'lucide-react';

// Import prayer icons
import sabahIcon from '../img/sabahnamazi_icon.png';
import ogleIcon from '../img/oglenamaziicon.png';
import ikindiIcon from '../img/ikindinamaziicon.png';
import aksamIcon from '../img/aksamnamazi_icon.png';
import yatsiIcon from '../img/yatsinamaz_icon.png';

import { prayers } from '../data/prayers';

const prayerIcons: { [key: number]: string } = {
  1: sabahIcon,   // Sabah
  2: ogleIcon,    // Öğle
  3: ikindiIcon,  // İkindi
  4: aksamIcon,   // Akşam
  5: yatsiIcon    // Yatsı
};

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-white">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Namaz Öğreniyorum
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          İslam'ın beş şartından biri olan namazı doğru bir şekilde öğrenmek ve 
          uygulamak için hazırlanmış kapsamlı bir rehber.
        </p>
      </section>

      {/* Namazlar Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Günlük Namazlar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {prayers.map((prayer) => (
            <Link
              key={prayer.id}
              to={`/prayers/${prayer.id}`}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img 
                  src={prayer.imageUrl} 
                  alt={prayer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={prayerIcons[prayer.id]} 
                    alt={`${prayer.name} ikonu`}
                    className="h-8 w-8 flex-shrink-0" 
                  />
                  <h3 className="text-xl font-semibold group-hover:text-emerald-600 transition-colors">
                    {prayer.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{prayer.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{prayer.time}</span>
                  <span className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium">
                    Detaylı bilgi
                    <BookOpen className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Diğer Konular Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Diğer Konular</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="/ablutions"
            className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-emerald-50 rounded-xl group-hover:bg-emerald-100 transition-colors">
                <Droplets className="h-6 w-6 text-emerald-600 flex-shrink-0" />
              </div>
              <h3 className="text-xl font-semibold group-hover:text-emerald-600 transition-colors">
                Abdest
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Namazdan önce abdest almanın önemi ve nasıl alınacağı hakkında bilgi
              edinin.
            </p>
            <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
              Detaylı bilgi
              <BookOpen className="h-4 w-4" />
            </div>
          </Link>

          <Link
            to="/funeral-prayer"
            className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-emerald-50 rounded-xl group-hover:bg-emerald-100 transition-colors">
                <BookText className="h-6 w-6 text-emerald-600 flex-shrink-0" />
              </div>
              <h3 className="text-xl font-semibold group-hover:text-emerald-600 transition-colors">
                Cenaze Duaları
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Cenaze namazı nasıl kılınır ve hangi dualar okunur öğrenin.
            </p>
            <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
              Detaylı bilgi
              <BookOpen className="h-4 w-4" />
            </div>
          </Link>

          <Link
            to="/prayer-suras"
            className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-emerald-50 rounded-xl group-hover:bg-emerald-100 transition-colors">
                <BookText className="h-6 w-6 text-emerald-600 flex-shrink-0" />
              </div>
              <h3 className="text-xl font-semibold group-hover:text-emerald-600 transition-colors">
                Namaz Sureleri
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Namazda okunan temel surelerin Arapça okunuşu ve Türkçe anlamları
            </p>
            <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
              Detaylı bilgi
              <BookOpen className="h-4 w-4" />
            </div>
          </Link>

          <Link
            to="/prayer-duas"
            className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-emerald-50 rounded-xl group-hover:bg-emerald-100 transition-colors">
                <BookText className="h-6 w-6 text-emerald-600 flex-shrink-0" />
              </div>
              <h3 className="text-xl font-semibold group-hover:text-emerald-600 transition-colors">
                Namaz Duaları
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Namazda okunan temel duaların Arapça okunuşu ve Türkçe anlamları
            </p>
            <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
              Detaylı bilgi
              <BookOpen className="h-4 w-4" />
            </div>
          </Link>

          <Link
            to="/hutbe-prayers"
            className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-emerald-50 rounded-xl group-hover:bg-emerald-100 transition-colors">
                <BookText className="h-6 w-6 text-emerald-600 flex-shrink-0" />
              </div>
              <h3 className="text-xl font-semibold group-hover:text-emerald-600 transition-colors">
                Hutbe Duaları
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Hutbe duası nedir ve nasıl yapılır hakkında detaylı bilgi edinin.
            </p>
            <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
              Detaylı bilgi
              <BookOpen className="h-4 w-4" />
            </div>
          </Link>

          <Link
            to="/eid-prayer"
            className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-emerald-50 rounded-xl group-hover:bg-emerald-100 transition-colors">
                <BookText className="h-6 w-6 text-emerald-600 flex-shrink-0" />
              </div>
              <h3 className="text-xl font-semibold group-hover:text-emerald-600 transition-colors">
                Bayram Namazı
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Bayram namazının kılınışı ve önemli bilgiler
            </p>
            <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
              Detaylı bilgi
              <BookOpen className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
