import { RatesLimitsEntityBase } from '../RatesLimitsEntityBase';
import type { RatesLimitsSDK } from '../RatesLimitsSDK';
import type { Control } from '../types';
import type { Catalog, CatalogListMatch } from '../RatesLimitsTypes';
declare class CatalogEntity extends RatesLimitsEntityBase<Catalog> {
    constructor(client: RatesLimitsSDK, entopts: any);
    make(this: CatalogEntity): CatalogEntity;
    list(this: any, reqmatch?: CatalogListMatch, ctrl?: Control): Promise<CatalogEntity[]>;
}
export { CatalogEntity };
