let change = document.querySelector('#anchor')
let h5 = document.querySelector('#head')
let small = document.querySelector('.sm')

console.log(h5.innerHTML);

let plan = 'monthly'

let changerate = () => {
     
    if (plan ==='monthly'){
         h5.innerHTML = 'Monthly plan'
         small.innerHTML = '$10.99/mth'
          plan = 'annual'
    }else {
        h5.innerHTML = 'Annual plan'
        small.innerHTML = '59.99/yr'
        plan = 'monthly'
    }
    //  }


}
change.addEventListener('click', changerate)


