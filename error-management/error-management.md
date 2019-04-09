swiper가 mounted된 후로 데이터가 바뀌면

레이아웃이 엉망이 된다.

데이터가 바뀔때 Watch를 달아주고

```
this.$nextTick(() => {
  mySwiper.destory();
  mySwiper = new Swiper();
})
```

에서 호출할 수 있도록 한다.
