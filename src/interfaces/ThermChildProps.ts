import { Therm } from "./";

export type ThermChildProps = {
	thermostat: Therm,
	past: Therm[],
	updateModalDisplay: Function,
	showThermModal: boolean,
	width: string,
	degreesFormat: string,
	use24Hour: boolean,
	isModal?: boolean,
	id?: any,
	thermInterval: number,
}