"use strict";
/**
 * 추상 팩토리 패턴
 * - 다양한 클래스를 생성할 수 있는 인터페이스를 제공하는 패턴
 *
 * 장점
 * - 서로 관련된 객체들이 특정 테마나 일관성을 유지하며 생성되도록 보장해줌
 * - 클라이언트는 인터페이스나 추상 클래스를 사용하여 객체를 생성하고 사용하며, 구체적인 구현은 팩토리 클래스에 위임
 * - 새로운 팩토리를 추가하거나 기존 제품군을 확장하기 쉬움
 *
 * 단점
 * - 클래스가 많아지고, 시스템이 복잡해짐
 * - 추상 클래스와 구체 팩토리를 설정해야하는 초기 작업이 번거로움
 * - 자바스크립트는 지원하지 않고 타입스크립트에서만 지원함
 *
 * 구성 요소
 * - 추상 팩토리 : 관련된 제품들을 생성하는 메서드의 집합을 정의
 * - 구체 팩토리 : 추상 팩토리의 구체적인 구현으로, 실제 객체를 생성
 * - 추상 제품 : 생성될 객체의 공통 인터페이스를 정의
 * - 구체 제품 : 추상 제품의 구현체로, 실제 클라이언트에서 사용되는 객체
 * - 클라이언트 : 추상 팩토리를 통해 객체를 생성 및 사용하며, 구체적인 클래스에 의존하지 않음
 */
// 추상 팩토리 (abstract)
class GUIFactory {
}
// 구체 팩토리
class WindowFactory extends GUIFactory {
    createButton() {
        return new WindowButton();
    }
    createCheckbox() {
        return new WindowCheckBox();
    }
}
class MacFactory extends GUIFactory {
    createButton() {
        return new MacButton();
    }
    createCheckbox() {
        return new MacCheckBox();
    }
}
// 구체 제품
class WindowButton {
    click() {
        return "윈도우 버튼 클릭";
    }
}
class MacButton {
    click() {
        return "맥 버튼 클릭";
    }
}
class WindowCheckBox {
    check() {
        return "윈도우 체크박스 클릭";
    }
}
class MacCheckBox {
    check() {
        return "맥 체크박스 클릭";
    }
}
// 클라이언트
function clientCode(factory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();
    console.log(button.click());
    console.log(checkbox.check());
}
clientCode(new WindowFactory());
clientCode(new MacFactory());
