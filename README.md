> # Vue_exchange
>
> [코인 플랫폼 프로젝트 링크](https://hyunjungshim.github.io/vue_exchange/)
> ## 코인플랫폼
> ### 사용 라이브러리 및 세팅
> - Composition API
> - vuex / vuex-persistedstate
> - vue-router
> - Axios
> - socket.io-client
> - vue-multiselect
> - lightweight-charts
> - vue-trading-view
> - @vueuse/core
> ### 페이지 구성요소
> ###   1. Market
>   Binance에서 제공하는 모든코인들 실시간 데이터 확인
> ###   2. Chart
>   코인 데이터 활용한 차트( 데이터 시각화 ) 및 코인 관련 정보위젯
> ###   3. News 
>   코인 관련 뉴스정보 제공( 전체,최신,메이저 코인관련 정보 )
> ### 프로젝트 설명
>    Binance 거래소 API,Socket 사용하여 코인들 실시간 시세,차트 부분 정보 활용했습니다.
>    Socket 및 Chart library(lightweight charts,tradingview widget) 사용하여 실시간 데이터 반영했습니다.
>    코인관련 뉴스 API 사용하여 주요,최신뉴스 및 메이저 코인들에 관한 뉴스 기사 확인 가능 하며,
>    @vueuse/core 사용하여 사이트 컬러테마 감지하여 Dark/Light Mode를 변경할 수 있습니다.