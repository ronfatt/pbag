import {
  Banknote,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Calculator,
  ChefHat,
  Church,
  Computer,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Languages,
  Mail,
  MapPin,
  MessageCircle,
  Music,
  NotebookPen,
  Paintbrush,
  Phone,
  ShieldCheck,
  Shirt,
  Sparkles,
  Stethoscope,
  Users,
  Wrench
} from "lucide-react";

export type Language = "en" | "bm" | "zh";

export const languageLabels: Record<Language, string> = {
  en: "EN",
  bm: "BM",
  zh: "中文"
};

export const translations = {
  en: {
    nav: {
      items: [
        { label: "About", href: "#about" },
        { label: "Programs", href: "#programs" },
        { label: "Sponsor", href: "#sponsor" },
        { label: "Impact", href: "#impact" },
        { label: "Volunteer", href: "#volunteer" },
        { label: "Contact", href: "#contact" }
      ],
      donate: "Donate",
      sponsor: "Sponsor A Child",
      sponsorShort: "Sponsor",
      openMenu: "Open menu"
    },
    hero: {
      registered: "MOE-registered since 15 June 2015",
      badge: "Sponsor from RM700/year",
      title: "Give Every Child A Chance To Learn",
      subtitle:
        "PBAG provides alternative education for undocumented children in Tawau, helping them build confidence, skills, and a better future.",
      supportLine: "Your gift helps cover fees, books, uniforms and learning support",
      sponsorCta: "Sponsor A Child",
      donateCta: "Make A Donation"
    },
    stats: [
      { value: "728", label: "students reached in 2023" },
      { value: "70%", label: "growth in student numbers" },
      { value: "1st", label: "MOE registered centre for undocumented children" },
      { value: "Tawau", label: "serving families in Sabah" }
    ],
    quickDonate: {
      eyebrow: "Donate now",
      description: "Your gift helps cover fees, books, uniforms and learning support for PBAG students.",
      whatsapp: "WhatsApp"
    },
    about: {
      eyebrow: "About PBAG",
      title: "About Pusat Bimbingan Alternatif Grace",
      paragraphs: [
        "Pusat Bimbingan Alternatif Grace (PBAG), also known as Grace Training Centre, is located at Mile 5.5 Jalan Apas, Tawau. Registered by the Ministry of Education in Putrajaya on 15 June 2015, PBAG provides alternative education for undocumented children who face limited access to formal schooling.",
        "Since its beginning, PBAG has served hundreds of children. In 2023, student numbers grew by 70% to 728 students, with many more still waiting for a place. Through education, skills training, and community support, PBAG helps children grow into responsible and capable individuals."
      ],
      missionTitle: "Every child has the right to education.",
      missionText: "This mission guides each class, meal, skill lesson, and community visit.",
      visionTitle: "Nurture children with knowledge, values, and practical skills.",
      visionText: "So they can contribute positively to the Tawau community.",
      whyEyebrow: "Why it matters",
      whyTitle: "Why Your Support Matters"
    },
    whyCards: [
      {
        title: "Education Opens Doors",
        description:
          "Many children without proper documentation have limited access to formal education. PBAG gives them a structured learning environment and hope for the future.",
        icon: BookOpen
      },
      {
        title: "Skills Build Confidence",
        description:
          "Beyond academic subjects, students learn practical skills that help them become more independent, responsible, and employable.",
        icon: BriefcaseBusiness
      },
      {
        title: "Community Changes Lives",
        description:
          "When children are supported, families and communities benefit. Your giving helps build a stronger and more compassionate Tawau.",
        icon: Users
      }
    ],
    sponsor: {
      eyebrow: "Sponsor a child",
      title: "Sponsor A Child's Education",
      intro: "Your sponsorship helps cover school fees, books, uniforms, learning materials, and basic education support.",
      period: "/ year",
      note: "You may sponsor one or more students. Monthly and one-off giving options are also welcome.",
      plans: [
        {
          title: "Primary Student Sponsorship",
          price: "RM700",
          includes: ["Fees", "Books", "Uniform", "Learning support"],
          button: "Sponsor Primary Student"
        },
        {
          title: "Secondary Student Sponsorship",
          price: "RM1000",
          includes: ["Fees", "Books", "Uniform", "Skills development support"],
          button: "Sponsor Secondary Student"
        }
      ]
    },
    give: {
      eyebrow: "Ways to give",
      title: "Ways You Can Help",
      detailsEyebrow: "Donation details",
      detailsTitle: "Give in the way that works for you",
      cash: "Cash",
      cashText: "Accepted at PBAG by arrangement",
      cheque: "Cheque payable to",
      onlineTransfer: "Online Funds Transfer",
      accountNo: "Account No",
      accountName: "Account Name",
      international: "International Transfer",
      scan: "Scan for e-donation",
      scanNote: "After transferring, send the receipt by WhatsApp so PBAG can acknowledge your support.",
      whatsappAfterDonation: "WhatsApp after donation",
      options: [
        { title: "One-Off Donation", description: "Make a single donation of any amount.", icon: Banknote },
        { title: "Monthly Giving", description: "Give monthly to provide consistent support.", icon: HeartPulse },
        { title: "Sponsor A Student", description: "Support a primary or secondary student for one year.", icon: GraduationCap },
        {
          title: "Donate In Kind",
          description: "Donate school shoes, uniforms, stationery, sports equipment, furniture, exercise books, or other useful items.",
          icon: HandHeart
        }
      ]
    },
    receipt: {
      title: "Send Donation Receipt",
      intro: "After transferring, send your details to PBAG by WhatsApp. Attach the receipt image in WhatsApp after the message opens.",
      donorName: "Donor name",
      donorNamePlaceholder: "Your name",
      amount: "Amount (RM)",
      method: "Payment method",
      reference: "Transfer reference",
      referencePlaceholder: "Bank reference / receipt no.",
      message: "Message",
      messagePlaceholder: "Optional note for PBAG",
      submit: "Send via WhatsApp",
      whatsappMessage: {
        intro: "Hello PBAG, I have made a donation.",
        name: "Name",
        amount: "Amount",
        method: "Payment method",
        reference: "Transfer reference",
        message: "Message",
        attach: "I will attach the transfer receipt here. Thank you."
      },
      methods: ["Online Funds Transfer", "DuitNow QR", "Cheque", "Cash", "International Transfer"]
    },
    trust: {
      items: [
        { title: "MOE Registered", icon: BadgeCheck },
        { title: "Public Bank Account", icon: Banknote },
        { title: "Visit By Appointment", icon: MapPin },
        { title: "WhatsApp Contact", icon: MessageCircle }
      ],
      sentence: "Give with confidence: {bank}, {accountName}, account {accountNo}. Contact PBAG before visiting or sponsoring."
    },
    programs: {
      eyebrow: "Programs",
      title: "What Students Learn At PBAG",
      intro:
        "PBAG combines academic subjects, practical skills, moral values, and health support so students can grow with confidence inside and outside the classroom.",
      supportLearning: "Support learning",
      currentlyFeatured: "Currently featured",
      tapToPreview: "Tap to preview",
      viewAll: "View all programs",
      showFewer: "Show fewer programs",
      more: "more",
      categories: {
        All: { label: "All Learning", description: "Academic subjects, practical skills, values, and care in one learning pathway." },
        Academic: { label: "Academic", description: "Languages, numeracy, science, and classroom foundations for daily learning." },
        Digital: { label: "Digital", description: "Computer literacy that helps students participate in a modern world." },
        Skills: { label: "Life & Skills", description: "Hands-on training that builds confidence, independence, and employability." },
        Care: { label: "Health Support", description: "Community health programs that help children stay ready to learn." }
      },
      list: [
        { title: "Bahasa Malaysia", description: "National language foundations for daily learning.", icon: Languages },
        { title: "English", description: "Communication skills for wider opportunities.", icon: BookOpen },
        { title: "Chinese", description: "Language learning that reflects the local community.", icon: NotebookPen },
        { title: "Mathematics", description: "Practical numeracy and problem solving.", icon: Calculator },
        { title: "Science", description: "Curiosity, observation, and basic discovery.", icon: Sparkles },
        { title: "Computer Literacy", description: "Digital basics for a modern future.", icon: Computer },
        { title: "Life Skills", description: "Confidence, discipline, and everyday responsibility.", icon: HandHeart },
        { title: "Moral Education", description: "Values that shape responsible young people.", icon: Church },
        { title: "Music", description: "Creative expression and joyful participation.", icon: Music },
        { title: "Culinary Skills", description: "Hands-on baking and kitchen confidence.", icon: ChefHat },
        { title: "Electrical Works", description: "Foundational technical and repair skills.", icon: Wrench },
        { title: "Handicraft", description: "Creativity through practical handmade projects.", icon: Paintbrush },
        { title: "Sewing", description: "Useful craft skills for independence.", icon: Shirt },
        { title: "Health & Dental Support", description: "Care that helps students stay ready to learn.", icon: Stethoscope },
        { title: "Vaccination Support", description: "Community health access for children and families.", icon: HeartPulse }
      ]
    },
    impact: {
      eyebrow: "Impact & updates",
      title: "Recent Impact & Community Updates",
      intro:
        "PBAG grows through steady acts of care: teacher training, health visits, practical skills, and partners who show up for the children.",
      why: "Why it matters:",
      support: "How support helps:",
      updates: [
        {
          title: "SUHAKAM Visit To PBAG",
          description:
            "The Human Rights Commission of Malaysia, led by Commissioner Dr. Zufar Yadi, visited PBAG for a fact-finding session on the centre's work, operational challenges, and the realities faced by children born and raised in Sabah without formal documentation.",
          whyItMatters:
            "Independent visits help the public understand the barriers these children face and why steady education support matters.",
          supportHelps:
            "Donors keep classrooms, learning materials, and daily support available while PBAG works with partners."
        },
        {
          title: "Preschool Curriculum 2026 Workshop",
          description:
            "Three teachers from Tadika Alternatif Grace joined around 129 preschool teachers at SJKC Sin Hwa, Tawau, learning new approaches for the 2026 curriculum and strengthening early childhood teaching quality.",
          whyItMatters:
            "Teacher training improves the quality of early learning for children who already face limited access to formal schooling.",
          supportHelps:
            "Giving helps PBAG invest in teachers, classroom resources, and stronger learning pathways."
        },
        {
          title: "Medical Camp For The Community",
          description:
            "Doctors, teachers, and volunteers gave their time to provide free medical services for parents, students, and adults in the surrounding Tawau community.",
          whyItMatters:
            "Families received care close to home, reducing barriers to basic health support.",
          supportHelps:
            "Donations make community care days, coordination, and basic support more sustainable."
        },
        {
          title: "Free Measles-Rubella Vaccination Program",
          description:
            "A free measles-rubella vaccination program for children aged 5 and above was held at PBAG, organized by WHO and implemented by National Cancer Society Malaysia with Dr. Nadia and a dedicated nursing team.",
          whyItMatters:
            "Healthy children are more likely to attend class consistently and continue learning.",
          supportHelps:
            "Supporters help PBAG connect vulnerable families with practical care and trusted partners."
        }
      ]
    },
    facebook: {
      eyebrow: "Latest updates",
      title: "Latest From Facebook",
      intro: "Follow PBAG's active Facebook page for the newest classroom moments, community visits, health programs, and volunteer stories.",
      note: "PBAG updates weekly on Facebook with real photos from classes, visits, workshops, and community care.",
      follow: "Follow PBAG on Facebook",
      previewLabel: "Recent community updates",
      previewText:
        "Classroom learning, teacher workshops, medical care, vaccination support, volunteer stories, and centre visits are shared actively on Facebook.",
      load: "Load Facebook updates",
      loadNote: "Facebook content loads from Meta only after you click, keeping this page lighter."
    },
    testimonialsSection: {
      eyebrow: "Volunteer voices",
      title: "Volunteer Testimonials"
    },
    contactSection: {
      eyebrow: "Visit / Contact",
      title: "Visit PBAG or Get In Touch",
      intro: "To request a visit to our centre, please contact us.",
      whatsapp: "WhatsApp Madam Esther",
      emailButton: "Email PBAG",
      phone: "Phone / WhatsApp:",
      email: "Email:",
      address: "Address:",
      poBox: "P.O. Box:"
    },
    contactCards: [
      { label: "Phone / WhatsApp", value: "+6019-808 8281 (Madam Esther)", icon: Phone },
      { label: "Email", value: "gtctawau@gmail.com", icon: Mail },
      { label: "Address", value: "Pekan Kinabutan, Mile 5 1/2, Jalan Apas, Tawau", icon: MapPin },
      { label: "Registration", value: "Malaysia Ministry of Education registered centre", icon: ShieldCheck }
    ],
    footer: {
      mission: "Giving every child a chance to life through education, care, and community support.",
      sponsor: "Sponsor from RM700/year",
      donate: "Donate",
      rights: "All rights reserved."
    },
    copy: {
      copy: "Copy Account Number",
      copied: "Copied",
      failed: "Copy unavailable"
    }
  },
  bm: {
    nav: {
      items: [
        { label: "Tentang", href: "#about" },
        { label: "Program", href: "#programs" },
        { label: "Tajaan", href: "#sponsor" },
        { label: "Impak", href: "#impact" },
        { label: "Sukarelawan", href: "#volunteer" },
        { label: "Hubungi", href: "#contact" }
      ],
      donate: "Derma",
      sponsor: "Taja Seorang Anak",
      sponsorShort: "Taja",
      openMenu: "Buka menu"
    },
    hero: {
      registered: "Berdaftar dengan KPM sejak 15 Jun 2015",
      badge: "Tajaan bermula RM700/tahun",
      title: "Berikan Setiap Anak Peluang Untuk Belajar",
      subtitle:
        "PBAG menyediakan pendidikan alternatif untuk kanak-kanak tanpa dokumen di Tawau, membantu mereka membina keyakinan, kemahiran dan masa depan yang lebih baik.",
      supportLine: "Sumbangan anda membantu yuran, buku, uniform dan sokongan pembelajaran",
      sponsorCta: "Taja Seorang Anak",
      donateCta: "Buat Derma"
    },
    stats: [
      { value: "728", label: "pelajar dibantu pada 2023" },
      { value: "70%", label: "pertumbuhan jumlah pelajar" },
      { value: "1st", label: "pusat berdaftar KPM untuk kanak-kanak tanpa dokumen" },
      { value: "Tawau", label: "berkhidmat untuk keluarga di Sabah" }
    ],
    quickDonate: {
      eyebrow: "Derma sekarang",
      description: "Sumbangan anda membantu yuran, buku, uniform dan sokongan pembelajaran pelajar PBAG.",
      whatsapp: "WhatsApp"
    },
    about: {
      eyebrow: "Tentang PBAG",
      title: "Tentang Pusat Bimbingan Alternatif Grace",
      paragraphs: [
        "Pusat Bimbingan Alternatif Grace (PBAG), juga dikenali sebagai Grace Training Centre, terletak di Batu 5.5 Jalan Apas, Tawau. Berdaftar dengan Kementerian Pendidikan Malaysia di Putrajaya pada 15 Jun 2015, PBAG menyediakan pendidikan alternatif untuk kanak-kanak tanpa dokumen yang mempunyai akses terhad kepada persekolahan formal.",
        "Sejak penubuhannya, PBAG telah melayani ratusan kanak-kanak. Pada tahun 2023, jumlah pelajar meningkat 70% kepada 728 orang, dengan ramai lagi masih menunggu tempat. Melalui pendidikan, latihan kemahiran dan sokongan komuniti, PBAG membantu kanak-kanak membesar menjadi individu yang bertanggungjawab dan berkebolehan."
      ],
      missionTitle: "Setiap anak berhak mendapat pendidikan.",
      missionText: "Misi ini membimbing setiap kelas, makanan, pelajaran kemahiran dan lawatan komuniti.",
      visionTitle: "Membimbing anak-anak dengan ilmu, nilai dan kemahiran praktikal.",
      visionText: "Supaya mereka dapat menyumbang secara positif kepada komuniti Tawau.",
      whyEyebrow: "Mengapa penting",
      whyTitle: "Mengapa Sokongan Anda Penting"
    },
    whyCards: [
      {
        title: "Pendidikan Membuka Peluang",
        description:
          "Ramai kanak-kanak tanpa dokumen mempunyai akses terhad kepada pendidikan formal. PBAG memberi mereka suasana pembelajaran yang tersusun dan harapan untuk masa depan.",
        icon: BookOpen
      },
      {
        title: "Kemahiran Membina Keyakinan",
        description:
          "Selain akademik, pelajar mempelajari kemahiran praktikal yang membantu mereka menjadi lebih berdikari, bertanggungjawab dan bersedia untuk bekerja.",
        icon: BriefcaseBusiness
      },
      {
        title: "Komuniti Mengubah Hidup",
        description:
          "Apabila kanak-kanak disokong, keluarga dan komuniti turut mendapat manfaat. Sumbangan anda membantu membina Tawau yang lebih prihatin.",
        icon: Users
      }
    ],
    sponsor: {
      eyebrow: "Taja seorang anak",
      title: "Taja Pendidikan Seorang Anak",
      intro: "Tajaan anda membantu menampung yuran sekolah, buku, uniform, bahan pembelajaran dan sokongan pendidikan asas.",
      period: "/ tahun",
      note: "Anda boleh menaja seorang atau lebih pelajar. Sumbangan bulanan dan sekali beri juga amat dialu-alukan.",
      plans: [
        {
          title: "Tajaan Pelajar Sekolah Rendah",
          price: "RM700",
          includes: ["Yuran", "Buku", "Uniform", "Sokongan pembelajaran"],
          button: "Taja Pelajar Rendah"
        },
        {
          title: "Tajaan Pelajar Sekolah Menengah",
          price: "RM1000",
          includes: ["Yuran", "Buku", "Uniform", "Sokongan pembangunan kemahiran"],
          button: "Taja Pelajar Menengah"
        }
      ]
    },
    give: {
      eyebrow: "Cara memberi",
      title: "Cara Anda Boleh Membantu",
      detailsEyebrow: "Maklumat derma",
      detailsTitle: "Beri dengan cara yang sesuai untuk anda",
      cash: "Tunai",
      cashText: "Diterima di PBAG melalui aturan terlebih dahulu",
      cheque: "Cek dibayar kepada",
      onlineTransfer: "Pindahan Wang Dalam Talian",
      accountNo: "No. Akaun",
      accountName: "Nama Akaun",
      international: "Pindahan Antarabangsa",
      scan: "Imbas untuk e-derma",
      scanNote: "Selepas pindahan, hantar resit melalui WhatsApp supaya PBAG boleh mengesahkan sokongan anda.",
      whatsappAfterDonation: "WhatsApp selepas derma",
      options: [
        { title: "Derma Sekali Beri", description: "Buat derma sekali dalam apa-apa jumlah.", icon: Banknote },
        { title: "Sumbangan Bulanan", description: "Beri secara bulanan untuk sokongan yang konsisten.", icon: HeartPulse },
        { title: "Taja Seorang Pelajar", description: "Sokong pelajar rendah atau menengah untuk satu tahun.", icon: GraduationCap },
        {
          title: "Derma Barangan",
          description: "Derma kasut sekolah, uniform, alat tulis, peralatan sukan, perabot, buku latihan atau barangan berguna lain.",
          icon: HandHeart
        }
      ]
    },
    receipt: {
      title: "Hantar Resit Derma",
      intro: "Selepas pindahan, hantar maklumat anda kepada PBAG melalui WhatsApp. Lampirkan gambar resit selepas WhatsApp dibuka.",
      donorName: "Nama penderma",
      donorNamePlaceholder: "Nama anda",
      amount: "Jumlah (RM)",
      method: "Cara bayaran",
      reference: "Rujukan pindahan",
      referencePlaceholder: "Rujukan bank / no. resit",
      message: "Mesej",
      messagePlaceholder: "Nota pilihan untuk PBAG",
      submit: "Hantar melalui WhatsApp",
      whatsappMessage: {
        intro: "Hello PBAG, saya telah membuat derma.",
        name: "Nama",
        amount: "Jumlah",
        method: "Cara bayaran",
        reference: "Rujukan pindahan",
        message: "Mesej",
        attach: "Saya akan lampirkan resit pindahan di sini. Terima kasih."
      },
      methods: ["Pindahan Wang Dalam Talian", "DuitNow QR", "Cek", "Tunai", "Pindahan Antarabangsa"]
    },
    trust: {
      items: [
        { title: "Berdaftar KPM", icon: BadgeCheck },
        { title: "Akaun Public Bank", icon: Banknote },
        { title: "Lawatan Dengan Janji Temu", icon: MapPin },
        { title: "Hubungan WhatsApp", icon: MessageCircle }
      ],
      sentence: "Beri dengan yakin: {bank}, {accountName}, akaun {accountNo}. Hubungi PBAG sebelum melawat atau menaja."
    },
    programs: {
      eyebrow: "Program",
      title: "Apa Yang Dipelajari Pelajar Di PBAG",
      intro:
        "PBAG menggabungkan subjek akademik, kemahiran praktikal, nilai moral dan sokongan kesihatan supaya pelajar dapat berkembang dengan yakin di dalam dan luar kelas.",
      supportLearning: "Sokong pembelajaran",
      currentlyFeatured: "Sedang dipaparkan",
      tapToPreview: "Tekan untuk lihat",
      viewAll: "Lihat semua program",
      showFewer: "Paparkan lebih sedikit",
      more: "lagi",
      categories: {
        All: { label: "Semua Pembelajaran", description: "Akademik, kemahiran praktikal, nilai dan penjagaan dalam satu laluan pembelajaran." },
        Academic: { label: "Akademik", description: "Bahasa, numerasi, sains dan asas kelas untuk pembelajaran harian." },
        Digital: { label: "Digital", description: "Literasi komputer untuk membantu pelajar mengambil bahagian dalam dunia moden." },
        Skills: { label: "Kemahiran Hidup", description: "Latihan praktikal yang membina keyakinan, berdikari dan kebolehkerjaan." },
        Care: { label: "Sokongan Kesihatan", description: "Program kesihatan komuniti yang membantu anak-anak bersedia untuk belajar." }
      },
      list: [
        { title: "Bahasa Malaysia", description: "Asas bahasa kebangsaan untuk pembelajaran harian.", icon: Languages },
        { title: "Bahasa Inggeris", description: "Kemahiran komunikasi untuk peluang yang lebih luas.", icon: BookOpen },
        { title: "Bahasa Cina", description: "Pembelajaran bahasa yang mencerminkan komuniti tempatan.", icon: NotebookPen },
        { title: "Matematik", description: "Numerasi praktikal dan penyelesaian masalah.", icon: Calculator },
        { title: "Sains", description: "Rasa ingin tahu, pemerhatian dan penemuan asas.", icon: Sparkles },
        { title: "Literasi Komputer", description: "Asas digital untuk masa depan moden.", icon: Computer },
        { title: "Kemahiran Hidup", description: "Keyakinan, disiplin dan tanggungjawab harian.", icon: HandHeart },
        { title: "Pendidikan Moral", description: "Nilai yang membentuk generasi muda bertanggungjawab.", icon: Church },
        { title: "Muzik", description: "Ekspresi kreatif dan penyertaan yang menggembirakan.", icon: Music },
        { title: "Kemahiran Kulinari", description: "Latihan membakar dan keyakinan di dapur.", icon: ChefHat },
        { title: "Kerja Elektrik", description: "Asas kemahiran teknikal dan pembaikan.", icon: Wrench },
        { title: "Kraftangan", description: "Kreativiti melalui projek buatan tangan.", icon: Paintbrush },
        { title: "Jahitan", description: "Kemahiran kraftangan berguna untuk berdikari.", icon: Shirt },
        { title: "Sokongan Kesihatan & Pergigian", description: "Penjagaan yang membantu pelajar bersedia untuk belajar.", icon: Stethoscope },
        { title: "Sokongan Vaksinasi", description: "Akses kesihatan komuniti untuk kanak-kanak dan keluarga.", icon: HeartPulse }
      ]
    },
    impact: {
      eyebrow: "Impak & kemas kini",
      title: "Impak Terkini & Kemas Kini Komuniti",
      intro: "PBAG berkembang melalui usaha penjagaan yang konsisten: latihan guru, lawatan kesihatan, kemahiran praktikal dan rakan yang hadir untuk kanak-kanak.",
      why: "Mengapa penting:",
      support: "Bagaimana sokongan membantu:",
      updates: [
        {
          title: "Lawatan SUHAKAM Ke PBAG",
          description:
            "Suruhanjaya Hak Asasi Manusia Malaysia, dipimpin oleh Pesuruhjaya Dr. Zufar Yadi, melawat PBAG untuk memahami kerja pusat, cabaran operasi dan realiti kanak-kanak yang lahir serta membesar di Sabah tanpa dokumentasi formal.",
          whyItMatters:
            "Lawatan bebas membantu masyarakat memahami halangan yang dihadapi kanak-kanak ini dan mengapa sokongan pendidikan yang berterusan amat penting.",
          supportHelps:
            "Penderma membantu memastikan kelas, bahan pembelajaran dan sokongan harian terus tersedia sementara PBAG bekerjasama dengan rakan komuniti."
        },
        {
          title: "Bengkel Kurikulum Prasekolah 2026",
          description:
            "Tiga guru dari Tadika Alternatif Grace menyertai kira-kira 129 guru prasekolah di SJKC Sin Hwa, Tawau, mempelajari pendekatan baharu untuk kurikulum 2026 dan mengukuhkan kualiti pendidikan awal kanak-kanak.",
          whyItMatters:
            "Latihan guru meningkatkan kualiti pembelajaran awal untuk kanak-kanak yang sudah menghadapi akses terhad kepada sekolah formal.",
          supportHelps:
            "Sumbangan membantu PBAG melabur dalam guru, sumber kelas dan laluan pembelajaran yang lebih kukuh."
        },
        {
          title: "Kem Perubatan Untuk Komuniti",
          description:
            "Doktor, guru dan sukarelawan meluangkan masa untuk menyediakan perkhidmatan perubatan percuma kepada ibu bapa, pelajar dan orang dewasa dalam komuniti sekitar Tawau.",
          whyItMatters:
            "Keluarga menerima penjagaan dekat dengan rumah, mengurangkan halangan untuk mendapatkan sokongan kesihatan asas.",
          supportHelps:
            "Derma membantu menjadikan hari penjagaan komuniti, penyelarasan dan sokongan asas lebih mampan."
        },
        {
          title: "Program Vaksinasi Measles-Rubella Percuma",
          description:
            "Program vaksinasi measles-rubella percuma untuk kanak-kanak berumur 5 tahun ke atas diadakan di PBAG, dianjurkan oleh WHO dan dilaksanakan oleh National Cancer Society Malaysia bersama Dr. Nadia dan pasukan jururawat.",
          whyItMatters:
            "Kanak-kanak yang sihat lebih berpeluang hadir ke kelas secara konsisten dan terus belajar.",
          supportHelps:
            "Penyokong membantu PBAG menghubungkan keluarga rentan dengan penjagaan praktikal dan rakan yang dipercayai."
        }
      ]
    },
    facebook: {
      eyebrow: "Kemas kini terkini",
      title: "Terkini Dari Facebook",
      intro: "Ikuti halaman Facebook PBAG yang aktif untuk momen kelas, lawatan komuniti, program kesihatan dan kisah sukarelawan terkini.",
      note: "PBAG mengemas kini Facebook setiap minggu dengan gambar sebenar daripada kelas, lawatan, bengkel dan penjagaan komuniti.",
      follow: "Ikuti PBAG di Facebook",
      previewLabel: "Kemas kini komuniti terkini",
      previewText: "Pembelajaran kelas, bengkel guru, penjagaan kesihatan, sokongan vaksinasi, kisah sukarelawan dan lawatan pusat dikongsi secara aktif di Facebook.",
      load: "Muatkan kemas kini Facebook",
      loadNote: "Kandungan Facebook dimuatkan daripada Meta hanya selepas anda klik, supaya halaman ini kekal lebih ringan."
    },
    testimonialsSection: {
      eyebrow: "Suara sukarelawan",
      title: "Testimoni Sukarelawan"
    },
    contactSection: {
      eyebrow: "Lawat / Hubungi",
      title: "Lawati PBAG atau Hubungi Kami",
      intro: "Untuk memohon lawatan ke pusat kami, sila hubungi kami.",
      whatsapp: "WhatsApp Madam Esther",
      emailButton: "E-mel PBAG",
      phone: "Telefon / WhatsApp:",
      email: "E-mel:",
      address: "Alamat:",
      poBox: "Peti Surat:"
    },
    contactCards: [
      { label: "Telefon / WhatsApp", value: "+6019-808 8281 (Madam Esther)", icon: Phone },
      { label: "E-mel", value: "gtctawau@gmail.com", icon: Mail },
      { label: "Alamat", value: "Pekan Kinabutan, Batu 5 1/2, Jalan Apas, Tawau", icon: MapPin },
      { label: "Pendaftaran", value: "Pusat berdaftar dengan Kementerian Pendidikan Malaysia", icon: ShieldCheck }
    ],
    footer: {
      mission: "Memberi setiap anak peluang hidup melalui pendidikan, penjagaan dan sokongan komuniti.",
      sponsor: "Tajaan bermula RM700/tahun",
      donate: "Derma",
      rights: "Hak cipta terpelihara."
    },
    copy: {
      copy: "Salin No. Akaun",
      copied: "Disalin",
      failed: "Tidak dapat disalin"
    }
  },
  zh: {
    nav: {
      items: [
        { label: "关于", href: "#about" },
        { label: "课程", href: "#programs" },
        { label: "助养", href: "#sponsor" },
        { label: "影响", href: "#impact" },
        { label: "义工", href: "#volunteer" },
        { label: "联系", href: "#contact" }
      ],
      donate: "捐款",
      sponsor: "助养孩子",
      sponsorShort: "助养",
      openMenu: "打开菜单"
    },
    hero: {
      registered: "自 2015 年 6 月 15 日起获马来西亚教育部注册",
      badge: "助养 RM700/年起",
      title: "给每个孩子学习的机会",
      subtitle: "PBAG 为斗湖无证儿童提供替代教育，帮助他们建立自信、技能和更好的未来。",
      supportLine: "您的支持帮助支付学费、书本、校服和学习支援",
      sponsorCta: "助养孩子",
      donateCta: "我要捐款"
    },
    stats: [
      { value: "728", label: "2023 年受惠学生" },
      { value: "70%", label: "学生人数增长" },
      { value: "1st", label: "获教育部注册的无证儿童教育中心" },
      { value: "斗湖", label: "服务沙巴家庭" }
    ],
    quickDonate: {
      eyebrow: "立即捐款",
      description: "您的捐款帮助 PBAG 学生支付学费、书本、校服和学习支援。",
      whatsapp: "WhatsApp"
    },
    about: {
      eyebrow: "关于 PBAG",
      title: "关于恩典训练中心",
      paragraphs: [
        "Pusat Bimbingan Alternatif Grace（PBAG），也称为 Grace Training Centre，位于斗湖 Jalan Apas 5.5 英里。PBAG 于 2015 年 6 月 15 日在布城获马来西亚教育部注册，为难以进入正规学校的无证儿童提供替代教育。",
        "自成立以来，PBAG 已服务数百名儿童。2023 年，学生人数增长 70%，达到 728 名，仍有许多孩子等待入学。通过教育、技能训练和社区支持，PBAG 帮助孩子成长为有责任感、有能力的人。"
      ],
      missionTitle: "每个孩子都有受教育的权利。",
      missionText: "这个使命引导每一堂课、每一餐、每一次技能学习和社区服务。",
      visionTitle: "以知识、价值观和实用技能培育孩子。",
      visionText: "让他们能够为斗湖社区作出积极贡献。",
      whyEyebrow: "为什么重要",
      whyTitle: "为什么您的支持很重要"
    },
    whyCards: [
      {
        title: "教育打开机会",
        description: "许多没有完整证件的孩子难以进入正规教育。PBAG 给他们有结构的学习环境和未来的希望。",
        icon: BookOpen
      },
      {
        title: "技能建立自信",
        description: "除了学科知识，学生也学习实用技能，帮助他们更独立、更有责任感，也更有就业能力。",
        icon: BriefcaseBusiness
      },
      {
        title: "社区改变生命",
        description: "当孩子获得支持，家庭和社区也会受益。您的奉献帮助建立更有爱心的斗湖。",
        icon: Users
      }
    ],
    sponsor: {
      eyebrow: "助养孩子",
      title: "助养一个孩子的教育",
      intro: "您的助养帮助支付学费、书本、校服、学习材料和基础教育支援。",
      period: "/ 年",
      note: "您可以助养一位或多位学生。我们也欢迎每月捐款或一次性奉献。",
      plans: [
        {
          title: "小学生助养",
          price: "RM700",
          includes: ["学费", "书本", "校服", "学习支援"],
          button: "助养小学生"
        },
        {
          title: "中学生助养",
          price: "RM1000",
          includes: ["学费", "书本", "校服", "技能发展支援"],
          button: "助养中学生"
        }
      ]
    },
    give: {
      eyebrow: "捐助方式",
      title: "您可以怎样帮助",
      detailsEyebrow: "捐款资料",
      detailsTitle: "选择适合您的方式支持",
      cash: "现金",
      cashText: "可预约后交到 PBAG",
      cheque: "支票抬头",
      onlineTransfer: "线上银行转账",
      accountNo: "户口号码",
      accountName: "户口名称",
      international: "国际转账",
      scan: "扫码电子捐款",
      scanNote: "转账后，请通过 WhatsApp 发送收据，方便 PBAG 确认您的支持。",
      whatsappAfterDonation: "捐款后 WhatsApp",
      options: [
        { title: "一次性捐款", description: "任何金额的一次性奉献。", icon: Banknote },
        { title: "每月奉献", description: "每月支持，提供稳定帮助。", icon: HeartPulse },
        { title: "助养学生", description: "支持一位小学或中学学生一整年。", icon: GraduationCap },
        {
          title: "物资捐赠",
          description: "捐赠校鞋、校服、文具、运动用品、家具、练习簿或其他实用物资。",
          icon: HandHeart
        }
      ]
    },
    receipt: {
      title: "发送捐款收据",
      intro: "转账后，请通过 WhatsApp 把资料发送给 PBAG。WhatsApp 打开后，再附上转账收据图片。",
      donorName: "捐款人姓名",
      donorNamePlaceholder: "您的姓名",
      amount: "金额 (RM)",
      method: "付款方式",
      reference: "转账参考",
      referencePlaceholder: "银行参考 / 收据号码",
      message: "留言",
      messagePlaceholder: "给 PBAG 的备注，可不填",
      submit: "通过 WhatsApp 发送",
      whatsappMessage: {
        intro: "你好 PBAG，我已完成捐款。",
        name: "姓名",
        amount: "金额",
        method: "付款方式",
        reference: "转账参考",
        message: "留言",
        attach: "我会在这里附上转账收据。谢谢。"
      },
      methods: ["线上银行转账", "DuitNow QR", "支票", "现金", "国际转账"]
    },
    trust: {
      items: [
        { title: "教育部注册", icon: BadgeCheck },
        { title: "Public Bank 户口", icon: Banknote },
        { title: "预约参观", icon: MapPin },
        { title: "WhatsApp 联系", icon: MessageCircle }
      ],
      sentence: "安心奉献：{bank}，{accountName}，户口 {accountNo}。参观或助养前可先联系 PBAG。"
    },
    programs: {
      eyebrow: "课程",
      title: "PBAG 学生学习什么",
      intro: "PBAG 结合学科、实用技能、品格价值和健康支援，让学生在课堂内外都能自信成长。",
      supportLearning: "支持学习",
      currentlyFeatured: "目前展示",
      tapToPreview: "点击预览",
      viewAll: "查看所有课程",
      showFewer: "收起课程",
      more: "更多",
      categories: {
        All: { label: "全部学习", description: "学科、实用技能、价值观和关怀结合成完整学习路径。" },
        Academic: { label: "学科", description: "语言、数学、科学和日常学习基础。" },
        Digital: { label: "数码", description: "电脑基础帮助学生参与现代社会。" },
        Skills: { label: "生活与技能", description: "实践训练建立自信、独立和就业能力。" },
        Care: { label: "健康支援", description: "社区健康项目帮助孩子保持学习状态。" }
      },
      list: [
        { title: "马来文", description: "日常学习所需的国语基础。", icon: Languages },
        { title: "英文", description: "拓展机会的沟通能力。", icon: BookOpen },
        { title: "中文", description: "反映本地社区的语言学习。", icon: NotebookPen },
        { title: "数学", description: "实用计算与解决问题能力。", icon: Calculator },
        { title: "科学", description: "好奇心、观察和基础探索。", icon: Sparkles },
        { title: "电脑基础", description: "面向现代未来的数码基础。", icon: Computer },
        { title: "生活技能", description: "自信、纪律和日常责任感。", icon: HandHeart },
        { title: "道德教育", description: "塑造负责任年轻人的价值观。", icon: Church },
        { title: "音乐", description: "创意表达和快乐参与。", icon: Music },
        { title: "烹饪技能", description: "烘焙与厨房实践，建立信心。", icon: ChefHat },
        { title: "电工基础", description: "基础技术与维修技能。", icon: Wrench },
        { title: "手工艺", description: "通过手作项目培养创意。", icon: Paintbrush },
        { title: "缝纫", description: "有助独立生活的实用技能。", icon: Shirt },
        { title: "健康与牙科支援", description: "帮助学生保持学习状态的照护。", icon: Stethoscope },
        { title: "疫苗支援", description: "为孩子和家庭提供社区健康管道。", icon: HeartPulse }
      ]
    },
    impact: {
      eyebrow: "影响与动态",
      title: "近期影响与社区动态",
      intro: "PBAG 通过持续的关怀成长：教师培训、健康服务、实用技能和愿意同行的伙伴。",
      why: "为什么重要：",
      support: "支持如何帮助：",
      updates: [
        {
          title: "SUHAKAM 访问 PBAG",
          description:
            "马来西亚人权委员会在委员 Dr. Zufar Yadi 带领下访问 PBAG，了解中心的使命、运作挑战，以及在沙巴出生和成长但缺乏正式文件的儿童所面对的现实。",
          whyItMatters:
            "独立访问帮助公众理解这些孩子面对的障碍，也让人看见持续教育支持的重要性。",
          supportHelps:
            "捐助者帮助 PBAG 维持课堂、学习材料和日常支援，同时继续与伙伴合作。"
        },
        {
          title: "2026 学前课程工作坊",
          description:
            "Tadika Alternatif Grace 的三位老师与约 129 名学前教师在斗湖 SJKC Sin Hwa 参加课程工作坊，学习 2026 年课程的新方法，提升幼儿教育质量。",
          whyItMatters:
            "教师培训能提升早期学习质量，尤其对原本难以进入正规学校的孩子更为重要。",
          supportHelps:
            "您的支持帮助 PBAG 投资老师、课堂资源和更稳固的学习路径。"
        },
        {
          title: "社区医疗营",
          description:
            "医生、老师和义工付出时间，为周边斗湖社区的家长、学生和成人提供免费医疗服务。",
          whyItMatters:
            "家庭能在靠近住处的地方获得照护，减少获得基本健康支援的障碍。",
          supportHelps:
            "捐款帮助社区关怀日、协调工作和基本支援更可持续。"
        },
        {
          title: "免费麻疹-风疹疫苗计划",
          description:
            "PBAG 为 5 岁及以上儿童举办免费麻疹-风疹疫苗计划，由 WHO 支持，并由 National Cancer Society Malaysia、Dr. Nadia 和护士团队执行。",
          whyItMatters:
            "健康的孩子更能稳定上课并持续学习。",
          supportHelps:
            "支持者帮助 PBAG 连接弱势家庭与实际照护及可靠伙伴。"
        }
      ]
    },
    facebook: {
      eyebrow: "最新动态",
      title: "Facebook 最新消息",
      intro: "关注 PBAG 活跃的 Facebook 页面，了解课堂、社区访问、健康项目和义工故事。",
      note: "PBAG 每周在 Facebook 更新真实照片，包括课堂、访问、工作坊和社区关怀。",
      follow: "关注 PBAG Facebook",
      previewLabel: "近期社区动态",
      previewText: "课堂学习、教师工作坊、医疗服务、疫苗支援、义工故事和中心访问都会在 Facebook 分享。",
      load: "载入 Facebook 动态",
      loadNote: "Facebook 内容只会在点击后从 Meta 载入，让网页保持更轻。"
    },
    testimonialsSection: {
      eyebrow: "义工心声",
      title: "义工见证"
    },
    contactSection: {
      eyebrow: "参观 / 联系",
      title: "参观 PBAG 或联系我们",
      intro: "如需预约参观中心，请联系我们。",
      whatsapp: "WhatsApp Esther 女士",
      emailButton: "电邮 PBAG",
      phone: "电话 / WhatsApp：",
      email: "电邮：",
      address: "地址：",
      poBox: "邮政信箱："
    },
    contactCards: [
      { label: "电话 / WhatsApp", value: "+6019-808 8281 (Madam Esther)", icon: Phone },
      { label: "电邮", value: "gtctawau@gmail.com", icon: Mail },
      { label: "地址", value: "Pekan Kinabutan, Mile 5 1/2, Jalan Apas, Tawau", icon: MapPin },
      { label: "注册", value: "马来西亚教育部注册中心", icon: ShieldCheck }
    ],
    footer: {
      mission: "通过教育、关怀和社区支持，给每个孩子生活的机会。",
      sponsor: "助养 RM700/年起",
      donate: "捐款",
      rights: "版权所有。"
    },
    copy: {
      copy: "复制户口号码",
      copied: "已复制",
      failed: "无法复制"
    }
  }
} as const;

export type Translation = (typeof translations)[Language];
