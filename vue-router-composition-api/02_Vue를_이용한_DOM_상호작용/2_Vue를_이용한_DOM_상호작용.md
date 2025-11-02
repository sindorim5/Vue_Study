# 2. Vue를 이용한 DOM 상호작용

## DOM Interaction and Event Handling

- **'Double Curly Brace Syntax'(interpolation)** is only available between opening and closing HTML tags.
- v-bind를 이용하여 html 요소에 직접 값을 설정할 수 있음
- Vue.createApp() 내부의 data는 this.xxxx으로 접근 가능
  - Vue가 global instance object로 만들어줌
- v-html의 내용은 일반 html로 삽입되고 <div v-html="tmp"></div> 와 같이 사용
- v-on은 특정 이벤트에 반응할 때 쓰는 directive
- v-once는 한 번만 렌더링하고 이후 업데이트를 하지 않음
- [Event Modifiers](https://vuejs.org/guide/essentials/event-handling#event-modifiers)
- v-model은 v-bind:value와 v-on의 축약어 (양방향 바인딩)
- v-on:click은 @click으로 v-bind:value는 :value로 줄일 수 있음

## Advanced Reactivity

- Vue는 페이지에 변경이 생길 때마다 method를 다시 실행함
- computed는 반환값을 갖는 reactive getter
  - 템플릿이나 다른 계산식에서 반복 사용될 파생 데이터가 필요한 경우
  - 복수 데이터에 의존해 하나의 값을 계산할 경우
  - 중복 계산을 방지할 수 있음
- watch
  - data property에 있는 변수를 메소드명으로 사용하면 연결됨
  - 모든 프로퍼티의 변화가 아닌 일부 프로퍼티의 변화에 반응하여, <br>데이터 프로퍼티를 업데이트 하려는 경우

## Dynamic Styling

- `:style="{borderColor: boxASelected ? 'red' : '#ccc'}"` 는 문제를 많이 일으켜서 잘 안 쓴다
