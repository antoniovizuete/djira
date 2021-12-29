import { AttachmentArchiveEntry } from './attachmentArchiveEntry.ts';

export interface AttachmentArchive {
  moreAvailable?: boolean;
  totalNumberOfEntriesAvailable?: number;
  totalEntryCount?: number;
  entries?: AttachmentArchiveEntry[];
}
