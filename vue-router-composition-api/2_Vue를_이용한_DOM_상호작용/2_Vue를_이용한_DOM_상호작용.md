# 2. Vue를 이용한 DOM 상호작용

- **'Double Curly Brace Syntax'(interpolation)** is only available between opening and closing HTML tags.
- v-bind를 이용하여 html 요소에 직접 값을 설정할 수 있음
- Vue.createApp() 내부의 data는 this.xxxx으로 접근 가능
  - Vue가 global instance object로 만들어줌
- v-html의 내용은 일반 html로 삽입되고 <div v-html="tmp"></div> 와 같이 사용
- v-on은 특정 이벤트에 반응할 때 쓰는 directive
- v-once는 한 번만 렌더링하고 이후 업데이트를 하지 않음
- [Event Modifiers](https://vuejs.org/guide/essentials/event-handling#event-modifiers)
