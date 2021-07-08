# SparkSL Procedural Noise Example

[![Watch the video](https://img.youtube.com/vi/fSQ9WEVTR18/maxresdefault.jpg)](https://youtu.be/fSQ9WEVTR18)

![](https://img.shields.io/badge/sdk-v117-green)

## Intro

This is a minimal proof of concept of how to get different types of procedural noise via [SparkSL](https://sparkar.facebook.com/ar-studio/learn/sparksl/sparksl-overview), the specific language used by SparkAR to manipulate shaders; you can use this code as the basis of your research/experiments.

Much of IQ(aka Inigo Quilez)'s work - the [shadertoy](https://www.shadertoy.com/) mastermind - is assumed as "gold standard", in this porting from GLSL.

- [Simplex Noise](https://www.shadertoy.com/view/Msf3WH)
- [Gradient Noise](https://www.shadertoy.com/view/XdXGW8)
- [Value noise](https://www.shadertoy.com/view/lsf3WH)
- [Worley noise](https://www.shadertoy.com/view/tldGzr)
- [Voro noise](https://www.shadertoy.com/view/Xd23Dh)

# short howto

You can compile the project within SparkAR and test it directly in your device. 

From picker UI (on bottom):

![photo5996829765165758148](https://user-images.githubusercontent.com/5708525/124906304-371cb600-dfe7-11eb-9587-298cc6fc39db.jpg)
- 1. an overview of the various types of procedural noise computed in real-time

![photo5996829765165758147](https://user-images.githubusercontent.com/5708525/124906309-397f1000-dfe7-11eb-8175-9fb1e0eb236e.jpg)
- 2. visualize the effect of the noise on the texture camera of the device

From slider UI (on right):
- adjust the amplitude of the noise value; you can find more details in shaders/shaderCode.sca

Currently a work in progress, feel free to file a PR if you'd like to contribute. The project is updated to version 117 of SparkAR sdk.
If you like the project and/or find it useful, drop me a star ;)

### Tested on

- iPhoneXR
- Huawei P9 Lite


