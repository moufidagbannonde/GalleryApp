<template>
    <div class="flex">
      <div v-for="car in carData" :key="car.id" class="image-container">
        <div>
          <img :src="car.image" alt="Image" width="250px" height="200px">
        </div>

        <div class="title-container">
          <h2>{{ car.nom }}</h2>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
// import data from  '../../assets/data.js';

const carData = [];
 const url = 'src/assets/carData.json'
        


  async function fetchDat() {
        let response = await fetch (url)
        // console.log(response)
        carData.value = await response.json();
      //   console.log(response);
       console.log(carData.value)
    }
    fetchDat()

    console.log(fetchDat());

const cars = ref()
const props = defineProps({
  searchVal: {
    type: String
  }
})

const filterData = computed(() => {
  console.log(props.searchVal);
})
  //Fonction de filtrage
  const filteredItems = computed(() => {
      const query = props.searchVal.toLowerCase();//On met la valeur de l'input en minuscule

      return cars.value.filter(item =>
        item.nom.toLowerCase().includes(query)
      );
    });

console.log(props.searchVal)


// console.log(cars);
</script>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
body {
	font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
	line-height: 1.4em;
	background: #f5f5f5;
	color: #111111;
	min-width: 230px;
	max-width: 550px;
	margin: 0 auto;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-weight: 300;
}
/* .image-container {
  
} */
.title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aquamarine;

}

</style>