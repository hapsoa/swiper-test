import { Component, Vue } from 'vue-property-decorator';
import Swiper from 'swiper';

@Component({})
export default class SwiperClickTest extends Vue {
  // @ts-ignore-nextline
  public $refs: Vue['$refs'] & {
    swiper: any;
  };

  public swiperOption = {
    effect: 'slide',
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  public items = ['1', '2', '33'];

  get swiper() {
    return this.$refs.swiper.swiper;
  }

  public sliderClicked(event: any) {
    if (
      !event.target.classList.contains('swiper-pagination-bullet') &&
      !event.target.classList.contains('swiper-button-next') &&
      !event.target.classList.contains('swiper-button-prev')
    ) {
      const item = this.items[this.swiper.realIndex];
      console.log('clicked item', item);
      // this.$router.push();
    }
  }
}
