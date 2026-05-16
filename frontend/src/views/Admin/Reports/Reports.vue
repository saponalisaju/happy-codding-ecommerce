<template>
  <div class="p-6 space-y-6">

    <!-- Header -->
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold text-gray-800">
        Reports Dashboard
      </h1>

      <div class="flex gap-2">
        <select class="border px-3 py-2 rounded-lg text-sm">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>This Year</option>
        </select>

        <button class="bg-black text-white px-4 py-2 rounded-lg text-sm">
          Export
        </button>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">

      <div class="bg-white p-4 rounded-xl shadow">
        <p class="text-sm text-gray-500">Total Sales</p>
        <h2 class="text-xl font-bold">$12,450</h2>
      </div>

      <div class="bg-white p-4 rounded-xl shadow">
        <p class="text-sm text-gray-500">Orders</p>
        <h2 class="text-xl font-bold">1,240</h2>
      </div>

      <div class="bg-white p-4 rounded-xl shadow">
        <p class="text-sm text-gray-500">Customers</p>
        <h2 class="text-xl font-bold">540</h2>
      </div>

      <div class="bg-white p-4 rounded-xl shadow">
        <p class="text-sm text-gray-500">Refunds</p>
        <h2 class="text-xl font-bold">$320</h2>
      </div>

    </div>

    <!-- Chart Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

      <!-- Sales Chart -->
      <div class="bg-white p-6 rounded-xl shadow">
        <h2 class="font-semibold mb-4">Sales Overview</h2>

        <div class="h-64 flex items-center justify-center text-gray-400">
          Chart Area (use Chart.js / ApexCharts)
        </div>
      </div>

      <!-- Orders Chart -->
      <div class="bg-white p-6 rounded-xl shadow">
        <h2 class="font-semibold mb-4">Orders Trend</h2>

        <div class="h-64 flex items-center justify-center text-gray-400">
          Chart Area
        </div>
      </div>

    </div>

    <!-- Recent Reports Table -->
    <div class="bg-white p-6 rounded-xl shadow">

      <h2 class="font-semibold mb-4">Recent Transactions</h2>

      <table class="w-full text-sm">
        <thead>
          <tr class="text-left border-b">
            <th class="py-2">Order ID</th>
            <th class="py-2">Customer</th>
            <th class="py-2">Amount</th>
            <th class="py-2">Status</th>
            <th class="py-2">Date</th>
          </tr>
        </thead>

        <tbody>
          <tr class="border-b">
            <td class="py-2">#1021</td>
            <td>John Doe</td>
            <td>$120</td>
            <td><span class="text-green-600">Paid</span></td>
            <td>2026-05-16</td>
          </tr>

          <tr class="border-b">
            <td class="py-2">#1022</td>
            <td>Jane Smith</td>
            <td>$85</td>
            <td><span class="text-yellow-600">Pending</span></td>
            <td>2026-05-15</td>
          </tr>

          <tr>
            <td class="py-2">#1023</td>
            <td>Mike Ross</td>
            <td>$230</td>
            <td><span class="text-red-600">Failed</span></td>
            <td>2026-05-14</td>
          </tr>
        </tbody>
      </table>

    </div>

  </div>
</template>

<script setup>
// later: API integration (orders, sales, charts)
</script>