<template>
    <div>
        <div class="section_1">
            <div class="section1_content">
                <h1>Experts are here solve your business problem.</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae delectus necessitatibus placeat ea cupiditate, 
                    reiciendis eum, odio dicta officia amet eaque consequuntur corrupti ad? Alias.</p>
            </div>
            <div class="section1_img">
                <img src="@/assets/img/section_1.jpg" alt="beranda">
            </div>
        </div>
    </div>
</template>

<style scoped>
    .section_1{
        display: flex;
        align-items: center;
        padding: 20px 0;
    }
    .section1_content{
        width: 50%;
        padding: 30px 0;
    }
    .section1_img{
        width: 50%;
    }
    .section1_img img{
        width: 100%;
    }
    .section1_content h1{
        font-size: 40px;
    }
    .section1_content p {
        margin-bottom: 20px;
    }

    @media screen and (max-width: 600px) {
        .section_1 {
            flex-direction: column;
        }
        .section1_content{
            width: 100%;
            padding: 30px 0;
        }
        .section1_img{
            width: 100%;
        }
    }
</style>