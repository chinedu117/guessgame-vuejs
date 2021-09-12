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

      <div class="font-thin text-xl mb-4">
        Guess the secret <br />
        prime number!
      </div>

      <div class="font-thin text-base  mb-4">
        The secret number is a prime number under 100. <br />
        You have to sum up <b>4</b> numbers to reach the secret<br />
        number. For example, if the number is <b>11</b>, the four <br />clues
        could be 4, 2, 4, 1.
      </div>

      <div>
        <label for="" class="block font-bold">Guess the number</label>
        <div class="flex ">

          <input type="text" class=" flex-grow border-red-500" />

          <button
            type="button"
            class=" ml-3 px-4 bg-blue-600 text-white rounded-sm shadow-md font-bold "
          >
            Check
          </button>
        </div>
      </div>

      <div class="mt-4 grid grid-cols-2 gap-2">

          <div class="bg-green-700 text-center text-gray-300 text-3xl font-bold  p-10">?</div>
          <div class="bg-green-700  text-center text-gray-300 text-3xl font-bold  p-10">?</div>
          <div class="bg-green-700 text-center text-gray-300 text-3xl font-bold  p-10">?</div>
          <div class="bg-green-700 text-center text-gray-300 text-3xl font-bold  p-10">?</div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    
  },
  name: "Home",
};
</script>
