<template>
  <nav class="bg-gray-800 backdrop-filter backdrop-blur sticky top-0 z-40 w-full">
    <div
      class="px-2 sm:px-4 lg:px-8"
    >
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-center px-2 lg:px-0">
          <nuxt-link to="/" class="flex-shrink-0">
            <AppLogo class="text-3xl w-auto" />
          </nuxt-link>
          <div class="hidden lg:block lg:ml-6">
            <div class="flex space-x-4">
              <nuxt-link
                exact
                :to="config.homeRoute"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
              >
                home
              </nuxt-link>
              <AppNavLink
                v-show="config.blog.enabled"
                :to="config.blog.route"
                v-text="config.blog.name"
              />
              <AppNavLink
                v-show="config.project.enabled"
                :to="config.project.route"
                v-text="config.project.name"
              />
              <AppNavLink
                v-show="config.resume.enabled"
                :to="config.resume.route"
                v-text="config.resume.name"
              />
            </div>
          </div>
        </div>
        <div class="flex lg:hidden">
          <div class="mr-2 flex items-center md:hidden">
            <button
              @click="mobileMenuOpen = true"
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out"
              id="main-menu"
              aria-label="Main menu"
              aria-haspopup="true"
            >
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="hidden md:flex flex-row space-x-2 items-center justify-center">
          <a
            v-if="config.blog.enabled"
            class="text-gray-300 hover:text-white"
            href="https://github.com/vaneath"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"
              />
              <path
                d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <transition
      enter-active-class="duration-150 ease-out"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-show="mobileMenuOpen"
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div class="rounded-lg bg-gray-800">
          <div
            class="bg-gray-900 rounded-lg overflow-hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div class="px-5 pt-4 flex items-center justify-between">
              <div @click="mobileMenuOpen = false">
                <nuxt-link exact to="/">
                  <AppLogo class="text-3xl w-auto" />
                </nuxt-link>
              </div>
              <div class="-mr-2">
                <button
                  @click="mobileMenuOpen = false"
                  type="button"
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="Close menu"
                >
                  <svg
                    class="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              @click="mobileMenuOpen = false"
              class="flex flex-col space-y-1 px-2 pt-2 pb-3"
            >
              <nuxt-link
                exact
                to="/"
                class="flex px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-gray-100 hover:bg-gray-600 focus:outline-none focus:text-gray-100 focus:bg-gray-500 transition duration-150 ease-in-out"
                role="menuitem"
                >home</nuxt-link
              >
              <nuxt-link
                v-show="config.blog.enabled"
                :to="config.blog.route"
                class="flex px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-gray-100 hover:bg-gray-600 focus:outline-none focus:text-gray-100 focus:bg-gray-500 transition duration-150 ease-in-out"
                role="menuitem"
                v-text="config.blog.name"
              ></nuxt-link>
              <nuxt-link
                v-show="config.project.enabled"
                :to="config.project.route"
                class="flex px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-gray-100 hover:bg-gray-600 focus:outline-none focus:text-gray-100 focus:bg-gray-500 transition duration-150 ease-in-out"
                role="menuitem"
                v-text="config.project.name"
              ></nuxt-link>
              <nuxt-link
                v-show="config.resume.enabled"
                :to="config.resume.route"
                class="flex px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-gray-100 hover:bg-gray-600 focus:outline-none focus:text-gray-100 focus:bg-gray-500 transition duration-150 ease-in-out"
                role="menuitem"
                v-text="config.resume.name"
              ></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
const config = useAppConfig();

const mobileMenuOpen = ref(false);
</script>
