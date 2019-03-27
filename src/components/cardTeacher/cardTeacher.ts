import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: {
    teacher: {
      type: Object,
      default: undefined,
    },
  },
})
export default class CardTeacher extends Vue {
  // 화면이 그려지기 전 호출
  public created() {
    console.log(this.$props.teacher);
    if (this.$props.teacher === undefined) {
      this.$props.teacher = {
        tags: ['TAG1', 'TAG2', 'TAG3'],
        name: 'asdfasdf',
        statusMessage: 'STATUS MESSAGE HERE',
        profileURL:
          'http://images.unsplash.com/photo-1531804055935-' +
          '76f44d7c3621?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9',
        isNew: false,
      };
    }
  }
  // 화면이 그려지고 난 이후에 호출
  public mounted() {
    //
  }
}
