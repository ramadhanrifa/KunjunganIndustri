<template>
    <div class="card">
    <div class="card-service">
        <img src="@/assets/img/layanan.png" alt="Layanan">
        <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam!
        </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, neque.</p>
    </div>
    <div class="card-service">
        <img src="@/assets/img/layanan.png" alt="Layanan">
        <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam!
        </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, neque.</p>
    </div>
    <div class="card-service">
        <img src="@/assets/img/layanan.png" alt="Layanan">
        <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam!
        </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, neque.</p>
    </div>
    <div class="card-service">
        <img src="@/assets/img/layanan.png" alt="Layanan">
        <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam!
        </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, neque.</p>
    </div>
    <div class="card-service">
        <img src="@/assets/img/layanan.png" alt="Layanan">
        <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam!
        </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, neque.</p>
    </div>
    <div class="card-service">
        <img src="@/assets/img/layanan.png" alt="Layanan">
        <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam!
        </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, neque.</p>
    </div>
    </div>

</template>



<style scoped>
    .card{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;

    }
    .card-service {

        text-align: start;
        min-height: 306px;
        width: 200px;
        padding: 30px 30px 0 30px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        border-radius: 30px 0 0 0 ;
        background: white;
        transition: all 0.5s ease;
        margin: 10px 10px;
    }
    .card-service img{
        width: 100px;
    }
    .card-service h4{
        font-size: 18px;
        line-height: 30px;
        color: #343b4e;
    }
    .card-service p{
        font-weight: 400;
        color: #827f8d;
        margin: 0 0 10px 0;
    }

    @media screen and (max-width: 600px) {
        .card{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 10px;            
        }
    }
</style>