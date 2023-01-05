/** @format */

import { useState } from "react";
import Card from "./Card";
import List from "./List";

export const Home = () => {
	const [isShowList, setIsShowList] = useState(true);

	const handleShowList = () => {
		setIsShowList(!isShowList);
	};

	return (
		<div className="pt-5 ml-96">
			<button
				className="mb-6"
				onClick={handleShowList}
				type="submit"
			>
				<img
					className="h-10 w-10"
					src={isShowList ? "./table.jpg" : "./list.jpg"}
					alt="table"
				/>
			</button>
			{isShowList ? <List /> : <Card />}
		</div>
	);
};

export default Home;
