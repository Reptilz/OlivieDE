<template>
  <!-- ====== Cards Section Start -->
  <section id="products" class="pt-4 lg pb-10 lg:pb-20 bg-[#F3F4F6]">
    <h4 class="text-3xl pt-4 pb-12 pl-8 font-bold">Liste von Produkten</h4>
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
              class="w-full h-96"
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
                {{ getLimitedDescription(product.description, 25) }}
              </p>
              <a
                :href="product.link"
                class="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-gray-400 hover:border-gray-400 transition"
              >
                Siehe mehr
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
        subtitle: "KOSTEN SIE DIE GRÜNE MACHT",
        description:
          "30-mal mehr Hydroxytyrosol, ein starkes Polyphenol. 30-mal wirksamer, um Ihr Herz vor der Oxidation von LDL-Cholesterin (LDL-ox) zu schützen.",
        image: "Olivie_plus.jpg",
        link: "https://www.naturamedicatrix.fr/de/ldl-oxydes/166-olivie-plus-30x-olivie-pharma.html",
      },
      {
        title: "OLIVIE PERLES D'OLIVIERS DU DÉSERT",
        subtitle: "DAS GESAMTGEWICHT DES OLIVENBAUMS SUBLIMIERT",
        description:
          "Perlen aus Wüstenolivenbäumen, geballte Kraft. OLIVIE PowerUp ist ein Extrakt aus Wüstenolivenbäumen, der mit nativem Bio-Olivenöl extra gemischt wird. Wüstenperlen sind reich an Polyphenolen und eignen sich sowohl für die tägliche Ernährung als auch für die Behandlung der Haut (Körper und Gesicht).",
        image: "olivie_perles_nl.jpg",
        link: "https://www.naturamedicatrix.fr/de/stress-oxydant/339-olivie-caviar-powerup-olivie-pharma.html",
      },
      {
        title: "OLIVIE RICHE/FORCE",
        subtitle: "LEBEN SIE MIT GRÜNER ENERGIE",
        description:
          "Ein aus dem Olivenbaum extrahiertes Nahrungsergänzungsmittel, das reich an starken Antioxidantien ist und alle Vorteile des Olivenöls und des Olivenbaums selbst in konzentrierter Form vereint. Ein echtes Olivenbaum-Totum.",
        image: "olivie_force.jpg",
        link: "https://www.naturamedicatrix.fr/de/articulations/196-olivie-riche-olivie-pharma.html",
      },
      {
        title: "OLIVIE BEAUTY",
        subtitle: "ERLEUCHTEN SIE DIE SCHÖNHEIT",
        description:
          "OLIVIE Beauty ist eine Bio-Gesichtscreme: aufhellend, nährend, beruhigend und gegen Pigmentflecken, für die Anwendung über Nacht und am Tag. Sie enthält eine außergewöhnliche Konzentration an Polyphenolen mit einer unübertroffenen antioxidativen Kraft.",
        image: "olivie_beauty.jpg",
        link: "https://www.naturamedicatrix.fr/de/taches-de-senescence-vieillesse/186-olivie-beauty-olivie-pharma.html",
      },
      {
        title: "OLIVETTE",
        subtitle: "OLIVETTE IST GRÜNES LEBEN!",
        description:
          "Olivette ist ein innovatives Brikett, das den Anforderungen eines zeitgemäßen Lebensstils perfekt entspricht. Intelligente Entscheidungen, sorgfältige Pflege Ihrer Gesundheit und Respekt für die Umwelt spiegeln sich in diesen neuen, gesunden Briketts wider, die zu 100% aus recycelten Materialien hergestellt werden. Äste aus dem jährlichen Beschneiden von zertifizierten Bio-Olivenbäumen, Olivenkerne und Olivenpulpe aus der Ölpressung. 100% umweltfreundlich, ohne Chemikalien. Hier ist das Brikett, das Sie brauchen!",
        image: "olivette.jpg",
        link: "https://www.naturamedicatrix.fr/de/divers/558-olivette-briquette-de-charbon-bio-olivie-pharma.html",
      },
      {
        title: "PACK OLIVIE",
        subtitle: "ALL IN ONE",
        description:
          'Unsere "Wüsten-Olivenbaum-Perlen" werden in Form von Kaviar angeboten, dessen Perlen aus Olivenmark, Olivenöl, Olivenblättern und jungen Trieben der Blätter des Olivenbaums bestehen.',
        image: "pack-olivie.jpg",
        link: "https://www.naturamedicatrix.fr/de/articulations/341-pack-olivie-olivie-pharma.html",
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
