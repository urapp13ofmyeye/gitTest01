// 팩토리얼 함수 index.js
// 버전 1 -> 2 -> 3
function factorial(n) {
 
    if( n < 0 ) { // n이 0 미만일 경우(오류)
        throw new Error('n must be a positive integer');
    }


    if( n === 0 ) {
        return 1;
    }

    return n * factorial(n - 1); // 재귀적 호출
}

module.exports = factorial;