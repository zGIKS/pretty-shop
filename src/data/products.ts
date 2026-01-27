export interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
  category: string;
  quantity: number;
}

export const products: Product[] = [
  {
    id: 0,
    image: "https://res.cloudinary.com/dhwxayqeg/image/upload/v1769308768/nowatermark_Protector_Solar_Japan_Sakura_Sunscreen_gldccu.png",
    title: "Protector Solar Japan Sakura Sunscreen",
    price: 35,
    description: "Protector SPF 50+ PA+++. Humecta, calma y suaviza la piel, 50g.",
    category: "Cuidado de la piel",
    quantity: 5},
  {
    id: 1,
    image: "https://res.cloudinary.com/dhwxayqeg/image/upload/v1769308763/nowatermark_Body_Mist_Splash_Corporal_zzciqx.png",
    title: "Body Mist Splash Corporal",
    price: 20,
    description: "Splash con aroma duradero. Disponible en varias opciones de fragancia, contenido de 250 mL cada uno.",
    category: "Cuidado de la piel",
    quantity: 6},
  {
    id: 2,
    image: "https://res.cloudinary.com/dhwxayqeg/image/upload/v1769308767/nowatermark_Polvo_Suelto_Revel_Professional_lvppdg.png",
    title: "Polvo Suelto Revel Professional",
    price: 12,
    description: "Polvo de arroz con control de grasa. Fija maquillaje y reduce brillo.",
    category: "Rostro",
    quantity: 7},
  {
    id: 3,
    image: "https://res.cloudinary.com/dhwxayqeg/image/upload/v1769308768/nowatermark_Polvo_Suelto_Revel_Professional_Natural_Finish_ogydiv.png",
    title: "Polvo Suelto Revel Professional Natural Finish",
    price: 18,
    description: "Polvo suelto. Acabado natural, control de brillo y aplicador incluido.",
    category: "Rostro",
    quantity: 8},
  {
    id: 4,
    image: "https://res.cloudinary.com/dhwxayqeg/image/upload/v1769308768/nowatermark_Polvo_Suelto_Revel_Professional_Studio_Fix_jql8ad.png",
    title: "Polvo Suelto Revel Professional Studio Fix",
    price: 12,
    description: "Polvo suelto. Fija hasta 14h, acabado mate, ilumina piel. Borla incluida.",
    category: "Rostro"
  ,
    quantity: 9},
  {
    id: 5,
    image: "https://res.cloudinary.com/dhwxayqeg/image/upload/v1769308766/nowatermark_Polvo_Compacto_Revel_Professional_Matte_inotd8.png",
    title: "Polvo Compacto Revel Professional Matte",
    price: 12,
    description: "Polvo compacto mate. Unifica tono y fija maquillaje, línea Skin Evolution.",
    category: "Rostro"
  ,
    quantity: 10},
  {
    id: 6,
    image: "https://res.cloudinary.com/dhwxayqeg/image/upload/v1769308763/Base_de_Maquillaje_Revel_Professional_Foundation_Matte_BB_Liquid_lfpo4n.png",
    title: "Base de Maquillaje Revel Professional Foundation Matte BB Liquid",
    price: 14,
    description: "Base BB mate. Larga duración, difumina imperfecciones, 9 tonos.",
    category: "Rostro"
  ,
    quantity: 11},
  {
    id: 7,
    image: "https://res.cloudinary.com/dhwxayqeg/image/upload/v1769308764/nowatermark_Corrector_L%C3%ADquido_Revel_Professional_Perfect_Cover_jqchur.png",
    title: "Corrector Líquido Revel Professional Perfect Cover",
    price: 10,
    description: "Corrector impermeable. Cobertura uniforme, 6 tonos disponibles.",
    category: "Rostro"
  ,
    quantity: 12},
  {
    id: 8,
    image: "https://res.cloudinary.com/dhwxayqeg/image/upload/v1769308763/nowatermark_Blush_Revel_Professional_Hot_Kiss_eslltw.png",
    title: "Blush Revel Professional Hot Kiss",
    price: 9,
    description: "Blush Hot Kiss. Tonos variados, aplicador preciso.",
    category: "Rostro"
  ,
    quantity: 13},
  {
    id: 9,
    image: "https://res.cloudinary.com/dhwxayqeg/image/upload/v1769308771/nowatermark_Spray_Fijador_Revel_Professional_Natural_Skin_z83hjc.png",
    title: "Spray Fijador Revel Professional Natural Skin",
    price: 10,
    description: "Spray fijador. Sella look, mantiene maquillaje intacto. Ideal para todo tipo de piel.",
    category: "Rostro"
  ,
    quantity: 14},
  {
    id: 10,
    image: "https://res.cloudinary.com/dhwxayqeg/image/upload/v1769308769/nowatermark_R%C3%ADmel_Revel_Professional_Long_Lasting_Volume_yo2dyy.png",
    title: "Rímel Revel Professional Long Lasting Volume",
    price: 10,
    description: "Rímel de larga duración. Resistente al agua, no forma grumos, define y alarga las pestañas.",
    category: "Ojos"
  ,
    quantity: 15},
  {
    id: 11,
    image: "https://res.cloudinary.com/dhwxayqeg/image/upload/v1769308770/nowatermark_R%C3%ADmel_Volumen_Revel_Professional_Barbie_Eye_lgkgmi.png",
    title: "Rímel Volumen Revel Professional Barbie Eye",
    price: 10,
    description: "Rímel. Cepillo grueso, fórmula duradera sin grumos. Volumen definido.",
    category: "Ojos"
  ,
    quantity: 5},
  {
    id: 12,
    image: "https://res.cloudinary.com/dhwxayqeg/image/upload/v1769308764/nowatermark_Delineador_L%C3%ADquido_Revel_Professional_Eyeliner_Super_Black_lnmbx4.png",
    title: "Delineador Líquido Revel Professional Eyeliner Super Black",
    price: 8,
    description: "Delineador. Color negro, punta fina, fórmula resistente.",
    category: "Ojos"
  ,
    quantity: 6},
  {
    id: 13,
    image: "https://res.cloudinary.com/dhwxayqeg/image/upload/v1769308765/nowatermark_L%C3%A1piz_Labial_Revel_Professional_invmes.png",
    title: "Lápiz Labial Revel Professional",
    price: 10,
    description: "Lápiz labial. Define labios, no reseca, 6 tonos.",
    category: "Labios"
  ,
    quantity: 7},
  {
    id: 14,
    image: "https://res.cloudinary.com/dhwxayqeg/image/upload/v1769308764/nowatermark_Brillo_Labial_Revel_Professional_Lip_Gloss_Love_Velvet_it1yuq.png",
    title: "Brillo Labial Revel Professional Lip Gloss Love Velvet",
    price: 11,
    description: "Brillo labial. Acabado terciopelo, venta por pieza.",
    category: "Labios"
  ,
    quantity: 8},
  {
    id: 15,
    image: "https://res.cloudinary.com/dhwxayqeg/image/upload/v1769308765/nowatermark_Ganchos_de_Moda_Florales_zkgunf.png",
    title: "Ganchos de Moda Florales",
    price: 7,
    description: "Ganchos con diseño floral translúcido. Elegantes y versátiles, fabricados en China.",
    category: "Accesorios de belleza"
  ,
    quantity: 9},
  {
    id: 16,
    image: "https://res.cloudinary.com/dhwxayqeg/image/upload/v1769308772/nowatermark_Vinchas_de_Felpa_con_Lentejuelas_af41r3.png",
    title: "Vinchas de Felpa con Lentejuelas",
    price: 6,
    description: "Vinchas de felpa con lazos y lentejuelas. Tonos lila, rosa y melocotón.",
    category: "Accesorios de belleza"
  ,
    quantity: 10}
];
