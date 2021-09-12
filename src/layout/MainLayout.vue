<template>
  <div class="container">
    <div
      class=" max-w-md mx-auto mt-4 p-4 shadow-md rounded-sm border border-gray-500"
    >
      <h3
        class="w-24 text-4xl px-1 py-1 border-2 border-red-600 text-red-600 text-center my-4"
      >
        GTN
      </h3>

      <slot/>
 
    </div>
  </div>
</template>

<script>
export default {
    name: "main-layout",
}
</script>
<style lang="">
    
</style>