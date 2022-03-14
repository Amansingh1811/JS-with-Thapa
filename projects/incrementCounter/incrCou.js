const counters = document.querySelectorAll('.counter')

counters.forEach((counter) =>{
    counter.innerHTML = 0
    const updateCounter = () =>{
        const targetData = +counter.getAttribute('data-target')
        const inetialData = Number(counter.innerHTML)
        const incr = targetData / 100
        if(inetialData < targetData){
            counter.innerHTML = `${inetialData +incr}`
            setInterval(updateCounter, 100)
        }else{
            counter.innerHTML = targetData;
        }
    }



    updateCounter();
})