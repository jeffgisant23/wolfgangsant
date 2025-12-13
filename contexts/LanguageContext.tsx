import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface Translations {
  nav: {
    book: string;
    oracle: string;
    services: string;
    training: string;
    author: string;
    subtitle: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    ctaBook: string;
    ctaServices: string;
  };
  book: {
    title: string;
    subtitle: string;
    heading: string;
    description: string;
    quote: string;
    btnSynopsis: string;
    btnFragment: string;
  };
  oracle: {
    title: string;
    subtitle: string;
    placeholder: string;
    loading: string;
    empty: string;
    disclaimer: string;
    demoLabel: string;
    demoTitle: string;
  };
  services: {
    sectionTitle: string;
    mainTitle: string;
    quote: string;
    items: {
      title: string;
      description: string;
      features: string[];
    }[];
    cta: string;
  };
  training: {
    sectionTitle: string;
    description: string;
    packages: {
      title: string;
      target: string;
      description: string;
      includes: string[];
    }[];
  };
  author: {
    label: string;
    btnJeffrey: string;
    btnWolff: string;
    jeffreyTitle: string;
    jeffreyDesc: string;
    jeffreyList: string[];
    wolffTitle: string;
    wolffDesc: string;
    wolffList: string[];
  };
  universe: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  archive: {
    title: string;
    subtitle: string;
    cta: string;
  };
  footer: {
    newsletterTitle: string;
    newsletterDesc: string;
    rights: string;
  };
  lab: {
    title: string;
    art1Tag: string;
    art1Title: string;
    art1Desc: string;
    art1Link: string;
    art2Tag: string;
    art2Title: string;
    art2Desc: string;
    art2Link: string;
  };
}

