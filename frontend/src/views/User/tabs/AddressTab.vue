<template>
  <div class="space-y-6">

    <!-- Header -->
    <div class="card">
      <h2 class="title">Saved Addresses</h2>
      <p class="sub">Manage your delivery locations</p>
    </div>

    <!-- Address List -->
    <div class="grid">

      <div class="address-card" v-for="n in 2" :key="n">

        <div class="top">
          <div class="icon">🏠</div>

          <div>
            <h3>Home Address</h3>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>

        <div class="bottom">
          <span>+880 123456789</span>
          <span>user@email.com</span>
        </div>

        <div class="actions">
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>

      </div>

    </div>

    <!-- Add New -->
    <div class="card">
      <h2>Add New Address</h2>

      <form class="form">
        <input placeholder="Full Name" />
        <input placeholder="Phone" />
        <input placeholder="City" />
        <input placeholder="Address" />

        <button type="submit">Save Address</button>
      </form>
    </div>

  </div>
</template>

<style scoped>
.card {
  background: white;
  padding: 20px;
  border-radius: 14px;
}

.title {
  font-size: 18px;
  font-weight: bold;
}

.sub {
  color: gray;
  font-size: 13px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.address-card {
  background: white;
  padding: 15px;
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.05);
}

.top {
  display: flex;
  gap: 10px;
  align-items: center;
}

.bottom {
  margin-top: 10px;
  font-size: 13px;
  color: gray;
  display: flex;
  justify-content: space-between;
}

.actions {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}

.edit {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 8px;
}

.delete {
  background: #ef4444;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 8px;
}

.form {
  display: grid;
  gap: 10px;
  margin-top: 10px;
}

input {
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 10px;
}

button {
  background: #111827;
  color: white;
  padding: 10px;
  border-radius: 10px;
}
</style>