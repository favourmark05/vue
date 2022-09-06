// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div>
    <div class="main-bg">
      <div class="bg-text">
       <h3 class="text-blue-200 tracking-wide text-2xl font-bold">Business Growth</h3>
      <h1 class="text-5xl font-bold tracking-widest mb-3 mt-3">CONSULTING</h1>
      <button class="btn btn-outline rounded-pill border-white font-bold text-xl text-white mt-5 hover:bg-blue-500">Our Service</button> 
      </div>
       
    </div>

    <section>
      <div class="text-black text-center m-5">
            <h1 class="font-bold text-2xl tracking-wide">CONTACT US</h1>
        </div>
      <p class="m-5 text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
        maxime soluta praesentium eos neque illo perspiciatis quasi pariatur
        recusandae, quas voluptas deleniti sunt ducimus doloribus quaerat!
        Veniam repellat molestiae excepturi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. At doloribus iusto corporis quos!
        Praesentium commodi libero doloremque quam maiores sequi rerum, culpa
        repellat ea maxime fugiat minus in autem porro.
        </p>
         <div class="grid lg:grid-cols-2 py-5">
           <div class="m-5">
            <div class="flex">
                <h3 class="mx-3 mb-3 text-xl">ADDRESS:</h3>
                <p>MN-12 Lincon Street, NewYork 12356, USA</p>
            </div>
            <div class="flex">
                <h3 class="mx-3 mb-3 text-xl">PHONE NUMBER</h3>
               <a href="tel:09051204810"> +1 2345 67890 12</a>
            </div>
            <div class="flex">
                <h3 class="mx-3 text-xl">EMAIL:</h3>
                <a href="mailto:egwuenuprecious7@gmail.com">biztech@gmail.com</a>
            </div>
           </div>

           <div class="m-5">
            <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    First Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
                <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Last Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    E-mail
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Message
                </label>
                <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                
                </div>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3">
                <button class="shadow bg-teal-400 hover:bg-teal-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    Send
                </button>
                </div>
                <div class="md:w-2/3"></div>
            </div>
            </form>
           </div>
        </div>
    </section>

    <footer class="text-center text-white" style="background-color: #f1f1f1;">
      <div class="text-center text-gray-700 p-4" style="background-color: rgba(0, 0, 0, 0.2);">
        © 2021 Copyright:
        <a class="text-gray-800" href="https://tailwind-elements.com/">BizTech</a>
      </div>
   </footer>
  </div>
</template>

