import { RatesLimitsEntityBase } from '../RatesLimitsEntityBase';
import type { RatesLimitsSDK } from '../RatesLimitsSDK';
import type { Control } from '../types';
import type { Year, YearListMatch } from '../RatesLimitsTypes';
declare class YearEntity extends RatesLimitsEntityBase<Year> {
    constructor(client: RatesLimitsSDK, entopts: any);
    make(this: YearEntity): YearEntity;
    list(this: any, reqmatch?: YearListMatch, ctrl?: Control): Promise<YearEntity[]>;
}
export { YearEntity };
