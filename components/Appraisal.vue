 <template>
 <div>
  <div v-if="!IsSave" class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="grid grid-cols-12 gap-4 mt-3 py-3 pl-8">
      <div class="col-span-12 md:col-span-6 lg:col-span-3">
        <Search />
      </div>
      <div class="col-span-12 self-end md:col-span-6 lg:col-span-3">
        <button
          type="button"
          class="
            inline-flex
            items-center
            px-4
            py-2
            border border-gray-300
            rounded-md
            shadow-sm
            text-sm
            font-medium
            text-gray-700
            bg-white
            hover:bg-gray-50
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
          @click="toggleModal"
        >
          <!-- Heroicon name: solid/pencil -->

          Appraisal
        </button>
      </div>
    </div>
    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
      <div
        class="
          overflow-hidden
          shadow
          ring-1 ring-black ring-opacity-5
          md:rounded-lg
        "
      >
        <table class="min-w-full divide-y divide-gray-300">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="
                  px-3
                  py-3.5
                  text-left text-sm
                  font-semibold
                  text-gray-900
                "
              >
                Developer
              </th>
              <th
                scope="col"
                class="
                  py-3.5
                  pl-4
                  pr-3
                  text-left text-sm
                  font-semibold
                  text-gray-900
                  sm:pl-6
                "
              >
                Department
              </th>
              <th
                scope="col"
                class="
                  px-3
                  py-3.5
                  text-left text-sm
                  font-semibold
                  text-gray-900
                "
              >
                Amount
              </th>
              <th
                scope="col"
                class="
                  px-3
                  py-3.5
                  text-left text-sm
                  font-semibold
                  text-gray-900
                "
              >
                Date
              </th>
              <th
                scope="col"
                class="
                  px-3
                  py-3.5
                  text-left text-sm
                  font-semibold
                  text-gray-900
                "
              >
                Status
              </th>
              <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-white">
            <tr v-for="item in filteredRows" :key="item.id">
              <td class="whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                {{ item.designation }}
              </td>
    <td class="whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                {{ item.department }}
              </td>
                <td class="whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                {{ item.amount }}
              </td>
              <td class="whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                <div class="text-gray-500">{{ item.date }}</div>
              </td>
              <td class="whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                <span
                  class="
                    inline-flex
                    rounded-full
                    bg-green-100
                    px-2
                    text-xs
                    font-semibold
                    leading-5
                    text-green-800
                  "
                  >{{ item.status }}</span
                >
              </td>

              <td
                class="
                  relative
                  whitespace-nowrap
                  py-3
                  pl-3
                  pr-4
                  text-right text-sm
                  font-medium
                  sm:pr-6
                "
              >
                <a href="#" class="text-indigo-600 hover:text-indigo-900"
                  >Edit<span class="sr-only"></span
                ></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Apprisalmodal :toggleModal="toggleModal" :IsSaved="IsSaved" v-if="showmodal" />
  </div>
  <Apprisaltree v-if="IsSave" />
  </div>

</template>

<script>
import Apprisalmodal from "~/components/Apprisalmodal";
import Apprisaltree from "~/components/Apprisaltree";
import Search from "~/components/Search";

export default {
  name: "Appraisal",
  data() {
    return {
      searchQuery: "",
      showmodal: false,
      IsSave:false,
      listItems: [
        {
          id: 1,
          designation: " Developer One",
          department: "ABCD",
          amount: "1000",
          date: "12/02/2020",
          status: "Active",
        },
        {
          id: 2,
          designation: "Developer Two",
          department: "ABCD",
          amount: "728",
          date: "08/04/2020",
          status: "Active",
        },
        {
          id: 3,
          designation: "Developer Three",
          department: "ABCD",
          amount: "56378",
          date: "20/07/2021",
          status: "Active",
        },
        {
          id: 4,
          designation: "Developer Four",
          department: "ABCD",
          amount: "432323",
          date: "17/09/2021",
          status: "Active",
        },
        {
          id: 5,
          designation: "Developer Five",
          department: "ABCD",
          amount: "2345",
          date: "28/02/2019",
          status: "Active",
        },
      ],
    };
  },
  methods: {
    async toggleModal() {
      console.log('showmodal',this.showmodal);
      this.showmodal = !this.showmodal;
    },
    async IsSaved(){
      console.log('IsSaveIsSaveIsSaveIsSaveIsSave',this.IsSave);
      this.IsSave = !this.IsSave;
    }
  },
  computed: {
    filteredRows() {
      return this.listItems.filter((row) => {
        const designation = row.designation.toString().toLowerCase();
        const searchTerm = this.searchQuery.toLowerCase();

        return designation.includes(searchTerm);
      });
    },
  },
};
</script>
