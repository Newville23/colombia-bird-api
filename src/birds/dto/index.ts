class ConservationStatus {
  label: string;
  code: string;
  description: string;
}

class PopulationTrend {
  label: string;
  code: number;
  color: string;
  description: string;
}

class Anatomy {
  head: string;
  neck: string;
  body: string;
  wings: string;
  tail: string;
  legs: string;
}

class GeographicalArea {
  department: string;
  region: string;
  habitat: string;
  polygon: [number, number][];
}

export class CreateBirdDto {
  id: number;
  name: string;
  enName: string;
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
