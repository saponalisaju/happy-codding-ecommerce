<template>
  <div class="space-y-6">

    <!-- Profile Header -->
    <div class="profile-card">
      <div class="avatar">👤</div>

      <div>
        <h2>John Doe</h2>
        <p>john@email.com</p>
      </div>

      <div class="stats">
        <div>
          <h3>125</h3>
          <span>Orders</span>
        </div>

        <div>
          <h3>$150</h3>
          <span>Balance</span>
        </div>

        <div>
          <h3>500</h3>
          <span>Points</span>
        </div>
      </div>
    </div>

    <!-- Form -->
    <div class="card">
      <h2>Personal Info</h2>

      <form class="form">
        <input placeholder="First Name" />
        <input placeholder="Last Name" />
        <input placeholder="Phone" />
        <input placeholder="Email" />

        <textarea placeholder="Bio"></textarea>

        <button>Update Profile</button>
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

.profile-card {
  background: white;
  padding: 20px;
  border-radius: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}

.avatar {
  font-size: 40px;
}

.stats {
  display: flex;
  gap: 20px;
}

.stats h3 {
  margin: 0;
}

.form {
  display: grid;
  gap: 10px;
}

input, textarea {
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 10px;
}

button {
  background: #4f46e5;
  color: white;
  padding: 10px;
  border-radius: 10px;
}
</style>