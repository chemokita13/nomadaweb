export type Allergen = 'gluten' | 'lacteos' | 'huevo' | 'pescado' | 'frutos_secos';

export interface MenuItem {
name: string;
description: string;
price: number;
allergens: Allergen[];
alterEgo?: string; // Para los extras como "Alter Ego" que tienen en la carta
}

export interface MenuCategory {
category: string;
note?: string; // Añadido para explicar qué incluyen los desayunos
items: MenuItem[];
}

export const menuData: MenuCategory[] = [
{
category: "Desayunos",
note: "Todos los desayunos incluyen: café Illy/infusión/colacao, zumo de naranja natural y brocheta de frutas de temporada. (Disponibles hasta las 14:00h)",
items: [
{ name: "1. Andaluz", description: "Tosta de tomate y AOVE.", price: 3.50, allergens: ["gluten"] },
{ name: "2. Ibérico", description: "Tosta de jamón ibérico, tomate y AOVE.", price: 5.00, allergens: ["gluten"] },
{ name: "3. Español", description: "Pincho de tortilla.", price: 3.50, allergens: ["huevo"] },
{ name: "4. Light", description: "Tosta de pavo, Philadelphia y aguacate.", price: 5.00, allergens: ["gluten", "lacteos"] },
{ name: "5. Esquimal", description: "Tosta de salmón ahumado, queso crema, guacamole y rúcula.", price: 6.00, allergens: ["gluten", "lacteos", "pescado"] },
{ name: "6. Tuareg", description: "Huevos Benedictine con bacon de pavo, jamón ibérico y salsa holandesa en base de patata.", price: 7.00, allergens: ["huevo", "lacteos"] },
{ name: "7. Nómada", description: "Bagel de pan relleno de queso crema, bacon de pavo, rúcula y tomate seco.", price: 7.00, allergens: ["gluten", "lacteos"] },
{ name: "8. Wayúu", description: "Huevos revueltos con aguacate a la plancha, tosta brioche, queso fresco y bacon de pavo.", price: 7.00, allergens: ["huevo", "gluten", "lacteos"] },
{ name: "9. Nukak", description: "Bowl de macedonia de frutas de temporada con menta.", price: 5.50, allergens: [] },
{ name: "10. Dulce", description: "Tosta de mantequilla y mermelada.", price: 3.50, allergens: ["gluten", "lacteos"] },
{ name: "11. Parisino", description: "Croissant a la plancha con mantequilla y mermelada.", price: 3.50, allergens: ["gluten", "lacteos", "huevo"] },
{ name: "12. Nutella", description: "Tosta dulce de Nutella con fresas y nueces.", price: 3.80, allergens: ["gluten", "lacteos", "frutos_secos"] },
{ name: "13. Zíngaro", description: "Tosta francesa con miel de flores, frutos rojos y fruta.", price: 5.50, allergens: ["gluten", "lacteos", "huevo"] },
{ name: "14. Makú", description: "Crepe de dulce de leche, frutos rojos y azúcar glass.", price: 5.50, allergens: ["gluten", "lacteos", "huevo"] },
{ name: "15. Hadza", description: "Smoothie bowl con plátano, coco, mango, Corn Flakes y semillas de chía.", price: 5.50, allergens: ["gluten"] },
{ name: "16. Awá", description: "Kéfir con muesli, yogur, avena, cereales de chocolate negro, nueces, coco y miel.", price: 5.50, allergens: ["lacteos", "gluten", "frutos_secos"] },
{ name: "17. Par", description: "Porridge de frutos rojos, plátano, avena, canela, miel y chocolate negro rallado y frutos secos.", price: 6.00, allergens: ["gluten", "frutos_secos"] },
{ name: "18. Kochi", description: "Tostada de guacamole, atún en AOVE y fresas.", price: 5.50, allergens: ["gluten", "pescado"] },
{ name: "19. Yoruk", description: "Emparedado de jamón braseado, queso cheddar, bacon, huevo cocido y mahonesa.", price: 7.00, allergens: ["gluten", "lacteos", "huevo"] },
{ name: "20. Tila", description: "Creppes de crema de cacahuete, plátano, coco y miel.", price: 5.50, allergens: ["gluten", "lacteos", "huevo", "frutos_secos"] }
]
},
{
category: "Vermú y Raciones",
items: [
{ name: "Tabla de jamón bellota", description: "Tomate rayado y pan tostado", price: 15.00, allergens: ["gluten"] },
{ name: "Surtido humus", description: "Crudités y verduras deshidratadas", price: 9.00, allergens: ["gluten"] },
{ name: "Gilda de boquerón", description: "Clásica gilda con boquerón", price: 2.00, allergens: ["pescado"] },
{ name: "Huevos rotos", description: "Con jamón de bellota y base de patata", price: 10.00, allergens: ["huevo"] },
]
},
{
category: "Cocktails",
items: [
{ name: "Burbujas de Pasión", description: "Gin, fruta de la pasión, lima y tónica pink", price: 7.00, allergens: [] },
{ name: "Ginger Mojito", description: "Bacardí, lima, hierbabuena y Organics Ginger", price: 7.00, allergens: [] },
{ name: "Piña Colada", description: "Bacardí, Malibú Piña, coco y zumo", price: 7.00, allergens: ["lacteos"] },
]
},
{
category: "Cafés y Batidos",
items: [
{ name: "Capuccino", description: "Café Illy, leche, espuma y cacao", price: 3.50, allergens: ["lacteos"] },
{ name: "Batido Oreo", description: "Leche, helado de Oreo, nata y sirope", price: 7.00, allergens: ["lacteos", "gluten"] },
]
}
];