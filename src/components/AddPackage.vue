<template>

    <div v-show="message" class="bg-red-500 mt-6 mb-2 text-white p-2 rounded text-center w-64 mx-auto">{{ message }}</div>
    <div v-if="!submitted">
        <form @submit.prevent="saveForfait" class="mt-10 ml-10 mr-10 basis-[1000px] max-w-[1000px] ">
            <h2 class="text-lg text-center font-bold mb-4 text-blue-700">Add Package</h2>
            <div>
                <label for="packageName" class="block text-sm font-medium text-gray-700">Package Name</label>
                <input v-model="forfait.packageName" type="text" name="packageName" id="packageName"
                    placeholder="Package Name" class="w-full p-2 mb-2 border rounded" />
            </div>
            <div>
                <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
                <input v-model="forfait.country" type="text" name="country" id="country" placeholder="Country Name"
                    class="w-full p-2 mb-2 border rounded" />
            </div>

            <div>
                <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                <textarea v-model="forfait.description" name="description" placeholder="Description" id="description"
                    class="w-full p-2 mb-2 border rounded" />
            </div>
            <div>
                <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
                <input v-model="forfait.price" type="text" name="price" id="price" placeholder="price"
                    class="w-full p-2 mb-2 border rounded" />
            </div>

            <div>
                <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
                <input v-model="forfait.category" type="text" name="category" id="category" placeholder="Category"
                    class="w-full p-2 mb-2 border rounded" />
            </div>

            <div>
                <label for="image" class="block text-sm font-medium text-gray-700">Image</label>
                <input v-model="forfait.image" type="text" name="image" id="image" placeholder="url"
                    class="w-full p-2 mb-2 border rounded" />
            </div>

            <div class="flex gap-4">
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
            </div>

        </form>
    </div>

</template>
<script>
import ForfaitDataService from '@/services/ForfaitDataService'

export default {
  props: ['addFor'],
  data () {
    return {
      message: null,
      submitted: false,
      forfait: {
        packageName: '',
        country: '',
        description: '',
        price: '',
        category: '',
        image: ''
      }
    }
  },
  methods: {
    saveForfait () {
      ForfaitDataService.create(this.forfait)
        .then((response) => {
          //  console.log(response.data)
          this.forfait.id = response.data.id
          this.addFor(this.forfait)
          this.message = null
          this.submitted = true
        })
        .catch((e) => {
          this.message = e.response.data.message
        })
      // console.log(this.product)
    },
    addForfait () {
      this.submitted = false
      this.forfait = {
        packageName: '',
        country: '',
        description: '',
        price: '',
        category: '',
        image: ''
      }
    }
  }
}

</script>
