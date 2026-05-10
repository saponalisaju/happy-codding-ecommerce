<template>
  <LineChart :data="chartData" :height="240" />
</template>

<script setup>


import {ref, watch} from "vue";
import LineChart from "../../components/core/Charts/Bar.vue";
import {useRoute} from "vue-router";
import axiosClient from "../../services/api/axios";

const route = useRoute();
const chartData = ref([]);

watch(route, (rt) => {
  getData();
}, {immediate: true})

function getData() {
  axiosClient.get('report/customers', {params: {d: route.params.date}})
    .then(({data}) => {
      chartData.value = data;
    })
}
</script>

<style scoped>

</style>
