import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Dimensions,
  ImageBackground, Modal, Platform,
  SafeAreaView,
  StyleSheet,
  Text, TouchableOpacity,
  View
} from 'react-native';

const images: any = {
  odak: require('../../assets/images/odak.png'),
  mola: require('../../assets/images/mola.png'),
  toplanti: require('../../assets/images/toplanti.png'),
  hata: require('../../assets/images/hata.png'),
  egitim: require('../../assets/images/egitim.png'),
  kritik: require('../../assets/images/kritik.png'),
};

const { height: screenHeight } = Dimensions.get('window');

export default function HomeScreen() {
  const [puan, setPuan] = useState(0); 
  const [seciliMod, setSeciliMod] = useState<any>(null);
  const [isStarted, setIsStarted] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [kalanSaniye, setKalanSaniye] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [showConfirm, setShowConfirm] = useState<any>(null); // Onay modalı için mod tutucu
  const timerRef = useRef<any>(null);

  const modlar = useMemo(() => [
    { id: '1', label: 'Odak', emoji: '💻', points: 25, color: '#4A90E2', sure: 25, resim: images.odak, mesajlar: ["Derin çalışma zihnin süper gücüdür.", "Odaklanmak, hayır diyebilme sanatıdır."] },
    { id: '2', label: 'Mola', emoji: '☕', points: 5, color: '#50E3C2', sure: 5, resim: images.mola, mesajlar: ["Kısa bir ara zihni tazeler.", "Baltanı bileyerek vakit kazan."] },
    { id: '3', label: 'Toplantı', emoji: '🤝', points: 10, color: '#F5A623', sure: 15, resim: images.toplanti, mesajlar: ["İstişarede hayır vardır.", "Zamanı verimli kullanmak saygıdır."] },
    { id: '4', label: 'Hata Avı', emoji: '🔍', points: 20, color: '#D0021B', sure: 20, resim: images.hata, mesajlar: ["Sabırla aramaya devam et.", "Hatalar, öğrenme fırsatıdır."] },
    { id: '5', label: 'Eğitim', emoji: '📚', points: 15, color: '#9013FE', sure: 30, resim: images.egitim, mesajlar: ["Bilgi güçtür.", "Her gün yeni bir şey öğren."] },
    { id: '6', label: 'Kritik', emoji: '🧯', points: 5, color: '#7ED321', sure: 2, resim: images.kritik, mesajlar: ["Sakin kal ve müdahale et.", "Krizi fırsata çevir."] },
  ], []);

  const badge = useMemo(() => {
    if (puan >= 100) return { label: 'PROFESÖR', emoji: '🎓', color: '#FFD700' };
    if (puan >= 50) return { label: 'UZMAN', emoji: '🌟', color: '#00FFCC' };
    return { label: 'ÇAYLAK', emoji: '🐣', color: '#FF8C00' };
  }, [puan]);

  useEffect(() => {
    if (isTimerActive && kalanSaniye > 0) {
      timerRef.current = setInterval(() => setKalanSaniye((prev) => prev - 1), 1000);
    } else if (kalanSaniye === 0 && isTimerActive) {
      setIsTimerActive(false);
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isTimerActive, kalanSaniye]);

  useEffect(() => {
    if (puan >= 100) setShowCelebration(true);
  }, [puan]);

  const modUygula = (m: any, puanVer: boolean) => {
    const rMesaj = m.mesajlar[Math.floor(Math.random() * m.mesajlar.length)];
    setSeciliMod({...m, aktifMesaj: rMesaj});
    setKalanSaniye(m.sure * 60);
    setIsTimerActive(true);
    if (puanVer) setPuan((p) => Math.min(p + m.points, 100));
    setShowConfirm(null);
  };

  const modSecimiTetikle = (m: any) => {
    if (isTimerActive && kalanSaniye > 0) {
      setShowConfirm(m); // Onay penceresini aç
    } else {
      modUygula(m, true); // Normal puanlı geçiş
    }
  };

  if (!isStarted) {
    return (
      <View style={styles.webWrapper}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.startBtn} onPress={() => setIsStarted(true)}>
            <Text style={styles.startTitle}>ODAK</Text>
            <Text style={styles.startSubText}>Modunu seç ve başla</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.webWrapper}>
      <View style={styles.container}>
        <ImageBackground source={seciliMod?.resim} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <SafeAreaView style={styles.safeArea}>
              
              <View style={styles.header}>
                <View style={styles.headerInfoRow}>
                  <View style={[styles.badgeContainer, { borderColor: badge.color }]}>
                    <Text style={styles.badgeText}>{badge.emoji} {badge.label}</Text>
                  </View>
                  <Text style={styles.headerTimerText}>
                    {Math.floor(kalanSaniye / 60)}:{String(kalanSaniye % 60).padStart(2, '0')}
                  </Text>
                </View>
                <View style={styles.barBase}><View style={[styles.barActive, { width: `${puan}%` }]} /></View>
                <Text style={styles.puanDisplay}>{puan}%</Text>
              </View>

              <View style={styles.grid}>
                {modlar.map((m) => (
                  <TouchableOpacity 
                    key={m.id} 
                    style={[styles.card, seciliMod?.id === m.id && styles.activeCard]} 
                    onPress={() => modSecimiTetikle(m)}
                  >
                    <Text style={styles.cardEmoji}>{m.emoji}</Text>
                    <Text style={styles.cardLabel}>{m.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View style={styles.footer}>
                <View style={styles.insightBox}>
                  <Text style={styles.insightText}>{seciliMod ? `"${seciliMod.aktifMesaj}"` : "Hazırsan bir mod seç ve başla."}</Text>
                </View>
                <View style={styles.buttonGroup}>
                  <TouchableOpacity style={styles.smallBtn} onPress={() => {setPuan(0); setSeciliMod(null); setIsTimerActive(false); setKalanSaniye(0);}}>
                    <Text style={styles.resetText}>SIFIRLA</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.smallBtn} onPress={() => {setIsStarted(false); setPuan(0); setSeciliMod(null); setIsTimerActive(false);}}>
                    <Text style={styles.exitText}>ÇIKIŞ</Text>
                  </TouchableOpacity>
                </View>
              </View>

            </SafeAreaView>
          </View>
        </ImageBackground>
      </View>

      {/* EMIN MISIN MODALI */}
      <Modal visible={!!showConfirm} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.confirmCard}>
            <Text style={styles.confirmTitle}>Emin misin?</Text>
            <Text style={styles.confirmSub}>Süre bitmeden değiştirirsen bu oturumdan puan alamazsın.</Text>
            <View style={styles.modalBtnRow}>
              <TouchableOpacity style={[styles.modalBtn, {backgroundColor: '#ff4444'}]} onPress={() => modUygula(showConfirm, false)}>
                <Text style={styles.modalBtnText}>Evet, Değiştir</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalBtn, {backgroundColor: '#444'}]} onPress={() => setShowConfirm(null)}>
                <Text style={styles.modalBtnText}>Hayır, Devam</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* TEBRIK MODALI */}
      <Modal visible={showCelebration} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.celebrationCard}>
            <Text style={{fontSize: 60}}>🎓</Text>
            <Text style={styles.celebrationTitle}>PROFESÖR!</Text>
            <TouchableOpacity style={styles.closeBtn} onPress={() => {setShowCelebration(false); setPuan(0); setSeciliMod(null);}}>
              <Text style={{fontWeight: 'bold', color: '#000'}}>Yeni Güne Başla</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  webWrapper: { flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },
  container: { 
    width: Platform.OS === 'web' ? 400 : '100%', 
    height: Platform.OS === 'web' ? screenHeight * 0.85 : '100%', 
    backgroundColor: '#121212', 
    borderRadius: 30, 
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333'
  },
  backgroundImage: { width: '100%', height: '100%' },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.75)', padding: 20 },
  safeArea: { flex: 1, justifyContent: 'space-between' },
  header: { marginTop: 40, alignItems: 'center' },
  headerInfoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 15 },
  badgeContainer: { borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 15 },
  badgeText: { color: '#fff', fontSize: 11, fontWeight: 'bold' },
  headerTimerText: { color: '#fff', fontSize: 26, fontWeight: 'bold', fontFamily: 'monospace' },
  barBase: { width: '100%', height: 6, backgroundColor: '#222', borderRadius: 3 },
  barActive: { height: '100%', backgroundColor: '#fff' },
  puanDisplay: { fontSize: 75, color: '#fff', fontWeight: '900', marginTop: 10 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { width: '48%', backgroundColor: 'rgba(255,255,255,0.08)', paddingVertical: 15, borderRadius: 18, marginBottom: 12, alignItems: 'center', borderWidth: 1.5, borderColor: 'transparent' },
  activeCard: { borderColor: '#fff', backgroundColor: 'rgba(255,255,255,0.15)' },
  cardEmoji: { fontSize: 26, marginBottom: 5 },
  cardLabel: { color: '#fff', fontSize: 12, fontWeight: '600' },
  footer: { width: '100%', marginBottom: 10 },
  insightBox: { backgroundColor: 'rgba(255,255,255,0.1)', padding: 15, borderRadius: 15, minHeight: 60, justifyContent: 'center' },
  insightText: { color: '#ddd', textAlign: 'center', fontStyle: 'italic', fontSize: 13 },
  buttonGroup: { flexDirection: 'row', justifyContent: 'center', marginTop: 10, gap: 20 },
  smallBtn: { padding: 8 },
  resetText: { color: '#888', fontSize: 11, fontWeight: 'bold' },
  exitText: { color: '#666', fontSize: 11, fontWeight: 'bold' },
  startBtn: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  startTitle: { fontSize: 60, color: '#fff', fontWeight: '900', letterSpacing: 5 },
  startSubText: { color: '#666', marginTop: 15, fontSize: 15 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.9)', justifyContent: 'center', alignItems: 'center', padding: 30 },
  confirmCard: { backgroundColor: '#222', padding: 25, borderRadius: 20, alignItems: 'center', width: '100%' },
  confirmTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  confirmSub: { color: '#aaa', textAlign: 'center', marginBottom: 20, fontSize: 14 },
  modalBtnRow: { flexDirection: 'row', gap: 15 },
  modalBtn: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10, minWidth: 100, alignItems: 'center' },
  modalBtnText: { color: '#fff', fontWeight: 'bold' },
  celebrationCard: { backgroundColor: '#1A1A1A', padding: 40, borderRadius: 30, alignItems: 'center', borderWidth: 1, borderColor: '#FFD700' },
  celebrationTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginVertical: 20 },
  closeBtn: { backgroundColor: '#fff', paddingHorizontal: 25, paddingVertical: 12, borderRadius: 15 }
});