<template>
    <!-- sidebar -->
	<sidebar/>
    <div class=" w-full sidebar:w-[calc(100%-285px)]  ml-auto">
        <!-- navbar -->
        <nav-bar />
        <div class="inner-content">
            <!-- ecom -->
            <ecom />
            <!-- chart -->
            <chart />
            <!-- order -->
            <order />
            <map-vue />
        </div>

    </div>
</template>
<script>
import sidebar from "/src/components/sidebar.vue"
import nav from "/src/components/nav.vue"
import ecom from "/src/components/ecom.vue"
import chart from "/src/components/chart.vue"
import order from "/src/components/order.vue"
import map from "/src/components/map.vue"
export default {
    name: "dash-bord",
        components: {
            'sidebar':sidebar, 
            'nav-bar':nav,
            'ecom':ecom, 
            'chart':chart,          
            'order':order,
            'map-vue':map
        }
}
</script>

