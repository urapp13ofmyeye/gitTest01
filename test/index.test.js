// 팩토리얼 함수 index.js를 테스트하는 코드
// TDD(Test Driven Development): 테스트 주도 개발
const factorial = require('../src/index');

// 테스트 그룹 만들기(describe 함수 사용)
describe('factorial function', () => {
    // 테스트 케이스 1 - 동작여부 확인
    it('correctly computes factorial of a positive integer number', () => {  //함수 it
        expect(factorial(3)).toEqual(6);
        expect(factorial(5)).toEqual(120);
        expect(factorial(4)).toEqual(24);
    });

    // 테스트 케이스 2 - 오류검사 확인
    it('throws an error if a negative input is provided', () => {  //함수 it
        expect(() => { 
            factorial(-1); // 팩토리얼 함수에 -1를 넣을 경우(오류 예제)
        }).toThrow('n must be a positive integer');
    });
});