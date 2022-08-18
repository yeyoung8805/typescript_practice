//class 로부터 단 하나의 object 만 생성하는 것을 싱글톤이라고 한다.
class ClassName {
  private static instance: ClassName | null = null;
  public static getInstance(): ClassName {
    // ClassName으로부터 만든 object 가 있으면 그것을 리턴
    // 없으면, 만들어서 대입한다.
    if(ClassName.instance === null) {
      ClassName.instance = new ClassName();
    }
    return ClassName.instance;
  }
  private constructor() {}
}

//private 을 사용했기 때문에 new 클래스명() 사용할 수 없다 .에러난다.
const a1 = ClassName.getInstance();
const b1 = ClassName.getInstance();

console.log(a1 === b1); //result : true
