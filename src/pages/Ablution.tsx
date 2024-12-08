import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Ablution = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-4"
        >
          <ArrowLeft className="h-5 w-5" />
          Ana sayfaya dön
        </Link>
        <h1 className="text-4xl font-bold mb-4">Abdest</h1>
        <p className="text-xl text-gray-600">
          Namaz abdesti, gusül abdesti ve teyemmümün nasıl alınacağını detaylı bir şekilde öğrenin.
        </p>
      </div>

      <div className="space-y-8">
        {/* Namaz Abdesti */}
        <section className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Namaz Abdesti</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Namaz abdesti, namazın farzlarından biridir ve şu şekilde alınır:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Niyet edilir</li>
              <li>Eller bileklere kadar üç kere yıkanır</li>
              <li>Ağza üç kere su alınıp çalkalanır</li>
              <li>Buruna üç kere su çekilir ve temizlenir</li>
              <li>Yüz üç kere yıkanır</li>
              <li>Sağ kol dirseklerle beraber üç kere yıkanır</li>
              <li>Sol kol dirseklerle beraber üç kere yıkanır</li>
              <li>Başın dörtte biri mesh edilir</li>
              <li>Kulaklar mesh edilir</li>
              <li>Enseye mesh edilir</li>
              <li>Sağ ayak üç kere yıkanır</li>
              <li>Sol ayak üç kere yıkanır</li>
            </ol>
          </div>
        </section>

        {/* Gusül Abdesti */}
        <section className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Gusül Abdesti</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Gusül abdesti, büyük abdestsizlik durumundan temizlenmek için alınır:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Niyet edilir</li>
              <li>Besmele çekilir</li>
              <li>Eller ve avret yeri yıkanır</li>
              <li>Namaz abdesti gibi abdest alınır</li>
              <li>Başa üç kere su dökülür</li>
              <li>Sağ omuza üç kere su dökülür</li>
              <li>Sol omuza üç kere su dökülür</li>
              <li>Tüm vücut kuru yer kalmayacak şekilde yıkanır</li>
            </ol>
          </div>
        </section>

        {/* Teyemmüm */}
        <section className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Teyemmüm</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Su bulunmadığı veya kullanılamadığı durumlarda teyemmüm yapılır:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Niyet edilir</li>
              <li>Besmele çekilir</li>
              <li>Eller temiz toprağa veya toprağın cinsinden bir şeye vurulur</li>
              <li>Yüz mesh edilir</li>
              <li>Eller tekrar toprağa vurulur</li>
              <li>Sağ kol dirseklere kadar mesh edilir</li>
              <li>Sol kol dirseklere kadar mesh edilir</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Ablution;
