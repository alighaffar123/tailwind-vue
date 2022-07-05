<template>
  <aside class="fixed sidebar:block hidden w-[285px] bg-olive">
    <div
      class="h-[58px] text-white bg-primary flex justify-center items-center"
    >
      <fa class="mr-2 mb-[1px] text-[21px]" icon="home" />
      <h2 class="inline-block text-[25px] font-bold">H.Dashboard</h2>
    </div>
    <div
      class="
        pt-[30px]
        pb-[150px]
        overflow-y-scroll overflow-x-hidden
        h-[100vh]
        scrollbar-hide
      "
    >
      <ul class="list-none text-Dark-Gray p-0">
        <li class="px-5 text-xl mt-[29px] mb-3">
          <span>GENERAL</span>
        </li>
        <li class="hover:bg-Black-Olive hover:font-bold relative py-[17px]">
          <span
            class="
              absolute
              content-['*']
              w-full
              h-[1px]
              bg-Black-Olive
              bottom-0
            "
          ></span>
          <a
            href=""
            class="
              text-decoration-none text-[21px] text-Dark-Gray
              px-[19px]
              flex
              justify-center
              items-center
            "
          >
            <fa class="text-[21px] w-[25px]" icon="dashboard" />
            <p class="text-[19px] ml-[30px] mb-0 inline-block">Dashboard</p>
            <fa class="ml-auto text-[18px]" icon="angle-right" />
          </a>
        </li>
        <li class="hover:bg-Black-Olive hover:font-bold relative py-[17px]">
          <span
            class="
              absolute
              content-['*']
              w-full
              h-[1px]
              bg-Black-Olive
              bottom-0
            "
          ></span>
          <a
            href=""
            class="
              text-decoration-none text-[21px] text-Dark-Gray
              px-[19px]
              flex
              justify-center
              items-center
            "
          >
            <fa class="text-[21px] w-[25px]" icon="display" />
            <p class="text-[19px] ml-[30px] mb-0 inline-block">Layout</p>
            <fa class="ml-auto text-[18px]" icon="angle-right" />
          </a>
        </li>
        <li class="hover:bg-Black-Olive hover:font-bold relative py-[17px]">
          <span
            class="
              absolute
              content-['*']
              w-full
              h-[1px]
              bg-Black-Olive
              bottom-0
            "
          ></span>
          <a
            href=""
            class="
              text-decoration-none text-[21px] text-Dark-Gray
              px-[19px]
              flex
              justify-center
              items-center
            "
          >
            <fa class="text-[21px] w-[25px]" icon="folder" />
            <p class="text-[19px] ml-[30px] mb-0 inline-block">Pages</p>
            <fa class="ml-auto text-[18px]" icon="angle-right" />
          </a>
        </li>
        <li class="px-5 text-xl mt-[29px] mb-3">
          <span>ELEMENT</span>
        </li>
        <li class="hover:bg-Black-Olive hover:font-bold relative py-[17px]">
          <span
            class="
              absolute
              content-['*']
              w-full
              h-[1px]
              bg-Black-Olive
              bottom-0
            "
          ></span>
          <a
            href=""
            class="
              text-decoration-none text-[21px] text-Dark-Gray
              px-[19px]
              flex
              justify-center
              items-center
            "
          >
            <fa class="text-[21px] w-[25px]" icon="gear" />
            <p class="text-[19px] ml-[30px] mb-0 inline-block">UI Element</p>
            <fa class="ml-auto text-[18px]" icon="angle-right" />
          </a>
        </li>
        <li class="hover:bg-Black-Olive hover:font-bold relative py-[17px]">
          <span
            class="
              absolute
              content-['*']
              w-full
              h-[1px]
              bg-Black-Olive
              bottom-0
            "
          ></span>
          <a
            href=""
            class="
              text-decoration-none text-[21px] text-Dark-Gray
              px-[19px]
              flex
              justify-center
              items-center
            "
          >
            <fa class="text-[21px] w-[25px]" icon="chart-line" />
            <p class="text-[19px] ml-[30px] mb-0 inline-block">Charts</p>
            <fa class="ml-auto text-[18px]" icon="angle-right" />
          </a>
        </li>
        <li class="hover:bg-Black-Olive hover:font-bold relative py-[17px]">
          <span
            class="
              absolute
              content-['*']
              w-full
              h-[1px]
              bg-Black-Olive
              bottom-0
            "
          ></span>
          <a
            href=""
            class="
              text-decoration-none text-[21px] text-Dark-Gray
              px-[19px]
              flex
              justify-center
              items-center
            "
          >
            <fa class="text-[21px] w-[25px]" icon="boxes-stacked" />
            <p class="text-[19px] ml-[30px] mb-0 inline-block">Structure</p>
            <fa class="ml-auto text-[18px]" icon="angle-right" />
          </a>
        </li>
        <li class="hover:bg-Black-Olive hover:font-bold relative py-[17px]">
          <span
            class="
              absolute
              content-['*']
              w-full
              h-[1px]
              bg-Black-Olive
              bottom-0
            "
          ></span>
          <a
            href=""
            class="
              text-decoration-none text-[21px] text-Dark-Gray
              px-[19px]
              flex
              justify-center
              items-center
            "
          >
            <fa class="text-[21px] w-[25px]" icon="gavel" />
            <p class="text-[19px] ml-[30px] mb-0 inline-block">Widgests</p>
            <fa class="ml-auto text-[18px]" icon="angle-right" />
          </a>
        </li>
        <li class="hover:bg-Black-Olive hover:font-bold relative py-[17px]">
          <span
            class="
              absolute
              content-['*']
              w-full
              h-[1px]
              bg-Black-Olive
              bottom-0
            "
          ></span>
          <a
            href=""
            class="
              text-decoration-none text-[21px] text-Dark-Gray
              px-[19px]
              flex
              justify-center
              items-center
            "
          >
            <fa class="text-[21px] w-[25px]" icon="table-list" />
            <p class="text-[19px] ml-[30px] mb-0 inline-block">Tables</p>
            <fa class="ml-auto text-[18px]" icon="angle-right" />
          </a>
        </li>
        <li class="hover:bg-Black-Olive hover:font-bold relative py-[17px]">
          <span
            class="
              absolute
              content-['*']
              w-full
              h-[1px]
              bg-Black-Olive
              bottom-0
            "
          ></span>
          <a
            href=""
            class="
              text-decoration-none text-[21px] text-Dark-Gray
              px-[19px]
              flex
              justify-center
              items-center
            "
          >
            <fa class="text-[21px] w-[25px]" icon="pen" />
            <p class="text-[19px] ml-[30px] mb-0 inline-block">Form Stuforf</p>
            <fa class="ml-auto text-[18px]" icon="angle-right" />
          </a>
        </li>

        <li class="px-5 text-xl mt-[29px] mb-3">
          <span>EXTRA</span>
        </li>
        <li class="hover:bg-Black-Olive hover:font-bold relative py-[17px]">
          <span
            class="
              absolute
              content-['*']
              w-full
              h-[1px]
              bg-Black-Olive
              bottom-0
            "
          ></span>
          <a
            href=""
            class="
              text-decoration-none text-[21px] text-Dark-Gray
              px-[19px]
              flex
              justify-center
              items-center
            "
          >
            <fa class="text-[21px] w-[25px]" icon="envelope" />
            <p class="text-[19px] ml-[30px] mb-0 inline-block">Email</p>
            <span class=" bg-Vivid text-white text-[14px] leading-none font-medium mr-2 px-[5px] py-[3px] rounded-lg   ml-auto">4 Unread</span>
            <fa class="ml-auto text-[18px]" icon="angle-right" />
          </a>
        </li>
        <li class="hover:bg-Black-Olive hover:font-bold relative py-[17px]">
          <span
              class="
                absolute
                content-['*']
                w-full
                h-[1px]
                bg-Black-Olive
                bottom-0
              "
          >
          </span>
          <a
            href=""
            class="
              text-decoration-none text-[21px] text-Dark-Gray
              px-[19px]
              flex
              justify-center
              items-center
            "
            >
            <fa class="text-[21px] w-[25px]" icon="comments" />
            <p class="text-[19px] ml-[30px] mb-0 inline-block">Chat</p>
            <fa class="ml-auto text-[18px]" icon="angle-right" />
          </a>
        </li>
        <li class="hover:bg-Black-Olive hover:font-bold relative py-[17px]">
          <span
            class="
              absolute
              content-['*']
              w-full
              h-[1px]
              bg-Black-Olive
              bottom-0
            "
          ></span>
          <a
            href=""
            class="
              text-decoration-none text-[21px] text-Dark-Gray
              px-[19px]
              flex
              justify-center
              items-center
            "
          >
            <fa class="text-[21px] w-[25px]" icon="location-dot" />
            <p class="text-[19px] ml-[30px] mb-0 inline-block">Maps</p>
            <fa class="ml-auto text-[18px]" icon="angle-right" />
          </a>
        </li>
        <li class=" px-5 pt-[60px] pb-5 ">
          <p class=" text-[16px] m-0 mb-1 text-Bright-Gray ">Milestone</p>
              <div class="w-[212px] h-[7px] bg-gray-200 rounded-full  ">
                <div class="bg-Dark-Lemon h-full rounded-full w-[55%]" ></div>
            </div>
        </li>
        <li class="px-5 ">
          <p class=" text-[16px] m-0 mb-1 text-Bright-Gray ">Release</p>
              <div class="w-[212px] h-[7px] bg-gray-200 rounded-full  ">
                <div class="bg-Light-Sea h-full rounded-full w-[75%]" ></div>
            </div>          
        </li>
      </ul>
    </div>
  </aside>
</template>
<script>
export default {
  name: "side-bar",
};
</script>
