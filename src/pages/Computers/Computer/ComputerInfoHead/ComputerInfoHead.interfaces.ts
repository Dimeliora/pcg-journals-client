import { FC, SVGProps } from "react";

export interface IComputerInfoHeadProps {
	title: string;
	icon: FC<
		SVGProps<SVGSVGElement> & {
			title?: string | undefined;
		}
	>;
}
