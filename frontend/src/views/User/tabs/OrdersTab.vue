<template>
  <div class="card">
    <h2>My Orders</h2>

    <div class="order" v-for="n in 3" :key="n">
      <div>
        <h4>Order #100{{ n }}</h4>
        <small>Processing</small>
      </div>
      <span>$120</span>
    </div>

  </div>
</template>

<style scoped>
.card {
  background: white;
  padding: 20px;
  border-radius: 14px;
}

.order {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}
</style>