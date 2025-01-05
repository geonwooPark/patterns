/**
 * 어댑터 패턴
 * - 호환되지 않는 인터페이스를 가진 두 객체를 연결하여 상호 작용할 수 있게 만드는 패턴
 *
 * 장점
 * - 기존 코드를 수정하지 않고 새로운 코드와 연동 가능
 * - 기존 클래스를 재사용하여 중복을 줄임
 * - 새로운 인터페이스를 추가하기 쉬움
 *
 * 단점
 * - 중간 계층이 추가되면서 코드 복잡도가 약간 증가
 * - 어댑터를 거쳐야 하므로 약간의 성능 비용이 추가됨
 *
 * 구성 요소
 * - 타겟 : 클라이언트가 기대하는 인터페이스
 * - 적응 대상 : 클라이언트가 직접 사용하기 어려운 인터페이스를 가진 기존의 클래스
 * - 적응자 : 적응 대상의 인터페이스를 타겟에 맞게 변환하는 중간 역할을 하는 객체
 * - 클라이언트 : 어댑터를 통해 적응 대상을 사용하며, 타겟을 기대하고 동작함
 */

(function () {
  // 타겟
  interface Target {
    providerPower(): string;
  }

  // 적용 대상
  class OldSystem {
    use110V() {
      return "110V 전력 공급 중";
    }
  }

  // 적응자
  class PowerAdapter implements Target {
    private oldSystem: OldSystem;

    constructor(oldSystem: OldSystem) {
      this.oldSystem = oldSystem;
    }

    providerPower(): string {
      const power = this.oldSystem.use110V();
      return `${power} => 220V 전력 공급 중`;
    }
  }

  // 클라이언트
  class Client {
    usePower(target: Target) {
      console.log(target.providerPower());
    }
  }

  const oldSystem = new OldSystem();
  const adapter = new PowerAdapter(oldSystem);
  const client = new Client();

  client.usePower(adapter);
})();
