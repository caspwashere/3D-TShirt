import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#2596be',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './chelsea.png',
    fullDecal: './threejs.png',
});

export default state;