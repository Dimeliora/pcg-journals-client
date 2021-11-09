import { FC } from "react";
import { useParams } from "react-router-dom";

import { IdRouteParam } from "../../../interfaces/id.param.type";

import { useAppSelector } from "../../../store/hooks/store.hooks";

const Computer: FC = () => {
	const { id } = useParams<IdRouteParam>();

	const { computers } = useAppSelector(({ computers }) => computers);
	console.log(computers.find((computer) => computer._id === id));

	return <div>{id}</div>;
};

export default Computer;
