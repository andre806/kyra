import { Logo } from "@/once-ui/components";


const person = {
  firstName: "kyra",
  lastName: "",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "digitalização do seu negocio",
  avatar: "/images/kyra-logo1.png",
  email: "kyra40411@gmail.com",
  location: "America/Sao_Paulo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Português", "inglês"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>entre em contato com a kyra para tirar duvidas e fazer orçamentos sem compromisso</>,
  description: (
    <>
     
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/kyra_presenca_digital/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kyra-digitaliza%C3%A7%C3%A3o-de-empresas-92a134366/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/Kyra_digital",
  },
  {
    name: "Email",
    icon: "email",
    link: `email:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}' Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Kyra. Sua presença digital começa aqui</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Kyra é uma equipe especializada na criação de landing pages, sites, aplicativos e sistemas para empresas.
      <br /> Unimos design moderno, tecnologia avançada e foco em resultados para transformar sua presença digital.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
       Você é especial para nós, aqui seu negocio será valorizado e alavancado, você não sabe o tamanho do seu potencial no digital!!!!.
       Somos especialistas na criação de landing pages, sites e aplicativos que combinam design moderno, performance e funcionalidade. 
       Ajudamos empresas a se destacarem no mundo online com presença forte, estratégica e eficiente.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "clientes satisfeitos",
   experiences: [
  {
    company: "NEXA",
    timeframe: "2025 - Present",
    role: "Criação de site",
    achievements: [
      <>A maior e mais completa assessoria de marketing para restaurantes do nordeste</>,
      <>A Nexa oferece soluções estratégicas de marketing digital para empresas de todos os tamanhos, ajudando-as a alcançar seus objetivos de crescimento e aumentar sua presença online</>,
    ],
    images: [
      
        {
          src: "/images/nexa.png",
        alt: "NEXA Project",
        width: 16,
        height: 9,
        link:'https://nexa-jiru.vercel.app/#',
      }
      
    ],
  },
  {
    company: "CRYPTO MARKET",
    timeframe: "2025",
    role: "Site + sistema de análise de gráficos",
    achievements: [
      <>O CryptoMarket é uma plataforma interativa que ajuda você a analisar os preços e tendências das principais criptomoedas do mercado.</>,
      <>Gráficos em tempo real, análises detalhadas e recomendações personalizadas para sua carteira de investimentos.</>,
    ],
    images: [
      {
        src: "/images/cryptoMarket.png",
        alt: "CryptoMarket Project",
        width: 16,
        height: 9,
        link:'https://crypto-market-2tj6.vercel.app/'
      },
    ],
  }
],

  },
  studies: {
    display: true, // set to false to hide this section
    title: "Por que escolher a Kyra?",
    institutions: [
      {
        name: "🚀 Soluções que Convertem",
        description: <>Na Kyra, criamos sites, landing pages e aplicativos com foco em resultado real. Transformando visitantes em clientes. Nossa entrega é rápida, estratégica e 100% personalizada para o seu negócio.</>,
      },
      {
        name: "💡 Tecnologia com Propósito",
        description: <>Não basta estar online, é preciso se destacar. A Kyra combina design moderno, performance e inteligência digital para construir presenças que marcam. Escolher a Kyra é dar o próximo passo rumo a uma presença digital forte, profissional e eficiente.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "",
    skills: [
      {
        title: "fazemos designs que melhor combinam com sua empresa",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/pexels-luis-gomes-166706-546819.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/pexels-pixabay-73873.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Agilidade + qualidade + custo beneficio",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/pexels-pixabay-76969.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "💡 Ainda tem dúvidas? Leia e veja por que você precisa disso agora.",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
