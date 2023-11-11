<template>
    <div class="section_2">
        <h3>Layanan Kami</h3>
        <div class="row-service">
            <Card></Card>
        </div>
    </div>
</template>

<script>
    import Card from '../Service/Card.vue'

    export default {
        components: {
            Card,
        }
    }
</script>

<style scoped>
    .section_2{
        align-items: center;
        justify-content: center;
        text-align: center;
        
    }
    h3{
        color: #0066cccb;
        text-align: center;
    }
</style>