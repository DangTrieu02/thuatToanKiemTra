let arr = [1,2,3,4,4,3,2,1];

let rs= '1'

    for (let i = 0; i < arr.length/2; i++) {
        if (arr[i] !== arr[arr.length-1-i]){
            rs= ' 0 !'
            break;
        }
    }

console.log(rs)

// bai 2

function ran (sl){
    let rs = ''
    if (sl<=9){
        rs = 'can 1 lan'
    }else if(sl%9===0){
        rs='can it nhat '+sl/9+' lan'
    }
    else{
        let i = sl/9
        if (i >2) {
            let x = Math.floor(i)
            rs = 'can it nhat '+ (x + 1)+' lan'
        }else if(i<2 || i>1 || i===2){
            rs = 'can it nhat 2 lan'
        }
    }
    return rs
}

console.log(ran(10))
console.log(ran(90))
console.log(ran(18))
