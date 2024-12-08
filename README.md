# Namaz Hocası

Namaz Hocası, namaz kılmayı öğrenmek isteyenler için hazırlanmış kapsamlı bir web uygulamasıdır. Bu uygulama ile:

- Namaz vakitlerini öğrenme
- Namaz adımlarını detaylı görüntüleme
- Namaz dualarını öğrenme
- Abdest alma adımlarını öğrenme
- Bayram ve cenaze namazı gibi özel namazları öğrenme

gibi özelliklere erişebilirsiniz.

## Teknolojiler

- React + TypeScript
- Vite
- Tailwind CSS
- React Router

## Geliştirme Ortamı Kurulumu

1. Repository'yi klonlayın:
```bash
git clone https://github.com/seyidturgut/namazhocasi.git
cd namazhocasi
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

## Prodüksiyon Ortamına Kurulum

1. Repository'yi sunucunuza klonlayın:
```bash
git clone https://github.com/seyidturgut/namazhocasi.git
cd namazhocasi
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Projeyi build edin:
```bash
npm run build
```

4. `dist` klasörünün içeriğini web sunucunuzun root dizinine kopyalayın:

Apache için:
```bash
sudo cp -r dist/* /var/www/html/
```

veya Nginx için:
```bash
sudo cp -r dist/* /usr/share/nginx/html/
```

5. Web sunucusu konfigürasyonunu ayarlayın:

Apache için `.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

Nginx için `nginx.conf`:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

6. Web sunucunuzu yeniden başlatın:

Apache için:
```bash
sudo service apache2 restart
```

veya Nginx için:
```bash
sudo service nginx restart
```

## Özellikler

- 🕌 5 vakit namaz detaylı anlatım
- 📖 Namaz sureleri ve duaları
- 💧 Abdest alma rehberi
- 🎯 Adım adım namaz kılma kılavuzu
- 🌟 Özel namazlar (Bayram, Cenaze, Cuma)
- 📱 Mobil uyumlu tasarım

## Katkıda Bulunma

1. Bu repository'yi fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/yeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik: Detaylı açıklama'`)
4. Branch'inizi push edin (`git push origin feature/yeniOzellik`)
5. Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakınız.
