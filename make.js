//test
var counting=0;

document.body.appendChild(piano())


//Data Constructon
/*
<div class="octavePiano">
    <div class="tracks">
        <div class="track">
            <div class="c0 track_line"></div>
            <div class="d0 track_line"></div>
            <div class="e0 track_line"></div>
            <div class="f0 track_line"></div>
            <div class="g0 track_line"></div>
            <div class="a0 track_line"></div>
            <div class="b0 track_line"></div>
        </div>
    </div>
    <div class="keys">
        <div class="octave>
            <div class="c1 white_key"></div>
            <div class="c1+ black_key"></div>
            <div class="d1 white_key"></div>
            <div class="d1+ black_key"></div>
            <div class="e1 white_key"></div>
            <div class="f1 white_key"></div>
            <div class="f1+ black_key"></div>
            <div class="g1 white_key"></div>
            <div class="g1+ black_key"></div>
            <div class="a1 white_key"></div>
            <div class="a1+ black_key"></div>
            <div class="b1 white_key"></div>
        </div>
    </div>
</div>
*/

//create Data
function piano(){
    var result = document.createElement("div")
    var wrapper;

    result.setAttribute("class","piano")

    for(let i=0;i<8;i++){
        wrapper = document.createElement("div")
        wrapper.setAttribute("class","octavePiano")
        
        wrapper.appendChild(makeTrack(i))
        wrapper.appendChild(makeKeys(i))

        result.append(wrapper)
    }

    return result
}

//Helper Function
function makeTrack(n){
    var container = document.createElement("div")
    var wrapper = document.createElement("div")
    var octave = 'cdefgab'
    var octaveShap = /[cdfga]/
    var temp;

    container.appendChild(wrapper)

    container.setAttribute("class","tracks")
    wrapper.setAttribute("class","track")

    for(let i=0;i<octave.length;i++){
        temp = document.createElement("div")
        temp.setAttribute("class",octave[i]+n)
        temp.classList.add("track_line")
        wrapper.appendChild(temp)
        if(octave[i].match(octaveShap)){
            temp = document.createElement("div")
            temp.setAttribute("class",octave[i]+"+"+n)
            temp.classList.add("black_key")
            wrapper.appendChild(temp)
        }
    }

    return container
}
function makeKeys(n){
    var container = document.createElement("div")
    var wrapper = document.createElement("div")
    var octave = 'cdefgab'
    var temp
    var octaveShap = /[cdfga]/

    container.appendChild(wrapper)

    container.setAttribute("class","keys")
    wrapper.setAttribute("class","octave")

    for(let i=0;i<octave.length;i++){
        temp = document.createElement("div")
        temp.setAttribute("class",octave[i]+n)
        temp.classList.add("white_key")
        wrapper.appendChild(temp)
        counting++
        if(octave[i].match(octaveShap)){
            temp = document.createElement("div")
            temp.setAttribute("class",octave[i]+"+"+n)
            temp.classList.add("black_key")
            wrapper.appendChild(temp)
        }
    }

    return container
}