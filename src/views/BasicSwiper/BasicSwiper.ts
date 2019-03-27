import { Component, Vue } from 'vue-property-decorator';
import Swiper from 'swiper';

@Component({
  components: {},
})
export default class BasicSwiper extends Vue {
  public mySwiper!: Swiper;

  public clickSlide(i: number) {
    console.log('click slide', i);
    console.log(this.mySwiper);
  }
  private mounted() {
    this.mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      // slidesPerGroup: 4,
      centeredSlides: true,
      loop: true,
      // loopFillGroupWithBlank: true,
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
      navigation: {
        nextEl: '.swiper-button-prev-unique',
        prevEl: '.swiper-button-next-unique',
      },
      // breakpoints: {
      //   1024: {
      //     slidesPerView: 4,
      //     slidesPerGroup: 4,
      //     spaceBetween: 40,
      //   },
      //   900: {
      //     slidesPerView: 3,
      //     slidesPerGroup: 3,
      //     spaceBetween: 30,
      //   },
      //   640: {
      //     slidesPerView: 2,
      //     spaceBetween: 20,
      //   },
      //   320: {
      //     slidesPerView: 1,
      //     spaceBetween: 10,
      //   },
      // },
    });
  }
}
