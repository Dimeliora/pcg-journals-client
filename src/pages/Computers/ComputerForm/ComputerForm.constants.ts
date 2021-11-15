import { ComputerTypes, AddComputerData } from "../../../interfaces/computer.interface";

export const ADD_COMPUTER_FORM_VALUES: AddComputerData = {
	pcType: ComputerTypes.PC,
	pcName: "",
	pcPurpose: "",
	formFactor: "",
	motherboard: "",
	numOfSockets: "",
	typeOfSocket: "",
	maxRamSize: "",
	sataType: "",
	numOfSataPorts: "",
	raid: "",
	numOfPsu: "",
	psuPower: "",
	os: "",
	numOfCpu: "",
	cpuModel: "",
	numOfCores: "",
	cpuFrequency: "",
	cpuL1Cache: "",
	cpuL2Cache: "",
	cpuL3Cache: "",
	ramType: "",
	ramTotalModules: "",
	ramModules: [],
	raidMode: "",
	totalDiskSpace: "",
	disks: [],
	pcBackups: [],
	pcComments: "",
};

export const ADD_COMPUTER_FORM_RAM_MODULE = {
	ramModuleSize: "",
};

export const ADD_COMPUTER_FORM_DISK = {
	hddModel: "",
	hddSize: "",
	hddFormFactor: "",
	hddSmart: "",
};

export const ADD_COMPUTER_FORM_BACKUP = {
	backupDate: "",
	backupSize: "",
	backupStorage: "",
};
