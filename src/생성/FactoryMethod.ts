/**
 * 팩토리 메서드 패턴
 * - 객체 생성의 세부사항을 서브 클래스에 위임하는 패턴
 *
 * 장점
 * - 새로운 클래스나 제품이 추가되더라도, 기존 코드를 수정하지 않고 확장 가능
 * - 객체 생성 코드를 중앙화하거나 하위 클래스에서 변경 가능하므로 코드의 유연성이 높아짐
 * - 공통 생성 로직을 상위 클래스에서 정의하여 재사용성을 높임
 * - 클라이언트는 구체적인 클래스에 의존하지 않고 인터페이스나 추상 클래스에 의존함
 *
 * 단점
 * - 클래스와 인터페이스가 늘어나서 코드 구조가 복잡해짐
 * - 새로운 제품 클래스를 추가하려면, 해당 클래스와 메서드 구현을 추가해야 함
 *
 * 구성 요소
 * - 제품 : 생성될 객체의 인터페이스 또는 추상 클래스
 * - 구체 제품 : 제품 인터페이스를 구현하는 실제 클래스
 * - 창조자 : 팩토리 메서드를 선언하는 추상 클래스 또는 인터페이스
 * - 구체 창조자 : 창조자를 상속받아 팩토리 메서드를 구현
 */

(function () {
  // 제품
  abstract class Button {
    abstract render(): void;
    abstract onClick(): void;
  }

  // 구체 제품
  class WindowButton extends Button {
    override render(): void {
      console.log("윈도우 버튼 렌더링");
    }

    override onClick(): void {
      console.log("윈도우 버튼 클릭");
    }
  }

  class MacButton extends Button {
    override render(): void {
      console.log("맥 버튼 렌더링");
    }

    override onClick(): void {
      console.log("맥 버튼 클릭");
    }
  }

  // 창조자
  abstract class Diglog {
    abstract createButton(): Button;

    render() {
      const button = this.createButton();
      button.render();
    }
  }

  // 구체 창조자
  class WindowDialog extends Diglog {
    override createButton(): Button {
      return new WindowButton();
    }
  }

  class MacDialog extends Diglog {
    override createButton(): Button {
      return new MacButton();
    }
  }

  // 클라이언트
  function clientCode(dialog: Diglog) {
    dialog.render();
  }

  clientCode(new WindowDialog());
  clientCode(new MacDialog());
})();
