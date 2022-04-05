<template>
    <main class='mt-20' >
      <div class="py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8" >
          <div v-if="this.$route.path ==='/Dashboard'" class="py-4" style="box-shadow:0px 0px 8px 0px #888888;">
           <Table/>
          </div>
          <div v-if="this.$route.path ==='/Employee/Addemployee'" class="py-4" style="box-shadow:0px 0px 8px 0px #888888;">
           <Tabview/>
          </div>


        </div>
      </div>
    </main>
</template>

<script>
import Table from "~/components/Table";
import Tabview from "~/components/Tabview";

  export default {
     components: {
    Table,
    Tabview
  },
  }
</script>

<style lang="scss" scoped>

</style>
