<script setup>
</script>

<template>
  <div>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Todo App</RouterLink>
        </li>
        <li>
          <RouterLink to="/galerie">Gallery Art</RouterLink>
          <!-- <RouterLink :to="{name: 'voiture'}">Gallery Art</RouterLink> -->
        </li>
        <li>
          <RouterLink to="formpage">Formulaire</RouterLink>
        </li>        
        
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
* {
  font-family: cursive;
}
nav {
  padding-block: .6rem;
  background-color: blanchedalmond;
}
ul{
  display: flex;
  justify-content: center;
  list-style-type: none;
}
li {
  margin-inline: 0.5rem
}
li:hover {
  background-color: azure;
}
a{
  color: black;
  text-decoration: none;
}
</style>
