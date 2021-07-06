// possible threejs cloudflare link 
 
//  limit frame rates to 10 for a retro feel 
//  some objective tto remember: score, collision, growth, death) 

//  Constant Variables 

//  creates place where the image is being shot 
const scene = new THREE.Scene()

//  
// will give this function 4 arguments (Field of View, Aspect Ratio, Near clipping place, Far clipping plane )
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 ) 


// will take the scene that we shoot and place on page(render)
//  renderer will take an object of options adds smoother contrast to cube vs scene 
//  first step will be to use the renderer,setSize() to create the size of the page and APPEND it to the body of our HTML 
const renderer = new THREE.WebGLRenderer({ antialias: true})


// questions : If i were to empty the css on my page and link the index.js to provide the 3D styling will that work? 


