<template>
  <div class="carousel">
    <div class="carousel-inner">
      <CarouselIndicators
        :total="slides.length"
        :current-index="currentSlide"
        @switch="switchSlide($event)"
      />
      <CarouselItem
        v-for="(slide, index) in slides"
        :key="`item-${index}`"
        :slide="slide"
        :current-slide="currentSlide"
        :index="index"
        :direction="direction"
        @mouseenter="stopSlideTimer"
        @mouseout="startSlideTimer"
      />
      <CarouselControls @prev="prev" @next="next" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data: () => ({
    slides: [
      "https://picsum.photos/id/237/1400/400",
      "https://picsum.photos/id/238/1400/400",
      "https://picsum.photos/id/239/1400/400",
      "https://picsum.photos/id/240/1400/400",
      "https://picsum.photos/id/241/1400/400",
    ],
    currentSlide: 0, // index de la diapositive actuelle
    slideInterval: null, // minuterie pour changer les diapositives automatiquement
    direction: "right", // direction du mouvement des diapositives
  }),
  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index; // met à jour l'index de la diapositive actuelle
    },
    prev(step = -1) {
      // affiche la diapositive précédente
      const index =
        this.currentSlide > 0
          ? this.currentSlide + step
          : this.slides.length - 1;
      this.currentSlide = index;
      this.direction = "left"; // change la direction du mouvement de la diapositive
      this.startSlideTimer(); // démarre la minuterie pour changer les diapositives automatiquement
    },
    _next(step = 1) {
      // affiche la diapositive suivante
      const index =
        this.currentSlide < this.slides.length - 1
          ? this.currentSlide + step
          : 0;
      this.currentSlide = index;
      this.direction = "right"; // change la direction du mouvement de la diapositive
    },
    next(step = 1) {
      this._next(step); // affiche la diapositive suivante
      this.startSlideTimer(); // démarre la minuterie pour changer les diapositives automatiquement
    },
    startSlideTimer() {
      this.stopSlideTimer(); // arrête la minuterie actuelle, si elle existe
      this.slideInterval = setInterval(() => {
        this._next(); // affiche la diapositive suivante
      }, 3000); // changement automatique de diapositives toutes les 3sec
    },
    stopSlideTimer() {
      clearInterval(this.slideInterval); // arrête la minuterie pour changer les diapositives automatiquement
    },
    switchSlide(index) {
      const step = index - this.currentSlide; // calcule le nombre de diapositives à sauter
      if (step > 0) {
        this._next(step); // affiche la diapositive suivante
      } else {
        this.prev(step); // affiche la diapositive précédente
      }
    },
  },
  mounted() {
    this.startSlideTimer(); // démarre la minuterie pour changer les diapositives automatiquement au chargement du composant
  },
  beforeUnmount() {
    this.stopSlideTimer(); // arrête la minuterie pour changer les diapositives automatiquement avant la destruction du composant
  },
};
</script>

<style scoped>
.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel-inner {
  position: relative;
  width: 1400px;
  height: 400px;
  overflow: hidden;
}
</style>
