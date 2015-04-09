/// <reference path="../typings/tsd.d.ts" />
'use strict';

export interface Output {
    value: string
}


export default function entry(str: string): Output {
    return { value: '!' + str + '!' }};
};
