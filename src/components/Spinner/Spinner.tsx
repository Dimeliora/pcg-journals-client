import { FC } from "react";

import "./Spinner.css";

const Spinner: FC = () => {
	return (
		<div className="spinner">
			<div className="spinner__outer">
				<div className="spinner__inner">
					<div>
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Spinner;
