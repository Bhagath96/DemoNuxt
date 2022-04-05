<template>

 <form class="space-y-8 divide-y divide-gray-200">
     <div> <Modal v-show="showModal" @close-modal="showModal=false" /></div>

   <div style="margin-left:20px" class="flex justify-between">
     <div>
       <h2>Employee</h2>
     </div>
     <div class="order-last" style="margin-right:35px">
       <button  @click="showModal = true" type="button" class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add Attachment +</button>
            <select id="country" name="Gender" autocomplete="country-name" class="min-w-[180px]" style="border-width: 2.25px">
              <option>Actions</option>
              <option>Female</option>
              <option>TG</option>
            </select>
     </div>
   </div>
   <table class="flex flex-col items-center mt-2 overflow-auto" style="margin-top:2px">
     <tr>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" >
          <label for="city" class="block text-sm font-medium text-gray-700"> first Name </label>
          <div class="mt-1">
           <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <label for="region" class="block text-sm font-medium text-gray-700"> Last Name </label>
          <div class="mt-1">
            <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <label for="postal-code" class="block text-sm font-medium text-gray-700"> Gender </label>
          <div class="mt-1">
           <select id="country" name="Gender" autocomplete="country-name" class="min-w-[180px]" style="border-width: 2.25px">
              <option>Male</option>
              <option>Female</option>
              <option>TG</option>
            </select>
          </div>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <label for="postal-code" class="block text-sm font-medium text-gray-700"> DOB </label>
          <div class="mt-1">
            <input  class="min-w-[180px]" type="date" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>
     </tr>
      <tr>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" >
          <label for="city" class="block text-sm font-medium text-gray-700"> City </label>
          <div class="mt-1">
           <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <label for="region" class="block text-sm font-medium text-gray-700"> State / Province </label>
          <div class="mt-1">
            <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <label for="postal-code" class="block text-sm font-medium text-gray-700"> ZIP / Postal code </label>
          <div class="mt-1">
            <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <label for="postal-code" class="block text-sm font-medium text-gray-700"> ZIP / Postal code </label>
          <div class="mt-1">
            <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>
     </tr>
     <tr><h4>Contact details</h4></tr>
     <tr>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" >
          <label for="city" class="block text-sm font-medium text-gray-700"> City </label>
          <div class="mt-1">
           <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <label for="region" class="block text-sm font-medium text-gray-700"> State / Province </label>
          <div class="mt-1">
            <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <label for="postal-code" class="block text-sm font-medium text-gray-700"> ZIP / Postal code </label>
          <div class="mt-1">
            <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <label for="postal-code" class="block text-sm font-medium text-gray-700"> ZIP / Postal code </label>
          <div class="mt-1">
            <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>
     </tr>
     <tr><h4>Employee details</h4></tr>
     <tr>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" >
          <label for="city" class="block text-sm font-medium text-gray-700"> City </label>
          <div class="mt-1">
           <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <label for="region" class="block text-sm font-medium text-gray-700"> State / Province </label>
          <div class="mt-1">
            <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <label for="postal-code" class="block text-sm font-medium text-gray-700"> ZIP / Postal code </label>
          <div class="mt-1">
            <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <label for="postal-code" class="block text-sm font-medium text-gray-700"> ZIP / Postal code </label>
          <div class="mt-1">
            <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>
     </tr>
      <tr>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" >
          <label for="city" class="block text-sm font-medium text-gray-700"> City </label>
          <div class="mt-1">
           <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <label for="region" class="block text-sm font-medium text-gray-700"> State / Province </label>
          <div class="mt-1">
            <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <label for="postal-code" class="block text-sm font-medium text-gray-700"> ZIP / Postal code </label>
          <div class="mt-1">
            <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <label for="postal-code" class="block text-sm font-medium text-gray-700"> ZIP / Postal code </label>
          <div class="mt-1">
            <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>
     </tr>
     <tr><h4>Education Qualification</h4></tr>
      <tr>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" >
          <label for="city" class="block text-sm font-medium text-gray-700"> City </label>
          <div class="mt-1">
           <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <label for="region" class="block text-sm font-medium text-gray-700"> State / Province </label>
          <div class="mt-1">
            <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <label for="postal-code" class="block text-sm font-medium text-gray-700"> ZIP / Postal code </label>
          <div class="mt-1">
            <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <label for="postal-code" class="block text-sm font-medium text-gray-700"> ZIP / Postal code </label>
          <div class="mt-1">
            <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>
     </tr>
     <tr><h4>Previous Work experience</h4></tr>
      <tr>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" >
          <label for="city" class="block text-sm font-medium text-gray-700"> City </label>
          <div class="mt-1">
           <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <label for="region" class="block text-sm font-medium text-gray-700"> State / Province </label>
          <div class="mt-1">
            <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <label for="postal-code" class="block text-sm font-medium text-gray-700"> ZIP / Postal code </label>
          <div class="mt-1">
            <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <label for="postal-code" class="block text-sm font-medium text-gray-700"> ZIP / Postal code </label>
          <div class="mt-1">
            <input  class="min-w-[180px]" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" style="border-width: 2.25px">
          </div>
        </td>
     </tr>
    </table>
 </form>
</template>

<script>
 import Modal from "~/components/Modal";

name:'Generalview'
  export default {
     data() {
    return {
      showModal: false,
    }
  },

  }
</script>

<style lang="scss" scoped>

</style>
