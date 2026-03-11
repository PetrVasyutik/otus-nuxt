<template>
  <v-app>
    <v-app-bar color="primary" dark>
      <v-app-bar-title>Магазин на Nuxt + Vuetify</v-app-bar-title>

      <v-spacer />

      <v-btn to="/" variant="text" color="white">
        Главная
      </v-btn>
      <v-btn to="/catalog" variant="text" color="white">
        Каталог
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="py-6">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
