import React  from "react";
import { FiX, FiCheck } from "react-icons/fi";
export interface MessageComponent {
	type: string;
	message: string;
	show: boolean;
}

const Message = ({ type, message, show }: MessageComponent) => {
	const success = (
		<div className="message-icon" style={{ backgroundColor: "#52c41a" }}>
			<FiCheck size="12px" stroke="white" />
		</div>
	);
	const error = (
		<div className="message-icon" style={{ backgroundColor: "#f44336" }}>
			<FiX size="12px" stroke="white" />
		</div>
	);
	return (
		<div className="message">
			{type === "success" ? success : error} <p className="message-text">{message}</p>
		</div>
	);
};

export default Message;
