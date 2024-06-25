<script setup>
import { ref, computed, onMounted, watch } from 'vue';

const searchValue = ref('');

console.log(searchValue.value);
</script>

<template>
    <div class="container">
        <div>
            <div class="btn-container">
                <RouterLink to="/voitures">Voitures</RouterLink>
                <RouterLink to="/pays">Pays</RouterLink>
                <RouterLink to="/motos">Motos</RouterLink>
            </div>
    
            <div class="input-container">
                <input type="search" v-model="searchValue" placeholder="Recherche..."> {{ searchValue }}
            </div>

        </div>
        <router-view :searchVal="searchValue"></router-view>
    </div>
</template>

<style scoped>
a {
    text-decoration: none;
    color: black;
}
.btn-container {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
}
.input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 15px;
}

</style>
