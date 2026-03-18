# 📱 MOD-ODAK: Dinamik Mod Yönetimi ve Verimlilik Sistemi

Bu proje, kullanıcıya seçtiği çalışma moduna göre görsel ve zihinsel bir atmosfer sunan **Dinamik Mod Yönetim Uygulamasıdır.**

## 🎯 Projenin Amacı 
Uygulama, kullanıcının gün içindeki farklı enerji seviyelerini ve iş türlerini "Modlar" aracılığıyla kategorize eder. Sadece bir sayaç değil; seçilen moda göre değişen **arka plan görselleri**, **puanlama katsayıları** ve **farkındalık mesajları** ile tam bir odaklanma ekosistemi oluşturmayı hedefler.

---

## 🎭 Uygulama Modları ve Akıllı Senaryolar

Uygulama, her biri kendine has bir disipline sahip 6 ana mod üzerine kurgulanmıştır:

1. **💻 Odak (Deep Work):** Tam konsantrasyon gerektiren görevler için.
2. **📚 Eğitim (Learning):** Yeni beceriler kazanma ve okuma süreçleri için.
3. **🔍 Hata Avı (Debug):** Analitik dikkat ve sabır gerektiren teknik süreçler için.
4. **🤝 Toplantı (Collaboration):** Takım çalışması ve istişare süreçleri için.
5. **☕ Mola (Rest):** Zihinsel toparlanma ve nefes alanları için.
6. **🧯 Kritik (Emergency):** Hızlı müdahale ve kriz yönetimi anları için.

---

## ✨ Teknik Öne Çıkanlar

* **Dinamik UI Katmanı:** Seçilen moda göre `ImageBackground` ve `StyleSheet` objelerinin anlık olarak yeniden render edilmesi (State Management).
* **Hibrit Motivasyon Motoru:** Modlara özel olarak tanımlanmış, %50 profesyonel motivasyon ve %50 kadim hikmet (manevi farkındalık) içeren algoritma.
* **Oyunlaştırılmış Seviye Sistemi:** Tamamlanan her modun puanı hesaplanarak kullanıcıyı "Çaylak", "Uzman" ve "Profesör" rütbelerine taşır.
* **Build Mimarisi:** Expo Application Services (EAS) üzerinden bulut tabanlı Android SDK derlemesi.

---

## 📊 Teknik Veri Tablosu

| Mod İsmi | Süre (Dk) | Puan Katsayısı | Uygulanan Disiplin |
| :--- | :--- | :--- | :--- |
| **Odak** | 25 | 25 | Derin Çalışma |
| **Eğitim** | 30 | 20 | Bilişsel Gelişim |
| **Hata Avı** | 15 | 20 | Problem Çözme |
| **Toplantı** | 20 | 15 | İletişim/İstişare |
| **Mola** | 5 | 10 | Mental Rejenerasyon |
| **Kritik** | 3 | 10 | Hızlı Karar Verme |

---

## 🚀 Kurulum ve Çalıştırma (Hızlı Başlatma)

### 1. Gereksinimler
* **Node.js** (v16 veya üzeri)
* **npm** veya **yarn**
* **Expo Go** (Gerçek cihazda test etmek için cihazınıza indirilmelidir)

### 2. Bağımlılıkların Yüklenmesi
```bash
npm install
