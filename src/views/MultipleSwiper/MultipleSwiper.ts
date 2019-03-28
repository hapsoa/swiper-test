import { Component, Vue } from 'vue-property-decorator';
import SwiperComponent from '@/components/SwiperComponent/SwiperComponent.vue';

@Component({
  components: { SwiperComponent },
})
export default class BasicSwiper extends Vue {
  public slides = [1, 2, 3, 4, 5, 6, 7];
}
