const arr = ['X', 'O', 'X', 'Y', 'X'];
const checker = [
    [0, 2, 4],
    [1, 2, 3],
    [3, 4, 5]
];

function check() {
        for(i = 0; i < checker.length; i++) {
            console.log(checker[0][i])
        }
    
}

check();