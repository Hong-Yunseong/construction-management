<template>
    <div>{{test_data}}</div>
    <!-- <router-link to="{name: 'Info', query: {id: 12}}">정보</router-link> -->
    <router-link :to="{ path: 'info/' + id}">정보</router-link>
    <!-- <router-view></router-view> -->
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      id : 12
    }
  },
  props: {
    test_data : Array
  }
}
</script>

<style scoped>
.ListDiv {
    height: 30px;
    width: 100%;

}
</style>
