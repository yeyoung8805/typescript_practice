//Array : 원래 JS에서 array는 객체(object) 이다.
//같은 타입(자료형)을 모아놓은 것이다.
//사용 방법 : 타입[] , Array<타입>


let list1: (number | string)[] = [1, 2, 3, "4"];
// let list2: Array<number> = [1, 2, 3]; //이러한 선언방법은 JS, TS 가 충돌날 수 있다. 권장하지 않음. 위 선언방법을 권장한다.

// [39, "Mark"];  //첫째자리는 숫자, 둘째자리는 문자라는 것을 알고 있을때 -> array 가 아닌 tuple이라는 유형이 있다.
