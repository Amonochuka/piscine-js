function getAcceleration(value){
    let F ,m,d, Δv, Δt;

    force = value.F
    mass = value.m
    distance = value.d
    velocity = value.Δv
    time = value.Δt

    if (force && mass){
        return force/ mass
    } else if(velocity && time){
        return velocity/time
    }else if(distance && time){
        return (2 *d ) / (t * t)
    }
    return "imposisble"
}


console.log(getAcceleration({ f: 10, m: 5 })); // Should output 2
console.log(getAcceleration({ f: 10, m: 5, t: 2, d: 100 })); // Should output 2
console.log(getAcceleration({ Δv: 100, Δt: 50 })); // Should output 2
console.log(getAcceleration({ d: 10, t: 2 })); // Should output 5
console.log(getAcceleration({ d: 100, t: 10 })); // Should output 2
console.log(getAcceleration({ f: 10, Δt: 50 })); // Should output "impossible"
console.log(getAcceleration({ m: 10, Δv: 100 })); // Should output "impossible"
console.log(getAcceleration({})); // Should output "impossible"