
import type { set } from 'nuxt/dist/app/compat/capi';
<template>
  <nuxt-link
    to="/blogs/1"
    class="flex transition duration-700 ease-in-out transform hover:translate-y-0.5 hover:scale-105 flex-col rounded-xl shadow-lg overflow-hidden"
  >
    <div v-if="config.image" class="hidden sm:flex flex-shrink-0 bg-gray-900">
      <img class="h-36 w-full object-cover" :src="config.image" alt="Blog Image" />
    </div>
    <div class="flex-1 bg-gray-900 p-5 flex flex-col justify-between">
      <div class="flex-1">
        <p class="text-xs font-medium text-hot-pink hover:text-hot-pink">
          <a href="#" class="hover:underline hover:text-hot-pink">
            category
          </a>
        </p>
        <div>
          <h3 class="mt-0.5 text-md leading-7 font-semibold text-gray-200">
            {{ config.name }}
          </h3>
          <p class="mt-2 text-xs text-gray-400">
            {{ config.description }}
          </p>
        </div>
      </div>
      <div class="mt-2 flex items-center">
        <div class="flex-shrink-0">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/vaneath"
          >
            <UserAvatar
              class="h-9 w-9 rounded-full"
              name="vaneath"
            :photo-u-r-l="config.image"
            />
          </a>
        </div>
        <div class="ml-3">
          <p class="text-xs font-medium text-gray-200">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/vaneath"
              class="hover:text-yellow-600"
            >
              author name
            </a>
          </p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup>
const config = useAppConfig();
</script>

