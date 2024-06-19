<template>
    <div>
        <button @click="increment">증가</button>
        {{count}}
        {{ state[0] }}
        {{ publishedBooksMessage }}
        {{now}}
        {{fullName}}<br/>
        {{ firstName }}<br/>
        {{ lastName }}<br/>
        {{ items }} <br/>
        <input @change="test($event.target.value)" v-model="message"/>
        {{ message }}
        {{ props.title }}
    </div>
</template>

<script setup>
import { ref,reactive,computed,defineProps} from 'vue';
const count = ref(0); // 숫자,문자형
const state = reactive([1,2,3]) // 객체,배열,map,set 등 사용 (보통 그냥 ref씀)
function increment(){
    count.value++;
}

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// 캐싱으로 변경되지않으면 접근시에 캐시된 결과 반환
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // 참고: 분해 할당 문법을 사용함.
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})

fullName.value = "Hyunjung SHIM" // setter 호출 => first,last Name 업데이트됨

// 클래스 바인딩
// 1. 객체로 바인딩 ex) :class="{ active : isActive }"
// const isActive = ref(true)
// const hasError = ref(false)
// <div
//   class="static"
//   :class="{ active: isActive, 'text-danger': hasError }"
// ></div>
//  결과값: class="static active"
//
// const classObject = reactive({
//   active: true,
//   'text-danger': false
// })
// template
// <div :class="classObject"></div>

// 2. 배열로 바인딩
// const activeClass = ref('active')
// const errorClass = ref('text-danger')
// template
// <div :class="[activeClass, errorClass]"></div>
// 삼항 표현식
// <div :class="[isActive ? activeClass : '', errorClass]"></div>

// v-if 는 실제 조건부 랜더링이므로 false시 렌더링x v-show 는 조건관계없이 항상 렌더링

const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
// `items`는 값이 있는 배열의 ref라고 가정된 경우입니다.
items.value = items.value.filter((item) => item.message.match(/Foo/))

function test(event){
  console.log(event)
}

const message = ref('');

// checkbox 사용시
// const checkedNames = ref([])
// template
// <div>체크된 이름: {{ checkedNames }}</div>

// <input type="checkbox" id="jack" value="젝" v-model="checkedNames">
// <label for="jack">젝</label>

// <input type="checkbox" id="john" value="존" v-model="checkedNames">
// <label for="john">존</label>

// <input type="checkbox" id="mike" value="마이크" v-model="checkedNames">
// <label for="mike">마이크</label>
// <div>선택됨: {{ selected }}</div>

// select 사용시
{/* <select v-model="selected">
  <option disabled value="">다음 중 하나를 선택하세요</option>
  <option>가</option>
  <option>나</option>
  <option>다</option>
</select> */}
// const selected = ref('1')

// const options = ref([
//   { text: '하나', value: '1' },
//   { text: '둘', value: '2' },
//   { text: '셋', value: '3' }
// ])
// template
// <select v-model="selected">
//   <option v-for="option in options" :value="option.value">
//     {{ option.text }}
//   </option>
// </select>

// <div>선택됨: {{ selected }}</div>

// watch 함수
// watch의 첫 번째 인자는 다양한 유형의 반응형 "소스"일 수 있습니다. 참조(계산된 참조 포함), 반응형 객체, 게터 함수 또는 여러 소스의 배열이 될 수 있습니다:
// 단일 ref
// watch(x, (newX) => {
//   console.log(`x값: ${newX}`)
// })

// // getter
// watch(
//   () => x.value + y.value,
//   (sum) => {
//     console.log(`x + y: ${sum}`)
//   }
// )

// // 여러 소스의 배열
// watch([x, () => y.value], ([newX, newY]) => {
//   console.log(`x는 ${newX}이고, y는 ${newY} 입니다.`)
// })
// watch(
//   () => obj.count,
//   (count) => {
//     console.log(`count 값: ${count}`)
//   }
// )

// watchEffect => 값 변경될때 객체,배열에 사용하기 watch보다 더 편함
// const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`
// const branches = ['main', 'v2-compat']

// const currentBranch = ref(branches[0])
// const commits = ref(null)

// watchEffect(async () => {
//   // this effect will run immediately and then
//   // re-run whenever currentBranch.value changes
//   const url = `${API_URL}${currentBranch.value}`
//   commits.value = await (await fetch(url)).json()
// })
const props = defineProps(['title'])
// defineProps({
//   title: String,
//   likes: Number
// })

// vuex store 사용법
// useStore 함수를 통해 Vuex 스토어 인스턴스에 접근합니다.
// computed를 사용하여 상태를 가져오고, actions와 mutations는 직접 호출하여 사용합니다.
// ex) count = computed(()=> { store.state.count})
// ex) const increment = ()> {
  // store.dispatch('action,mutation이름',보낼데이터)
// }
</script>

<style scoped>

</style>
