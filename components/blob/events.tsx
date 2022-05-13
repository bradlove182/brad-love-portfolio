
import {
    useEffect,
    useState
} from "react";

import type {
    Dispatch,
    SetStateAction
} from "react";

/* eslint-disable @typescript-eslint/naming-convention -- Enum naming */
export enum BlobEvents{
    CENTER = "center",
    LEFT = "left",
    RIGHT = "right",
    TOP = "top",
    BOTTOM = "bottom"
}
/* eslint-enable @typescript-eslint/naming-convention */

export type BlobEventProps = {
    [key in BlobEvents]?: EventListenerOrEventListenerObject;
};

export const dispatchBlobEvent = (key: BlobEvents) => (): void => {

    document.dispatchEvent(new CustomEvent<BlobEvents>(key, {
        detail: key
    }));

};

export const useBlobEvents = (props: BlobEventProps): [BlobEvents, Dispatch<SetStateAction<BlobEvents>>] => {

    const [blobState, setBlobState] = useState(BlobEvents.CENTER);

    useEffect(() => {

        for(const [key, callback] of Object.entries(props)){

            document.addEventListener(key, callback);

        }

        return () => {

            for(const [key, callback] of Object.entries(props)){

                document.removeEventListener(key, callback);

            }

        };

    }, []);

    return [blobState, setBlobState];

};
