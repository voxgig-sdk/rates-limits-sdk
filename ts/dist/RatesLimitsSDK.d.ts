import { CatalogEntity } from './entity/CatalogEntity';
import { LatestEntity } from './entity/LatestEntity';
import { ProgramEntity } from './entity/ProgramEntity';
import { YearEntity } from './entity/YearEntity';
export type * from './RatesLimitsTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { RatesLimitsEntityBase } from './RatesLimitsEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class RatesLimitsSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Catalog(entopts?: Record<string, any>): CatalogEntity;
    Latest(entopts?: Record<string, any>): LatestEntity;
    Program(entopts?: Record<string, any>): ProgramEntity;
    Year(entopts?: Record<string, any>): YearEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): RatesLimitsSDK;
    tester(testopts?: any, sdkopts?: any): RatesLimitsSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof RatesLimitsSDK;
export { stdutil, config, BaseFeature, RatesLimitsEntityBase, RatesLimitsSDK, SDK, };
export type { DirectResult };
