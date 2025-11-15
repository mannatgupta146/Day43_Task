let arr = [
  { team: "CSK", primary: "#F9CD05", secondary: "#0D77BE", img: "./assets/csk.png" },
  { team: "MI", primary: "#004BA0", secondary: "#D1AB3E", img: "./assets/mi.png" },        
  { team: "RCB", primary: "#D71920", secondary: "#D6BD57", img: "./assets/rcb.png" },
  { team: "KKR", primary: "#3A225D", secondary: "#D4AF37", img: "./assets/kkr.png" },
  { team: "SRH", primary: "#F26522", secondary: "#000000", img: "./assets/srh.png" },
  { team: "DC", primary: "#1A3C8D", secondary: "#D71921", img: "./assets/dc.png" },
  { team: "RR", primary: "#254AA5", secondary: "#EA1A85", img: "./assets/rr.png" },  
  { team: "PBKS", primary: "#B92428", secondary: "#F6CD8F", img: "./assets/pbks.png" },
  { team: "GT", primary: "#0A1A2F", secondary: "#E0C573", img: "./assets/gt.png" },
  { team: "LSG", primary: "#00ADEF", secondary: "#375CAA", img: "./assets/lsg.png" }
];


let main = document.querySelector('#main')
let h1= document.querySelector('h1')
let btn = document.querySelector('button')

btn.addEventListener('click', function(){
    let num = Math.floor(Math.random() * arr.length)
    box.style.backgroundImage = `url(${arr[num].img})`;
    box.style.backgroundColor = arr[num].primary;
    main.style.backgroundImage = "none";  
    main.style.backgroundColor = arr[num].secondary;
    btn.style.backgroundColor = arr[num].primary;
    btn.style.color = " #f2f2f2"
    h1.style.color = arr[num].primary;
})