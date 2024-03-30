<template>
    <div>
      {{$route.params.id}}
    </div>
</template>

<script>
export default {
  name: 'ListInfo',
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
