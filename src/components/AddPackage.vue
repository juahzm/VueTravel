<template>
 <form class="mt-10 ml-10 mr-10 basis-[1000px] max-w-[1000px] " onSubmit="">
            <h2 className="text-lg text-center font-bold mb-4 text-blue-700">Add Package</h2>
            <div>
                <input
                    type="text"
                    name="packageName"
                    value=""
                    placeholder="Package Name"
                    class="w-full p-2 mb-2 border rounded"
                    onChange=""
                />
            </div>
            <div>
                <input
                    type="text"
                    name="country"
                    value=""
                    placeholder="Country"
                    class="w-full p-2 mb-2 border rounded"
                    onChange=""
                />
            </div>

            <div>
                <textarea
                    name="description"
                    placeholder="Description"
                    value=""
                    class="w-full p-2 mb-2 border rounded"
                    onChange=""
                />
            </div>
            <div>
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value=""
                    class="w-full p-2 mb-2 border rounded"
                    onChange=""
                />
            </div>

            <div>
                <input
                    type="text"
                    name="category"
                    value=""
                    placeholder="Category"
                    class="w-full p-2 mb-4 border rounded"
                    onChange=""
                />
            </div>

            <div>
                <input
                    type="text"
                    name="image"
                    value=""
                    placeholder="url"
                    class="w-full p-2 mb-4 border rounded"
                    onChange=""
                />
            </div>

            <div className="flex gap-4">
                <input type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" value="Save" />
            </div>
        </form>
</template>
