$(document).ready(function() {
    $('input[type="checkbox"]').click(function() {
        var inputValue = $(this).attr("value");  
        $("." + inputValue).toggle();
    });
});

function plus(){
    const thing = document.getElementById('carom').parentElement;
    const m = thing.children[2]
    m.value ++;
} 
function plus9f(){
    const thing = document.getElementById('bhive9').parentElement;
    const m = thing.children[2]
    m.value ++;
} 
function plus5f(){
    const thing = document.getElementById('bhive5').parentElement;
    const m = thing.children[2]
    m.value ++;
} 
function pluscf(){
    const thing = document.getElementById('cfs').parentElement;
    const m = thing.children[2]
    m.value ++;
} 
function minus(){
    const thing = document.getElementById('carom').parentElement;
    const m = thing.children[2];
    if (m.value > 0){
        m.value --;
    }
}
function minus5f(){
    const thing = document.getElementById('bhive5').parentElement;
    const m = thing.children[2];
    if (m.value > 0){
        m.value --;
    }
}function minus9f(){
    const thing = document.getElementById('bhive9').parentElement;
    const m = thing.children[2];
    if (m.value > 0){
        m.value --;
    }
}function minuscf(){
    const thing = document.getElementById('cfs').parentElement;
    const m = thing.children[2];
    if (m.value > 0){
        m.value --;
    }
}
function plus1(){
    const thing = document.getElementById('jamun').parentElement;
    const m = thing.children[2]
    m.value ++;
}
function minus1(){
    const thing = document.getElementById('jamun').parentElement;
    const m = thing.children[2];
    if (m.value > 0){
        m.value --;
    }
}
function plus2(){
    const thing = document.getElementById('litchi').parentElement;
    const m = thing.children[2]
    m.value ++;
}
function minus2(){
    const thing = document.getElementById('litchi').parentElement;
    const m = thing.children[2];
    if (m.value > 0){
        m.value --;
    }
}
function plus4(){
    const thing = document.getElementById('mustard').parentElement;
    const m = thing.children[2]
    m.value ++;
}
function minus4(){
    const thing = document.getElementById('mustard').parentElement;
    const m = thing.children[2];
    if (m.value > 0){
        m.value --;
    }
}
function plus5(){
    const thing = document.getElementById('coriander').parentElement;
    const m = thing.children[2]
    m.value ++;
}
function minus5(){
    const thing = document.getElementById('coriander').parentElement;
    const m = thing.children[2];
    if (m.value > 0){
        m.value --;
    }
}
function plus6(){
    const thing = document.getElementById('eucalyptus').parentElement;
    const m = thing.children[2]
    m.value ++;
}
function minus6(){
    const thing = document.getElementById('eucalyptus').parentElement;
    const m = thing.children[2];
    if (m.value > 0){
        m.value --;
    }
}
function plus3(){
    const thing = document.getElementById('tulsi').parentElement;
    const m = thing.children[2]
    m.value ++;
}
function minus3(){
    const thing = document.getElementById('tulsi').parentElement;
    const m = thing.children[2];
    if (m.value > 0){
        m.value --;
    }
}
function gonext(){
    document.getElementById('part-one').style.display = 'none';
    document.getElementById('part-two').style.display = 'block';
}