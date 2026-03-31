<script setup>
import { ref ,computed} from 'vue';
import reviewForm from '@/reviewForm.vue';
import reviewList from './reviewList.vue';
import socksGreenImage from '@/assets/img/socksGreen.png';
import socksBlueImage from '@/assets/img/socksBlue.webp';
const product = ref('Socks');
const brand = ref('Amazon');
const reviews = ref([])
const title = computed(() => {
  return brand.value + ' ' + product.value
});
const emit = defineEmits(['add-to-cart'],['remove-from-cart'])
const selectedVariant = ref(0);

const addReview = (review) =>{
  reviews.value.push(review)
}
const details = ref(['50% cotton', '30% wool','30% polyester']);
const variants = ref([
  { id: 2234, color: 'green', image: socksGreenImage, quantity: 50},
  {id: 2235, color: 'blue', image: socksBlueImage, quantity: 0}
  ]);
 
  const image = computed(() => {
   return variants.value[selectedVariant.value].image
  });
  const inStock = computed(() => {
   return variants.value[selectedVariant.value].quantity
  });
  const addToCart = () => {
    emit('add-to-cart', variants.value[selectedVariant.value].id)
  };
  const removeFromCart = () => {
    emit('remove-from-cart', variants.value[selectedVariant.value].id)
  };
  const updateVariant = (index) => {
    selectedVariant.value = index
  }
  const onSale = ref(true);
  const salesMessage = computed(() => {
    return brand.value + ' ' + product.value + ' ' + 'is on sale'
  })
  const props = defineProps({
    premium: {
      type: Boolean,
      required: true
    }
  })
  const shipping = computed (() => {
    if (props.premium){
      return 'Free'
    }else {
      return 2.99
    }
  })
</script>
<template>
    <div>
      <div class="flex gap-25 mx-10 my-10">
        <div class="bg-gray-200 w-85 h-85 p-2 border-2 border-gray-400">
          <div class="bg-white w-80">
            <img :src="image">
          </div>
        </div>
        <div>
          <h1 class="text-4xl font-bold">{{ title }}</h1><br>
          <h2 v-if="onSale">{{ salesMessage }}</h2>
          <p class="text-xl text-gray-700" v-if="inStock > 10">In Stock</p>
          <p class="text-xl text-gray-700" v-else-if="inStock <= 10 && inStock > 0">Almost Sold Out!</p>
          <p class="text-xl text-gray-700" v-else>Out Of Stock</p>
          <p>Shiping: {{ shipping }}</p><br>
          <ul>
            <li v-for="detail in details " class="pl-10">{{ detail }}</li>
          </ul>
          <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
          :style="{backgroundColor: variant.color}" class="cursor-pointer w-10 h-10 mt-3 rounded-full border-2"></div>
          <div class="cursor-pointer flex gap-3 mt-5">
            <button @click="addToCart" class="bg-gray-800 w-30 h-12 border-2 border-gray-500 rounded-sm text-white" :disabled="!inStock" 
            :class="{ disabledButton:!inStock }"
            >Add To Cart</button>
            <button @click="removeFromCart" class="bg-gray-800 w-38 h-12 border-2 border-gray-500 rounded-sm text-white">Remove From Cart</button>
          </div>
        </div>
      </div>
      <reviewList :reviews="reviews"></reviewList>
      <reviewForm @review-submitted="addReview"></reviewForm>
    </div>
</template>