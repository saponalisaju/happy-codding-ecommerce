<template>
  <div class="cards">

    <div class="card">
      <h3>Total Orders</h3>
      <p>125</p>
    </div>

    <div class="card">
      <h3>Total Earnings</h3>
      <p>$120.50</p>
    </div>

    <div class="card">
      <h3>Wallet Balance</h3>
      <p>$150.00</p>
    </div>

  </div>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.card h3 {
  font-size: 14px;
  color: #6b7280;
}

.card p {
  font-size: 24px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>