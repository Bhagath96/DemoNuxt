<template>
<div>

   <div style="margin-left:20px;margin-bottom:15px" class="flex justify-between">
     <div style="display:flex">
        <svg class="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-11 w-11" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
       <div>
        <h2 style="font-weight: 700;font-size: 20px;">Employee</h2>
        <h6 style="font-weight: 100;font-size: 10px;">EP000148</h6>
       </div>
     </div>

     <div> <Modal v-show="showModal" @close-modal="showModal=false" /></div>


     <div class="order-last" style="margin-right:35px">
       <button  @click="showModal = true" type="button" class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add Attachment +</button>
            <select id="country" name="Gender" autocomplete="country-name"
            class="
              border border-gray-300
              bg-white
              rounded-md
              shadow-sm
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
              sm:text-sm leading-4 font-medium rounded-md text-gray-700 "
            style="border-width: 0.25px ">
              <option>Actions</option>
              <option>Female</option>
              <option>TG</option>
            </select>
     </div>
   </div>
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
    <nav class="flex space-x-4" aria-label="Tabs" style="margin-bottom:20px">
      <!-- Current: "bg-gray-100 text-gray-700", Default: "text-gray-500 hover:text-gray-700" -->
      <a href="#"  v-on:click="activetab='1'" v-bind:class="[ activetab === '1' ? 'active underline decoration-4 text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md' : 'text-gray-300 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md' ] ">
        General Details</a>
      <a href="#" v-on:click="activetab='2'" v-bind:class="[ activetab === '2' ? 'active underline decoration-4 text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md' : 'text-gray-300 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md' ] ">
         Assets </a>
     <a href="#" v-on:click="activetab='3'" v-bind:class="[ activetab === '3' ? 'active underline decoration-4 text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md' : 'text-gray-300 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md' ] ">
         Appraisal </a>
     </nav>
  </div>
     <div class="content">
        <div v-if="activetab ==='1'" class="tabcontent">
          <Dummy />
        </div>
        <div v-if="activetab ==='2'" class="tabcontent">
             <assets/>
        </div>
         <div v-if="activetab ==='3'" class="tabcontent">
             <Appraisal/>
        </div>
     </div>

</div>
</template>

<script>
import Generalview from '~/pages/Employee/Generalview'
import Assets from '~/pages/Employee/Assets'
import Modal from "~/components/Modal";
import Dummy from "~/components/Dummy";
import Appraisal from "~/components/Appraisal";
import Apprisaltree from "~/components/Apprisaltree";


  name:'Tabview';
let activetab = '1';

export default {
   data(){
    return{
    activetab:'1',
    showModal: false,

    }
  },
  components:{
    Generalview,
    Assets,
    Dummy,
    Appraisal
  },
  beforeCreate(){
   this.activetab = '1'
  }

}
</script>
