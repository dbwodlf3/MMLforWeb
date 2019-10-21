//global values
var noteIndex = 1;
var musicCode = makeBeats(sepreatedData);

//test code
musicCode[0].animation.play()

// functions
function makeBeats(sepreatedData){
    var track;
    var Data = makeDivNotes(sepreatedData);
    var aniTemp;
    var result = [];

    if(document.getElementsByClassName("track")){
        track = document.getElementsByClassName("track")[0]
    } else {return false}
    var trackHeight = track.getBoundingClientRect().height

    //time이라는건 누르고 있는 시간입니다.
    //만나서 들어가기까지의 시간.
    //그 사이는 노드간의 시간.
    Data.forEach((x)=>{
        aniTemp = x.animate([
            {transform: "translate(0px, 0px)",backgroundColor:"#aaaaaa"},
            {transform: `translate(0px, ${trackHeight}px)`,backgroundColor:"#abcdef"}
        ], {"duration": 1000})
        aniTemp.pause()
        aniTemp.onfinish = ()=>{x.remove();nextNote();}
        x.animation = aniTemp
        result.push(x)
    })
    return result
}


//helper function
/**
 * @param {Array} notes
 */
function makeDivNotes(notes){
    var inNote;
    var result = [];
    notes.forEach((note)=>{
        inNote = document.createElement("div")
        inNote.setAttribute("class", "note")
        inNote.style.position = "absolute"
        inNote.style.left = 15 * returnPitchValue(note.Pitch)
        inNote.style.top =  0
        inNote.dataset.pitch = note.Pitch
        inNote.dataset.time = note.Time
        result.push(inNote)
    })
    return result
}

function returnPitchValue(str){

    var result = 0;
    
    if(str.match(/c/)){result = 1}
    if(str.match(/c\+/)){result = 2}
    if(str.match(/d/)){result = 3}
    if(str.match(/d\+/)){result = 4}
    if(str.match(/e/)){result = 5}
    if(str.match(/f/)){result = 6}
    if(str.match(/f\+/)){result = 7}
    if(str.match(/g/)){result = 8}
    if(str.match(/g\+/)){result = 9}
    if(str.match(/a/)){result = 10}
    if(str.match(/a\+/)){result = 11}
    if(str.match(/b/)){result = 12}
    
    
    if(str.match("0")){result = result + 12 * 0}
    if(str.match("1")){result = result + 12 * 1 }
    if(str.match("2")){result = result + 12 * 2 }
    if(str.match("3")){result = result + 12 * 3 }
    if(str.match("4")){result = result + 12 * 4 }
    if(str.match("5")){result = result + 12 * 5 }
    if(str.match("6")){result = result + 12 * 6 }
    if(str.match("7")){result = result + 12 * 7 }
    
    return result;
}

function nextNote(){
    if(musicCode[noteIndex]){
        document.body.appendChild(musicCode[noteIndex])
        musicCode[noteIndex].animation.play()
        noteIndex++
        console.log("Fuck")
    }
}