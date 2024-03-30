<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="menu-container">
    <a class="navbar-brand left-10" href="/">HOME</a>
    <div class="dropdown" style="margin-left : 10px;">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        관리
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">계정</a></li>
      </ul>
    </div>
    <div class="dropdown" style="margin-left : 10px;">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        계약
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="/list">리스트</a></li>
        <li><a class="dropdown-item" href="/table">테이블</a></li>
      </ul>
    </div>
    <div class="dropdown" style="margin-left : 10px;">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        현황
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">계정</a></li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'MainHeader',
  props: {
  }
}
</script>

<style scoped>
.left-10 {
  margin-left: 10px;
}

.menu-container {
    display: flex;
    flex-wrap: inherit;
    align-items: center;
}
</style>
