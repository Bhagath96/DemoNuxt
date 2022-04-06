<template>
 <div style="display: flex; flex-direction: row; align-items: center; max-width: min-content;
         border-color: #dbdee3;border-width:thin; margin-right: 10px;border-radius:0.3rem">
              <div class="pointer-events-none">
                <!-- Heroicon name: solid/search -->
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
              </div>
              <input id="search-field" class="border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search" type="search" name="search">

        </div>
</template>

<script>
name:'search'
  export default {

  }
</script>

<style lang="scss" scoped>

</style>
