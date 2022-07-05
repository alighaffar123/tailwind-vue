<template>
    <div class=" container max-w-full px-[30px] pb-[30px] ">
        <div class=" grid xl:grid-cols-[64%_33%] grid-cols-1 xl:grid-rows-[360px] grid-rows-[360px_360px] gap-[27px] ">
            <div class=" bg-white drop-shadow m-0">
                <div class="relative h-[50px] mb-1 bg-Lotion">
                    <span class=" block w-full h-[1px] bg-light-Gray absolute bottom-[-1px] "></span>
                    <div class=" flex h-full flex-wrap items-center justify-between py-2 px-3  ">
                        <a href="">
                            <span class=" text-Dim-Gray text-[14px] mr-[5px] font-bold  " >PRODUCTS SALES</span>
                            <fa icon="sort-down" class="text-Dim-Gray mb-[3px] text-[13px] font-bold" />
                        </a>
                        <div class=" flex items-center">
                            <div class="md:inline-block hidden">
                                    <a href="">
                                        <span class=" hover:text-primary text-Crayola text-[13px] mr-[10px] ">
                                            Daily
                                        </span>
                                    </a>
                                    <a href="">
                                        <span class=" hover:text-primary text-Crayola text-[13px] mr-[10px] ">
                                            weakly
                                        </span>
                                    </a>
                                    <a href="">
                                        <span class=" hover:text-primary text-Crayola text-[13px] mr-[10px] ">
                                            Monthly
                                        </span>
                                    </a>
                                    <a href="">
                                        <span class=" hover:text-primary text-Crayola text-[13px] mr-[10px] ">
                                            Yearly
                                        </span>
                                    </a>
                            </div>
                            <a href="">
                                <fa icon="chevron-down" class="mt-1 text-Crayola ml-[16px] text-[16px] " />
                            </a>
                            <a href="">
                                <fa icon="xmark" class="mt-1 text-Crayola ml-[16px] text-[20px]" />
                            </a>
                        </div>
                    </div>
                </div>
                <div id="chart">
                    <apexchart
                    type="area"
                    height="300"
                    :options="chartOptions"
                    :series="series"
                    ></apexchart>
                </div>                
            </div>
            <div class="bg-white">
                <div  class="relative h-[50px] bg-Lotion">
                    <span class=" block w-full h-[1px] bg-light-Gray absolute bottom-[-1px] "></span>
                    <div class=" flex h-full flex-wrap items-center justify-between py-2 px-3  ">
                        <span class=" text-Dim-Gray text-[14px]  font-bold  " >TEAM MEMBER</span>
                        <a href="">
                            <fa icon="xmark" class="mt-1 text-Crayola ml-[16px] text-[20px]" />
                        </a>
                    </div>    
                </div>
                <div class=" p-6 relative h-[265px] grid grid-cols-[auto] grid-rows-4 gap-[20px] ">
                    <span class=" block w-full h-[1px] bg-light-Gray absolute bottom-[-1px] "></span>
                    <div class=" flex items-center ">
                        <div class=" h-10 w-10 bg-maya-blue rounded-full mr-3"></div>
                        <span class="text-[16px] text-dark-silver ">Hung pham</span>
                    </div>
                    <div class=" flex items-center ">
                        <div class=" h-10 w-10 bg-maya-blue rounded-full mr-3"></div>
                        <span class="text-[16px] text-dark-silver ">Hung pham</span>
                    </div>  
                    <div class=" flex items-center ">
                        <div class=" h-10 w-10 bg-maya-blue rounded-full mr-3"></div>
                        <span class="text-[16px] text-dark-silver ">Hung pham</span>
                    </div>
                    <div class=" flex items-center ">
                        <div class=" h-10 w-10 bg-maya-blue rounded-full mr-3"></div>
                        <span class="text-[16px] text-dark-silver ">Hung pham</span>
                    </div>
                </div>
                <div class="px-4 relative pt-[10px]  ">
                    <span class=" text-[16px] text-Dark-Gray ">View All Member</span>
                    <span class="bg-primary absolute right-[20px] px-[6px] py-[1px] rounded ">
                        <a href="">
                            <fa icon="plus" class=" mt-1 text-white  text-[16px]" />
                        </a>
                    </span>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {  reactive } from "vue";
export default {
  name: "vue-chart",
    setup() {
        let series = reactive([
            {
            name: "Clothes",
            data: [31, 40, 28, 51, 42, 109, 100],
            },
            {
            name: "Electronics",
            data: [0, 140, 0, 100, 0, 170, 0],
            },
            {
            name: "shoes",
            data: [11, 32, 45, 32, 34, 52, 41],
            },
        ]),
        chartOptions = ({
            chart: {
                height: "300",
                type: "area",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
            },
            xaxis: {
                type: "Day",
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            },
        });

        return {
        series,
        chartOptions
        };
    },
};
</script>