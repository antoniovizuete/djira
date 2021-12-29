import { AttachmentArchiveEntry } from './attachmentArchiveEntry.ts';

export interface AttachmentArchive {
  totalNumberOfEntriesAvailable?: number;
  moreAvailable?: boolean;
  totalEntryCount?: number;
  entries?: AttachmentArchiveEntry[];
}
