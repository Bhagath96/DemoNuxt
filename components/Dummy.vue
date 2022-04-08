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
    <nav class="flex space-x-4" aria-label="Tabs" style=" width:fit-content; border-width:medium; border-color:rgb(145 185 249)">
      <!-- Current: "bg-gray-100 text-gray-700", Default: "text-gray-500 hover:text-gray-700" -->
      <a href="#" style="margin: 0px;"
     v-on:click="activetab= 1" v-bind:class="[ activetab === 1 ? 'active  decoration-4 text-black-500 hover:text-black-700 px-3 py-2 font-medium text-sm rounded-md' : 'text-blue-300 hover:text-blue-700 px-3 py-2 font-medium text-sm rounded-md' ] ">
        General Details</a>
        <svg  style="height:55px;margin:0px" class=" text-blue-500" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
          <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
        </svg>
      <a href="#" style="margin: 0px;" v-on:click="activetab= 2" v-bind:class="[ activetab === 2 ? 'active  decoration-4 text-black-500 hover:text-black-700 px-3 py-2 font-medium text-sm rounded-md' : 'text-blue-300 hover:text-blue-700 px-3 py-2 font-medium text-sm rounded-md' ] ">
         Contact Details
      </a>
       <svg  style="height:55px;margin:0px" class=" text-blue-500" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
          <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
        </svg>
      <a href="#" style="margin:0" v-on:click="activetab= 3" v-bind:class="[ activetab === 3 ? 'active decoration-4 text-black-500 hover:text-black-700 px-3 py-2 font-medium text-sm rounded-md' : 'text-blue-300 hover:text-blue-700 px-3 py-2 font-medium text-sm rounded-md' ] ">
        Education Qualification
      </a>
       <svg  style="height:55px;margin:0px" class=" text-blue-500" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
          <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
        </svg>
      <a href="#" style="margin:0" v-on:click="activetab= 4" v-bind:class="[ activetab === 4 ? 'active  decoration-4 text-black-500 hover:text-black-700 px-3 py-2 font-medium text-sm rounded-md' : 'text-blue-300 hover:text-blue-700 px-3 py-2 font-medium text-sm rounded-md' ] ">
         Employee Details
      </a>
       <svg  style="height:55px;margin:0px" class=" text-blue-500" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
          <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
        </svg>
    <a href="#" style="margin:0" v-on:click="activetab= 5" v-bind:class="[ activetab === 5 ? 'active  decoration-4 text-black-500 hover:text-black-700 px-3 py-2 font-medium text-sm rounded-md' : 'text-blue-300 hover:text-blue-700 px-3 py-2 font-medium text-sm rounded-md' ] ">
        Previous Work Experience
      </a>
       <svg  style="height:55px;margin:0px" class=" text-blue-500" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
          <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
        </svg>

     </nav>
  </div >
     <div style="margin-top:30px" class="content">
        <div style="margin:10px" v-if="activetab === 1" class="tabcontent">
          <General />
       <button
         style="margin-top:30px "
         v-on:click="activetab= 2"
          type="submit"
          class="
            inline-flex
            justify-center
            py-2
            px-4
            border border-transparent
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-white
            bg-indigo-600
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
        >
          Save
        </button>

        </div>
        <div style="margin:10px" v-if="activetab === 2" class="tabcontent">
             <Contact />

        <button
         style="margin-top:30px "
          type="submit"
          v-on:click="activetab= 3"
          class="
            inline-flex
            justify-center
            py-2
            px-4
            border border-transparent
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-white
            bg-indigo-600
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
        >
          Save
        </button>
        </div>
         <div style="margin:10px" v-if="activetab === 3" class="tabcontent">
             <Education />

         <button
         style="margin-top:30px "
          type="submit"
          v-on:click="activetab= 4"

          class="
            inline-flex
            justify-center
            py-2
            px-4
            border border-transparent
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-white
            bg-indigo-600
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
        >
          Save
        </button>
        </div>
         <div style="margin:10px" v-if="activetab === 4" class="tabcontent">
             <Employee />

              <button
         style="margin-top:30px "
          type="submit"
          v-on:click="activetab= 5"
          class="
            inline-flex
            justify-center
            py-2
            px-4
            border border-transparent
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-white
            bg-indigo-600
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
        >
          Save
        </button>
        </div>
         <div style="margin:10px" v-if="activetab === 5" class="tabcontent">
             <Workhistory />

              <button
         style="margin-top:30px "
          v-on:click="activetab= 1"
          type="submit"
          class="
            inline-flex
            justify-center
            py-2
            px-4
            border border-transparent
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-white
            bg-indigo-600
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
        >
          Save
        </button>
        </div>
     </div>

</div>
</template>

<script>
import General from '~/pages/Employee/General/General'
import Education from '~/pages/Employee/General/Education'
import Employee from '~/pages/Employee/General/Employee'
import Contact from '~/pages/Employee/General/Contact'
import Workhistory from '~/pages/Employee/General/Workhistory'


  name:'Tabview';
let activetab = 1;

export default {
   data(){
    return{
    activetab:1,
    showModal: false,

    }
  },
  components:{
    General,
    Contact,
    Education,
    Employee,
    Workhistory
  },
  beforeCreate(){
   this.activetab = 1
  }

}
</script>
