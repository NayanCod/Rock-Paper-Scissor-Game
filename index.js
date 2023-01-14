// Player picture chageing on selection

var selected = document.getElementById('choose');
picChange();
function picChange() {
    if(selected.value == "Rock"){
        document.getElementById('userpic').src = "images/rock1.png";
        document.getElementById('yside').innerHTML = "Rock";
        console.log(document.getElementById('userpic').src);
    }
    else if(selected.value == "Paper"){
        document.getElementById('userpic').src = "images/paper.png";
        document.getElementById('yside').innerHTML = "Paper";
        console.log(document.getElementById('userpic').src);
    }
    else if(selected.value == "Scissor"){
        document.getElementById('userpic').src = "images/scissor.png";
        document.getElementById('yside').innerHTML = "Scissor";
        console.log(document.getElementById('userpic').src);
    }
}

//Game function

function gameFunction(){
    var yop=0;
    if(document.getElementById('choose').value == "Rock"){
        yop = 1;
    }
    else if(document.getElementById('choose').value == "Paper"){
        yop = 2;
    }
    else if(document.getElementById('choose').value == "Scissor"){
        yop = 3;
    }


    // Computer genertaing automatic number and picture change

    var cop = Math.floor(Math.random()*3)+1;
    if(cop==1){
        document.getElementById('botpic').src = "images/rock1.png"
        document.getElementById('cside').innerHTML = "Rock";
    }
    else if(cop == 2){
        document.getElementById('botpic').src = "images/paper.png";
        document.getElementById('cside').innerHTML = "Paper";
    }
    else if(cop == 3){
        document.getElementById('botpic').src = "images/scissor.png";
        document.getElementById('cside').innerHTML = "Scissor";
    };

    // Game decision making

    var wcount = document.getElementById('wcount');
    var lcount = document.getElementById('lcount');

    if(cop == 1 && yop == 2){
        wcount.innerHTML++;
        // document.getElementById('wbox').style.display="block";
        wmresFunction();
    }
    else if(cop == 2 && yop == 3){
        wcount.innerHTML++;
        // document.getElementById('wbox').style.display="block";
        wmresFunction();
    }
    else if(cop == 3 && yop == 1){
        wcount.innerHTML++;
        // document.getElementById('wbox').style.display="block";
        wmresFunction();
    }

    else if(cop==yop){
        // document.getElementById('dbox').style.display="block";
        dmresFunction();
        return false;
    }
    else{
        lcount.innerHTML++;
        // document.getElementById('lbox').style.display="block";
        lmresFunction();
    }
    if(wcount.innerHTML == 3 && lcount.innerHTML<3){
        document.getElementById('wbox').style.display = "block";
        document.getElementById('playbtn').style.pointerEvents = "none";
    }
    else if(lcount.innerHTML == 3 && wcount.innerHTML<3){
        document.getElementById('lbox').style.display = "block";
        document.getElementById('playbtn').style.pointerEvents = "none";
    }
    else if(lcount.innerHTML == 2 && wcount.innerHTML==2){
        document.getElementById('dbox').style.display = "block";
        document.getElementById('playbtn').style.pointerEvents = "none";
    };

    function wmresFunction(){
        setTimeout(()=>{
            const wbox = document.getElementById('wbox');
            wbox.style.display = "none";
        },4500);
    };
    function lmresFunction(){
        setTimeout(()=>{
            const lbox = document.getElementById('lbox');
            lbox.style.display = "none";
        },4500);
    };
    function dmresFunction(){
        setTimeout(()=>{
            const dbox = document.getElementById('dbox');
            dbox.style.display = "none";
        },4500);
    };
}


function refresh(){
    window.location.reload();
}