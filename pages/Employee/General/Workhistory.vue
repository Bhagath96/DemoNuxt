<template>
 <div class="grid grid-cols-12 gap-2">
        <div class="col-span-6 sm:col-span-3">
          <label
            for="first-name"
            class="block text-sm font-medium text-gray-700"
            >Company Name
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="Company Name"
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
            >Designation</label
          >
          <input
            type="text"
            name="last-name"
            id="last-name"
            placeholder="Designation"
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
        <div class="col-span-6 sm:col-span-2">
          <label
            for="blood-group"
            class="block text-sm font-medium text-gray-700"
            >Experience</label
          >
          <select
            id="blood-group"
            name="blood-group"
            autocomplete="martial-status"
            class="
              mt-1
              block
              w-full
              py-2
              px-3
              border border-gray-300
              bg-white
              rounded-md
              shadow-sm
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
              sm:text-sm
            "
          >
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <div class="col-span-6 sm:col-span-2">
          <label
            for="date-of-birth"
            class="block text-sm font-medium text-gray-700"
            >Salary</label
          >
          <input
            type="text"
            name="date-of-birth"
            placeholder="Salary"
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
        <div class="col-span-6 sm:col-span-2">
          <button
            type="button"
            @click="toggleModal"
            class="
              inline-flex
              mt-6
              justify-center
              py-2
              px-4
              border border-transparent
              shadow-sm
              text-sm
              font-medium
              rounded-md
              text-gray-600
              bg-white
              hover:bg-grey-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
            "
          >
            Add More
          </button>
        </div>
      </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>
