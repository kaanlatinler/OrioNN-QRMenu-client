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
    selectRole: "Rol Seçin",
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
    changeRole: "Rol Değiştir",

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

    // Pagination
    views: "Görüntülenme",
    showing: "Gösteriliyor",
    of: "/",
    previous: "Önceki",
    next: "Sonraki",

    // Privacy Policy
    lastUpdated: "Son güncelleme",
    introduction: "1. Giriş",
    privacyIntro:
      "OrioNN Development'a ('biz,' 'bizim,' veya 'biz') hoş geldiniz. Kişisel bilgilerinizin gizliliğini korumaya ve güvenliğini sağlamaya kararlıyız. Bu Gizlilik Politikası, QR Menü uygulamamızı ve ilgili hizmetlerimizi kullandığınızda bilgilerinizi nasıl topladığımızı, kullandığımızı, açıkladığımızı ve koruduğumuzu açıklar.",
    informationWeCollect: "2. Topladığımız Bilgiler",
    personalInformation: "2.1 Kişisel Bilgiler",
    personalInfoDesc: "Aşağıdaki kişisel bilgileri toplayabiliriz:",
    personalInfoList: [
      "Ad ve iletişim bilgileri (e-posta adresi, telefon numarası)",
      "Hesap kimlik bilgileri ve profil bilgileri",
      "Restoran sahipleri için işletme bilgileri",
      "Ödeme bilgileri (üçüncü taraf sağlayıcılar aracılığıyla güvenli şekilde işlenir)",
    ],
    usageInformation: "2.2 Kullanım Bilgileri",
    usageInfoDesc:
      "Hizmetlerimizin kullanımı hakkında belirli bilgileri otomatik olarak toplarız:",
    usageInfoList: [
      "Cihaz bilgileri (IP adresi, tarayıcı türü, işletim sistemi)",
      "Kullanım kalıpları ve uygulamamızla etkileşimler",
      "QR kod tarama analitikleri ve menü görüntüleme istatistikleri",
      "Hata günlükleri ve performans verileri",
    ],
    howWeUseInfo: "3. Bilgilerinizi Nasıl Kullanıyoruz",
    useInfoDesc: "Toplanan bilgileri aşağıdaki amaçlar için kullanırız:",
    useInfoList: [
      "QR Menü hizmetlerimizi sağlama ve sürdürme",
      "İşlemleri işleme ve hesapları yönetme",
      "Uygulamamızı ve kullanıcı deneyimini iyileştirme",
      "Önemli güncellemeler ve bildirimler gönderme",
      "Hizmetlerimizi geliştirmek için kullanım kalıplarını analiz etme",
      "Güvenliği sağlama ve dolandırıcılığı önleme",
      "Yasal yükümlülüklere uyma",
    ],
    informationSharing: "4. Bilgi Paylaşımı ve Açıklama",
    sharingDesc:
      "Kişisel bilgilerinizi üçüncü taraflara satmaz, takas etmez veya kiralamayız. Bilgilerinizi aşağıdaki durumlarda paylaşabiliriz:",
    sharingList: [
      "Hizmet Sağlayıcıları: Uygulamamızı işletmemize yardımcı olan güvenilir üçüncü taraf hizmet sağlayıcılarıyla",
      "Yasal Gereksinimler: Yasa gereği veya haklarımızı ve güvenliğimizi korumak için gerekli olduğunda",
      "İş Transferleri: Birleşme, satın alma veya varlık satışı bağlamında",
      "Rıza: Belirli amaçlar için açık rızanızla",
    ],
    dataSecurity: "5. Veri Güvenliği",
    securityDesc:
      "Kişisel bilgilerinizi korumak için uygun teknik ve organizasyonel önlemler uygularız:",
    securityList: [
      "Verilerin iletim sırasında ve bekletilirken şifrelenmesi",
      "Düzenli güvenlik değerlendirmeleri ve güncellemeler",
      "Erişim kontrolleri ve kimlik doğrulama önlemleri",
      "Güvenli barındırma ve altyapı",
      "Veri koruma konusunda çalışan eğitimi",
    ],
    yourRights: "6. Haklarınız ve Seçenekleriniz",
    rightsDesc: "Kişisel bilgilerinizle ilgili aşağıdaki haklara sahipsiniz:",
    rightsList: [
      "Erişim: Kişisel bilgilerinize erişim talep etme",
      "Düzeltme: Yanlış bilgilerin düzeltilmesini talep etme",
      "Silme: Kişisel bilgilerinizin silinmesini talep etme",
      "Taşınabilirlik: Verilerinizin taşınabilir formatta bir kopyasını talep etme",
      "Vazgeçme: Pazarlama iletişimlerinden abonelikten çıkma",
    ],
    cookies: "7. Çerezler ve İzleme Teknolojileri",
    cookiesDesc:
      "Deneyiminizi geliştirmek için çerezler ve benzer teknolojiler kullanırız:",
    cookiesList: [
      "Temel Çerezler: Temel işlevsellik için gerekli",
      "Analitik Çerezler: Kullanım kalıplarını anlamamıza yardımcı olur",
      "Tercih Çerezleri: Ayarlarınızı ve tercihlerinizi hatırlar",
    ],
    cookiesControl:
      "Çerez ayarlarını tarayıcı tercihleriniz aracılığıyla kontrol edebilirsiniz.",
    thirdPartyServices: "8. Üçüncü Taraf Hizmetler",
    thirdPartyDesc: "Uygulamamız üçüncü taraf hizmetlerle entegre olabilir:",
    thirdPartyList: [
      "Ödeme işlemcileri (Stripe, PayPal, vb.)",
      "Analitik hizmetleri (Google Analytics)",
      "Bulut depolama sağlayıcıları",
      "İletişim hizmetleri",
    ],
    thirdPartyNote:
      "Bu hizmetlerin kendi gizlilik politikaları vardır ve biz bunların uygulamalarını kontrol etmeyiz.",
    contactUs: "9. Bizimle İletişim",
    contactDesc:
      "Bu Gizlilik Politikası hakkında sorularınız varsa, lütfen bizimle iletişime geçin:",
    contactInfo: [
      "E-posta: info@orionn.com",
      "Telefon: +90 XXX XXX XX XX",
      "Adres: [Adres bilgileri]",
    ],

    // Terms of Use
    termsOfUse: "Kullanım Şartları",
    acceptanceOfTerms: "1. Şartların Kabulü",
    acceptanceDesc:
      "OrioNN QR Menü uygulamasına ve ilgili hizmetlere ('Hizmet') erişerek ve kullanarak, bu anlaşmanın şartlarını ve hükümlerini kabul eder ve bunlara bağlı olmayı kabul edersiniz. Yukarıdakilere uymayı kabul etmiyorsanız, lütfen bu hizmeti kullanmayın.",
    descriptionOfService: "2. Hizmet Açıklaması",
    serviceDesc:
      "OrioNN Development, restoran sahiplerinin QR kodları aracılığıyla erişilebilir dijital menüler oluşturmasına, yönetmesine ve görüntülemesine olanak tanıyan bir QR Menü uygulaması sağlar. Hizmetimiz şunları içerir:",
    serviceList: [
      "Dijital menü oluşturma ve yönetimi",
      "QR kod oluşturma ve özelleştirme",
      "Menü analitikleri ve içgörüleri",
      "Müşteri sipariş sistemi",
      "Restoran yönetim paneli",
    ],
    userAccounts: "3. Kullanıcı Hesapları ve Kayıt",
    accountCreation: "3.1 Hesap Oluşturma",
    accountCreationDesc:
      "Hizmetimizin belirli özelliklerine erişmek için bir hesap oluşturmanız gerekir. Şunları kabul edersiniz:",
    accountCreationList: [
      "Doğru, güncel ve eksiksiz bilgi sağlama",
      "Hesap bilgilerinizi koruma ve güncelleme",
      "Hesap kimlik bilgilerinizi güvende tutma",
      "Hesabınız altındaki tüm faaliyetlerden sorumluluk kabul etme",
    ],
    accountSecurity: "3.2 Hesap Güvenliği",
    accountSecurityDesc: "Şunlardan sorumlusunuz:",
    accountSecurityList: [
      "Şifrenizin gizliliğini koruma",
      "Hesabınız altında gerçekleşen tüm faaliyetler",
      "Yetkisiz kullanımı hemen bize bildirme",
    ],
    acceptableUse: "4. Kabul Edilebilir Kullanım Politikası",
    acceptableUseDesc:
      "Hizmeti aşağıdaki amaçlarla kullanmamayı kabul edersiniz:",
    acceptableUseList: [
      "Geçerli yasaları veya düzenlemeleri ihlal etme",
      "Başkalarının haklarını ihlal etme",
      "Zararlı, saldırgan veya uygunsuz içerik yükleme veya iletme",
      "Sistemlerimize yetkisiz erişim elde etmeye çalışma",
      "Hizmeti engelleme veya kesintiye uğratma",
      "Hizmeti uygun yetkilendirme olmadan ticari amaçlarla kullanma",
      "Dolandırıcılık amaçları için birden fazla hesap oluşturma",
    ],
    contentAndIP: "5. İçerik ve Fikri Mülkiyet",
    yourContent: "5.1 İçeriğiniz",
    yourContentDesc:
      "Hizmetimize yüklediğiniz içeriğin sahipliğini korursunuz. İçerik yükleyerek bize şu lisansı verirsiniz:",
    yourContentList: [
      "İçeriğinizi platformumuzda barındırma ve görüntüleme",
      "Hizmetlerimizi sağlamak için içeriğinizi kullanma",
      "Teknik uyumluluk için gerekli değişiklikleri yapma",
    ],
    ourIP: "5.2 Fikri Mülkiyetimiz",
    ourIPDesc:
      "Hizmet ve orijinal içeriği, özellikleri ve işlevselliği OrioNN Development'a aittir ve uluslararası telif hakkı, ticari marka, patent, ticari sır ve diğer fikri mülkiyet yasalarıyla korunmaktadır.",
    paymentTerms: "6. Ödeme Şartları",
    subscriptionPlans: "6.1 Abonelik Planları",
    subscriptionDesc:
      "Hizmetlerimiz için çeşitli abonelik planları sunuyoruz. Abone olarak şunları kabul edersiniz:",
    subscriptionList: [
      "Seçtiğiniz planla ilişkili tüm ücretleri ödeme",
      "Doğru fatura bilgileri sağlama",
      "Yinelenen ödemeleri yetkilendirme",
      "Geçerli vergileri ödeme",
    ],
    paymentProcessing: "6.2 Ödeme İşleme",
    paymentProcessingDesc:
      "Ödemeler güvenli üçüncü taraf ödeme işlemcileri aracılığıyla işlenir. Ödeme bilgilerinizi sunucularımızda saklamayız.",
    refunds: "6.3 İade ve İptal",
    refundsDesc:
      "İade politikaları takdirimize ve geçerli yasalara tabidir. Aboneliğinizi hesap ayarlarınızdan istediğiniz zaman iptal edebilirsiniz.",
    privacyAndData: "7. Gizlilik ve Veri Koruma",
    privacyAndDataDesc:
      "Gizliliğiniz bizim için önemlidir. Kişisel bilgilerin toplanması ve kullanılması, bu Şartlara referansla dahil edilen Gizlilik Politikamız tarafından yönetilir.",
    serviceAvailability: "8. Hizmet Kullanılabilirliği",
    availabilityDesc:
      "Yüksek hizmet kullanılabilirliğini sürdürmeye çalışırız ancak kesintisiz erişimi garanti edemeyiz. Şunları yapabiliriz:",
    availabilityList: [
      "Bakım ve güncellemeler gerçekleştirme",
      "Özellikleri değiştirme veya durdurma",
      "Güvenlik veya teknik nedenlerle hizmeti askıya alma",
    ],
    availabilityNote:
      "Planlı bakım ve güncellemeler için makul bildirim sağlayacağız.",
    limitationOfLiability: "9. Sorumluluk Sınırlaması",
    liabilityDesc:
      "Yasa tarafından izin verilen maksimum ölçüde, OrioNN Development şunlardan sorumlu olmayacaktır:",
    liabilityList: [
      "Dolaylı, tesadüfi, özel veya sonuçsal zararlar",
      "Kâr, veri veya iş fırsatlarının kaybı",
      "Üçüncü taraf eylemlerinden kaynaklanan zararlar",
      "Hizmet kesintileri veya veri kaybı",
    ],
    liabilityLimit:
      "Toplam sorumluluğumuz, talepten önceki 12 ay içinde Hizmet için ödediğiniz miktarı aşmayacaktır.",
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
    selectRole: "Select Role",
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
    changeRole: "Change Role",

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

    // Pagination
    views: "Views",
    showing: "Showing",
    of: "of",
    previous: "Previous",
    next: "Next",

    // Privacy Policy
    lastUpdated: "Last updated",
    introduction: "1. Introduction",
    privacyIntro:
      "Welcome to OrioNN Development ('we,' 'our,' or 'us'). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our QR Menu application and related services.",
    informationWeCollect: "2. Information We Collect",
    personalInformation: "2.1 Personal Information",
    personalInfoDesc: "We may collect the following personal information:",
    personalInfoList: [
      "Name and contact information (email address, phone number)",
      "Account credentials and profile information",
      "Business information for restaurant owners",
      "Payment information (processed securely through third-party providers)",
    ],
    usageInformation: "2.2 Usage Information",
    usageInfoDesc:
      "We automatically collect certain information about your use of our services:",
    usageInfoList: [
      "Device information (IP address, browser type, operating system)",
      "Usage patterns and interactions with our application",
      "QR code scan analytics and menu viewing statistics",
      "Error logs and performance data",
    ],
    howWeUseInfo: "3. How We Use Your Information",
    useInfoDesc: "We use the collected information for the following purposes:",
    useInfoList: [
      "Providing and maintaining our QR Menu services",
      "Processing transactions and managing accounts",
      "Improving our application and user experience",
      "Sending important updates and notifications",
      "Analyzing usage patterns to enhance our services",
      "Ensuring security and preventing fraud",
      "Complying with legal obligations",
    ],
    informationSharing: "4. Information Sharing and Disclosure",
    sharingDesc:
      "We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:",
    sharingList: [
      "Service Providers: With trusted third-party service providers who assist us in operating our application",
      "Legal Requirements: When required by law or to protect our rights and safety",
      "Business Transfers: In connection with a merger, acquisition, or sale of assets",
      "Consent: With your explicit consent for specific purposes",
    ],
    dataSecurity: "5. Data Security",
    securityDesc:
      "We implement appropriate technical and organizational measures to protect your personal information:",
    securityList: [
      "Encryption of data in transit and at rest",
      "Regular security assessments and updates",
      "Access controls and authentication measures",
      "Secure hosting and infrastructure",
      "Employee training on data protection",
    ],
    yourRights: "6. Your Rights and Choices",
    rightsDesc:
      "You have the following rights regarding your personal information:",
    rightsList: [
      "Access: Request access to your personal information",
      "Correction: Request correction of inaccurate information",
      "Deletion: Request deletion of your personal information",
      "Portability: Request a copy of your data in a portable format",
      "Opt-out: Unsubscribe from marketing communications",
    ],
    cookies: "7. Cookies and Tracking Technologies",
    cookiesDesc:
      "We use cookies and similar technologies to enhance your experience:",
    cookiesList: [
      "Essential Cookies: Required for basic functionality",
      "Analytics Cookies: Help us understand usage patterns",
      "Preference Cookies: Remember your settings and preferences",
    ],
    cookiesControl:
      "You can control cookie settings through your browser preferences.",
    thirdPartyServices: "8. Third-Party Services",
    thirdPartyDesc: "Our application may integrate with third-party services:",
    thirdPartyList: [
      "Payment processors (Stripe, PayPal, etc.)",
      "Analytics services (Google Analytics)",
      "Cloud storage providers",
      "Communication services",
    ],
    thirdPartyNote:
      "These services have their own privacy policies, and we do not control their practices.",
    contactUs: "9. Contact Us",
    contactDesc:
      "If you have any questions about this Privacy Policy, please contact us:",
    contactInfo: [
      "Email: info@orionn.com",
      "Phone: +90 XXX XXX XX XX",
      "Address: [Address details]",
    ],

    // Terms of Use
    termsOfUse: "Terms of Use",
    acceptanceOfTerms: "1. Acceptance of Terms",
    acceptanceDesc:
      "By accessing and using the OrioNN QR Menu application and related services ('Service'), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
    descriptionOfService: "2. Description of Service",
    serviceDesc:
      "OrioNN Development provides a QR Menu application that allows restaurant owners to create, manage, and display digital menus accessible via QR codes. Our service includes:",
    serviceList: [
      "Digital menu creation and management",
      "QR code generation and customization",
      "Menu analytics and insights",
      "Customer ordering system",
      "Restaurant management dashboard",
    ],
    userAccounts: "3. User Accounts and Registration",
    accountCreation: "3.1 Account Creation",
    accountCreationDesc:
      "To access certain features of our Service, you must create an account. You agree to:",
    accountCreationList: [
      "Provide accurate, current, and complete information",
      "Maintain and update your account information",
      "Keep your account credentials secure",
      "Accept responsibility for all activities under your account",
    ],
    accountSecurity: "3.2 Account Security",
    accountSecurityDesc: "You are responsible for:",
    accountSecurityList: [
      "Maintaining the confidentiality of your password",
      "All activities that occur under your account",
      "Notifying us immediately of any unauthorized use",
    ],
    acceptableUse: "4. Acceptable Use Policy",
    acceptableUseDesc: "You agree not to use the Service to:",
    acceptableUseList: [
      "Violate any applicable laws or regulations",
      "Infringe upon the rights of others",
      "Upload or transmit harmful, offensive, or inappropriate content",
      "Attempt to gain unauthorized access to our systems",
      "Interfere with or disrupt the Service",
      "Use the Service for commercial purposes without proper authorization",
      "Create multiple accounts for fraudulent purposes",
    ],
    contentAndIP: "5. Content and Intellectual Property",
    yourContent: "5.1 Your Content",
    yourContentDesc:
      "You retain ownership of content you upload to our Service. By uploading content, you grant us a license to:",
    yourContentList: [
      "Host and display your content on our platform",
      "Use your content to provide our services",
      "Make necessary modifications for technical compatibility",
    ],
    ourIP: "5.2 Our Intellectual Property",
    ourIPDesc:
      "The Service and its original content, features, and functionality are owned by OrioNN Development and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.",
    paymentTerms: "6. Payment Terms",
    subscriptionPlans: "6.1 Subscription Plans",
    subscriptionDesc:
      "We offer various subscription plans for our services. By subscribing, you agree to:",
    subscriptionList: [
      "Pay all fees associated with your chosen plan",
      "Provide accurate billing information",
      "Authorize recurring payments",
      "Pay applicable taxes",
    ],
    paymentProcessing: "6.2 Payment Processing",
    paymentProcessingDesc:
      "Payments are processed through secure third-party payment processors. We do not store your payment information on our servers.",
    refunds: "6.3 Refunds and Cancellations",
    refundsDesc:
      "Refund policies are subject to our discretion and applicable laws. You may cancel your subscription at any time through your account settings.",
    privacyAndData: "7. Privacy and Data Protection",
    privacyAndDataDesc:
      "Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.",
    serviceAvailability: "8. Service Availability",
    availabilityDesc:
      "We strive to maintain high service availability but cannot guarantee uninterrupted access. We may:",
    availabilityList: [
      "Perform maintenance and updates",
      "Modify or discontinue features",
      "Suspend service for security or technical reasons",
    ],
    availabilityNote:
      "We will provide reasonable notice for planned maintenance and updates.",
    limitationOfLiability: "9. Limitation of Liability",
    liabilityDesc:
      "To the maximum extent permitted by law, OrioNN Development shall not be liable for:",
    liabilityList: [
      "Indirect, incidental, special, or consequential damages",
      "Loss of profits, data, or business opportunities",
      "Damages resulting from third-party actions",
      "Service interruptions or data loss",
    ],
    liabilityLimit:
      "Our total liability shall not exceed the amount paid by you for the Service in the 12 months preceding the claim.",
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
    selectRole: "Выберите роль",
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
    changeRole: "Изменить роль",

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

    // Pagination
    views: "Просмотры",
    showing: "Показано",
    of: "из",
    previous: "Предыдущий",
    next: "Следующий",

    // Privacy Policy
    lastUpdated: "Последнее обновление",
    introduction: "1. Введение",
    privacyIntro:
      "Добро пожаловать в OrioNN Development ('мы,' 'наш,' или 'нас'). Мы стремимся защищать вашу конфиденциальность и обеспечивать безопасность вашей личной информации. Эта Политика конфиденциальности объясняет, как мы собираем, используем, раскрываем и защищаем вашу информацию при использовании нашего приложения QR Menu и связанных услуг.",
    informationWeCollect: "2. Информация, которую мы собираем",
    personalInformation: "2.1 Личная информация",
    personalInfoDesc: "Мы можем собирать следующую личную информацию:",
    personalInfoList: [
      "Имя и контактная информация (адрес электронной почты, номер телефона)",
      "Учетные данные и информация профиля",
      "Информация о бизнесе для владельцев ресторанов",
      "Информация об оплате (обрабатывается безопасно через сторонних поставщиков)",
    ],
    usageInformation: "2.2 Информация об использовании",
    usageInfoDesc:
      "Мы автоматически собираем определенную информацию об использовании наших услуг:",
    usageInfoList: [
      "Информация об устройстве (IP-адрес, тип браузера, операционная система)",
      "Модели использования и взаимодействия с нашим приложением",
      "Аналитика сканирования QR-кодов и статистика просмотра меню",
      "Журналы ошибок и данные о производительности",
    ],
    howWeUseInfo: "3. Как мы используем вашу информацию",
    useInfoDesc: "Мы используем собранную информацию для следующих целей:",
    useInfoList: [
      "Предоставление и поддержание наших услуг QR Menu",
      "Обработка транзакций и управление аккаунтами",
      "Улучшение нашего приложения и пользовательского опыта",
      "Отправка важных обновлений и уведомлений",
      "Анализ моделей использования для улучшения наших услуг",
      "Обеспечение безопасности и предотвращение мошенничества",
      "Соблюдение юридических обязательств",
    ],
    informationSharing: "4. Обмен и раскрытие информации",
    sharingDesc:
      "Мы не продаем, не обмениваем и не сдаем в аренду вашу личную информацию третьим лицам. Мы можем делиться вашей информацией в следующих обстоятельствах:",
    sharingList: [
      "Поставщики услуг: С доверенными сторонними поставщиками услуг, которые помогают нам в работе нашего приложения",
      "Юридические требования: Когда это требуется по закону или для защиты наших прав и безопасности",
      "Бизнес-передачи: В связи со слиянием, приобретением или продажей активов",
      "Согласие: С вашим явным согласием для конкретных целей",
    ],
    dataSecurity: "5. Безопасность данных",
    securityDesc:
      "Мы применяем соответствующие технические и организационные меры для защиты вашей личной информации:",
    securityList: [
      "Шифрование данных при передаче и хранении",
      "Регулярные оценки безопасности и обновления",
      "Контроль доступа и меры аутентификации",
      "Безопасный хостинг и инфраструктура",
      "Обучение сотрудников по защите данных",
    ],
    yourRights: "6. Ваши права и выбор",
    rightsDesc:
      "У вас есть следующие права в отношении вашей личной информации:",
    rightsList: [
      "Доступ: Запрашивать доступ к вашей личной информации",
      "Исправление: Запрашивать исправление неточной информации",
      "Удаление: Запрашивать удаление вашей личной информации",
      "Портативность: Запрашивать копию ваших данных в портативном формате",
      "Отказ: Отписываться от маркетинговых сообщений",
    ],
    cookies: "7. Файлы cookie и технологии отслеживания",
    cookiesDesc:
      "Мы используем файлы cookie и аналогичные технологии для улучшения вашего опыта:",
    cookiesList: [
      "Основные файлы cookie: Необходимы для базовой функциональности",
      "Аналитические файлы cookie: Помогают нам понимать модели использования",
      "Файлы cookie предпочтений: Запоминают ваши настройки и предпочтения",
    ],
    cookiesControl:
      "Вы можете контролировать настройки файлов cookie через предпочтения вашего браузера.",
    thirdPartyServices: "8. Сторонние услуги",
    thirdPartyDesc:
      "Наше приложение может интегрироваться со сторонними услугами:",
    thirdPartyList: [
      "Процессоры платежей (Stripe, PayPal, etc.)",
      "Службы аналитики (Google Analytics)",
      "Поставщики облачного хранилища",
      "Службы связи",
    ],
    thirdPartyNote:
      "Эти услуги имеют свои собственные политики конфиденциальности, и мы не контролируем их практики.",
    contactUs: "9. Свяжитесь с нами",
    contactDesc:
      "Если у вас есть вопросы об этой Политике конфиденциальности или Условиях использования, пожалуйста, свяжитесь с нами:",
    contactInfo: [
      "Электронная почта: info@orionn.com",
      "Телефон: +90 XXX XXX XX XX",
      "Адрес: [Детали адреса]",
    ],

    // Terms of Use
    termsOfUse: "Условия использования",
    acceptanceOfTerms: "1. Принятие условий",
    acceptanceDesc:
      "Получая доступ к приложению OrioNN QR Menu и используя связанные услуги ('Услуга'), вы принимаете и соглашаетесь соблюдать условия и положения этого соглашения. Если вы не согласны соблюдать вышеизложенное, пожалуйста, не используйте эту услугу.",
    descriptionOfService: "2. Описание услуги",
    serviceDesc:
      "OrioNN Development предоставляет приложение QR Menu, которое позволяет владельцам ресторанов создавать, управлять и отображать цифровые меню, доступные через QR-коды. Наша услуга включает:",
    serviceList: [
      "Создание и управление цифровыми меню",
      "Генерация и настройка QR-кодов",
      "Аналитика меню и аналитика",
      "Система заказов клиентов",
      "Панель управления рестораном",
    ],
    userAccounts: "3. Пользовательские аккаунты и регистрация",
    accountCreation: "3.1 Создание аккаунта",
    accountCreationDesc:
      "Для доступа к определенным функциям нашей Услуги вы должны создать аккаунт. Вы соглашаетесь:",
    accountCreationList: [
      "Предоставлять точную, актуальную и полную информацию",
      "Поддерживать и обновлять информацию вашего аккаунта",
      "Сохранять учетные данные вашего аккаунта в безопасности",
      "Принимать ответственность за все действия под вашим аккаунтом",
    ],
    accountSecurity: "3.2 Безопасность аккаунта",
    accountSecurityDesc: "Вы несете ответственность за:",
    accountSecurityList: [
      "Сохранение конфиденциальности вашего пароля",
      "Все действия, которые происходят под вашим аккаунтом",
      "Немедленное уведомление нас о любом несанкционированном использовании",
    ],
    acceptableUse: "4. Политика приемлемого использования",
    acceptableUseDesc: "Вы соглашаетесь не использовать Услугу для:",
    acceptableUseList: [
      "Нарушения любых применимых законов или правил",
      "Нарушения прав других лиц",
      "Загрузки или передачи вредоносного, оскорбительного или неприемлемого контента",
      "Попыток получить несанкционированный доступ к нашим системам",
      "Вмешательства в работу Услуги или ее нарушения",
      "Использования Услуги в коммерческих целях без надлежащей авторизации",
      "Создания нескольких аккаунтов для мошеннических целей",
    ],
    contentAndIP: "5. Контент и интеллектуальная собственность",
    yourContent: "5.1 Ваш контент",
    yourContentDesc:
      "Вы сохраняете право собственности на контент, который загружаете в нашу Услугу. Загружая контент, вы предоставляете нам лицензию на:",
    yourContentList: [
      "Размещение и отображение вашего контента на нашей платформе",
      "Использование вашего контента для предоставления наших услуг",
      "Внесение необходимых изменений для технической совместимости",
    ],
    ourIP: "5.2 Наша интеллектуальная собственность",
    ourIPDesc:
      "Услуга и ее оригинальный контент, функции и функциональность принадлежат OrioNN Development и защищены международными законами об авторском праве, товарных знаках, патентах, коммерческой тайне и другими законами об интеллектуальной собственности.",
    paymentTerms: "6. Условия оплаты",
    subscriptionPlans: "6.1 Планы подписки",
    subscriptionDesc:
      "Мы предлагаем различные планы подписки для наших услуг. Подписываясь, вы соглашаетесь:",
    subscriptionList: [
      "Платить все сборы, связанные с выбранным вами планом",
      "Предоставлять точную информацию для выставления счетов",
      "Авторизовать повторяющиеся платежи",
      "Платить применимые налоги",
    ],
    paymentProcessing: "6.2 Обработка платежей",
    paymentProcessingDesc:
      "Платежи обрабатываются через безопасные сторонние процессоры платежей. Мы не храним информацию об оплате на наших серверах.",
    refunds: "6.3 Возвраты и отмены",
    refundsDesc:
      "Политика возврата зависит от нашего усмотрения и применимых законов. Вы можете отменить подписку в любое время через настройки вашего аккаунта.",
    privacyAndData: "7. Конфиденциальность и защита данных",
    privacyAndDataDesc:
      "Ваша конфиденциальность важна для нас. Наш сбор и использование личной информации регулируется нашей Политикой конфиденциальности, которая включена в эти Условия по ссылке.",
    serviceAvailability: "8. Доступность услуги",
    availabilityDesc:
      "Мы стремимся поддерживать высокую доступность услуги, но не можем гарантировать бесперебойный доступ. Мы можем:",
    availabilityList: [
      "Выполнять техническое обслуживание и обновления",
      "Изменять или прекращать функции",
      "Приостанавливать услугу по соображениям безопасности или техническим причинам",
    ],
    availabilityNote:
      "Мы предоставим разумное уведомление о запланированном техническом обслуживании и обновлениях.",
    limitationOfLiability: "9. Ограничение ответственности",
    liabilityDesc:
      "В максимальной степени, разрешенной законом, OrioNN Development не несет ответственности за:",
    liabilityList: [
      "Косвенные, случайные, специальные или косвенные убытки",
      "Потерю прибыли, данных или бизнес-возможностей",
      "Ущерб, возникший в результате действий третьих лиц",
      "Перерывы в обслуживании или потерю данных",
    ],
    liabilityLimit:
      "Наша общая ответственность не превышает сумму, уплаченную вами за Услугу в течение 12 месяцев, предшествующих претензии.",
    contactUs: "10. Свяжитесь с нами",
    contactDesc:
      "Если у вас есть вопросы об этой Политике конфиденциальности или Условиях использования, пожалуйста, свяжитесь с нами:",
    contactInfo: [
      "Электронная почта: info@orionn.com",
      "Телефон: +90 XXX XXX XX XX",
      "Адрес: [Детали адреса]",
    ],
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
