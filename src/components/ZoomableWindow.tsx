import { useState } from 'react';
import { ChildrenProps } from '../types/components';

function ZoomableWindow({ children }: { children: ChildrenProps }) {
    const [zoom, setZoom] = useState<number>(1);

    const handleZoomIn = () => {
        setZoom(zoom + 0.1);
    };

    const handleZoomOut = () => {
        setZoom(zoom - 0.1);
    };

    return (
        <div className="w-64 h-48 overflow-hidden border border-gray-500 relative">
            <div
                className="w-full h-full transform origin-top-left transition-transform"
                style={{ transform: `scale(${zoom})` }}
            >
                {children}
            </div>
            <div className="absolute bottom-2 right-2">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
                    onClick={handleZoomIn}
                >
                    Zoom In
                </button>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded ml-2"
                    onClick={handleZoomOut}
                >
                    Zoom Out
                </button>
            </div>
        </div>
    );
}

export default ZoomableWindow;
