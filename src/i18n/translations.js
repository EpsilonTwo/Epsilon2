export const LANGUAGES = ['en', 'de', 'ar'];

export const T = {
  en: {
    nav: { services:'Services', process:'Process', portfolio:'Portfolio', about:'About', contact:'Contact' },
    hero: {
      pre:'// initializing epsilon²',
      title:'We Build Digital Worlds.',
      sub:'Custom websites that convert visitors into customers. Fast, beautiful, and built to last.',
      cta1:'View Services', cta2:'Get a Free Quote', scroll:'SCROLL'
    },
    services: {
      tag:'// services', title:'What We Build',
      sub:'From landing pages to full business sites — design, development, and deployment all handled by us.',
      s1:{ name:'Landing Pages', desc:'High-converting single-page sites. Mobile-perfect, SEO-ready, fast delivery.', price:'from $50 — $150', f1:'Fully responsive', f2:'Contact form included', f3:'2–3 day delivery' },
      s2:{ name:'Business Websites', desc:'Multi-page websites built with Astro — blazing-fast, great SEO, easy to scale.', price:'from $200 — $500', f1:'Up to 6 pages', f2:'Astro-powered', f3:'Free hosting on Netlify' },
      s3:{ name:'Custom Premium', desc:'Fully custom design with animations, interactions and branding from scratch.', price:'from $500 — $1,000+', f1:'Custom animations', f2:'Full brand identity', f3:'Ongoing support' }
    },
    process: {
      tag:'// process', title:'How We Work', sub:'Simple, transparent, efficient. No surprises.',
      s1:{ h:'Discovery', p:'Tell us your goals and audience. We ask the right questions.' },
      s2:{ h:'Design', p:'We create a visual concept tailored to your brand.' },
      s3:{ h:'Development', p:'Clean, fast code. Follow progress live on GitHub.' },
      s4:{ h:'Launch', p:'Deploy to CDN, domain setup, full handover. Done.' }
    },
    portfolio: {
      tag:'// work', title:'Selected Projects', sub:'Recent builds — clean, fast, purposefully designed.',
      p1:{ tag:'Business Website', title:'Restaurant & Bistro — Stuttgart', stack:'Astro · CSS · JS · Netlify' },
      p2:{ tag:'Portfolio', title:'Freelance Designer Portfolio', stack:'HTML · CSS · JS' },
      p3:{ tag:'Landing Page', title:'Product Launch Page', stack:'HTML · CSS · JS' }
    },
    about: {
      tag:'// team', title:'Who We Are', h:'Two devs. One vision.',
      p1:'We are Stephan and Yara — a two-person web dev duo combining technical architecture with purposeful design.',
      p2:'Based in Germany and the MENA region — we work in German, English, and Arabic.'
    },
    contact: {
      tag:'// contact', title:"Let's Build Together", sub:'Have a project in mind? We reply within 24 hours.',
      h:'Ready to launch?', p:'Tell us what you need. We handle everything — design to deployment.',
      name:'Name', email:'Email', budget:'Budget', msg:'Message', send:'Send Message →',
      b1:'$50–$150 (Landing Page)', b2:'$200–$500 (Business Site)', b3:'$500+ (Custom Premium)'
    },
    footer: { copy:'© 2026 Epsilon² — Stephan & Yara. All rights reserved.' }
  },
  de: {
    nav: { services:'Leistungen', process:'Ablauf', portfolio:'Portfolio', about:'Über uns', contact:'Kontakt' },
    hero: {
      pre:'// epsilon² wird initialisiert',
      title:'Wir bauen digitale Welten.',
      sub:'Maßgeschneiderte Websites, die Besucher in Kunden verwandeln. Schnell, schön und langlebig.',
      cta1:'Leistungen ansehen', cta2:'Kostenloses Angebot', scroll:'SCROLLEN'
    },
    services: {
      tag:'// leistungen', title:'Was wir bauen',
      sub:'Von Landing Pages bis zu vollständigen Business-Websites — Design, Entwicklung und Deployment.',
      s1:{ name:'Landing Pages', desc:'Hochkonvertierende Einzelseiten. Mobiloptimiert, SEO-freundlich, schnelle Lieferung.', price:'ab 50 € — 150 €', f1:'Vollständig responsiv', f2:'Kontaktformular inklusive', f3:'Lieferung in 2–3 Tagen' },
      s2:{ name:'Business-Websites', desc:'Mehrseitige Websites mit Astro — blitzschnell, top SEO, einfach skalierbar.', price:'ab 200 € — 500 €', f1:'Bis zu 6 Seiten', f2:'Astro-powered', f3:'Kostenloses Hosting auf Netlify' },
      s3:{ name:'Custom Premium', desc:'Vollständig individuelles Design mit Animationen und Branding von Grund auf.', price:'ab 500 € — 1.000 €+', f1:'Custom-Animationen', f2:'Vollständige Markenidentität', f3:'Laufende Betreuung' }
    },
    process: {
      tag:'// ablauf', title:'Wie wir arbeiten', sub:'Einfach, transparent, effizient. Keine Überraschungen.',
      s1:{ h:'Analyse', p:'Du schilderst deine Ziele. Wir stellen die richtigen Fragen.' },
      s2:{ h:'Design', p:'Wir erstellen ein visuelles Konzept passend zu deiner Marke.' },
      s3:{ h:'Entwicklung', p:'Sauberer, schneller Code. Fortschritt live auf GitHub verfolgen.' },
      s4:{ h:'Launch', p:'CDN-Deployment, Domain-Setup, vollständige Übergabe. Fertig.' }
    },
    portfolio: {
      tag:'// projekte', title:'Ausgewählte Projekte', sub:'Aktuelle Arbeiten — sauber, schnell, bewusst gestaltet.',
      p1:{ tag:'Business-Website', title:'Restaurant & Bistro — Stuttgart', stack:'Astro · CSS · JS · Netlify' },
      p2:{ tag:'Portfolio', title:'Freelance-Designer-Portfolio', stack:'HTML · CSS · JS' },
      p3:{ tag:'Landing Page', title:'Produkt-Launch-Seite', stack:'HTML · CSS · JS' }
    },
    about: {
      tag:'// team', title:'Wer wir sind', h:'Zwei Devs. Eine Vision.',
      p1:'Wir sind Stephan und Yara — ein zweiköpfiges Web-Dev-Duo, das technische Architektur mit bewusstem Design verbindet.',
      p2:'Mit Standorten in Deutschland und der MENA-Region arbeiten wir auf Deutsch, Englisch und Arabisch.'
    },
    contact: {
      tag:'// kontakt', title:'Gemeinsam bauen', sub:'Ein Projekt im Kopf? Wir melden uns innerhalb von 24 Stunden.',
      h:'Bereit zum Start?', p:'Sag uns was du brauchst. Wir kümmern uns um alles — vom Entwurf bis zum Launch.',
      name:'Name', email:'E-Mail', budget:'Budget', msg:'Nachricht', send:'Nachricht senden →',
      b1:'50–150 € (Landing Page)', b2:'200–500 € (Business-Website)', b3:'500 €+ (Custom Premium)'
    },
    footer: { copy:'© 2026 Epsilon² — Stephan & Yara. Alle Rechte vorbehalten.' }
  },
  ar: {
    nav: { services:'الخدمات', process:'الطريقة', portfolio:'أعمالنا', about:'من نحن', contact:'تواصل معنا' },
    hero: {
      pre:'// تهيئة إبسيلون²',
      title:'نبني عوالم رقمية.',
      sub:'مواقع مخصصة تحوّل الزوار إلى عملاء. سريعة وجميلة ومبنية للدوام.',
      cta1:'عرض الخدمات', cta2:'احصل على عرض مجاني', scroll:'للأسفل'
    },
    services: {
      tag:'// الخدمات', title:'ما نبنيه',
      sub:'من صفحات الهبوط إلى مواقع الأعمال الكاملة — نتولى التصميم والتطوير والنشر.',
      s1:{ name:'صفحات الهبوط', desc:'صفحات مفردة بمعدل تحويل مرتفع. متجاوبة ومحسّنة لمحركات البحث.', price:'من $50 — $150', f1:'تصميم متجاوب بالكامل', f2:'نموذج تواصل مشمول', f3:'تسليم خلال 2–3 أيام' },
      s2:{ name:'مواقع الأعمال', desc:'مواقع متعددة الصفحات بـ Astro — سريعة جداً، SEO ممتاز، سهلة التطوير.', price:'من $200 — $500', f1:'حتى 6 صفحات', f2:'Astro-powered', f3:'استضافة مجانية على Netlify' },
      s3:{ name:'باقة بريميوم', desc:'تصميم وتطوير مخصص بالكامل مع رسوم متحركة وهوية بصرية من الصفر.', price:'من $500 — $1,000+', f1:'رسوم متحركة مخصصة', f2:'هوية بصرية كاملة', f3:'دعم مستمر' }
    },
    process: {
      tag:'// الطريقة', title:'كيف نعمل', sub:'بسيط وشفاف وفعّال. بدون مفاجآت.',
      s1:{ h:'الاستكشاف', p:'تخبرنا بأهدافك وجمهورك. نطرح الأسئلة الصحيحة.' },
      s2:{ h:'التصميم', p:'نبتكر مفهوماً بصرياً مخصصاً لعلامتك التجارية.' },
      s3:{ h:'التطوير', p:'كود نظيف وسريع. تابع التقدم مباشرة على GitHub.' },
      s4:{ h:'الإطلاق', p:'نشر على CDN، إعداد النطاق، تسليم كامل. تم.' }
    },
    portfolio: {
      tag:'// أعمالنا', title:'مشاريع مختارة', sub:'أعمال أخيرة — نظيفة، سريعة، مصممة باتقان.',
      p1:{ tag:'موقع أعمال', title:'مطعم وبيسترو — شتوتغارت', stack:'Astro · CSS · JS · Netlify' },
      p2:{ tag:'محفظة أعمال', title:'محفظة مصمم مستقل', stack:'HTML · CSS · JS' },
      p3:{ tag:'صفحة هبوط', title:'صفحة إطلاق منتج', stack:'HTML · CSS · JS' }
    },
    about: {
      tag:'// الفريق', title:'من نحن', h:'مطوّران. رؤية واحدة.',
      p1:'نحن ستيفان وياره — ثنائي من مطوري الويب يجمع بين البنية التقنية والتصميم الهادف.',
      p2:'بجذور في ألمانيا ومنطقة الشرق الأوسط — نعمل بالعربية والإنجليزية والألمانية.'
    },
    contact: {
      tag:'// تواصل', title:'لنبني معاً', sub:'لديك مشروع؟ نرد خلال 24 ساعة.',
      h:'جاهز للانطلاق؟', p:'أخبرنا بما تحتاجه. نتولى كل شيء — من التصميم إلى النشر.',
      name:'الاسم', email:'البريد الإلكتروني', budget:'الميزانية', msg:'الرسالة', send:'إرسال الرسالة →',
      b1:'$50–$150 (صفحة هبوط)', b2:'$200–$500 (موقع أعمال)', b3:'$500+ (باقة بريميوم)'
    },
    footer: { copy:'© 2026 إبسيلون² — ستيفان وياره. جميع الحقوق محفوظة.' }
  }
};
