import { EntityPropertyDetails } from '../models/mod.ts';

export interface UpdateEntityPropertiesValue {
  /** The app migration transfer ID. */
  transferId: string;
  /** The type indicating the object that contains the entity properties. */
  entityType: string;
  body: Array<EntityPropertyDetails>;
}
