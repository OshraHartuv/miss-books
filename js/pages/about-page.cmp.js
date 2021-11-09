
export default {
    template: `
        <section class="about-page app-main" >
        <img class="home-bg" src="img/about-page.jpg">
        <transition name="fade">
        <div class="about-content">
            <h3 ref="header" class="underline">About my shop</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, neque amet laudantium natus unde quisquam at iste pariatur autem quibusdam, fuga, molestias cumque deleniti? Quibusdam aliquid odio pariatur totam culpa?</p>
        </div>
        </transition>
        </section>
    `,
    data(){
        return {
            interval: null
        }
    },
    created() {
       this.interval = setInterval(()=>{
           console.log('welcome Home');
       },1000)
    },
    destroyed(){
        console.log('bye bye');
        clearInterval(this.interval)
    }

};