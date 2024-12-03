<template>
  <div class="min-h-screen bg-gray-100">
    <nav v-if="isAuthenticated" class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <router-link :to="{ name: 'dashboard' }" class="flex-shrink-0 flex items-center">
              <!-- Add your logo here -->
              <span class="text-xl font-bold">Your App</span>
            </router-link>
          </div>
          <div class="flex items-center">
            <button @click="logout" class="text-gray-600 hover:text-gray-900">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const isAuthenticated = computed(() => store.getters['auth/isAuthenticated'])

const logout = async () => {
  await store.dispatch('auth/logout')
  router.push({ name: 'login' })
}
</script>
