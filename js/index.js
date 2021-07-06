// possible threejs cloudflare link 
 


//  Constant Variables 

// will give this function 4 arguments (Field of View, Aspect Ratio, Near clipping place, Far clipping plane )
const scene = new THREE.Scene()


// 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 ) 


// 
const renderer = new THREE.WebGLRenderer({ antalias: true})