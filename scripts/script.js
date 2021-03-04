/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require('Scene');
const Reactive = require('Reactive');
const Patches = require('Patches');
const Time = require('Time');
const LightingEstimation = require('LightingEstimation');
// Use export keyword to make a symbol available in scripting debug console
export const D = require('Diagnostics');

// Enables async/await in JS [part 1]
(async function() {

    // Locate the ambientLight in the Scene
  const [ambientLight] = await Promise.all([
    Scene.root.findFirst('ambientLight0')
  ]);
 
  async function light(){
  
  }
// Calculate light intensity by subtracting the frame brightness from 1, the
  // darker the frame brightness, the greater the light intensity
  //const intervalTimer = Time.setInterval( light, 16.67);
 //const timeoutTimer = Time.setTimeout(stopIntervalTimer,2000);


// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

// To access scene objects
// const [directionalLight] = await Promise.all([
//   Scene.root.findFirst('directionalLight0')
// ]);

// To access class properties
// const directionalLightIntensity = directionalLight.intensity;

// To log messages to the console
// Diagnostics.log('Console message logged from the script.');

// Enables async/await in JS [part 2]
})();
