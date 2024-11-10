Draggable.create('#dragme'),{
    type:'x',
    bounds:'.container'
}

function checkOverlaop(){
    var div1 = document.querySelector('#cir')
    var div2 = document.querySelector('#dragme')

    var rect1 = div1.getBoundingClientRect()
    var rect2 = div2.getBoundingClientRect()

    if(
        rect1.left < rect2.right
    ){
        // document.querySelector('#main').style.backgroundColor='green'
        document.querySelector('#video1').style.opacity=0
    }
    else{
        // document.querySelector('#main').style.backgroundColor='red'
        document.querySelector('#video1').style.opacity=1
    }
}

// checkOverlaop()

window.addEventListener('mousemove',checkOverlaop)