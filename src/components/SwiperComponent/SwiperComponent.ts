import { Component, Vue, Prop } from 'vue-property-decorator';
import Swiper from 'swiper';
import _ from 'lodash';

@Component({
  components: {},
})
export default class SwiperComponent extends Vue {
  // @ts-ignore-nextline
  public $refs: Vue['$refs'] & {
    swiperContainer: HTMLElement;
  };

  public mySwiper!: Swiper;

  public slideChangeListener: (() => void) | null = null;

  // swiper가 한 페이지에 여러개 있을 시 사용
  @Prop({ default: 'normal-container' }) public uniqueClass!: string;
  @Prop({ default: 'swiper-button-next-unique' }) public nextButton!: string;
  @Prop({ default: 'swiper-button-prev-unique' }) public prevButton!: string;

  public setSlideChangeListener(listener: () => void) {
    this.slideChangeListener = listener;
  }

  private mounted() {
    this.$refs.swiperContainer.className += ` ${this.uniqueClass}`;

    this.mySwiper = new Swiper(`.${this.uniqueClass}`, {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 43,
      loop: true,
      navigation: {
        nextEl: `.${this.nextButton}`,
        prevEl: `.${this.prevButton}`,
      },
    });
    // this.mySwiper = new Swiper('');
    // this.mySwiper = new Swiper('asdf');
    console.log('this.mySwiper', this.mySwiper);

    this.mySwiper.on('slideChange', () => {
      console.log('event slideChange');
      if (!_.isNil(this.slideChangeListener)) {
        this.slideChangeListener();
      }
    });
  }
}
