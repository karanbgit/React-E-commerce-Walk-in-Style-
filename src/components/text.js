let arr = [1, 3, 3, 5, 6]

for (let i = 0; i < 5; i++) {
    for (let j = 1; j < 5; j++) {

        if (arr[i] == arr[j]) {
            break
        }

        console.log(arr[i]);
    }
    // console.log(arr[i]);
}