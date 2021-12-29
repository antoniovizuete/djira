import { JqlQueryClause } from './jqlQueryClause.ts';
import { JqlQueryOrderByClause } from './jqlQueryOrderByClause.ts';

/** A parsed JQL query. */
export interface JqlQuery {
  where?: JqlQueryClause;
  orderBy?: JqlQueryOrderByClause;
}
