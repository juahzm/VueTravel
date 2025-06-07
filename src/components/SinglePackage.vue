<template>
 <div v-for="(place, i) in destinations" :key="i" class="container border-2 rounded my-6 ml-6 pl-10 pr-10 pb-8 transition-shadow duration-100 hover:shadow-lg">
 {{place}}
  <h4 class="text-blue-400 text-lg font-bold text-center rounded-lg my-8 cursor-pointer">hello</h4>
            <div class="flex flex-row gap-9 justify-left">
                <div>
                <img>
                </div>
                <div>
                    <p> <strong class="text-blue-400">Destination:</strong> </p>
                    <p> <strong class="text-blue-400">Description: </strong> </p>
                    <p> <strong class="text-blue-400">Price: </strong>$  CAD</p>
                    <p> <strong class="text-blue-400">Category: </strong> </p>
                </div>
                <div class="flex flex-col gap-y-5">
                    <a class="text-green-400 text-4xl cursor-pointer" to=""></a>
                    <a class="text-red-400 text-3xl cursor-pointer" onClick="" ></a>
                </div>
            </div>
        </div >
</template>
<script>
export default {
  props: ['destinations']
}
</script>
