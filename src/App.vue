<template>
  <HelloWorld />
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<style>
#app {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: #88482d;
  margin-top: 60px;
}
</style>
