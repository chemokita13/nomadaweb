export type Allergen =
  | "gluten"
  | "lacteos"
  | "huevo"
  | "pescado"
  | "frutos_secos";

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  allergens: Allergen[];
  alterEgo?: string; // Para los extras como "Alter Ego" que tienen en la carta
  photo_url?: string;
}

export interface MenuCategory {
  category: string;
  note?: string; // Añadido para explicar qué incluyen los desayunos
  notes?: string[]; // Lista de condiciones o suplementos
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    category: "Desayunos",
    notes: [
      "Todos los desayunos irán acompañados de café Illy o infusión [No están incluidos los cafés especiales]. Cola Cao o Nesquik +0,5€",
      "Disponible leche entera, soja o sin lactosa.",
      "Todos los desayunos estarán acompañados de una brocheta de frutas de temporada y nueces.",
      "Todos los desayunos estarán acompañados de zumo de naranja natural o yogurth bebible.",
      "Hazlo grande +1,50€.",
      "Añade aguacate en cualquier desayuno +2,00€.",
      "Pan integral o sin gluten suplemento +1€.",
      "Suplemento servicio en mesa +0,50€.",
    ],
    items: [
      {
        name: "1. Andaluz",
        description: "Tosta de tomate y AOVE.",
        price: 3.5,
        allergens: ["gluten"],
      },
      {
        name: "2. Ibérico",
        description: "Tosta de jamón ibérico, tomate y AOVE.",
        price: 5.0,
        allergens: ["gluten"],
        photo_url: "/desayunos/2.jpg",
      },
      {
        name: "3. Español",
        description: "Pincho de tortilla.",
        price: 3.5,
        allergens: ["huevo"],
      },
      {
        name: "4. Light",
        description: "Tosta de pavo, Philadelphia y aguacate.",
        price: 5.0,
        allergens: ["gluten", "lacteos"],
      },
      {
        name: "5. Esquimal",
        description:
          "Tosta de salmón ahumado, queso crema, guacamole y rúcula.",
        price: 6.0,
        allergens: ["gluten", "lacteos", "pescado"],
      },
      {
        name: "6. Tuareg",
        description:
          "Huevos Benedictine con bacon de pavo, jamón ibérico y salsa holandesa en base de patata.",
        price: 7.0,
        allergens: ["huevo", "lacteos"],
        photo_url: "/desayunos/6.jpg",
      },
      {
        name: "7. Nómada",
        description:
          "Bagel de pan relleno de queso crema, bacon de pavo, rúcula y tomate seco.",
        price: 7.0,
        allergens: ["gluten", "lacteos"],
      },
      {
        name: "8. Wayúu",
        description:
          "Huevos revueltos con aguacate a la plancha, tosta brioche, queso fresco y bacon de pavo.",
        price: 7.0,
        allergens: ["huevo", "gluten", "lacteos"],
      },
      {
        name: "9. Nukak",
        description: "Bowl de macedonia de frutas de temporada con menta.",
        price: 5.5,
        allergens: ["gluten"],
        photo_url: "/desayunos/9.jpg",
      },
      {
        name: "10. Dulce",
        description: "Tosta de mantequilla y mermelada.",
        price: 3.5,
        allergens: ["gluten", "lacteos"],
      },
      {
        name: "11. Parisino",
        description: "Croissant a la plancha con mantequilla y mermelada.",
        price: 3.5,
        allergens: ["gluten", "lacteos", "huevo"],
      },
      {
        name: "12. Nutella",
        description: "Tosta dulce de Nutella con fresas y nueces.",
        price: 3.8,
        allergens: ["gluten", "lacteos", "frutos_secos"],
      },
      {
        name: "13. Zíngaro",
        description: "Tosta francesa con miel de flores, frutos rojos y fruta.",
        price: 5.5,
        allergens: ["gluten", "lacteos", "huevo"],
        photo_url: "/desayunos/13.jpg",
      },
      {
        name: "14. Makú",
        description: "Crepe de dulce de leche, frutos rojos y azúcar glass.",
        price: 5.5,
        allergens: ["gluten", "lacteos", "huevo"],
        photo_url: "/desayunos/14.jpg",
      },
      {
        name: "15. Hadza",
        description:
          "Smoothie bowl con plátano, coco, mango, Corn Flakes y semillas de chía.",
        price: 5.5,
        allergens: ["gluten"],
        photo_url: "/desayunos/15.jpg",
      },
      {
        name: "16. Awá",
        description:
          "Kéfir con muesli, yogur, avena, cereales de chocolate negro, nueces, coco y miel.",
        price: 5.5,
        allergens: ["lacteos", "gluten", "frutos_secos"],
      },
      {
        name: "17. Par",
        description:
          "Porridge de frutos rojos, plátano, avena, canela, miel y chocolate negro rallado y frutos secos.",
        price: 6.0,
        allergens: ["gluten", "frutos_secos"],
      },
      {
        name: "18. Kochi",
        description: "Tostada de guacamole, atún en AOVE y fresas.",
        price: 5.5,
        allergens: ["gluten", "pescado"],
        photo_url: "/desayunos/18.jpg",
      },
      {
        name: "19. Yoruk",
        description:
          "Emparedado de jamón braseado, queso cheddar, bacon, huevo cocido y mahonesa.",
        price: 7.0,
        allergens: ["gluten", "lacteos", "huevo"],
      },
      {
        name: "20. Tila",
        description: "Creppes de crema de cacahuete, plátano, coco y miel.",
        price: 5.5,
        allergens: ["gluten", "lacteos", "huevo", "frutos_secos"],
      },
      {
        name: "21. UMI",
        description: "Tostada de hummus, huevo revuelto y pico de gallo",
        price: 7.0,
        allergens: ["gluten", "huevo"],
      },
      {
        name: "22. KANDA",
        description: "Emparedado de pavo braseado, queso gouda y huevo frito",
        price: 8.0,
        allergens: ["gluten", "lacteos", "huevo"],
        alterEgo: "jamón bellota +2,00€",
      },
      {
        name: "23. BEDUINO",
        description:
          "Bagel con queso crema tomate seco pollo asado y rúcula y huevo.",
        price: 8.0,
        allergens: ["gluten", "lacteos", "huevo"],
      },
      {
        name: "24. KODA",
        description:
          "Pancakes huevos fritos y bacon crujiente con salsa de arce",
        price: 8.0,
        allergens: ["gluten", "lacteos", "huevo"],
      },
      {
        name: "25. GOLI",
        description:
          "Gofre belga con jamón ibérico queso gouda derretido y huevo frito",
        price: 8.0,
        allergens: ["gluten", "lacteos", "huevo"],
      },
      {
        name: "26. GUANCHE",
        description:
          "Tostada de bacon crunchy, huevo revuelto y queso gouda fundido",
        price: 8.0,
        allergens: ["gluten", "huevo", "lacteos"],
      },
    ],
  },
  {
    category: "Vermú y Raciones",
    items: [
      {
        name: "Tabla de jamón bellota",
        description: "Tomate rayado y pan tostado",
        price: 15.0,
        allergens: ["gluten"],
        photo_url: "/vermu/jamon.jpg",
      },
      {
        name: "Surtido humus",
        description: "Crudités y verduras deshidratadas",
        price: 9.0,
        allergens: ["gluten"],
      },
      {
        name: "Gilda de boquerón",
        description: "Clásica gilda con boquerón",
        price: 2.0,
        allergens: ["pescado"],
        photo_url: "/vermu/gilda.jpg",
      },
      {
        name: "Huevos rotos",
        description: "Con jamón de bellota y base de patata",
        price: 10.0,
        allergens: ["huevo"],
        photo_url: "/vermu/rotos.jpg",
      },
    ],
  },
  {
    category: "Cocktails",
    note: "Suplemento de terraza +0,30€.",
    items: [
      {
        name: "Moscow Mule",
        description:
          "“El cocktail americano con un toque de vodka”. Smirnoff, lima y Red Bull Ginger Beer.",
        price: 6.5,
        allergens: [],
        alterEgo: "Con Vodka Grey Goose 7,50€",
      },
      {
        name: "Mojito",
        description:
          "“Hierba mala nunca muere, hierba buena … sólo para Mojitos”. Fresa y clásico. Bacardí carta blanca, lima, hierba buena y soda.",
        price: 6.5,
        allergens: [],
        photo_url: "/copas/mojito.jpg",
      },
      {
        name: "Daiquiri de Fresa",
        description:
          "“Sólo hay una manera de mejorar cualquier fruta, mezclarla con hielo y ron”. Bacardí Carta Blanca, zumo de limón y fresa natural.",
        price: 6.5,
        allergens: [],
      },
      {
        name: "Espresso Martini",
        description:
          "“Al expresso agitado y frío, muy frío”. Café, Kahlúa, Smirnoff y vainilla.",
        price: 6.5,
        allergens: [],
        alterEgo: "Flat White Martini con Baileys 6,50€",
      },
      {
        name: "Bramble",
        description:
          "“El cocktail al más puro estilo -British-”. Hendriks Gin, licor de frambuesa, limón y confitura de frutos rojos.",
        price: 6.5,
        allergens: [],
      },
      {
        name: "Burbujas de Pasión",
        description:
          "“El -Must- de Nómada”. Gin Tanqueray, fruta de la pasión, lima y tónica Schweppes Pink.",
        price: 6.5,
        allergens: [],
        alterEgo: "Tanqueray Ten 7,50€",
      },
      {
        name: "Lemon Calipo",
        description:
          "“El legendario helado, ahora exclusivo para adultos”. Ginebra Masters Blue y lima.",
        price: 6.5,
        allergens: [],
      },
      {
        name: "Ginger Mojito",
        description:
          "“Si, Red Bull podía revolucionar el Mojito”. Bacardí Carta Blanca y Organics Ginger by Red Bull.",
        price: 6.5,
        allergens: [],
      },
      {
        name: "Piña Colada",
        description:
          "“Living la Piña Loca”. Bacardí Carta Blanca, Malibú Piña, coco y zumo de piña.",
        price: 6.5,
        allergens: ["lacteos"],
      },
    ],
  },
  {
    category: "Batidos",
    items: [
      {
        name: "Oreo",
        description:
          "Leche, azúcar, helado de Oreo, nata y sirope de chocolate.",
        price: 6.0,
        allergens: ["lacteos", "gluten"],
      },
      {
        name: "Kit kat",
        description:
          "Leche, azúcar, helado de Kit Kat, nata y sirope de chocolate.",
        price: 6.0,
        allergens: ["lacteos", "gluten"],
      },
      {
        name: "Fresa",
        description:
          "Leche, azúcar, helado de Fresa, nata y sirope de mermelada de fresa.",
        price: 6.0,
        allergens: ["lacteos"],
      },
      {
        name: "Chocolate",
        description:
          "Leche, azúcar, helado de Chocolate Belga, nata y sirope de chocolate.",
        price: 6.0,
        allergens: ["lacteos"],
      },
      {
        name: "Vainilla",
        description:
          "Leche, azúcar, helado de Vainilla de Madagascar, nata y sirope de galleta Lotus.",
        price: 6.0,
        allergens: ["lacteos", "gluten"],
      },
      {
        name: "Dulce de leche",
        description:
          "Leche, azúcar, helado de Nata, dulce de leche y nata montada.",
        price: 6.0,
        allergens: ["lacteos"],
      },
    ],
  },
  {
    category: "Helados",
    items: [
      {
        name: "Oreo",
        description:
          "Helado de Oreo, nata, toppings de Oreo y sirope de chocolate.",
        price: 6.0,
        allergens: ["lacteos", "gluten"],
      },
      {
        name: "Kit kat",
        description:
          "Helado de Kit Kat, nata, toppings de Kit Kat y sirope de chocolate.",
        price: 6.0,
        allergens: ["lacteos", "gluten"],
      },
      {
        name: "Fresa",
        description: "Helado de Fresa, nata y sirope de mermelada de fresa.",
        price: 6.0,
        allergens: ["lacteos"],
      },
      {
        name: "Chocolate",
        description:
          "Helado de Chocolate Belga, nata, toppings de chocolate Simón Coll y sirope de chocolate.",
        price: 6.0,
        allergens: ["lacteos"],
      },
      {
        name: "Vainilla",
        description:
          "Helado de Vainilla de Madagascar, nata, toppings de galleta Lotus y sirope de caramelo.",
        price: 6.0,
        allergens: ["lacteos", "gluten"],
      },
      {
        name: "Dulce de leche",
        description:
          "Helado de Dulce de Leche, nata, un toque de canela, toppings de Galleta Lotus y sirope de dulce de leche.",
        price: 6.0,
        allergens: ["lacteos", "gluten"],
      },
    ],
  },
  {
    category: "Cafés",
    items: [
      {
        name: "Capuccino",
        description: "Café Illy, leche, espuma y cacao",
        price: 3.5,
        allergens: ["lacteos"],
      },
    ],
  },
];
