<template>
<div class="w-50 h-50 border-2 border-gray-400 p-5 bg-white ml-20 mb-10">
    <h3 class="text-lg font-bold mb-2">Reviews:</h3>
    <ul v-if="reviews.length">
  <li v-for="(review, index) in reviews" :key="index" class="mb-3">
    <span class="font-semibold">{{ review.name }}</span> gave this
    <span class="text-yellow-600">{{ review.rating }} stars</span>
    <br>
    <span class="italic"><p class="not-italic font-bold">comment: </p>"{{ review.content }}"</span>
  </li>
</ul>
<p v-else>No reviews yet.</p>

</div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
    reviews: {
        type: Array,
        required: true
    }
})
</script>