//global values
var noteIndex = 1;
var waitingTime = 0;
var musicCode = makeBeats(sepreatedData,0.5);

//test code

// functions
function makeBeats(sepreatedData,speed){
    var track;
    var Data = makeDivNotes(sepreatedData,speed);
    var duration;
    var aniTemp;
    var result = [];

    if(document.getElementsByClassName("track")){
        track = document.getElementsByClassName("track")[0]
    } else {return false}
    var trackHeight = track.getBoundingClientRect().height

    //time이라는건 누르고 있는 시간입니다.
    //만나서 들어가기까지의 시간.
    //그 사이는 노드간의 시간.
    //Duration과 Note의 높이는 다음과 같은 관계를 가진다. TrackHeight*NoteTime == NoteHeight*Duration/1000
    Data.forEach((x)=>{
        duration = (1000/speed+x.dataset.time*1000)
        aniTemp = x.animate([
            {transform: `translate(0px, -${x.style.height})`,backgroundColor:"#aaaaaa"},
            {transform: `translate(0px, 900px)`,backgroundColor:"#abcdef"}
        ], {"duration": duration})
        aniTemp.pause()

        aniTemp.onfinish = ()=>{x.remove();}
        aniTemp.startTime = waitingTime
        setTimeout(()=>{x.classList.toggle("hide")},waitingTime)
        waitingTime = waitingTime + x.dataset.time * 1000
        x.animation = aniTemp
        document.body.appendChild(x);
        result.push(x)
    })
    return result
}


//helper function
/**
 * @param {Array} notes
 */
function makeDivNotes(notes, speed){
    if(document.getElementsByClassName("track")){
        track = document.getElementsByClassName("track")[0]
    } else {return false}
    var trackHeight = track.getBoundingClientRect().height

    var inNote;
    var result = [];
    notes.forEach((note)=>{
        let noteTime = note.Time
        console.log(noteTime)
        inNote = document.createElement("div")
        inNote.setAttribute("class", "note")
        inNote.classList.add("hide")
        inNote.style.position = "absolute"
        inNote.style.height = note.Time* 1000 * speed
        inNote.style.left = 20 * returnPitchValue(note.Pitch+note.Octave)
        inNote.style.top =  0;
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

function run(time){
    return false
}