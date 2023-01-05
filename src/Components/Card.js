/** @format */

import React from "react";
import TemplateData from "./dummy-data";
export const Card = () => {
	const styleText = "pt-1 pb-1 pl-3 ";
	return (
		<section className="section">
			<table className="w-6/12 h-full">
				{TemplateData.map((val, key) => {
					return (
						<div className="card">
							<p key={key}>
								<div className={styleText}>
									<b>Name: </b>
									{val.Name}
								</div>
								<div className={styleText}>
									<b>Products: </b>
									{val.Products}
								</div>
								<div className={styleText}>
									<b>Assets: </b>
									{val.Assets}
								</div>
								<div className={styleText}>
									<b>Duration: </b>
									{val.Duration}
								</div>
								<div className={styleText}>
									<b>Tag: </b>
									{val.Tag}
								</div>
							</p>
						</div>
					);
				})}
			</table>
		</section>
	);
};

export default Card;
