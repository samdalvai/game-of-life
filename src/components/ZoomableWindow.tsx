import { useState } from 'react';
import { ChildrenProps } from '../types/components';
import { CallBack } from '../types/callbacks';

function ZoomableWindow({ children }: { children: ChildrenProps }) {
    const [zoom, setZoom] = useState<number>(1);

    const handleZoomIn = () => {
        setZoom(zoom + 0.1);
    };

    const handleZoomOut = () => {
        setZoom(zoom - 0.1);
    };

    const ZoomButton = ({ onClick, sign }: { sign: '+' | '-', onClick: CallBack }) => {
        return <button
            className="flex items-center justify-center w-10 h-10 bg-gray-500 hover:bg-gray-600 text-white px-2 rounded ml-2"
            onClick={onClick}
        >
            <span className="text-xl">{sign}</span>
        </button>;
    };

    return (
        <div className="w-full h-full overflow-hidden border border-gray-500 relative shadow-md">
            <div
                className="w-full h-full flex items-center justify-center transform origin-center transition-transform"
                style={{ transform: `scale(${zoom})` }}
            >
                {children}
            </div>
            <div className="flex absolute bottom-2 right-2">
                <ZoomButton sign="+" onClick={handleZoomIn} />
                <ZoomButton sign="-" onClick={handleZoomOut} />
            </div>
        </div>
    );
}

export default ZoomableWindow;
