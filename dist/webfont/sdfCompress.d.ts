import type { AssetPipe } from '../core/index.js';
import type { CompressOptions } from '../image/compress.js';
export type SDFCompressOptions = Omit<CompressOptions, 'jpg'>;
export declare function sdfCompress(_options?: SDFCompressOptions): AssetPipe<SDFCompressOptions, 'font' | 'nc'>;
