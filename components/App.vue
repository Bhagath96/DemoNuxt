<template>
    <main class='mt-20' >
      <div class="py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8" >
          <div v-if="this.$route.path ==='/DashBoard'" class="py-4" style="box-shadow:0px 0px 8px 0px #888888;">
           <Table/>
          </div>
          <div v-if="this.$route.path ==='/Employee/AddEmployee'" class="py-4" style="box-shadow:0px 0px 8px 0px #888888;">
           <TabView/>
          </div>


        </div>
      </div>
    </main>
</template>

<script>
import Table from "~/components/Table";
import TabView from "~/components/TabView";

  export default {
     components: {
    Table,
    TabView
  },
  }
</script>

<style lang="scss" scoped>

</style>
