<template>
    <div v-for="(place, key, i) in destinations" :key="i"
        class=" basis-[1000px] max-w-[1000px] border-2 rounded my-6 ml-6 p-8 transition-shadow duration-100 hover:shadow-lg">
        <h4 class="text-blue-400 text-lg font-bold text-center rounded-lg my-8 cursor-pointer">{{ place.packageName }}
        </h4>
        <div class="flex items-center flex-row gap-9 justify-center">
            <div>
                <img class="w-[250px] rounded transition-transform duration-200 ease-in-out hover:scale-110"
                    :src="place.image" :alt="place.country" />
            </div>
            <div class="w-[450px]">
                <p> <strong class="text-blue-400">Destination:</strong>{{ place.country }} </p>
                <p> <strong class="text-blue-400">Description: </strong>{{ place.description }} </p>
                <p> <strong class="text-blue-400">Price: </strong>$ {{ place.price }} CAD</p>
                <p> <strong class="text-blue-400">Category: </strong> {{ place.category }}</p>
            </div>
            <div class="flex flex-col gap-y-5">
                <router-link :to="{ name: 'edit-package', params: { id: place.id } }"
                    class="btn-blue text-1xl cursor-pointer">Edit</router-link>
                <button @click="deleteFor(place.id)" class="btn-red text-1xl cursor-pointer">Delete</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['destinations', 'deleteFor']
}
</script>
