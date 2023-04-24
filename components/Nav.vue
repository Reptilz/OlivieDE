<template>
  <section class="bg-white dark:bg-gray-900">
    <nav
      x-data="{ isOpen: false }"
      class="container mx-auto p-6 lg:flex lg:items-center lg:justify-between"
    >
      <div class="flex items-center justify-between">
        <div>
          <nuxt-link
            to="/"
            class="text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl"
            href="#"
          >
            <img
              width="200"
              :src="`/_nuxt/assets/images/logoNatura.png`"
              alt="logo"
            />
          </nuxt-link>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div
        class="absolute inset-x-0 z-20 w-full bg-white px-6 py-4 shadow-md transition-all duration-300 ease-in-out dark:bg-gray-900 lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:dark:bg-transparent"
      >
        <div
          class="lg:-px-8 flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0"
        >
          <nuxt-link
            to="/"
            class="transform text-gray-700 transition-colors duration-300 hover:text-green-600 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-8"
            href="#"
            >Startseite</nuxt-link
          >
        </div>

        <nuxt-link
          to="/#products"
          class="mt-4 block rounded-lg bg-green-800 px-6 py-2.5 text-center font-medium capitalize leading-5 text-white hover:bg-green-700 lg:mt-0 lg:w-auto"
          href="#products"
        >
          Produkte ansehen
        </nuxt-link>
      </div>
    </nav>
  </section>
</template>
