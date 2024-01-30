// import RiotParticles from "riot-particles";
// import { loadFull } from "tsparticles";


// const RiotPar = () => {
//   return(
//     <riot-particles
//     id="tsparticles"
//     options='{{
//         background: {
//             color: "#000"
//         },
//         fullScreen: {
//             enable: true
//         },
//         particles: {
//             links: {
//                 enable: true
//             },
//             move: {
//                 enable: true
//             }
//         }
//     }}'
//     particlesInit="{async (main) => {
//         console.log(main);
        
//         // this loads the tsparticles package bundle, it is the easiest method for getting everything ready
//         // starting from v2 you can add only the features you need reducing the bundle size
//         await loadFull(main); 
//     }}"
//     particlesLoaded="{(container) => console.log(container)}"
// />
//   )
// }
// export default RiotPar;