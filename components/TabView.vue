<template>
<div>
  <div class="sm:hidden">
    <label for="tabs" class="sr-only">Select a tab</label>
    <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
    <select id="tabs" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
      <option>My Account</option>

      <option>Company</option>

      <option selected>Team Members</option>

      <option>Billing</option>
    </select>
  </div>
  <div class="hidden sm:block">
    <nav class="flex space-x-4" aria-label="Tabs">
      <!-- Current: "bg-gray-100 text-gray-700", Default: "text-gray-500 hover:text-gray-700" -->
      <a href="#"  v-on:click="activetab='1'" v-bind:class="[ activetab === '1' ? 'active underline decoration-4 text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md' : 'text-gray-300 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md' ] ">
        General Details</a>
      <a href="#" v-on:click="activetab='2'" v-bind:class="[ activetab === '2' ? 'active underline decoration-4 text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md' : 'text-gray-300 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md' ] "> Assets </a>
     </nav>
  </div>
     <div class="content">
        <div v-if="activetab ==='1'" class="tabcontent">
          <Generalview />
        </div>
        <div v-if="activetab ==='2'" class="tabcontent">
             <assets/>
        </div>
     </div>

</div>
</template>

<script>
import Generalview from '~/pages/Employee/Generalview'
import Assets from '~/pages/Employee/Assets'
  name:'Tabview';
const activetab = 1;

export default {
   data(){
    return{
   activetab:1,
    }
  },
  components:{
    Generalview,
    Assets
  },
  beforeCreate(){
   this.activetab=1
  }

}
</script>
