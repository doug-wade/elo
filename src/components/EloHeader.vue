<template>
  <v-toolbar>
    <v-toolbar-title> Title </v-toolbar-title>

    <v-toolbar-items>
      <v-btn @click="$emit('menu-btn-clicked')">Menu</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script setup></script>
