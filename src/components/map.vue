<template>
    <div class=" container max-w-full px-[30px] pb-[30px]">
        <div class=" grid 2xl:grid-rows-[330px] sm:grid-rows-[330px_330px] grid-rows-[330px_635px] grid-cols-[100%] 2xl:grid-cols-[60%_40%] ">
           
            <div class="h-full w-full">
                <GoogleMap
                    api-key="AIzaSyCZcLipUHRw-52ddpIL6bHLAW9Q5nfYvzo"
                    class="h-full w-full"
                    :center="center"
                    :zoom="15"
                    >
                    <Marker :options="{ position: center }" />
                </GoogleMap>
            </div>
            <div  class="bg-white w-full grid sm:grid-rows-[55%_45%] grid-rows-[120px_500px]  grid-cols-[100%] p-4  ">
                <div class=" relative ">
                    <a href="" class=" absolute right-0 top-[-6px] ">
                        <fa icon="xmark" class=" text-Crayola text-[20px]"/>
                    </a>
                    <div class=" text-Dim-Gray absolute bottom-[29px] leading-[18px] ">
                        <h5 class="mb-[3px] font-bold text-[15px] ">
                             SALES MONITER 
                        </h5>
                        <p class=" m-0 text-sm w-[91%] text-Dark-Gray "> Easyto review sales activies by the world map to the improve markit planing </p>
                    </div>
                </div>
                <div class="sm:flex grid grid-rows-3 sm:grid-rows-none grid-cols-1  sm:grid-cols-none justify-center  ">
                    <div  class=" mx-auto sm:ms-0 my-5 sm:my-0 w-[100px] h-[100px] bg-[#ccc] rounded-full relative ">
                        
                        <div style="clip: rect(0px, 100px, 100px, 50px);" class="w-[100px] h-[100px] rounded-full absolute ">
                            <div style="clip: rect(0px, 50px, 100px, 0px);" class="rotate-90 animate-[fill_ease-in-out_3s] w-[100px] h-[100px] rounded-full  bg-primary absolute"></div>
                        </div>
                        
                        <div class=" hover:text-[30px] hover:h-[90px] hover:w-[90px] hover:mt-[5px] hover:ml-[5px] h-[85px] w-[85px] rounded-full bg-[#ffffff] leading-[90px] text-center mt-[7px] ml-[7px] text-primary  absolute text-[20px] ">
                            25%
                        </div>
                        <p class=" text-[15px] absolute bottom-[-25px] left-[5px]  text-center text-[#756f6f] ">United State</p>
                  
                    </div>
                    <div  class="w-[100px] my-5 sm:my-0 h-[100px] bg-[#ccc] mx-auto rounded-full relative ">
                        
                        <div style="clip: rect(0px, 100px, 100px, 50px);" class="w-[100px] h-[100px] rounded-full absolute ">
                            <div style="clip: rect(0px, 50px, 100px, 0px);" class="rotate-90 animate-[fill_ease-in-out_3s] w-[100px] h-[100px] rounded-full  bg-primary absolute"></div>
                        </div>
                        <div style="clip: rect(0px, 100px, 100px, 50px);" class=" rotate-90 animate-[fill_ease-in-out_3s]  w-[100px] h-[100px] rounded-full absolute">
                            <div style="clip: rect(0px, 50px, 100px, 0px);" class=" rotate-90 animate-[fill_ease-in-out_3s]  w-[100px] h-[100px] rounded-full bg-primary absolute"></div>
                        </div>
                        <div class=" hover:text-[30px] hover:h-[90px] hover:w-[90px] hover:mt-[5px] hover:ml-[5px] h-[85px] w-[85px] rounded-full bg-[#ffffff] leading-[90px] text-center mt-[7px] ml-[7px] text-primary  absolute text-[20px] ">
                            50%
                        </div>
                        <p class=" text-[15px] absolute bottom-[-25px] left-[5px]  text-center text-[#756f6f] ">United State</p>
                    
                    </div>
                    <div  class="mx-auto sm:ms-0 my-5 sm:my-0 w-[100px] h-[100px] bg-[#ccc] rounded-full relative  ">
                        
                        <div style="clip: rect(0px, 100px, 100px, 50px);" class="w-[100px] h-[100px] rounded-full absolute ">
                            <div style="clip: rect(0px, 50px, 100px, 0px);" class="rotate-90 animate-[fill_ease-in-out_3s] w-[100px] h-[100px] rounded-full  bg-primary absolute"></div>
                        </div>
                        <div style="clip: rect(0px, 100px, 100px, 50px);" class=" rotate-90 animate-[fill_ease-in-out_3s]  w-[100px] h-[100px] rounded-full absolute">
                            <div  class=" rotate-90 animate-[fill_ease-in-out_3s]  w-[100px] h-[100px] rounded-full bg-primary absolute"></div>
                        </div>
                        <div class=" hover:h-[90px] hover:w-[90px] h-[85px] w-[85px] rounded-full bg-[#ffffff] leading-[90px] text-center hover:mt-[5px] hover:ml-[5px] mt-[7px] ml-[7px] text-primary  absolute  hover:text-[30px] text-[20px] ">
                            75%
                        </div>
                        <p class=" text-[15px] absolute bottom-[-25px] left-[5px]  text-center text-[#756f6f] ">United State</p>
                    
                    </div>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>

import { defineComponent } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'
export default defineComponent({
  name:"vue-map",
  components: { GoogleMap, Marker },
  
  setup() {
   
    const center = { lat: 40.689247, lng: -74.044502 }

    return { center }
  },
})
</script>