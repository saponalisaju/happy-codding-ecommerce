<template>
  <div class="space-y-6">

    <!-- Tier Card -->
    <div class="tier-card">
      <div class="tier-icon">👑</div>

      <div>
        <h2>Gold Member</h2>
        <p>80% to Platinum</p>

        <div class="progress">
          <div class="bar"></div>
        </div>
      </div>
    </div>

    <!-- Stats -->
    <div class="grid">
      <div class="stat">
        <h3>4,500</h3>
        <p>Points</p>
      </div>

      <div class="stat">
        <h3>$120</h3>
        <p>Earnings</p>
      </div>
    </div>

    <!-- History -->
    <div class="card">
      <h2>Reward History</h2>

      <div class="item" v-for="n in 3" :key="n">
        <div>
          <h4>Referral Bonus</h4>
          <small>Earned points</small>
        </div>

        <span class="plus">+500</span>
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

.tier-card {
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: white;
  padding: 20px;
  border-radius: 14px;
  display: flex;
  gap: 15px;
}

.progress {
  height: 8px;
  background: rgba(255,255,255,0.3);
  border-radius: 20px;
  margin-top: 10px;
}

.bar {
  width: 80%;
  height: 100%;
  background: white;
  border-radius: 20px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.stat {
  background: white;
  padding: 15px;
  border-radius: 14px;
  text-align: center;
}

.item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.plus {
  color: green;
  font-weight: bold;
}
</style>