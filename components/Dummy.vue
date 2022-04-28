<template>
  <div>
    <div class="sm:hidden">
      <label
        for="tabs"
        class="sr-only"
      >Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select
        id="tabs"
        name="tabs"
        class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
      >
        <option>My Account</option>

        <option>Company</option>

        <option selected>Team Members</option>

        <option>Billing</option>
      </select>
    </div>
    <div class="hidden sm:block" style="margin:10px;">
      <nav
        class="flex space-x-4"
        aria-label="Tabs"
        style="width:fit-content; border-width:thin;border-radius:5px;border-color:#a9afba;box-shadow:1px 1px #dfd6d6;height:60px"
      >
        <a
          href="#"
          style="margin-top:5px;"
          v-on:click="activetab= 1"
          v-bind:class="[ activetab === 1 ? 'active  decoration-4 text-blue-900 hover:text-blue-700 px-3 py-2 font-medium text-sm rounded-md' : 'text-blue-400 hover:text-blue-700 px-3 py-2 font-medium text-sm rounded-md' ] "
        >
          General Details</a>
        <svg
          style="margin:0px;width:20px"
          class="text-blue-500 h-full"
          viewBox="0 0 22 80"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 -2L20 40L0 82"
            vector-effect="non-scaling-stroke"
            stroke="currentcolor"
            stroke-linejoin="round"
          />
        </svg>
        <a
          href="#"
          style="margin-top:5px;"
          v-on:click="activetab= 2"
          v-bind:class="[ activetab === 2 ? 'active  decoration-4 text-blue-900 hover:text-blue-700 py-2 font-medium text-sm rounded-md' : 'text-blue-400 hover:text-blue-700 py-2 font-medium text-sm rounded-md' ] "
        >
          Contact Details
        </a>
        <svg
          style="margin:0px;width:20px"
          class="text-blue-500 h-full"
          viewBox="0 0 22 80"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 -2L20 40L0 82"
            vector-effect="non-scaling-stroke"
            stroke="currentcolor"
            stroke-linejoin="round"
          />
        </svg>
        <a
          href="#"
          style="margin-top:5px"
          v-on:click="activetab= 3"
          v-bind:class="[ activetab === 3 ? 'active decoration-4 text-blue-900 hover:text-blue-700 py-2 font-medium text-sm rounded-md' : 'text-blue-400 hover:text-blue-700 py-2 font-medium text-sm rounded-md' ] "
        >
          Education Qualification
        </a>
        <svg
          style="margin:0px;width:20px"
          class="text-blue-500 h-full"
          viewBox="0 0 22 80"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 -2L20 40L0 82"
            vector-effect="non-scaling-stroke"
            stroke="currentcolor"
            stroke-linejoin="round"
          />
        </svg>
        <a
          href="#"
          style="margin-top:5px"
          v-on:click="activetab= 4"
          v-bind:class="[ activetab === 4 ? 'active  decoration-4 text-blue-900 hover:text-blue-700 py-2 font-medium text-sm rounded-md' : 'text-blue-400 hover:text-blue-700 py-2 font-medium text-sm rounded-md' ] "
        >
          Employee Details
        </a>
        <svg
          style="margin:0px;width:20px"
          class="text-blue-500 h-full"
          viewBox="0 0 22 80"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 -2L20 40L0 82"
            vector-effect="non-scaling-stroke"
            stroke="currentcolor"
            stroke-linejoin="round"
          />
        </svg>
        <a
          href="#"
          style="margin-top:5px"
          v-on:click="activetab= 5"
          v-bind:class="[ activetab === 5 ? 'active  decoration-4 text-blue-900 hover:text-blue-700 py-2 font-medium text-sm rounded-md' : 'text-blue-400 hover:text-blue-700 py-2 font-medium text-sm rounded-md' ] "
        >
          Previous Work Experience
        </a>
        <svg
          style="margin:0px;width:20px"
          class="text-blue-500 h-full"
          viewBox="0 0 22 80"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 -2L20 40L0 82"
            vector-effect="non-scaling-stroke"
            stroke="currentcolor"
            stroke-linejoin="round"
          />
        </svg>
        <a
          href="#"
          style="margin-top:5px"
          v-on:click="activetab= 6"
          v-bind:class="[ activetab === 6 ? 'active  decoration-4 text-blue-900 hover:text-blue-700 py-2 font-medium text-sm rounded-md' : 'text-blue-400 hover:text-blue-700 py-2 font-medium text-sm rounded-md' ] "
        >
          Credential Details
        </a>
        <svg
          style="margin:0px;width:20px"
          class="text-blue-500 h-full"
          viewBox="0 0 22 80"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 -2L20 40L0 82"
            vector-effect="non-scaling-stroke"
            stroke="currentcolor"
            stroke-linejoin="round"
          />
        </svg>
        <a
          href="#"
          style="margin-top:5px"
          v-on:click="activetab= 7"
          v-bind:class="[ activetab === 7 ? 'active  decoration-4 text-blue-900 hover:text-blue-700 px-3 py-2 font-medium text-sm rounded-md' : 'text-blue-400 hover:text-blue-700 px-3 py-2 font-medium text-sm rounded-md' ] "
        >
          References
        </a>

      </nav>
    </div>
    <div
      style="margin-top:30px"
      class="content"
    >
      <div
        style="margin:10px"
        v-if="activetab === 1"
        class="tabcontent"
      >
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
            w-36
            text-sm
            font-medium
            rounded-md
            text-white
            bg-red-600
            hover:bg-red-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-red-500
          "
        >
          Save
        </button>

      </div>
      <div
        style="margin:10px"
        v-if="activetab === 2"
        class="tabcontent"
      >
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
            w-36
            text-sm
            font-medium
            rounded-md
            text-white
            bg-red-600
            hover:bg-red-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
        >
          Save
        </button>
      </div>
      <div
        style="margin:10px"
        v-if="activetab === 3"
        class="tabcontent"
      >
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
            w-36
            text-sm
            font-medium
            rounded-md
            text-white
            bg-red-600
            hover:bg-red-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
        >
          Save
        </button>
      </div>
      <div
        style="margin:10px"
        v-if="activetab === 4"
        class="tabcontent"
      >
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
            w-36
            text-sm
            font-medium
            rounded-md
            text-white
            bg-red-600
            hover:bg-red-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
        >
          Save
        </button>
      </div>
      <div
        style="margin:10px"
        v-if="activetab === 5"
        class="tabcontent"
      >
        <Workhistory />

        <button
          style="margin-top:30px "
          v-on:click="activetab= 5"
          type="submit"
          class="
            inline-flex
            justify-center
            py-2
            px-4
            border border-transparent
            shadow-sm
            w-36
            text-sm
            font-medium
            rounded-md
            text-white
            bg-red-600
            hover:bg-red-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
        >
          Save
        </button>
      </div>

      <div
        style="margin:10px"
        v-if="activetab === 6"
        class="tabcontent"
      >
        <Workhistory />

        <button
          style="margin-top:30px "
          v-on:click="activetab= 6"
          type="submit"
          class="
            inline-flex
            justify-center
            py-2
            px-4
            border border-transparent
             shadow-sm  w-36
            text-sm
            font-medium
            rounded-md
            text-white
            bg-red-600
            hover:bg-red-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
        >
          Save
        </button>
      </div>
      <div
        style="margin:10px"
        v-if="activetab === 7"
        class="tabcontent"
      >
        <Workhistory />

        <button
          style="margin-top:30px "
          v-on:click="activetab= 7"
          type="submit"
          class="
            inline-flex
            justify-center
            py-2
            px-4
            border border-transparent
             shadow-sm  w-36
            text-sm
            font-medium
            rounded-md
            text-white
            bg-red-600
            hover:bg-red-700
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
import General from "~/pages/Employee/General/General";
import Education from "~/pages/Employee/General/Education";
import Employee from "~/pages/Employee/General/Employee";
import Contact from "~/pages/Employee/General/Contact";
import Workhistory from "~/pages/Employee/General/Workhistory";

name: "Tabview";
let activetab = 1;

export default {
  data() {
    return {
      activetab: 1,
      showModal: false,
    };
  },
  components: {
    General,
    Contact,
    Education,
    Employee,
    Workhistory,
  },
  beforeCreate() {
    this.activetab = 1;
  },
};
</script>
