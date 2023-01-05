/** @format */

import React from "react";
import TemplateData from "./dummy-data";
const List = () => {
	return (
		<div className="sectionList">
			<table className="border rounded-full border-collapse border-spacing-2 h-4/5">
				<thead className="p-5 text-center">
					<tr>
						<th className="textClass">Name</th>
						<th className="textClass">Products</th>
						<th className="textClass">Assets</th>
						<th className="textClass">Duration</th>
						<th className="textClass">Tag</th>
					</tr>
				</thead>
				<tbody className="p-5 text-center">
					{TemplateData.map((val, key) => (
						<tr key={key}>
							<td className="textClass">{val.Name}</td>
							<td className="textClass">{val.Products}</td>
							<td className="textClass">{val.Assets}</td>
							<td className="textClass">{val.Duration}</td>
							<td className="textClass">{val.Tag}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default List;
