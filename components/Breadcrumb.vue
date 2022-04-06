<template>
 <nav class="flex" aria-label="Breadcrumb">
  <ol role="list" class="flex items-center">
    <li>
      <div>
        <a href="#" class="text-gray-400 hover:text-gray-500">
          <!-- Heroicon name: solid/home -->
          <svg class="flex-shrink-0 h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <span class="sr-only">Home</span>
        </a>
      </div>
    </li>

    <li>
      <div style="display:flex; align-items:center">
        <!-- Heroicon name: solid/chevron-right -->
        <svg class="flex-shrink-0 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
        <a href="#" class="ml-1 text-sm font-small text-gray-500 hover:text-gray-700">Employee</a>
      </div>
    </li>
  </ol>
</nav>
</template>

<script>
name:'Breadcrumb'
  export default {

  }
</script>

<style lang="scss" scoped>

</style>
