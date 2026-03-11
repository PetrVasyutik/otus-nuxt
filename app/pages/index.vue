<template>
  <v-container>
    <v-row justify="center" class="my-10">
      <v-col cols="12" md="8">
        <v-card class="pa-10" elevation="3">
          <v-card-title class="text-h4 mb-2 pa-20">
            Добро пожаловать в наш магазин
          </v-card-title>

          <v-card-text class="text-body-1 mb-6 pa-20">
            Для просмотра товаров перейдите в каталог:
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="primary"
              size="large"
              to="/catalog"
            >
              Перейти в каталог
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
