import { RatesLimitsEntityBase } from '../RatesLimitsEntityBase';
import type { RatesLimitsSDK } from '../RatesLimitsSDK';
import type { Control } from '../types';
import type { Program, ProgramListMatch } from '../RatesLimitsTypes';
declare class ProgramEntity extends RatesLimitsEntityBase<Program> {
    constructor(client: RatesLimitsSDK, entopts: any);
    make(this: ProgramEntity): ProgramEntity;
    list(this: any, reqmatch?: ProgramListMatch, ctrl?: Control): Promise<ProgramEntity[]>;
}
export { ProgramEntity };
