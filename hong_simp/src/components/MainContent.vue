<template>
  <!-- <List :test_data = "test"/> -->
  <!-- <router-link to="/list">리스트</router-link> -->
  <!-- <router-link to="/table">테이블</router-link> -->
  <router-view :test_data="test"></router-view>
  <!-- <button @click="start">버튼</button> -->
</template>

<script>
import axios from 'axios'
import SimpTable from  '../list/SimpTable.vue'

import test from '../assets/test.js'
export default {
  name: 'MainContent',
    data() {
    return {
        test : test
    }
  },
  components : {
    SimpTable
  },
  props: {
  },
  methods: {
    start() {
        axios({
                url: "http://localhost:3000/",
                method: "GET",
            }).then(res => {
                console.log(res);
                alert(res.data);
            }).catch(err => {
                alert(err);
        });
    }
  },
}
</script>

<style scoped>
</style>
