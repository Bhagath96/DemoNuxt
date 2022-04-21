<template>
<div>
  <Sidebar />
   <div class="md:pl-64 flex flex-col flex-1">
     <Header />
     <App />
   </div>
</div>
</template>

<script>
 import Sidebar from "~/components/Sidebar";
 import Header from "~/components/Header";
 import App from "~/components/App";

  export default {
    components:{
      Sidebar,
      Header,
      App,
    },


  }
</script>

<style lang="scss" scoped>

</style>
