function timGiaTriLonNhat(so){
    let max = so[0];
    for(let i = 1; i < so.length;i ++){
        if(so[i] > max){
            max = so[i];
        }
    }
    return max;
}
console.log(timGiaTriLonNhat([5, 8, 3, 2, 9]));//ket qua :9 