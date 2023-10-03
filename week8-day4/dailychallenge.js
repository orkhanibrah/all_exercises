class Video {
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}

let video1 = new Video('funny cats', 'Anthony', 210);
video1.watch();
let video2 = new Video('funny dogs', 'Anthony', 180);
video2.watch();

const videoArray = [
    {title:'video0', uploader: 'Tony', time: 220},
    {title:'video1', uploader: 'Tony', time: 230},
    {title:'video2', uploader: 'Tony', time: 240},
    {title:'video3', uploader: 'Tony', time: 250},
    {title:'video4', uploader: 'Tony', time: 260}
];

let newVideo = '';
for(item of videoArray){
    let newVideo = new Video(item.title, item.uploader, item.time);
    newVideo.watch();
};

