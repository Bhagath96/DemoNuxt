<template>
  <div class="grid grid-cols-12 gap-2">
        <div class="col-span-6 sm:col-span-3">
          <label
            for="first-name"
            class="block text-sm font-medium text-gray-700"
            >Designation</label
          >
          <input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="Designation"
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
            for="blood-group"
            class="block text-sm font-medium text-gray-700"
            >Branch</label
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
        <div class="col-span-6 sm:col-span-3">
          <label
            for="blood-group"
            class="block text-sm font-medium text-gray-700"
            >Division</label
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
        <div class="col-span-6 sm:col-span-3">
          <label
            for="blood-group"
            class="block text-sm font-medium text-gray-700"
            >Department</label
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
        <div class="col-span-6 sm:col-span-3">
          <label
            for="blood-group"
            class="block text-sm font-medium text-gray-700"
            >Reporting Manager</label
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
        <div class="col-span-6 sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium text-gray-700"
            >Date of Joining</label
          >
          <input
            type="date"
            name="last-name"
            id="last-name"
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
            >Year of Service</label
          >
          <input
            type="text"
            name="last-name"
            id="last-name"
            placeholder="Year of Service"
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
            >Gross Salary</label
          >
          <input
            type="text"
            name="date-of-birth"
            placeholder="Gross Salary"
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
            >Allowance</label
          >
          <input
            type="text"
            placeholder="Allowance"
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
