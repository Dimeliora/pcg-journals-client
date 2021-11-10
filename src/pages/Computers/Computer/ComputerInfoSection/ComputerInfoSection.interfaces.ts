import { FC, SVGProps } from "react";

import { IComputer } from "../../../../interfaces/computer.interface";

export interface IComputerInfoSectionProps {
	title: string;
	icon: FC<
		SVGProps<SVGSVGElement> & {
			title?: string | undefined;
		}
	>;
	computer?: IComputer;
	terms?: { [key: string]: string };
}
