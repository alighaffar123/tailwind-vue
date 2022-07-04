<template>
    <div class=" relative bg-white h-[58px] ">
        <span class=" block w-full h-[1px] bg-light-Gray absolute bottom-[-1px] ">
        </span>
        <div class=" container px-[30px] h-full">
            <div class="pt-2 flex justify-between items-center flex-wrap py-2 h-full">
                <div class=" items-center flex">
                    <div class=" relative">
                        <span class=" block w-[1px] h-[58px] bg-light-Gray absolute top-[-14px] right-0 ">
                            </span>
                        <a href="" class="mr-6  text-Davy-Grey text-[20px]">
                             <fa icon="bars-staggered" />
                        </a>
                    </div>
                    <div class="px-5 relative">
                        <span class=" text-Davy-Grey pr-2  text-[19px]" > English </span>
                        <a href="">
                            <fa icon="sort-down" class="mb-1 text-[19px] text-Davy-Grey" />
                        </a>
                        <span class=" block w-[1px] h-[58px] bg-light-Gray absolute top-[-14px] right-0 ">
                            </span>
                    </div>
                    <a href="" class="ml-5">
                        <fa class=" text-Davy-Grey text-[19px]" icon="search" />
                    </a>                   
                </div>
                <div class="items-center flex">
                    <div class="pr-5 relative">
                        <a href="" class=" relative">
                            <fa class="pt-2  text-Davy-Grey text-[22px]" icon="bell" />
                            <span class="absolute top-[-6px] right-0 inline-flex items-center justify-center px-[9px] py-[2px] text-[14px] font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-Vivid rounded-full">9</span>

                        </a>
                        <span class=" block w-[1px] h-[58px] bg-light-Gray absolute top-[-12px] right-0 ">
                            </span>
                    </div>
                    <div class="px-5 relative">
                        <a href="" class="relative ">
                            <fa class=" text-Davy-Grey pt-1  text-[25px]" icon="envelope" />
                            <span class="absolute top-[-6px] right-0 inline-flex items-center justify-center px-[9px] py-[2px] text-[14px] font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-primary rounded-full">9</span>

                        </a>
                        <span class=" block w-[1px] h-[58px] bg-light-Gray absolute top-[-13px] right-0 ">
                            </span>
                    </div>
                    <div class="px-5 relative">
                        <a href="" class=" relative">
                            <fa class="pt-1  text-Davy-Grey text-[25px]" icon="bars" />
                              <span class="absolute top-[-6px] right-0 inline-flex items-center justify-center px-[9px] py-[2px] text-[14px] font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-Dark-Lemon rounded-full">9</span>

                        </a>
                        <span class=" block w-[1px] h-[58px] bg-light-Gray absolute top-[-13px] right-0 ">
                            </span>
                    </div>
                    <div class="pl-5 flex items-center ">
                        <a href="">
                            <img
                            class="rounded-full h-[40px] w-[40px] object-cover"
                            src="../assets/img/navbar/profile.jpg"
                            alt=""
                            />                            
                        </a>
                        <span class="ml-[15px] text-Davy-Grey ">Hungft</span>
                        <a href="" class="ms-auto">
                            <fa class=" text-Davy-Grey text-[20px] mb-1 ml-7 " icon="sort-down" />
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "nav-bar"
}
</script>
