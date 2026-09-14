# WideDPD Lab

Frontend-only research prototype for exploring wideband power-amplifier nonlinearities, memory effects, and digital predistortion. All values are deterministic synthetic demonstration data; nothing is presented as Ericsson data or measured RF performance.

## 2-minute demo

1. **Overview (15s):** establish the 800 MHz scenario and synthetic-data badge.
2. **PA Simulation (35s):** push bandwidth toward 1.2 GHz, raise memory depth, and watch spectrum regrowth, AM/AM compression, and waveform lag update.
3. **DPD Model Lab (25s):** switch models. Highlight domain features → memory polynomial → small ML residual corrector.
4. **Before vs After (20s):** compare spectrum and animated EVM, NMSE, ACLR, and regrowth KPIs.
5. **Memory Explorer (15s):** vary order and memory depth to show the accuracy/complexity frontier.
6. **Model Benchmark (10s):** finish with the comparison table and “Best Trade-off” recommendation.

## Local use

`npm run dev` starts the preview. `npm run build` creates the production build.
