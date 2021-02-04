import React from "react";
import PropTypes from "prop-types";

function Btn(PropTypes) {
	return (
		<div>
			{PropTypes.status === 0 ? (
				<button
					className="stopwatch-btn stopwatch-btn-gre"
					onClick={PropTypes.start}>
					Start
				</button>
			) : (
				""
			)}

			{PropTypes.status === 1 ? (
				<div>
					<button
						className="stopwatch-btn stopwatch-btn-red"
						onClick={PropTypes.stop}>
						<i className="fas fa-pause" />
					</button>
					<button
						className="stopwatch-btn stopwatch-btn-yel"
						onClick={PropTypes.reset}>
						<i className="fas fa-undo" />
					</button>
				</div>
			) : (
				""
			)}

			{PropTypes.status === 2 ? (
				<div>
					<button
						className="stopwatch-btn stopwatch-btn-gre"
						onClick={PropTypes.resume}>
						<i className="fas fa-play" />
					</button>
					<button
						className="stopwatch-btn stopwatch-btn-yel"
						onClick={PropTypes.reset}>
						<i className="fas fa-undo" />
					</button>
				</div>
			) : (
				""
			)}
		</div>
	);
}

export default Btn;
