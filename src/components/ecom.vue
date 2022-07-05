<template>
    <div class=" container max-w-full p-[30px]">
        <h3 class=" text-Davy-Grey text-[21px] font-bold mb-[30px] ">Ecommerce Overview</h3>
        <div class=" grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:grid-rows-[75px] md:grid-rows-[75px_75px] grid-rows-[75px_75px_75px_75px] gap-[24px] ">
            <div class=" grid grid-cols-[35%_65%] drop-shadow">
                <div class=" flex justify-center items-center bg-primary">
                    <fa icon="scale-balanced" class="text-white text-[40px] " />
                </div>
                <div class=" bg-white py-[18px] pl-[7px] leading-[15px] ">
                    <h4 class=" font-bold mb-1 text-Davy-Grey text-[20px]">$4,590</h4>
                    <i class=" text-sm text-Crayola  ">Last month sale</i>
                </div>
            </div>
            <div class=" grid grid-cols-[35%_65%] drop-shadow">
                <div class=" flex justify-center items-center bg-Vivid">
                    <fa icon="arrow-down" class="text-white text-[40px] " />
                </div>
                <div class=" bg-white py-[18px] pl-[7px] leading-[15px] ">
                    <h4 class=" font-bold mb-1 text-Davy-Grey text-[20px]">360</h4>
                    <i class=" text-sm text-Crayola  ">New order recceived</i>
                </div>
            </div>
            <div class=" grid grid-cols-[35%_65%] drop-shadow">
                <div class=" flex justify-center items-center bg-Dark-Lemon">
                    <fa icon="cart-shopping" class="text-white text-[40px] " />
                </div>
                <div class=" bg-white py-[18px] pl-[7px] leading-[15px] ">
                    <h4 class=" font-bold mb-1 text-Davy-Grey text-[20px]">1,680</h4>
                    <i class=" text-sm text-Crayola  ">Total products</i>
                </div>
            </div>
            <div class=" grid grid-cols-[35%_65%] drop-shadow">
                <div class=" flex justify-center items-center bg-Light-Sea">
                    <fa icon="eye" class="text-white text-[40px] " />
                </div>
                <div class=" bg-white py-[18px] pl-[7px] leading-[15px] ">
                    <h4 class=" font-bold mb-1 text-Davy-Grey text-[20px]">1,10,500</h4>
                    <i class=" text-sm text-Crayola  ">Unigue visiters</i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "card-page"
}
</script>
