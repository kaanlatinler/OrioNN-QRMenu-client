"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// Translation data
const translations = {
  tr: {
    // Header
    home: "Ana Sayfa",
    menu: "Menü",
    about: "Hakkımızda",
    contact: "İletişim",

    // Common
    loading: "Yükleniyor...",
    error: "Hata",
    success: "Başarılı",
    cancel: "İptal",
    save: "Kaydet",
    delete: "Sil",
    edit: "Düzenle",
    add: "Ekle",
    search: "Ara",
    filter: "Filtrele",
    sort: "Sırala",
    view: "Görüntüle",
    close: "Kapat",
    back: "Geri",
    next: "İleri",
    previous: "Önceki",
    submit: "Gönder",
    reset: "Sıfırla",
    translations: "Çeviriler",
    actions: "İşlemler",
    image: "Görsel",
    category: "Kategori",
    createdAt: "Oluşturulma",
    noTranslations: "Çeviri Yok",
    default: "Varsayılan",
    show: "Göster",
    hide: "Gizle",
    selectCategory: "Kategori Seçin",
    title: "Başlık",
    description: "Açıklama",

    // Menu Items
    categories: "Kategoriler",
    products: "Ürünler",
    allProducts: "Tüm Ürünler",
    popularItems: "Popüler Ürünler",
    newItems: "Yeni Ürünler",
    specialOffers: "Özel Teklifler",

    // Product Details
    price: "Fiyat",
    description: "Açıklama",
    ingredients: "İçindekiler",
    allergens: "Alerjenler",
    nutritionalInfo: "Besin Değerleri",
    calories: "Kalori",
    addToCart: "Sepete Ekle",
    outOfStock: "Stokta Yok",
    available: "Mevcut",

    // Cart & Order
    cart: "Sepet",
    order: "Sipariş",
    checkout: "Ödeme",
    total: "Toplam",
    quantity: "Adet",
    remove: "Kaldır",
    clearCart: "Sepeti Temizle",
    placeOrder: "Sipariş Ver",
    orderNumber: "Sipariş Numarası",
    orderDate: "Sipariş Tarihi",
    orderStatus: "Sipariş Durumu",

    // User Account
    login: "Giriş Yap",
    logout: "Çıkış Yap",
    register: "Kayıt Ol",
    profile: "Profil",
    settings: "Ayarlar",
    account: "Hesap",
    password: "Şifre",
    email: "E-posta",
    phone: "Telefon",
    address: "Adres",
    name: "Ad",
    surname: "Soyad",
    firstName: "Ad",
    lastName: "Soyad",
    role: "Rol",

    // Dashboard
    dashboard: "Kontrol Paneli",
    statistics: "İstatistikler",
    users: "Kullanıcılar",
    categories: "Kategoriler",
    products: "Ürünler",
    orders: "Siparişler",
    reports: "Raporlar",
    analytics: "Analitik",
    settings: "Ayarlar",

    // Forms
    firstName: "Ad",
    lastName: "Soyad",
    emailAddress: "E-posta Adresi",
    phoneNumber: "Telefon Numarası",
    password: "Şifre",
    confirmPassword: "Şifreyi Onayla",
    currentPassword: "Mevcut Şifre",
    newPassword: "Yeni Şifre",
    rememberMe: "Beni Hatırla",
    forgotPassword: "Şifremi Unuttum",

    // Messages
    welcomeMessage: "Hoş Geldiniz!",
    loginSuccess: "Başarıyla giriş yaptınız",
    loginError: "Giriş yapılamadı",
    registerSuccess: "Hesabınız başarıyla oluşturuldu",
    registerError: "Kayıt işlemi başarısız",
    saveSuccess: "Başarıyla kaydedildi",
    saveError: "Kaydetme işlemi başarısız",
    deleteSuccess: "Başarıyla silindi",
    deleteError: "Silme işlemi başarısız",
    confirmDelete: "Silmek istediğinizden emin misiniz?",
    noDataFound: "Veri bulunamadı",
    loadingData: "Veriler yükleniyor...",

    // QR Code
    qrCodeGenerator: "QR Kod Oluşturucu",
    qrCodeContent: "QR Kod İçeriği",
    generateQR: "QR Kod Oluştur",
    downloadQR: "İndir",
    copyContent: "Kopyala",
    clear: "Temizle",
    qrCodeReady: "QR Kod Hazır!",
    qrCodeWaiting: "QR Kod Bekleniyor",
    qrCodeInstructions:
      "Sol taraftan içerik girin ve 'QR Kod Oluştur' butonuna tıklayın",

    // Footer
    privacyPolicy: "Gizlilik Politikası",
    termsOfUse: "Kullanım Şartları",
    allRightsReserved: "Tüm hakları saklıdır",

    // Time & Date
    today: "Bugün",
    yesterday: "Dün",
    tomorrow: "Yarın",
    thisWeek: "Bu Hafta",
    thisMonth: "Bu Ay",
    thisYear: "Bu Yıl",

    // Status
    active: "Aktif",
    inactive: "Pasif",
    pending: "Beklemede",
    completed: "Tamamlandı",
    cancelled: "İptal Edildi",
    processing: "İşleniyor",
    shipped: "Kargoda",
    delivered: "Teslim Edildi",
    activate: "Etkinleştir",
    deactivate: "Devre Dışı Bırak",
  },

  en: {
    // Header
    home: "Home",
    menu: "Menu",
    about: "About",
    contact: "Contact",

    // Common
    loading: "Loading...",
    error: "Error",
    success: "Success",
    cancel: "Cancel",
    save: "Save",
    delete: "Delete",
    edit: "Edit",
    add: "Add",
    search: "Search",
    filter: "Filter",
    sort: "Sort",
    view: "View",
    close: "Close",
    back: "Back",
    next: "Next",
    previous: "Previous",
    submit: "Submit",
    reset: "Reset",
    translations: "Translations",
    actions: "Actions",
    image: "Image",
    category: "Category",
    createdAt: "Created At",
    noTranslations: "No Translations",
    default: "Default",
    show: "Show",
    hide: "Hide",
    selectCategory: "Select Category",
    title: "Title",
    description: "Description",

    // Menu Items
    categories: "Categories",
    products: "Products",
    allProducts: "All Products",
    popularItems: "Popular Items",
    newItems: "New Items",
    specialOffers: "Special Offers",

    // Product Details
    price: "Price",
    description: "Description",
    ingredients: "Ingredients",
    allergens: "Allergens",
    nutritionalInfo: "Nutritional Information",
    calories: "Calories",
    addToCart: "Add to Cart",
    outOfStock: "Out of Stock",
    available: "Available",

    // Cart & Order
    cart: "Cart",
    order: "Order",
    checkout: "Checkout",
    total: "Total",
    quantity: "Quantity",
    remove: "Remove",
    clearCart: "Clear Cart",
    placeOrder: "Place Order",
    orderNumber: "Order Number",
    orderDate: "Order Date",
    orderStatus: "Order Status",

    // User Account
    login: "Login",
    logout: "Logout",
    register: "Register",
    profile: "Profile",
    settings: "Settings",
    account: "Account",
    password: "Password",
    email: "Email",
    phone: "Phone",
    address: "Address",
    name: "Name",
    surname: "Surname",
    firstName: "First Name",
    lastName: "Last Name",
    role: "Role",

    // Dashboard
    dashboard: "Dashboard",
    statistics: "Statistics",
    users: "Users",
    categories: "Categories",
    products: "Products",
    orders: "Orders",
    reports: "Reports",
    analytics: "Analytics",
    settings: "Settings",

    // Forms
    firstName: "First Name",
    lastName: "Last Name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    password: "Password",
    confirmPassword: "Confirm Password",
    currentPassword: "Current Password",
    newPassword: "New Password",
    rememberMe: "Remember Me",
    forgotPassword: "Forgot Password",

    // Messages
    welcomeMessage: "Welcome!",
    loginSuccess: "Successfully logged in",
    loginError: "Login failed",
    registerSuccess: "Account created successfully",
    registerError: "Registration failed",
    saveSuccess: "Saved successfully",
    saveError: "Save failed",
    deleteSuccess: "Deleted successfully",
    deleteError: "Delete failed",
    confirmDelete: "Are you sure you want to delete?",
    noDataFound: "No data found",
    loadingData: "Loading data...",

    // QR Code
    qrCodeGenerator: "QR Code Generator",
    qrCodeContent: "QR Code Content",
    generateQR: "Generate QR Code",
    downloadQR: "Download",
    copyContent: "Copy",
    clear: "Clear",
    qrCodeReady: "QR Code Ready!",
    qrCodeWaiting: "QR Code Waiting",
    qrCodeInstructions:
      "Enter content on the left and click 'Generate QR Code' button",

    // Footer
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
    allRightsReserved: "All rights reserved",

    // Time & Date
    today: "Today",
    yesterday: "Yesterday",
    tomorrow: "Tomorrow",
    thisWeek: "This Week",
    thisMonth: "This Month",
    thisYear: "This Year",

    // Status
    active: "Active",
    inactive: "Inactive",
    pending: "Pending",
    completed: "Completed",
    cancelled: "Cancelled",
    processing: "Processing",
    shipped: "Shipped",
    delivered: "Delivered",
    activate: "Activate",
    deactivate: "Deactivate",
  },

  ru: {
    // Header
    home: "Главная",
    menu: "Меню",
    about: "О нас",
    contact: "Контакты",

    // Common
    loading: "Загрузка...",
    error: "Ошибка",
    success: "Успешно",
    cancel: "Отмена",
    save: "Сохранить",
    delete: "Удалить",
    edit: "Редактировать",
    add: "Добавить",
    search: "Поиск",
    filter: "Фильтр",
    sort: "Сортировка",
    view: "Просмотр",
    close: "Закрыть",
    back: "Назад",
    next: "Далее",
    previous: "Предыдущий",
    submit: "Отправить",
    reset: "Сброс",
    translations: "Переводы",
    actions: "Действия",
    image: "Изображение",
    category: "Категория",
    createdAt: "Создано",
    noTranslations: "Нет переводов",
    default: "По умолчанию",
    show: "Показать",
    hide: "Скрыть",
    selectCategory: "Выберите категорию",
    title: "Заголовок",
    description: "Описание",

    // Menu Items
    categories: "Категории",
    products: "Продукты",
    allProducts: "Все продукты",
    popularItems: "Популярные товары",
    newItems: "Новые товары",
    specialOffers: "Специальные предложения",

    // Product Details
    price: "Цена",
    description: "Описание",
    ingredients: "Ингредиенты",
    allergens: "Аллергены",
    nutritionalInfo: "Пищевая ценность",
    calories: "Калории",
    addToCart: "Добавить в корзину",
    outOfStock: "Нет в наличии",
    available: "Доступно",

    // Cart & Order
    cart: "Корзина",
    order: "Заказ",
    checkout: "Оформить заказ",
    total: "Итого",
    quantity: "Количество",
    remove: "Удалить",
    clearCart: "Очистить корзину",
    placeOrder: "Разместить заказ",
    orderNumber: "Номер заказа",
    orderDate: "Дата заказа",
    orderStatus: "Статус заказа",

    // User Account
    login: "Войти",
    logout: "Выйти",
    register: "Регистрация",
    profile: "Профиль",
    settings: "Настройки",
    account: "Аккаунт",
    password: "Пароль",
    email: "Электронная почта",
    phone: "Телефон",
    address: "Адрес",
    name: "Имя",
    surname: "Фамилия",
    firstName: "Имя",
    lastName: "Фамилия",
    role: "Роль",

    // Dashboard
    dashboard: "Панель управления",
    statistics: "Статистика",
    users: "Пользователи",
    categories: "Категории",
    products: "Продукты",
    orders: "Заказы",
    reports: "Отчеты",
    analytics: "Аналитика",
    settings: "Настройки",

    // Forms
    firstName: "Имя",
    lastName: "Фамилия",
    emailAddress: "Электронная почта",
    phoneNumber: "Номер телефона",
    password: "Пароль",
    confirmPassword: "Подтвердите пароль",
    currentPassword: "Текущий пароль",
    newPassword: "Новый пароль",
    rememberMe: "Запомнить меня",
    forgotPassword: "Забыли пароль",

    // Messages
    welcomeMessage: "Добро пожаловать!",
    loginSuccess: "Успешный вход",
    loginError: "Ошибка входа",
    registerSuccess: "Аккаунт успешно создан",
    registerError: "Ошибка регистрации",
    saveSuccess: "Успешно сохранено",
    saveError: "Ошибка сохранения",
    deleteSuccess: "Успешно удалено",
    deleteError: "Ошибка удаления",
    confirmDelete: "Вы уверены, что хотите удалить?",
    noDataFound: "Данные не найдены",
    loadingData: "Загрузка данных...",

    // QR Code
    qrCodeGenerator: "Генератор QR-кодов",
    qrCodeContent: "Содержимое QR-кода",
    generateQR: "Создать QR-код",
    downloadQR: "Скачать",
    copyContent: "Копировать",
    clear: "Очистить",
    qrCodeReady: "QR-код готов!",
    qrCodeWaiting: "QR-код ожидает",
    qrCodeInstructions:
      "Введите содержимое слева и нажмите кнопку 'Создать QR-код'",

    // Footer
    privacyPolicy: "Политика конфиденциальности",
    termsOfUse: "Условия использования",
    allRightsReserved: "Все права защищены",

    // Time & Date
    today: "Сегодня",
    yesterday: "Вчера",
    tomorrow: "Завтра",
    thisWeek: "На этой неделе",
    thisMonth: "В этом месяце",
    thisYear: "В этом году",

    // Status
    active: "Активный",
    inactive: "Неактивный",
    pending: "В ожидании",
    completed: "Завершено",
    cancelled: "Отменено",
    processing: "Обрабатывается",
    shipped: "Отправлено",
    delivered: "Доставлено",
    activate: "Активировать",
    deactivate: "Деактивировать",
  },
};

// Create context
const LanguageContext = createContext();

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Language provider component
export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("tr");

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", currentLanguage);
  }, [currentLanguage]);

  // Translation function
  const t = (key) => {
    const currentTranslations = translations[currentLanguage];
    if (!currentTranslations) {
      console.warn(`Translations not found for language: ${currentLanguage}`);
      return key;
    }

    const translation = currentTranslations[key];
    if (!translation) {
      console.warn(
        `Translation key not found: ${key} for language: ${currentLanguage}`
      );
      return key;
    }

    return translation;
  };

  // Change language function
  const changeLanguage = (language) => {
    if (translations[language]) {
      setCurrentLanguage(language);
    } else {
      console.warn(`Language not supported: ${language}`);
    }
  };

  // Get available languages
  const getAvailableLanguages = () => {
    return Object.keys(translations).map((code) => ({
      code,
      name: {
        tr: "Türkçe",
        en: "English",
        ru: "Русский",
      }[code],
    }));
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    getAvailableLanguages,
    translations: translations[currentLanguage],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
