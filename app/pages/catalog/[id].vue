<template>
  <v-container>
    <v-row class="my-6">
      <v-col cols="12">
        <v-btn
          variant="text"
          color="primary"
          to="/catalog"
          class="mb-4"
        >
          ← Вернуться в каталог
        </v-btn>
      </v-col>

      <v-col cols="12" md="8">
        <v-card v-if="product">
          <v-card-title class="text-h5">
            {{ product.name }}
          </v-card-title>

          <v-card-text>
            <div class="text-h6 mb-4">
              Цена: {{ product.price }} ₽
            </div>

            <div class="mb-2">
              {{ product.description }}
            </div>

            <div class="text-body-2 text-medium-emphasis">
              ID товара: {{ product.id }}
            </div>
          </v-card-text>
        </v-card>

        <v-alert
          v-else
          type="error"
          variant="tonal"
        >
          Товар не найден.
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const route = useRoute()

const products = [
  {
    id: 1,
    name: 'Товар 1',
    price: 1000,
    description: 'Подробное описание товара 1',
  },
  {
    id: 2,
    name: 'Товар 2',
    price: 2000,
    description: 'Подробное описание товара 2',
  },
  {
    id: 3,
    name: 'Товар 3',
    price: 3000,
    description: 'Подробное описание товара 3',
  },
]

const productId = Number(route.params.id)
const product = products.find((p) => p.id === productId)
</script>
