import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
export interface MyBookComponent {
	bookData: any;
}

const MyBook = ({ bookData }: MyBookComponent) => {
	return (
		<div className="mybook">
			<div className="mybook-header">
				<h2 className="mybook-header-title">My Books</h2>
				<Link to="/discover">
					<button className="mybook-header-btn">
						<p>More +</p>
					</button>
				</Link>
			</div>
			<div className="mybook-collection">
				{bookData.map((book: any) => (
					<Book
						name={book.name}
						author={book.author}
						cover={book.photo}
						completed={book.progress}
						key={book.id}
					/>
				))}
			</div>
		</div>
	);
};

export default MyBook;
