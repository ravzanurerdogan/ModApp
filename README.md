# 📱 MOD-ODAK: Dinamik Mod Yönetimi ve Verimlilik Sistemi

Bu proje, kullanıcıya seçtiği çalışma moduna göre görsel ve zihinsel bir atmosfer sunan, React Native (Expo) ile geliştirilmiş bir **Dinamik Mod Yönetim Uygulamasıdır.**

---

## 🎯 Projenin Amacı (Challenge Kapsamı)
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

## ✨ Teknik Öne Çıkanlar ve UX İyileştirmeleri

* **Dinamik UI Katmanı:** Seçilen moda göre `ImageBackground` ve `StyleSheet` objelerinin anlık olarak yeniden render edilmesi (State Management).
* **Hibrit Motivasyon Motoru:** Modlara özel tanımlanmış, %50 profesyonel motivasyon ve %50 kadim hikmet (manevi farkındalık) içeren denge algoritması.
* **Oyunlaştırılmış Seviye Sistemi:** Tamamlanan her modun puanı hesaplanarak kullanıcıyı "Çaylak", "Uzman" ve "Profesör" rütbelerine taşır.
* **Hatalı İşlem Engelleme (UX):** "Çıkış" butonu görsel hiyerarşide ikincil plana itilip küçültülerek (Small Button Pattern) yanlışlıkla basılma riski minimize edilmiştir.
* **Sabır ve Sebat Kilidi:** Aktif bir çalışma oturumu bitmeden mod değişimini engelleyen, kullanıcıyı odaklanmaya teşvik eden uyarı sistemi (Modal).

---

## 👤 Kullanıcı Senaryoları ve Çözüm Analizi

Proje geliştirilirken şu 3 temel problem çözülmüştür:
1. **Disiplin Kaybı:** "Sabır ve Sebat" uyarısı ile kullanıcının modlardan kaçması engellenmiştir.
2. **Görsel Karmaşa:** Her mod için özel renk paleti ve görsel atanarak bilişsel yük azaltılmıştır.
3. **Motivasyon Dili:** Mesaj havuzu %50 modern, %50 manevi olacak şekilde dengelenerek her kullanıcı profiline hitap edilmiştir.

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

## 🚀 Kurulum ve Çalıştırma

### 1. Gereksinimler
* **Node.js** (v16+) & **npm**
* **Expo Go** (Uygulamayı telefonda test etmek için)

### 2. Adımlar
```bash
# Bağımlılıkları yükle
npm install

# Uygulamayı başlat
npx expo start


🔗 PROJE BAĞLANTI VE DOSYALARI
📁 Google Drive (APK & Kaynak Kod):
https://drive.google.com/file/d/10ewyCzcqiCaWxUSpw03vOuD9rvuSMzu7/view?usp=sharing

🎥 Uygulama Tanıtım Videosu:
https://youtube.com/shorts/c-CntJoi-68?si=_x9EWRjgAOLRTAxf
