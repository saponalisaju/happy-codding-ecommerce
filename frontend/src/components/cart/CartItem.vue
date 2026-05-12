<template>
  <tr>

    <td>
      <div class="d-flex align-items-center gap-2">
        <img :src="item.image" width="60" class="rounded" />
        <div>
          <h6 class="mb-0">{{ item.name }}</h6>
        </div>
      </div>
    </td>

    <td>${{ item.price }}</td>

    <td>
      <div class="d-flex align-items-center gap-2">

        <button class="btn btn-sm btn-outline-dark" @click="$emit('dec', item)">-</button>

        <span>{{ item.qty }}</span>

        <button class="btn btn-sm btn-outline-dark" @click="$emit('inc', item)">+</button>

      </div>
    </td>

    <td>
      ${{ (item.price * item.qty).toFixed(2) }}
    </td>

    <td>
      <button class="btn btn-sm text-danger" @click="$emit('remove', item.id)">
        <i class="ri-delete-bin-line"></i>
      </button>
    </td>

  </tr>
</template>

<script setup>
defineProps(['item'])
defineEmits(['inc', 'dec', 'remove'])
</script>