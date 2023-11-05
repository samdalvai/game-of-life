import { CoordinatesCallBack } from '../../types/callbacks';
import { Cell, CellMatrix } from '../../types/game';
import CellSquare from './CellSquare';

const CellMatrixField = ({ cellMatrix, onCellClick }: { cellMatrix: CellMatrix, onCellClick: CoordinatesCallBack }) => {
	return <div className="border-2 border-black">
		{
			cellMatrix.map((cellRow: Cell[], xAxis: number) => <div key={'row-' + xAxis} className="flex justify-center">
				{
					cellRow.map((cell: Cell, yAxis: number) => {
						return <CellSquare
							key={'cell-' + xAxis + yAxis}
							cell={cell}
							onClick={() => onCellClick({ xAxis: xAxis, yAxis: yAxis })} />;
					})
				}
			</div>)
		}
	</div>;
};

export default CellMatrixField;