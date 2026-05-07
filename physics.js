function getAcceleration(F, m, dv, dt, d,t){
    if (F!== undefined && m !== undefined){
        return F/m
    } else if (dv !== undefined && dt !== undefined) {
        return dv / dt
    } else if (d !== undefined && t !== undefined) {
        return (2 * d) / (t ** 2)
    }
    return "impossible"  // not enough info

}

console.log(getAcceleration({ f: 10, m: 5 })); // Should output 2
console.log(getAcceleration({ f: 10, m: 5, t: 2, d: 100 })); // Should output 2
console.log(getAcceleration({ Δv: 100, Δt: 50 })); // Should output 2
console.log(getAcceleration({ d: 10, t: 2 })); // Should output 5
console.log(getAcceleration({ d: 100, t: 10 })); // Should output 2
console.log(getAcceleration({ f: 10, Δt: 50 })); // Should output "impossible"
console.log(getAcceleration({ m: 10, Δv: 100 })); // Should output "impossible"
console.log(getAcceleration({})); // Should output "impossible"