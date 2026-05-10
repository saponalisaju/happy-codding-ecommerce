<script setup>
defineProps({
  columns: Array,
});
</script>

<template>

  <div class="mega-menu">

    <div class="home-demo-menu">

      <div class="row g-4 row-cols-5">

        <!-- COLUMN LOOP -->
        <div
          class="col"
          v-for="(column, index) in columns"
          :key="index"
        >

          <div class="menu-col">

            <h5 class="menu-header">
              {{ column.title }}
            </h5>

            <ul class="mega-links">

              <!-- LINKS -->
              <li
                v-for="(link, idx) in column.links"
                :key="idx"
              >

                <router-link :to="link.url">

                  {{ link.title }}

                  <!-- BADGE -->
                  <span
                    v-if="link.badge"
                    :class="link.badge"
                  >
                    {{ link.badge }}
                  </span>

                </router-link>

              </li>

            </ul>

          </div>

        </div>

      </div>

    </div>

  </div>

</template>