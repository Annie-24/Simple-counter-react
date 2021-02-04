import React from "react";
import PropTypes from "prop-types";

function SecondsCounter(PropTypes) {
	const h = () => {
		if (PropTypes.time.h === 0) {
			return "";
		} else {
			return (
				<span>
					{PropTypes.time.h >= 10
						? PropTypes.time.h
						: "0" + PropTypes.time.h}
				</span>
			);
		}
	};
	return (
		<div>
			{" "}
			{h()}
			&nbsp;&nbsp;
			<span>
				{PropTypes.time.m >= 10
					? PropTypes.time.m
					: "0" + PropTypes.time.m}
			</span>
			&nbsp;:&nbsp;
			<span>
				{PropTypes.time.s >= 10
					? PropTypes.time.s
					: "0" + PropTypes.time.s}
			</span>
			&nbsp;:&nbsp;
			<span>
				{PropTypes.time.ms >= 10
					? PropTypes.time.ms
					: "0" + PropTypes.time.ms}
			</span>
		</div>
	);
}

export default SecondsCounter;
