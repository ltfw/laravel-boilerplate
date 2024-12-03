<template>
  <div class="py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <div class="py-4">
        <div class="bg-white shadow rounded-lg p-4">
          <div v-if="user" class="space-y-4">
            <div>
              <h3 class="text-lg font-medium text-gray-900">Welcome, {{ user.name }}!</h3>
              <p class="mt-1 text-sm text-gray-500">This is your dashboard. Start building your application!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const user = computed(() => store.getters['auth/user'])
</script>
