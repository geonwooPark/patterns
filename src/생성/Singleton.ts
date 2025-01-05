/**
 * 싱글톤 패턴
 * - 객체를 하나만 생성하도록 제한하고, 해당 객체에 접근할 수 있는 방법을 제공하는 패턴
 *
 * 장점
 * - 애플리케이션 어디에서든 동일한 객체에 접근 가능
 * - 공통적으로 사용되는 자원을 하나의 객체로 관리
 * - 전역 상태를 관리하기에 여러 인스턴스 간 데이터 동기화가 불필요
 *
 * 단점
 * - 전역 인스턴스를 사용하기 때문에 테스트에서 의존성을 대체하기 어려움
 * - 다중 스레드 환경에서 동기화 문제로 성능 병목이 발생할 수 있음
 * - 객체를 하나로 제한하기 때문에 확장성이나 변경 가능성이 줄어듦
 *
 * 구성 요소
 * - private 생성자 : 외부에서 객체를 직접 생성하지 못하도록 생성자를 private로 제한
 * - 정적 인스턴스 : 클래스 내부에서 단일 인스턴스를 참조하는 정적 변수를 선언함
 * - 정적 메서드 : 정적 메서드를 통해 인스턴스를 생성하거나 반환함
 */

(function () {
  class Singleton {
    // 정적 인스턴스
    private static instance: Singleton;

    // private 생성자
    private constructor() {
      console.log("싱글톤 인스턴스 생성");
    }

    // 정적 메서드
    static getInstance() {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  }

  // 클라이언트
  const singleton1 = Singleton.getInstance();
  const singleton2 = Singleton.getInstance();

  console.log(singleton1 === singleton2);
})();
