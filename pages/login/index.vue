<template>
  <div class="bg-black">
    <div
      class="bg-[url('/bg/loginbg.png')] opacity-50 pb-[200px] bg-no-repeat bg-cover pt-[129px] bg-black text-white"
    >
      <div class="pt-[129px] text-center">
        <p class="stroke lg:mt-10 text-[48px] lg:text-[36px]">Login</p>
        <p class="text-sm font-semibold mt-[15px]">
          Home/ <span class="text-[#B8F146]">Login</span>
        </p>
      </div>
    </div>

    <!-- login form -->
    <div class="flex justify-center pt-10 bg-[#020015]">
      <div class="w-[526px] h-[446px] bg-[#04091b] px-[50px]">
        <div class="flex flex-col items-center px-3 pt-6">
          <p class="text-left text-white">Login To Your Account</p>
          <input
            type="text"
            placeholder="Email or Username"
            class="text-[#bdbadb] border-b-[1px] border-gray-900 bg-[#04091b] outline-none w-[426px] h-[50px] my-[15px] text-sm font-normal px-[2px] hover:border-[#9FF550]"
            required
          />
          <input
            type="password"
            placeholder="Password"
            class="text-[#bdbadb] border-b-[1px] border-gray-900 bg-[#04091b] outline-none w-[426px] h-[50px] my-[15px] text-sm font-normal px-[2px] hover:border-[#9FF550]"
            required
          />
          <div class="flex justify-between w-full">
            <div>
              <label class="inline-flex items-center">
                <input type="checkbox" class="text-green-400 form-checkbox" />
                <span class="ml-2 text-white">Remember me</span>
              </label>
            </div>
            <p class="text-[#81ee50]">Forgot password?</p>
          </div>
          <button
            class="custom-gradient w-[426px] h-[58px] rounded-md mt-10 text-[#284325] pt-22"
          >
            SIGN IN
          </button>
          <p class="text-left w-full text-[#bdbadb] text-sm pt-5">
            Don't have an account?<span class="pl-1 text-[#37b23b]"
              >Create account</span
            >
          </p>
        </div>
      </div>
    </div>

    <!-- <div
      class="flex items-center ] justify-center w-full bg-[url('/bg/logincard.png')] pb-[126px] bg-no-repeat"
    >
      <form class="pt-[70px]">
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Email or username</label
          >
        </div>
        <div class="relative z-0 md:w-[540px] w-full group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75"
            >Password</label
          >
        </div>
        <div class="flex items-center justify-between mt-6">
          <div class="text-white">
            <input type="checkbox" class="w-[14px]" />
            <label for="remember " class="ml-1 text-base">Remember me</label>
          </div>

          <div class="text-[#B8F146] text-base font-semibold">
            forgot password
          </div>
        </div>
        <button
          type="submit"
          class="font-semibold md:w-[540px] w-full mt-6 py-3.5 text-black rounded bg-gradient-to-r from-[#B8F146] to-[#6DFD63]"
        >
          sign
        </button>
        <p class="mt-6 text-sm text-white">
          Don't have an account?
          <span class="text-[#B8F146] ml-2">Create account</span>
        </p>
      </form>
    </div> -->
    <Footer />
  </div>
</template>
