<template>
  <div class="card">
    <h2>Wallet</h2>
    <div class="wallet-grid">
      <div class="box green">Credit: $500</div>
      <div class="box red">Debit: $150</div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: white;
  padding: 20px;
  border-radius: 14px;
}

.wallet-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.box {
  padding: 20px;
  border-radius: 12px;
  color: white;
}

.green { background: #10b981; }
.red { background: #ef4444; }
</style>