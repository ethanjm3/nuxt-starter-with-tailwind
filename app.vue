<script>

 
</script>

<template>
<div>
<v-layout>
<v-app-bar image="https://images.unsplash.com/photo-1505764706515-aa95265c5abc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80">
  <template v-slot:image>
    <v-img gradient="to right, rgba(7, 179, 90, 0.5), rgba(69, 72, 74, 1)"></v-img>
  </template>
</v-app-bar>
<v-navigation-drawer permanent elevation:1 location="left" class="d-flex align-center pa-4">
  <NuxtLink to="account">
      Account page
  </NuxtLink>
  <NuxtLink to="/">
      Index page
  </NuxtLink>
  <NuxtLink to="Test2">
      Test2 page
  </NuxtLink>
  <v-divider class="border-opacity-50"></v-divider>
  <v-sheet>Nav Test</v-sheet>
  <v-divider class="border-opacity-50"></v-divider>
  <v-sheet>Nav Test</v-sheet>
  <v-divider class="border-opacity-50"></v-divider>
  <v-sheet>Nav Test</v-sheet>
  <v-divider class="border-opacity-50"></v-divider>
  <v-sheet>Nav Test</v-sheet>
  <v-divider class="border-opacity-50"></v-divider>
  <v-sheet>Nav Test</v-sheet>
</v-navigation-drawer>

 <v-main class="ma-2">
 <NuxtPage/>
 </v-main>
</v-layout>

</div>
</template>