import { RatesLimitsEntityBase } from '../RatesLimitsEntityBase';
import type { RatesLimitsSDK } from '../RatesLimitsSDK';
import type { Control } from '../types';
import type { Latest, LatestListMatch } from '../RatesLimitsTypes';
declare class LatestEntity extends RatesLimitsEntityBase<Latest> {
    constructor(client: RatesLimitsSDK, entopts: any);
    make(this: LatestEntity): LatestEntity;
    list(this: any, reqmatch?: LatestListMatch, ctrl?: Control): Promise<LatestEntity[]>;
}
export { LatestEntity };
