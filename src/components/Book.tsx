import React from "react";

export interface BookComponent{
  cover: any;
  completed: Number;
  name: String;
  author: String;
}

const Book = ({author,completed,cover,name }:BookComponent) => {
  	let btnText = "";
		if (completed === 100) {
			btnText = "Read Again";
		} else if (completed < 100) {
			btnText = "Continue";
		}
	return (
		<div className="book">
			<div className="book-cover">
				<div className="book-cover-overlay">
					<button className="book-cover-overlay-btn">{btnText}</button>
				</div>
				<img src={cover} className="book-cover-img" alt="bookcover" />
			</div>
		
			<h4 className="book-name">{name}</h4>
			<p className="book-author">{author}</p>
		</div>
	);
};

export default Book;
