<template>
  <div>
    <h1>Каталог товаров</h1>

    <ul>
      <li v-for="product in products" :key="product.id">
        <NuxtLink :to="`/catalog/${product.id}`">
          {{ product.name }} — {{ product.price }} ₽
        </NuxtLink>
      </li>
    </ul>

    <NuxtLink to="/">На главную</NuxtLink>
  </div>
</template>

<script setup>
const products = [
  { id: 1, name: 'Товар 1', price: 1000 },
  { id: 2, name: 'Товар 2', price: 2000 },
  { id: 3, name: 'Товар 3', price: 3000 },
]
</script>
