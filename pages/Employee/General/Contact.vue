<template>
  <div class="grid grid-cols-12 gap-2">
        <div class="col-span-6 sm:col-span-3">
          <label
            for="first-name"
            class="block text-sm font-medium text-gray-700"
            >Primary Contact Number</label
          >
          <input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="Primary Contact Number"
            autocomplete="given-name"
            class="
              mt-1
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-full
              shadow-sm
              sm:text-sm
              border-gray-300
              rounded-md
            "
          />
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium text-gray-700"
            >Secondary Contact Number</label
          >
          <input
            type="text"
            name="last-name"
            id="last-name"
            placeholder="Secondary Contact Number"
            autocomplete="family-name"
            class="
              mt-1
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-full
              shadow-sm
              sm:text-sm
              border-gray-300
              rounded-md
            "
          />
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label
            for="date-of-birth"
            class="block text-sm font-medium text-gray-700"
            >Company Mail</label
          >
          <input
            type="text"
            name="date-of-birth"
            placeholder="Company Mail"
            id="date-of-birth"
            autocomplete="given-name"
            class="
              mt-1
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-full
              shadow-sm
              sm:text-sm
              border-gray-300
              rounded-md
            "
          />
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label
            for="nationality"
            class="block text-sm font-medium text-gray-700"
            >Personal Mail</label
          >
          <input
            type="text"
            placeholder="Personal Mail"
            name="nationality"
            id="nationality"
            autocomplete="family-name"
            class="
              mt-1
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-full
              shadow-sm
              sm:text-sm
              border-gray-300
              rounded-md
            "
          />
        </div>
      </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>
