import { defineAnimation, SharedValue } from "react-native-reanimated";
import { clamp } from "react-native-redash";

const VELOCITY_EPS = 5;
const deceleration = 0.993;

// export function MyDecay({ initialVelocity }: { initialVelocity: number }) {
//   "worklet";

//   const result = defineAnimation(0, () => {
//     "work let";

//     const animation = (state: any, now: number) => {
//       const { velocity, lastTime, currentPosition } = state;
//       const v0 = velocity / 1000;
//       const delta = now - lastTime;
//       const kv = Math.pow(deceleration, delta);
//       const v = v0 * kv * 1000;
//       const positionX = currentPosition +
//         (v0 * (deceleration * (1 - kv))) / (1 - deceleration);

//       state.velocity = v;
//       state.currentPosition = positionX;
//       state.lastTime = now;

//       return Math.abs(v) < VELOCITY_EPS;
//     };

//     const start = (state: any, currentPosition: number, now: number) => {
//       state.currentPosition = currentPosition;
//       state.velocity = initialVelocity;
//       state.lastTime = now;
//     };

//     return { animation, start };
//   });

//   return result;
// }

// export function MyBounce(
//   { animationParam, lowerBound, upperBound }: {
//     animationParam: number;
//     lowerBound: number;
//     upperBound: number;
//   },
// ) {
//   "worklet";

//   const result = defineAnimation(0, () => {
//     "worklet";

//     const nextAnimation = animationParameter(animationParam);
//     const animation = (state: any, now: number) => {
//       const finished = nextAnimation.animation(nextAnimationm, now);
//       const { velocity, currentPosition } = nextAnimation;

//       if (
//         velocity < 0 && currentPosition < lowerBound ||
//         velocity > 0 && currentPosition > upperBound
//       ) {
//         // nextAnimation.velocity *= -1;
//         nextAnimation.velocity *= -0.5;
//         nextAnimation.currentPosition = clamp(
//           currentPosition,
//           lowerBound,
//           upperBound,
//         );
//       }
//       //   state.velocity = v;
//       state.currentPosition = currentPosition;
//       //   state.lastTime = now;

//       return finished;
//     };

//     const start = (
//       state: any,
//       value: number,
//       now: number,
//       prevAnimation: any,
//     ) => {
//       nextAnimation.start(nextAnimation, value, now, prevAnimation);

//       //   state.currentPosition = currentPosition;
//       //   state.velocity = initialVelocity;
//       //   state.lastTime = now;
//     };

//     return { animation, start };
//   });

//   return result;
// }

// export function MyPause(
//   { animationParam, paused }: {
//     animationParam: number;
//     paused: SharedValue<boolean>;
//   },
// ) {
//   "worklet";

//   const result = defineAnimation(0, () => {
//     "worklet";

//     const nextAnimation = animationParameter(animationParam);

//     const animation = (state: any, now: number) => {
//       if (paused.value) {
//         state.elapsed = now - state.lastTime;
//         return false;
//       }

//       const finished = nextAnimation.animation(
//         nextAnimationm,
//         now - state.lastTime,
//       );

//       state.current = nextAnimation.current;
//       state.lastTime = now;
//       return finished;
//     };

//     const start = (
//       state: any,
//       value: number,
//       now: number,
//       prevAnimation: any,
//     ) => {
//       state.elapsed = 0;
//       state.lastTime = now;
//       nextAnimation.start(nextAnimation, value, now, prevAnimation);
//     };

//     return { animation, start };
//   });

//   return result;
// }
