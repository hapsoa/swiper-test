import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Swiper from 'swiper';

import CardTeacher from '@/components/cardTeacher/cardTeacher.vue';

@Component({
  components: {
    // HelloWorld,
    CardTeacher,
  },
})
export default class Home extends Vue {
  public defaultProfileURL =
    'http://images.unsplash.com/photo-1531804055935-' +
    '76f44d7c3621?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9';
  public teachers = [
    {
      name: 'Fei Wong',
      statusMessage:
        'Natural meditation is the ability to access a different level of the mind.',
      profileURL: this.defaultProfileURL,
      tags: ['NAME', 'WT', 'WTF'],
      isNew: true,
    },
    {
      name: 'Jinhwan Lee',
      statusMessage:
        'Natural meditation is the ability to access a different level of the mind than you normally use.',
      profileURL: this.defaultProfileURL,
      tags: ['NAME', 'WTF'],
    },
    {
      name: 'Thi Thuy Linh',
      statusMessage: 'Natural meditation is the ability',
      profileURL: this.defaultProfileURL,
      tags: ['NAME'],
    },
  ];

  public teachers2 = [
    {
      name: 'Fei Wong',
      statusMessage:
        'Natural meditation is the ability to access a different level of the mind.',
      profileURL: this.defaultProfileURL,
      tags: ['NAME', 'WT', 'WTF'],
      isNew: true,
    },
    {
      name: 'Jinhwan Lee',
      statusMessage:
        'Natural meditation is the ability to access a different level of the mind than you normally use.',
      profileURL: this.defaultProfileURL,
      tags: ['NAME', 'WTF'],
    },
    {
      name: 'Thi Thuy Linh',
      statusMessage: 'Natural meditation is the ability',
      profileURL: this.defaultProfileURL,
      tags: ['NAME'],
    },
  ];

  private mounted() {
    const mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
    });
  }
}
