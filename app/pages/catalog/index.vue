<template>
  <v-container>
    <v-row class="my-6">
      <v-col cols="12">
        <h1 class="text-h4 mb-4">Каталог товаров</h1>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <v-card-title class="text-h6">
            {{ product.name }}
          </v-card-title>

          <v-card-text>
            <div class="mb-2">
              Цена: <strong>{{ product.price }} ₽</strong>
            </div>
            <div class="text-body-2 text-medium-emphasis">
              {{ product.shortDescription }}
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="primary"
              :to="`/catalog/${product.id}`"
            >
              Детали
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: 'Товар 1',
    price: 1000,
    shortDescription: 'Краткое описание товара 1',
  },
  {
    id: 2,
    name: 'Товар 2',
    price: 2000,
    shortDescription: 'Краткое описание товара 2',
  },
  {
    id: 3,
    name: 'Товар 3',
    price: 3000,
    shortDescription: 'Краткое описание товара 3',
  },
]
</script>