const translations: Record<Language, Translations> = {
  es: {
    nav: {
      book: 'El Libro',
      oracle: 'Oráculo',
      services: 'CIAS Studio',
      training: 'Formación',
      author: 'Autor',
      subtitle: 'Wolffgangsant | CIAS'
    },
    hero: {
      badge: 'Autor & Consultor Tecnológico',
      titleStart: 'Traducimos',
      titleHighlight: 'complejidad',
      titleEnd: 'en narrativa y código.',
      subtitle: 'Un ecosistema dual donde la literatura experimental de Wolffgangsant se encuentra con la consultoría de IA avanzada de CIAS Studio.',
      ctaBook: 'Explorar (La) Falta',
      ctaServices: 'Consultoría IA (CIAS)'
    },
    book: {
      title: '(La) Falta',
      subtitle: 'Wolffgangsant',
      heading: 'El Espejo Roto',
      description: '"(La) Falta" no es una novela convencional. Es un artefacto híbrido que oscila entre el ensayo, la ficción y la autoficción. Explora los límites de la identidad contemporánea a través de fragmentos, servilletas perdidas y diálogos con sombras.',
      quote: '"No vendemos un libro, ofrecemos un espacio vacío donde cada lector encuentra un fragmento de sí mismo."',
      btnSynopsis: 'Leer Sinopsis',
      btnFragment: 'Fragmento PDF'
    },
    oracle: {
      title: 'Oráculo del Vacío',
      subtitle: '"Pregunta a la falta, y quizás encuentres un fragmento de ti mismo."',
      placeholder: '¿Qué es lo que me falta?',
      loading: 'Consultando la Crísalida...',
      empty: 'El espacio está vacío. Esperando tu interrogante.',
      disclaimer: '* Este componente es un ejemplo vivo de los "Agentes Personalizados" que desarrollamos en CIAS. Entrenado con la voz y temática de la obra literaria.',
      demoLabel: 'Demo: Agente Literario',
      demoTitle: 'Interfaz: El Oráculo del Vacío'
    },
    services: {
      sectionTitle: 'CIAS Studio',
      mainTitle: 'Inteligencia Artificial Creativa',
      quote: '"No construimos chatbots genéricos. Diseñamos interlocutores digitales con los que vale la pena conversar."',
      items: [
        {
          title: "Formación Especializada",
          description: "Capacitación crítica y técnica para creadores y equipos que buscan integrar IA sin perder su esencia humana.",
          features: ["IA para Escritores & Artistas", "Literatura y Algoritmos", "Ética Crítica de IA"]
        },
        {
          title: "Automatización Creativa",
          description: "Diseño de flujos de trabajo inteligentes que liberan tiempo para lo esencial: la creación pura.",
          features: ["Workflows Editoriales", "Gestión Documental", "Investigación Automatizada"]
        },
        {
          title: "Agentes Personalizados",
          description: "Desarrollo de ChatBots con personalidad única, entrenados en corpus específicos y teoría crítica.",
          features: ["Asistentes Literarios", "Avatares de Personajes", "Soporte Institucional"]
        }
      ],
      cta: 'Explorar casos de estudio'
    },
    training: {
      sectionTitle: 'Paquetes Integrados',
      description: 'Soluciones paquetizadas para escalar la integración de inteligencia artificial en entornos creativos y corporativos. Unimos la sensibilidad humanística con la potencia del código.',
      packages: [
        {
          title: "Autor Expandido",
          target: "Escritores y Artistas",
          description: "Incorpora herramientas de NLP y generación de texto para expandir tu estilo sin reemplazar tu voz.",
          includes: ["Análisis de estilo literario", "Asistente de escritura personalizado", "Mentoría técnica + literaria"]
        },
        {
          title: "IA con Perspectiva Crítica",
          target: "Empresas y Organizaciones",
          description: "Auditoría ética y desarrollo de sistemas de IA alineados con valores humanos y de marca.",
          includes: ["Auditoría de sesgos", "Chatbots con 'personalidad' de marca", "Formación de equipos"]
        },
        {
          title: "Crísalida Labs",
          target: "Instituciones Culturales",
          description: "Talleres y experiencias interactivas que exploran la frontera entre arte, archivo y algoritmo.",
          includes: ["Talleres 'Literatura y Algoritmos'", "Instalaciones interactivas", "Agentes de Teoría Crítica"]
        }
      ]
    },
    author: {
      label: 'La Dualidad',
      btnJeffrey: 'Jeffrey G. Santos',
      btnWolff: 'Wolffgangsant',
      jeffreyTitle: 'El Arquitecto',
      jeffreyDesc: 'Jeffrey es la estructura. El observador meticuloso que recopila fragmentos de la realidad. Con formación en filosofía y teoría crítica, busca diseccionar las estructuras invisibles que gobiernan nuestra psique cotidiana. Es quien se sienta en el café, observa y toma notas en servilletas.',
      jeffreyList: [':: Obsesión: Estructuralismo', ':: Herramienta: Cuaderno Moleskine', ':: Estado: Vigilia'],
      wolffTitle: 'La Sombra Creativa',
      wolffDesc: '"Wolffgangsant no existe, y sin embargo, escribe. Es la manifestación de lo que Jeffrey no se atreve a decir. Es la voz del inconsciente, el grito en el vacío, la escritura automática que surge a las 3 de la mañana. No busca coherencia, busca verdad visceral."',
      wolffList: [':: Obsesión: La Falta Lacaniana', ':: Herramienta: Sangre y Tinta', ':: Estado: Onírico']
    },
    universe: {
      title: 'El Universo',
      items: [
        { title: "Crísalida", description: "El estado de transformación perpetua. No es un lugar, sino un momento en la psique donde el 'yo' se disuelve para reconstruirse." },
        { title: "La Falta", description: "El antagonista invisible. Aquello que nos impulsa a crear pero que nunca puede ser llenado. El motor del deseo." },
        { title: "Onur", description: "Un personaje que existe solo en los márgenes. Un filósofo de la calle que dialoga con el autor a través de notas encontradas." }
      ]
    },
    archive: {
      title: 'Archivo',
      subtitle: 'Restos de la batalla contra la página en blanco.',
      cta: 'Ver colección completa'
    },
    footer: {
      newsletterTitle: 'Notas desde Crísalida',
      newsletterDesc: 'Suscríbete al newsletter quincenal. Recibe un fragmento inédito de Wolffgangsant, un caso de estudio de CIAS y recomendaciones culturales.',
      rights: 'Todos los derechos reservados.'
    },
    lab: {
      title: 'Laboratorio & Blog',
      art1Tag: 'LITERATURA',
      art1Title: 'La estética del fragmento',
      art1Desc: 'Cómo la inmediatez de las redes sociales ha transformado nuestra capacidad de narrar historias completas.',
      art1Link: 'Leer ensayo ->',
      art2Tag: 'TECNOLOGÍA',
      art2Title: 'Automatizando editoriales',
      art2Desc: 'Caso de estudio: Implementación de agentes de IA para la gestión de manuscritos.',
      art2Link: 'Ver caso ->'
    }
  },
  en: {
    nav: {
      book: 'The Book',
      oracle: 'Oracle',
      services: 'CIAS Studio',
      training: 'Training',
      author: 'Author',
      subtitle: 'Wolffgangsant | CIAS'
    },
    hero: {
      badge: 'Author & Tech Consultant',
      titleStart: 'Translating',
      titleHighlight: 'complexity',
      titleEnd: 'into narrative and code.',
      subtitle: 'A dual ecosystem where Wolffgangsant\'s experimental literature meets the advanced AI consulting of CIAS Studio.',
      ctaBook: 'Explore (The) Lack',
      ctaServices: 'AI Consulting (CIAS)'
    },
    book: {
      title: '(The) Lack',
      subtitle: 'Wolffgangsant',
      heading: 'The Broken Mirror',
      description: '"(The) Lack" is not a conventional novel. It is a hybrid artifact oscillating between essay, fiction, and autofiction. It explores the limits of contemporary identity through fragments, lost napkins, and dialogues with shadows.',
      quote: '"We do not sell a book, we offer an empty space where every reader finds a fragment of themselves."',
      btnSynopsis: 'Read Synopsis',
      btnFragment: 'PDF Fragment'
    },
    oracle: {
      title: 'Oracle of the Void',
      subtitle: '"Ask the void, and you might find a fragment of yourself."',
      placeholder: 'What am I missing?',
      loading: 'Consulting the Chrysalis...',
      empty: 'The space is empty. Awaiting your query.',
      disclaimer: '* This component is a live example of the "Custom Agents" we develop at CIAS. Trained with the voice and themes of the literary work.',
      demoLabel: 'Demo: Literary Agent',
      demoTitle: 'Interface: The Oracle of the Void'
    },
    services: {
      sectionTitle: 'CIAS Studio',
      mainTitle: 'Creative Intelligence Artificial',
      quote: '"We don\'t build generic chatbots. We design digital interlocutors worth talking to."',
      items: [
        {
          title: "Specialized Training",
          description: "Critical and technical training for creators and teams looking to integrate AI without losing their human essence.",
          features: ["AI for Writers & Artists", "Literature & Algorithms", "Critical Ethics of AI"]
        },
        {
          title: "Creative Automation",
          description: "Designing intelligent workflows that free up time for the essential: pure creation.",
          features: ["Editorial Workflows", "Document Management", "Automated Research"]
        },
        {
          title: "Custom Agents",
          description: "Development of ChatBots with unique personalities, trained on specific corpora and critical theory.",
          features: ["Literary Assistants", "Character Avatars", "Institutional Support"]
        }
      ],
      cta: 'Explore Case Studies'
    },
    training: {
      sectionTitle: 'Integrated Packages',
      description: 'Bundled solutions to scale artificial intelligence integration in creative and corporate environments. We unite humanistic sensitivity with the power of code.',
      packages: [
        {
          title: "Expanded Author",
          target: "Writers & Artists",
          description: "Incorporate NLP tools and text generation to expand your style without replacing your voice.",
          includes: ["Literary style analysis", "Custom writing assistant", "Technical + literary mentoring"]
        },
        {
          title: "Critical Perspective AI",
          target: "Companies & Organizations",
          description: "Ethical auditing and development of AI systems aligned with human and brand values.",
          includes: ["Bias auditing", "Chatbots with brand 'personality'", "Team training"]
        },
        {
          title: "Chrysalis Labs",
          target: "Cultural Institutions",
          description: "Workshops and interactive experiences exploring the frontier between art, archive, and algorithm.",
          includes: ["'Literature & Algorithms' Workshops", "Interactive Installations", "Critical Theory Agents"]
        }
      ]
    },
    author: {
      label: 'The Duality',
      btnJeffrey: 'Jeffrey G. Santos',
      btnWolff: 'Wolffgangsant',
      jeffreyTitle: 'The Architect',
      jeffreyDesc: 'Jeffrey is the structure. The meticulous observer collecting fragments of reality. Trained in philosophy and critical theory, he seeks to dissect the invisible structures governing our daily psyche. He is the one sitting in the cafe, observing and taking notes on napkins.',
      jeffreyList: [':: Obsession: Structuralism', ':: Tool: Moleskine Notebook', ':: State: Awake'],
      wolffTitle: 'The Creative Shadow',
      wolffDesc: '"Wolffgangsant does not exist, yet he writes. He is the manifestation of what Jeffrey dares not say. He is the voice of the unconscious, the scream in the void, the automatic writing that emerges at 3 AM. He seeks not coherence, but visceral truth."',
      wolffList: [':: Obsession: Lacanian Lack', ':: Tool: Blood and Ink', ':: State: Dreamlike']
    },
    universe: {
      title: 'The Universe',
      items: [
        { title: "Chrysalis", description: "The state of perpetual transformation. Not a place, but a moment in the psyche where the 'self' dissolves to rebuild itself." },
        { title: "The Lack", description: "The invisible antagonist. That which drives us to create but can never be filled. The engine of desire." },
        { title: "Onur", description: "A character existing only in the margins. A street philosopher who dialogues with the author through found notes." }
      ]
    },
    archive: {
      title: 'Archive',
      subtitle: 'Remnants of the battle against the blank page.',
      cta: 'View complete collection'
    },
    footer: {
      newsletterTitle: 'Notes from Chrysalis',
      newsletterDesc: 'Subscribe to the bi-weekly newsletter. Receive an unpublished fragment from Wolffgangsant, a CIAS case study, and cultural recommendations.',
      rights: 'All rights reserved.'
    },
    lab: {
      title: 'Lab & Blog',
      art1Tag: 'LITERATURE',
      art1Title: 'The Aesthetics of the Fragment',
      art1Desc: 'How the immediacy of social media has transformed our capacity to tell complete stories.',
      art1Link: 'Read essay ->',
      art2Tag: 'TECHNOLOGY',
      art2Title: 'Automating Publishing',
      art2Desc: 'Case Study: Implementation of AI agents for manuscript management.',
      art2Link: 'View case ->'
    }
  }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
