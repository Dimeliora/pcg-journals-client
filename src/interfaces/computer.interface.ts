export enum ComputerTypes {
	PC = "PC",
	SERVER = "SERVER",
}

export enum HddFormFactors {
	MOBILE = 2.5,
	DESKTOP = 3.5,
}

export interface IRamModules {
	ramModuleSize: string;
}

export interface IDisks {
	hddModel: string;
	hddSize: string;
	hddFormFactor: HddFormFactors;
	hddSmart: string;
}

export interface IBackups {
	backupDate: string;
	backupSize: string;
	backupStorage: string;
}

export interface ILastModifier {
	username: string;
}

export interface IComputer {
	_id: string;
	pcType: ComputerTypes;
	pcName: string;
	pcPurpose: string;
	formFactor: string;
	motherboard: string;
	numOfSockets: string;
	typeOfSocket: string;
	maxRamSize: string;
	sataType: string;
	numOfSataPorts: string;
	raid: string;
	numOfPsu: string;
	psuPower: string;
	os: string;
	numOfCpu: string;
	cpuModel: string;
	numOfCores: string;
	cpuFrequency: string;
	cpuL1Cache: string;
	cpuL2Cache: string;
	cpuL3Cache: string;
	ramType: string;
	ramTotalModules: string;
	ramTotalSize: string;
	ramModules: IRamModules[];
	raidMode: string;
	totalDiskSpace: string;
	disks: IDisks[];
	cpuUpgrade: string;
	ramUpgrade: string;
	hddUpgrade: string;
	pcBackups: IBackups[];
	pcComments: string;
	updatedAt: string;
	lastModifier: ILastModifier;
}
