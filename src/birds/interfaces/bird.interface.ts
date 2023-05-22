interface ConservationStatus {
  label: string;
  code: string;
  description: string;
}

interface PopulationTrend {
  label: string;
  code: number;
  color: string;
  description: string;
}

interface Anatomy {
  head: string;
  neck: string;
  body: string;
  wings: string;
  tail: string;
  legs: string;
}

interface GeographicalArea {
  department: string;
  region: string;
  habitat: string;
  polygon: [number, number][];
}

export interface Bird {
  id: number;
  name: string;
  sciName: string;
  familySciName: string;
  familyCode: number;
  genderSciName: string;
  populationTrend: PopulationTrend;
  conservationStatus: ConservationStatus;
  anatomy: Anatomy;
  size: number;
  geographicalArea: GeographicalArea;
}
