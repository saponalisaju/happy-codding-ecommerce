<template>
  <div class="space-y-6">

    <!-- Header -->
    <div class="card">
      <h2>Refund History</h2>
      <p>Track all refund requests and their status</p>
    </div>

    <!-- Refund List -->
    <div class="refund-grid">

      <div class="refund-card" v-for="n in 3" :key="n">

        <!-- Header -->
        <div class="refund-header">
          <div class="left">
            <div class="icon">↩️</div>
            <div>
              <h3>Refund Request #RF00{{ n }}</h3>
              <small>Requested on 02 Jan 2026</small>
            </div>
          </div>

          <span class="status pending">Pending</span>
        </div>

        <!-- Product -->
        <div class="product">
          <div class="img"></div>

          <div>
            <h4>Product Name Example</h4>
            <p>Order ID: #ORD-32145</p>
          </div>

          <h3>$120.00</h3>
        </div>

        <!-- Footer -->
        <div class="footer">
          <span class="wallet">Refund to Wallet</span>

          <button>View Details</button>
        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>
.card {
  background: white;
  padding: 20px;
  border-radius: 14px;
}

.refund-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

.refund-card {
  background: white;
  padding: 15px;
  border-radius: 14px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}

.refund-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left {
  display: flex;
  gap: 10px;
  align-items: center;
}

.icon {
  font-size: 20px;
}

.status {
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
}

.pending {
  background: #fef3c7;
  color: #92400e;
}

.product {
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.img {
  width: 50px;
  height: 50px;
  background: #e5e7eb;
  border-radius: 10px;
}

.footer {
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wallet {
  font-size: 12px;
  color: gray;
}

button {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
}
</style>