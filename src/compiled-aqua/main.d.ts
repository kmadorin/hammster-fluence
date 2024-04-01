/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is generated using:
 * @fluencelabs/aqua-api version: 0.13.0
 * @fluencelabs/aqua-to-js version: 0.3.5
 * If you find any bugs in generated AIR, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * If you find any bugs in generated JS/TS, please write an issue on GitHub: https://github.com/fluencelabs/js-client/issues
 *
 */
import type { IFluenceClient as IFluenceClient$$, ParticleContext as ParticleContext$$ } from '@fluencelabs/js-client';

// Making aliases to reduce chance of accidental name collision
import {
    v5_callFunction as callFunction$$,
    v5_registerService as registerService$$
} from '@fluencelabs/js-client';


// Functions
export type HelloWorldParams = [name: string, config?: {ttl?: number}] | [peer: IFluenceClient$$, name: string, config?: {ttl?: number}];

export type HelloWorldResult = Promise<string>;

export type CallProofGenerateParams = [a: number[], b: number[], params_bytes: number[], config?: {ttl?: number}] | [peer: IFluenceClient$$, a: number[], b: number[], params_bytes: number[], config?: {ttl?: number}];

export type CallProofGenerateResult = Promise<{ answer: number[] | null; worker: { host_id: string; pat_id: string; worker_id: string | null; }; }[]>;

export type CallSetupParamsParams = [config?: {ttl?: number}] | [peer: IFluenceClient$$, config?: {ttl?: number}];

export type CallSetupParamsResult = Promise<{ answer: number[] | null; worker: { host_id: string; pat_id: string; worker_id: string | null; }; }[]>;

