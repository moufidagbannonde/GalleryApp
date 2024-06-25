<template lang="">
    <div v-for="(item, index) in country" :key="item.id">
       {{ item.name.common }}
    </div>
</template>

<script setup>
    // import { DataService } from '../../assets/DataService';
    // const data = new DataService();

    // const url = 'https://restcountries.com/v3.1/all'
    //     fetch(url)
    //     // console.log(fetch(url));

    //      .then((res) => {
    //         return res.json(); // conversion en json() de la response ou res
    //      })
    //      .then((data) => {
    //         console.log(data);
    //      })

   

    async function fetchData() {
        let response = await fetch ('https://restcountries.com/v3.1/all')
        let myData = await response.json();
        console.log(response);
        console.log(myData)
    }
    fetchData()
</script>

<style scoped>
    div {
        margin-left: 10px;
    }
</style>