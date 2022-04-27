

let currentSketch;

let students = [
    {
        "name":"Patrick Higgins",
        "title":"Bloody Valentine by Machine Gun Kelly",
        "photo":"patrick.png",
        "info":"For my final designed album cover I knew from the start I wanted to do some sort of Machine Gun Kelly song. I wasn’t sure which one, but eventually I settled on 'Bloody Valentine.' For my design I first knew I wanted to have a dark background and wanted to keep with the color combination Machine Gun Kelly is most known for; pink, white, black. I went into Photoshop and created a back image to have as the base for my design. This design is where I knew I needed to make a large impact on the viewer. I crafted a very nifty design and uploaded it into p5.js. <br><br> After this my mind turned to creating the type that would be displayed over the top of the design. For this I wanted to just have the song title, 'Bloody Valentine.' There was a lot of experimenting around for me to find the best place to put it. I thought about having it running on a 90 degree angle up the left side, but after placing it there I lost my desire to see it there. It seemed to marginalized and also the graphic image was all centered so placing the main type on the left side didn’t seem to fit the aesthetic.<br><br>After these debates it left me with the idea of just having it centered over the top. Initially when I placed it there, I did not have it centered and I did not even realize it, yet when I went back it was very clear it was not centered. It makes me think I had my p5.js zoomed in while in my preview window, because the mistake became much clearer later on. I was able to center the type and I added two layers to it. The top layer is a pink and the back layer is a white. I have them slightly offset to give it more of a grungy and alternative 2000s look as that is the emotions the song emotes.<br><br>I also added another image on top of this one by placing the 'Tickets to My Downfall' word art in the bottom right corner. This addition made it seem a bit more like an album cover to me instead of just a piece of artwork or poster that didn’t fully connect to the music.<br><br>The last and most challenging part of the process was I wanted to have a more dynamic piece to the album cover for when the song was played. This led me to adding the waveforms over the top of the image. I made them white so they would stick out over the rest of the dark background. I also was sure to place them behind my title so the title could still pop out the most even with the flashing lines in the background. I made sure to have the wavelengths react very aggressively as it is a rock song and much more aggressive flashing white lines seemed to connect much more.",
        "url":"https://editor.p5js.org/patrick.higgins/full/95pDEIOsk"
    },
    {
        "name":"Leyla Arici",
        "title":"",
        "photo":"example.png",
        "info":"",
        "url":""
    },
    {
        "name":"Micha Aviad",
        "title":"",
        "photo":"example.png",
        "info":"",
        "url":""
    },
    {
        "name":"Isabella Catterino",
        "title":"",
        "photo":"example.png",
        "info":"",
        "url":""
    },
    {
        "name":"Caroline Cavanaugh",
        "title":"",
        "photo":"example.png",
        "info":"",
        "url":""
    },
    {
        "name":"Fabrizzio Cedeno",
        "title":"",
        "photo":"example.png",
        "info":"",
        "url":""
    },
    {
        "name":"Morgan Derby",
        "title":"",
        "photo":"example.png",
        "info":"",
        "url":""
    },
    {
        "name":"Katie May Howarth",
        "title":"",
        "photo":"example.png",
        "info":"",
        "url":""
    },
    {
        "name":"Amara Khaled",
        "title":"",
        "photo":"example.png",
        "info":"",
        "url":""
    },
    {
        "name":"Caesaer Li",
        "title":"",
        "photo":"example.png",
        "info":"",
        "url":""
    },
    {
        "name":"Jared Poulsen",
        "title":"Interloper by Momma",
        "photo":"jared.png",
        "info":"",
        "url":"https://editor.p5js.org/jp8081/full/OcGa4sbNM"
    },
    {
        "name":"Angelina Racaniello",
        "title":"",
        "photo":"example.png",
        "info":"",
        "url":""
    },
    {
        "name":"Victoria Shaffer",
        "title":"",
        "photo":"example.png",
        "info":"",
        "url":""
    },
    {
        "name":"John Sweigart",
        "title":"",
        "photo":"example.png",
        "info":"",
        "url":""
    },
    {
        "name":"Alexandra Szabo",
        "title":"",
        "photo":"example.png",
        "info":"",
        "url":""
    },
    {
        "name":"GD4",
        "title":"",
        "photo":"example.png",
        "info":"",
        "url":""
    }
];

function setup() {
    noCanvas();
    currentSketch = select("#embed")

    let s = select("#students");

    // dynamically load student data
    for(let i=0; i<students.length; i++){
       let li = createElement('li', '<img src="images/'+ students[i].photo + '" alt="" loading="lazy">');
        li.attribute("id",students[i].name);
        li.parent(s);
        function loadStudent(){
            currentSketch.attribute("src",students[i].url);
            // name
            let n = select("#name");
            n.html(students[i].name);
            // title
            let t = select("#title");
            t.html(students[i].title);
            // info
            let m = select("#info");
            m.html(students[i].info);
            // show popup
            let p = select("#popup");
            p.style("display","block");
        }
        li.mouseClicked(loadStudent)
    }

    let closePopup = select("#close");
    closePopup.mouseClicked(closePop)
}

function closePop(){
    let po = select("#popup");
    po.style("display","none");
    currentSketch.attribute("src","");
}

function draw() {

}

function keyPressed(){
    if(keyCode == 27) closePop();
}
