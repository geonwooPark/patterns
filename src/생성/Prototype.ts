/**
 * 프로토타입 패턴
 * - 객체를 직접 생성하는 대신 기존 객체를 복제하여 새로운 객체를 생성하는 패턴
 *
 * 장점
 * - 복잡한 초기화 과정을 줄이고, 기존 객체를 복제하여 효율적으로 객체를 생성할 수 있음
 * - 새로운 객체의 클래스를 몰라도 기존 객체를 복제하여 동적으로 객체를 생성할 수 있음
 * - 복제를 지원하는 새로운 클래스들을 추가하기 쉬움
 * - 복제는 런타임에 이뤄지며 정적 클래스 설계에 비해 유연함
 *
 * 단점
 * - 복잡한 객체의 경우, 얕은 복사로 인해 원본과 복제본 간의 참조 관계 문제가 발생할 수 있음
 * - 모든 클래스에서 clone 메서드를 구현해야 하므로 인터페이스나 추상 클래스 설계가 필요함
 * - 기존 객체를 복제하여 생성하므로 코드의 의도 파악이 어렵고, 유지보수에 주의가 필요함
 *
 * 구성 요소
 * - 원형 : 복제 가능한 객체의 인터페이스나 추상 클래스를 정의
 * - 구체 원형 : 원형 인터페이스를 구현하는 실제 클래스. 객체 내부 상태를 복사하는 clone 메서드를 제공
 * - 클라이언트 : 원형 객체의 clone 메서드를 호출하여 새로운 객체를 생성
 */

(function () {
  interface Prototype {
    clone(): Prototype;
  }

  class Document implements Prototype {
    title: string;
    content: string;

    constructor(title: string, content: string) {
      this.title = title;
      this.content = content;
    }

    clone() {
      return new Document(this.title, this.content);
    }

    display(): void {
      console.log(`Document: ${this.title}`);
      console.log(`Content: ${this.content}`);
    }
  }

  function clientCode() {
    const originalDoc = new Document(
      "Original",
      "This is the original document."
    );
    originalDoc.display();

    const clonedDoc = originalDoc.clone();
    clonedDoc.title = "Clone";
    clonedDoc.display();
  }

  clientCode();
})();
