/**
 * 빌더 패턴
 * - 복잡한 객체 생성 로직을 중앙화하여 단순화하고, 유연성과 재사용성을 높혀주는 패턴
 *
 * 장점
 * - 객체 생성 로직을 캡슐화하여 클라이언트가 복잡한 로직을 알 필요가 없고, 가독성이 높음
 * - 객체 생성 과정과 표현을 분리하여, 동일한 생성 과정으로 다양한 객체를 만들 수 있음
 * - 새로운 빌더 클래스를 추가하는 방식으로 쉽게 확장할 수 있음
 * - 객체 생성 순서를 디렉터가 관리하여 클라이언트가 필요에 따라 호출할 수 있음
 *
 * 단점
 * - 관련 클래스가 많아 구조가 복잡하고, 설계 의도를 파악하기 어려울 수 있음
 * - 단계적으로 객체를 생성하므로 속도나 메모리에서 오버헤드가 발생할 수 있음
 *
 * 구성 요소
 * - 빌더 : 객체를 생성하기 위한 공통 인터페이스를 정의
 * - 구체 빌더 : 빌더 인터페이스를 구현하여 객체 생성의 구체적 과정을 정의. 최종적으로 객체를 반환
 * - 제품 : 빌더가 생성하는 복잡한 객체
 * - 감독자 : 빌더 객체를 사용하여 생성 과정을 정의. 객체 생성의 순서를 관리. 모든 경우에 필수적이지는 않음
 * - 클라이언트 : 빌더와 감독자를 사용하여 객체를 생성하는 사용자
 */

// 제품
class GUI {
  components: string[] = [];

  addComponent(component: string) {
    this.components.push(component);
  }

  display() {
    console.log("GUI 구성 요소");
    this.components.forEach((component, idx) => {
      console.log(`${idx + 1}. ${component}`);
    });
  }
}

// 빌더
abstract class GUIBuilder {
  protected gui = new GUI();

  abstract buildButton(): this;
  abstract buildCheckbox(): this;

  getGUI() {
    return this.gui;
  }
}

// 구체 빌더
class WindowGUIBuilder extends GUIBuilder {
  override buildButton(): this {
    this.gui.addComponent("윈도우 버튼");
    return this;
  }

  override buildCheckbox(): this {
    this.gui.addComponent("윈도우 체크박스");
    return this;
  }
}

class MacGUIBuilder extends GUIBuilder {
  override buildButton(): this {
    this.gui.addComponent("맥 버튼");
    return this;
  }

  override buildCheckbox(): this {
    this.gui.addComponent("맥 체크박스");
    return this;
  }
}

// 디렉터
class GUIDirector {
  private builder: GUIBuilder;

  constructor(builder: GUIBuilder) {
    this.builder = builder;
  }

  setBuilder(newBuilder: GUIBuilder) {
    this.builder = newBuilder;
  }

  buildBasicGUI() {
    this.builder.buildButton().buildCheckbox();
  }

  buildAdvancedGUI() {
    this.builder.buildButton().buildCheckbox().buildButton();
  }
}

// 클라이언트
function clientCode2() {
  const windowsBuilder = new WindowGUIBuilder();
  const director = new GUIDirector(windowsBuilder);
  director.buildBasicGUI();
  windowsBuilder.getGUI().display();

  const macBuilder = new MacGUIBuilder();
  director.setBuilder(macBuilder);
  director.buildBasicGUI();
  macBuilder.getGUI().display();
}

clientCode2();
