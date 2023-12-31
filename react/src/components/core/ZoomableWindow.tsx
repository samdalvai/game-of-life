import { useState } from 'react';
import { ChildrenProps } from '../../types/components';
import { CallBack } from '../../types/callbacks';

function ZoomableWindow({ children, zoomEnabled }: { children: ChildrenProps, zoomEnabled: boolean }) {
    const [zoom, setZoom] = useState<number>(0.5);

    const handleZoomIn = () => {
        setZoom(zoom + 0.05);
    };

    const handleZoomOut = () => {
        setZoom(zoom - 0.05);
    };

    const ZoomButton = ({ onClick, sign }: { sign: '+' | '-', onClick: CallBack }) => {
        if (!zoomEnabled) {
            return null;
        }
        
        return <button
            className="flex items-center justify-center w-8 h-8 bg-gray-500 hover:bg-gray-600 text-white px-2 rounded ml-2 border border-black"
            onClick={onClick}
        >
            <span className="flex items-center text-xl pb-1">{sign}</span>
        </button>;
    };

    return (
        <div className="w-full h-full bg-white overflow-hidden border rounded-sm border-gray-500 relative shadow-md">
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
