<template>
    <div class="card-service">
        <h4>
            {{ title }}
        </h4>
        <div class="image">
            <img src="@/assets/illustrasi.jpeg" alt="allustrasi">
        </div>
        <p>{{ description }}</p>
        <slot></slot>
        <button class="btn-service">Detail</button> <br>
        <MyBtn></MyBtn>
        <!-- class="btn-service-global" bisa ada css nya dikarenakan file di css tersebut tidak menggunakan scoped  -->
    </div>
</template>

<script>
    export default{
        props: ['title', 'description']
    }
</script>

<style scoped>
/* scoped khusus komponen yang ada di di file ini saja */

img{
    width: 150px;
    height: 150px;
    margin: 10px 0;
}

.btn-service {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 400;
    color: white;
    background-color: #4c55c4;
    padding:15px 20px;
    border: none;
    border-radius: 5px;
}
  .card-service{
    text-align: start;
    min-height: 306px;
    padding: 30px 30px 0 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-radius: 60px 0 0 0;
    background: white ;
    transition: all 0.5s ease;
    margin: 10px 10px;
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
</style>