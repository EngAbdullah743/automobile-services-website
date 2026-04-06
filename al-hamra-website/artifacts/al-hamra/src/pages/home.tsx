import { Phone, MessageCircle, ShieldCheck, MapPin, Star, ChevronDown, Wrench, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const PHONE_NUMBER = "+96550907340";
const WHATSAPP_NUMBER = "96550907340";
const WHATSAPP_MESSAGE = encodeURIComponent("مرحباً، أحتاج مساعدة في سيارتي. هل يمكنكم المساعدة؟");

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans text-gray-900" dir="rtl">

      {/* NAVBAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a1f44] shadow-lg" : "bg-[#0a1f44]/90"}`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <img src="/logo.png" alt="Al-Hamra Automobile Services" className="h-14 w-auto" />
          <nav className="hidden md:flex gap-6 text-white text-sm font-medium">
            {[
              { label: "الخدمات", id: "services" },
              { label: "من نحن", id: "about" },
              { label: "لماذا نحن", id: "why" },
              { label: "كيف نعمل", id: "process" },
              { label: "آراء العملاء", id: "testimonials" },
              { label: "تواصل معنا", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="hover:text-[#f97316] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f97316] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-orange-600 transition-colors"
          >
            واتساب الآن
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white pt-20"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-[#0a1f44]/75" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="mb-6">
            <span className="inline-block bg-[#f97316]/20 border border-[#f97316]/40 text-[#f97316] text-sm font-semibold px-4 py-1 rounded-full mb-4">
              خدمة على مدار الساعة 24/7
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
            إصلاح سيارتك
            <span className="block text-[#f97316]">في موقعك</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-200 mb-2">
            Car Repair at Your Location
          </p>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            نصلك في المنزل أو على الطريق — فريقنا المتخصص يصل إليك سريعًا لإصلاح سيارتك بأسعار مناسبة واحترافية عالية
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-3 bg-[#f97316] hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-xl font-bold transition-colors shadow-lg w-full sm:w-auto justify-center"
            >
              <Phone size={24} />
              اتصل الآن
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-green-600 text-white px-8 py-4 rounded-xl text-xl font-bold transition-colors shadow-lg w-full sm:w-auto justify-center"
            >
              <MessageCircle size={24} />
              واتساب
            </a>
          </div>

          <button
            onClick={() => scrollTo("services")}
            className="mt-16 flex flex-col items-center gap-2 text-gray-400 hover:text-[#f97316] transition-colors mx-auto"
          >
            <span className="text-sm">اكتشف خدماتنا</span>
            <ChevronDown size={24} className="animate-bounce" />
          </button>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#f97316] font-semibold text-sm uppercase tracking-wider">خدماتنا</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1f44] mt-2 mb-4">
              ما الذي نقدمه لك؟
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              نقدم مجموعة شاملة من خدمات إصلاح وصيانة السيارات مباشرة في موقعك
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: "/images/service-battery.png",
                title: "تبديل البطارية",
                desc: "استبدال فوري لبطارية سيارتك في أي مكان — خدمة سريعة واحترافية على مدار اليوم",
              },
              {
                img: "/images/service-engine.png",
                title: "إصلاح المحرك",
                desc: "تشخيص وإصلاح مشاكل المحرك على يد فنيين متخصصين بخبرة واسعة",
              },
              {
                img: "/images/service-oil.png",
                title: "تغيير الزيت",
                desc: "تغيير زيت المحرك والفلاتر بمواد عالية الجودة في موقعك مباشرة",
              },
              {
                img: "/images/service-tire.png",
                title: "تبديل الإطارات",
                desc: "تركيب وتبديل الإطارات بسرعة واحترافية سواء في المنزل أو على الطريق",
              },
              {
                img: "/images/service-emergency.png",
                title: "مساعدة الطوارئ",
                desc: "فريقنا متاح على مدار الساعة لمساعدتك في أي حالة طارئة على الطريق",
              },
              {
                img: "/images/service-inspection.png",
                title: "فحص شامل",
                desc: "فحص شامل لسيارتك وكشف المشاكل المحتملة قبل أن تتفاقم",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0a1f44] mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-[#0a1f44] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#f97316] font-semibold text-sm uppercase tracking-wider">من نحن</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-6 leading-tight">
                الحمراء لخدمات السيارات
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                نحن شركة متخصصة في تقديم خدمات إصلاح وصيانة السيارات مباشرة في موقع العميل — سواء كان منزله أو مكان عمله أو على جانب الطريق.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                يضم فريقنا فنيين محترفين يتمتعون بخبرة واسعة في التعامل مع مختلف أعطال السيارات، ملتزمين بتقديم خدمة سريعة وموثوقة بأسعار تنافسية.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "+500", label: "عميل راضٍ" },
                  { value: "24/7", label: "خدمة مستمرة" },
                  { value: "+5", label: "سنوات خبرة" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-white/10 rounded-xl">
                    <div className="text-3xl font-extrabold text-[#f97316]">{stat.value}</div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/logo.png"
                alt="Al-Hamra Automobile Services Logo"
                className="max-w-xs w-full opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#f97316] font-semibold text-sm uppercase tracking-wider">مميزاتنا</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1f44] mt-2 mb-4">
              لماذا تختار الحمراء؟
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                img: "/images/why-247.png",
                title: "متاحون 24/7",
                desc: "خدمتنا متاحة طوال اليوم وكل أيام الأسبوع بلا انقطاع",
              },
              {
                img: "/images/why-fast.png",
                title: "وصول سريع",
                desc: "نصل إليك في أسرع وقت ممكن أينما كنت",
              },
              {
                img: "/images/why-price.png",
                title: "أسعار مناسبة",
                desc: "أسعار تنافسية وشفافة بدون رسوم مخفية",
              },
              {
                img: "/images/why-expert.jpg",
                title: "فنيون محترفون",
                desc: "فريق مدرب ومؤهل للتعامل مع جميع أنواع السيارات",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl overflow-hidden border border-gray-100 hover:border-[#f97316] transition-colors shadow-sm">
                <div className="h-44 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 text-center bg-white">
                  <h3 className="text-lg font-bold text-[#0a1f44] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#f97316] font-semibold text-sm uppercase tracking-wider">كيف نعمل</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1f44] mt-2 mb-4">
              4 خطوات بسيطة
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              نجعل تجربتك معنا سلسة وبسيطة من أول اتصال حتى إصلاح السيارة
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              {
                step: "01",
                icon: <Phone size={28} />,
                title: "اتصل أو واتساب",
                desc: "تواصل معنا عبر الهاتف أو واتساب وأخبرنا بمشكلة سيارتك",
              },
              {
                step: "02",
                icon: <MapPin size={28} />,
                title: "شارك موقعك",
                desc: "أرسل لنا موقعك الحالي وسنحدد وقت الوصول المتوقع",
              },
              {
                step: "03",
                icon: <Wrench size={28} />,
                title: "الفني يصلك",
                desc: "يصل إليك الفني المتخصص مع جميع الأدوات والقطع اللازمة",
              },
              {
                step: "04",
                icon: <ShieldCheck size={28} />,
                title: "المشكلة محلولة",
                desc: "يتم إصلاح العطل باحترافية وأنت في مكانك بدون أي تعقيد",
              },
            ].map((item, idx) => (
              <div key={item.step} className="relative">
                <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 text-center h-full">
                  <div className="text-5xl font-extrabold text-[#f97316]/20 mb-3">{item.step}</div>
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#0a1f44] text-white rounded-full mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0a1f44] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -left-4 transform -translate-y-1/2 text-[#f97316] text-2xl z-10">
                    ←
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 bg-[#0a1f44] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#f97316] font-semibold text-sm uppercase tracking-wider">آراء العملاء</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4">
              ماذا يقول عملاؤنا؟
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "محمد السيد",
                review: "خدمة ممتازة وسريعة جداً! تعطلت سيارتي في الطريق وجاء الفني خلال 20 دقيقة وأصلح المشكلة في مكانها. أنصح بهم بشدة.",
                rating: 5,
                location: "الرياض",
              },
              {
                name: "سارة العمري",
                review: "أفضل خدمة سيارات تعاملت معها! الأسعار معقولة والفنيون محترفون ويشرحون المشكلة بشكل واضح. شكراً الحمراء!",
                rating: 5,
                location: "جدة",
              },
              {
                name: "خالد الزهراني",
                review: "تغيير البطارية في المنزل كان تجربة رائعة. لا حاجة للذهاب إلى ورشة. الفريق محترف ومؤدب وسريع في العمل.",
                rating: 5,
                location: "الدمام",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white/10 rounded-2xl p-7 backdrop-blur-sm border border-white/20">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-[#f97316] fill-[#f97316]" />
                  ))}
                </div>
                <p className="text-gray-200 leading-relaxed mb-6 text-sm">"{t.review}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f97316] flex items-center justify-center font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#f97316] font-semibold text-sm uppercase tracking-wider">تواصل معنا</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1f44] mt-2 mb-4">
              نحن هنا لمساعدتك
            </h2>
            <p className="text-gray-600">تواصل معنا الآن وسيرد عليك فريقنا في أقرب وقت ممكن</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0a1f44] flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#0a1f44] mb-1">رقم الهاتف</div>
                  <a href={`tel:${PHONE_NUMBER}`} className="text-[#f97316] text-lg font-semibold hover:underline" dir="ltr">
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#0a1f44] mb-1">واتساب</div>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] text-lg font-semibold hover:underline"
                    dir="ltr"
                  >
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-[#0a1f44]" />
                </div>
                <div>
                  <div className="font-bold text-[#0a1f44] mb-1">أوقات العمل</div>
                  <div className="text-gray-600">متاحون 24 ساعة / 7 أيام في الأسبوع</div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#0a1f44] rounded-2xl text-white text-center">
                <p className="text-lg font-bold mb-4">تحتاج مساعدة الآن؟</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex items-center justify-center gap-2 bg-[#f97316] text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors"
                  >
                    <Phone size={18} />
                    اتصل الآن
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle size={18} />
                    واتساب
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                const msg = encodeURIComponent(`مرحباً، اسمي ${name}.\nرقمي: ${phone}\n${message}`);
                window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
              }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
            >
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#0a1f44] mb-2">الاسم</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="أدخل اسمك"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent transition bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0a1f44] mb-2">رقم الهاتف</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="أدخل رقم هاتفك"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent transition bg-white"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0a1f44] mb-2">رسالتك</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="صف لنا مشكلة سيارتك أو أي استفسار..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent transition resize-none bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#f97316] hover:bg-orange-600 text-white py-3 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  إرسال عبر واتساب
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#060f22] text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src="/logo.png" alt="Al-Hamra" className="h-16 w-auto mb-4" />
              <p className="text-sm leading-relaxed">
                الحمراء لخدمات السيارات — نصلك في المنزل أو على الطريق بخدمة احترافية وسريعة.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "الخدمات", id: "services" },
                  { label: "من نحن", id: "about" },
                  { label: "لماذا نحن", id: "why" },
                  { label: "كيف نعمل", id: "process" },
                  { label: "تواصل معنا", id: "contact" },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollTo(item.id)}
                      className="hover:text-[#f97316] transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">تواصل معنا</h4>
              <div className="space-y-3 text-sm">
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 hover:text-[#f97316] transition-colors" dir="ltr">
                  <Phone size={14} />
                  {PHONE_NUMBER}
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle size={14} />
                  واتساب
                </a>
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  متاحون 24/7
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-xs">
            <p>© {new Date().getFullYear()} الحمراء لخدمات السيارات — جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>

      {/* FLOATING BUTTONS */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110"
        title="واتساب"
      >
        <MessageCircle size={32} />
      </a>

      <a
        href={`tel:${PHONE_NUMBER}`}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#f97316] text-white rounded-full shadow-2xl hover:bg-orange-600 transition-all hover:scale-110"
        title="اتصل الآن"
      >
        <Phone size={32} />
      </a>
    </div>
  );
}
