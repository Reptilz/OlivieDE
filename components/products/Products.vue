<template>
  <!-- ====== Cards Section Start -->
  <section class="pt-4 lg pb-10 lg:pb-20 bg-[#F3F4F6]">
    <h4 class="text-3xl pt-4 pb-12 pl-8 font-bold">Liste des produits</h4>
    <div class="container">
      <div class="flex flex-wrap -mx-4">
        <div
          v-for="(product, index) in products"
          :key="`product-${index}`"
          class="w-full md:w-1/2 xl:w-1/3 px-4"
        >
          <div class="bg-white rounded-lg overflow-hidden mb-10">
            <img
              :src="`/_nuxt/assets/images/${product.image}`"
              :alt="product.image"
              class="w-full"
            />
            <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
              <h4 class="italic">{{ product.subtitle }}</h4>
              <h3>
                <a
                  href="javascript:void(0)"
                  class="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary"
                >
                  {{ product.title }}
                </a>
              </h3>
              <p class="text-base text-body-color leading-relaxed mb-7">
                {{ getLimitedDescription(product.description, 20) }}
              </p>
              <a
                href="javascript:void(0)"
                class="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-gray-400 hover:border-gray-400 transition"
              >
                Acheter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ====== Cards Section End -->
</template>

<script>
export default {
  name: "Products",
  data: () => ({
    products: [
      {
        title: "OLIVIE PLUS 30X",
        subtitle: "DÉGUSTEZ LA PUISSANCE VERTE",
        description:
          "30 fois plus d’hydroxytyrosol, un puissant polyphénol. 30 fois plus efficace pour protéger votre cœur contre l’oxydation du cholestérol LDL (LDL-ox).",
        image: "olivie_perles_nl.jpg",
        link: "https://www.naturamedicatrix.fr/fr/",
      },
      {
        title: "OLIVIE PERLES D'OLIVIERS DU DÉSERT",
        subtitle: "LE TOTUM DE L’OLIVIER SUBLIMÉ",
        description:
          "Perles d’oliviers du désert, concentré de puissance. OLIVIE PowerUp est un extrait d’oliviers du désert mélangé à de l’huile d’olive bio extra vierge. Les perles du désert sont riches en polyphénols et sont indiquées à la fois dans l’alimentation quotidienne et pour le traitement de la peau (corps et visage).",
        image: "olivie_perles_nl.jpg",
        link: "https://www.naturamedicatrix.fr/fr/",
      },
      {
        title: "OLIVIE RICHE/FORCE",
        subtitle: "VIVEZ L'ÉNERGIE VERTE",
        description:
          "Un complément alimentaire extrait de l’olivier, riche en puissants antioxydants regroupant de façon concentrée l’ensemble des bienfaits de l’huile d’olive et de l’olivier même. Un véritable totum de l’olivier.",
        image: "olivie_perles_nl.jpg",
        link: "https://www.naturamedicatrix.fr/fr/",
      },
      {
        title: "OLIVIE BEAUTY",
        subtitle: "ILLUMINEZ LA BEAUTÉ",
        description:
          "OLIVIE Beauty est une crème Bio pour le visage : éclaircissante, nourrissante, apaisante et anti tâches, pour un usage de nuit et de jour. Elle contient une concentration exceptionnelle de polyphénols ayant une puissance antioxydante inégalée.",
        image: "olivie_perles_nl.jpg",
        link: "https://www.naturamedicatrix.fr/fr/",
      },
      {
        title: "OLIVETTE",
        subtitle: "OLIVETTE, C'EST VIVRE VERT !",
        description:
          "Olivette est une briquette innovante qui répond parfaitement aux exigences d'un style de vie contemporain. Des choix intelligents, un soin attentif à votre santé et le respect de l'environnement sont reflétés dans ces nouvelles et saines briquettes faites à 100% de matériaux recyclés. Branches provenant de la taille annuelle d'oliviers certifiés bio, noyaux d’olives et pulpe d'olive résultant du pressage d’huile. 100% écologique, sans produits chimiques. Voici la briquette dont vous aviez besoin!",
        image: "olivie_perles_nl.jpg",
        link: "https://www.naturamedicatrix.fr/fr/",
      },
    ],
  }),
  methods: {
    getLimitedDescription(description, limit) {
      const words = description.split(" ");
      const limitedWords = words.slice(0, limit);
      const limitedDescription = limitedWords.join(" ");
      return limitedDescription + "...";
    },
  },
};
</script>
