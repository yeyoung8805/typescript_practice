//class 로부터 단 하나의 object 만 생성하는 것을 싱글톤이라고 한다.
class ClassName {
  private constructor() {}
}

//private 을 사용했기 때문에 new 클래스명() 사용할 수 없다 .에러난다.
// const a1 = new ClassName();
// const b1 = new ClassName();