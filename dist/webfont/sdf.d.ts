import type { BitmapFontOptions } from '@pixi/msdf-bmfont-xml';
import type { AssetPipe, PluginOptions } from '../core/index.js';
import type { MipmapOptions } from '../image/index.js';
export interface SDFFontOptions extends PluginOptions {
    name: string;
    type: BitmapFontOptions['fieldType'];
    font?: Omit<BitmapFontOptions, 'outputType' | 'fieldType'>;
    resolutionOptions?: MipmapOptions;
}
export type SignedFontTags = 'font' | 'nc' | 'nomip' | 'fix';
export declare function sdfFont(options?: Partial<SDFFontOptions>): AssetPipe<SDFFontOptions, SignedFontTags, string>;
export declare function msdfFont(options?: Partial<SDFFontOptions>): AssetPipe<SDFFontOptions, SignedFontTags, string>;
export declare function createName(name: string, scale: number, template: string): string;
export type jsonType = {
    font: {
        info: {
            _attributes: {
                face: string;
                size: string;
                bold: string;
            };
        };
        pages: {
            page: pageType | pageType[];
        };
        chars: {
            char: charType[];
        };
    };
};
export type charType = {
    _attributes: {
        id: string;
        char: string;
    };
};
export type pageType = {
    _attributes: {
        id: string;
        file: string;
    };
};
