<template>
  <div>
    <h1>Детали товара</h1>

    <div v-if="product">
      <h2>{{ product.name }}</h2>
      <p>Цена: {{ product.price }} ₽</p>
      <p>Описание: {{ product.description }}</p>
    </div>
    <div v-else>
      <p>Товар не найден.</p>
    </div>

    <NuxtLink to="/catalog">← Вернуться в каталог</NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute()

const products = [
  { id: 1, name: 'Товар 1', price: 1000, description: 'Описание товара 1' },
  { id: 2, name: 'Товар 2', price: 2000, description: 'Описание товара 2' },
  { id: 3, name: 'Товар 3', price: 3000, description: 'Описание товара 3' }
]

const productId = Number(route.params.id)
const product = products.find(p => p.id === productId)
</script>
