<template>
  <ul>
    <li>
      <router-link :to="{name: 'Home'}">Home</router-link>
    </li>
    <li>
      <router-link to="/about">About</router-link>
      <!-- router-link mirip seperi a href cuman bedanya tidak ada loading,
      router link ada 2 cara pertama langsung tanpa nama kedua pake nama-->
    </li>
  </ul>
  <router-view></router-view>
  <!-- TUGASSS!!!!
   MENNGUNAKAN COMPONENT
   PROPS
   ARRAY DAN LOOPING
   TITLE DESCRIPTION NAMA TANGGAL-->
</template>