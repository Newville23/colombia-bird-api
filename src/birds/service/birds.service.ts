import { Injectable } from '@nestjs/common';
import { Bird } from '../interfaces/bird.interface';

@Injectable()
export class BirdsService {
  private readonly birds: Bird[] = [
    {
      id: 1,
      name: 'Colibrí andino',
      sciName: 'Oreotrochilus estella',
      familySciName: 'Trochilidae',
      familyCode: 1,
      genderSciName: '',
      populationTrend: {
        label: 'Stable',
        code: 1,
        color: '#00FF00',
        description: 'The population is stable.',
      },
      conservationStatus: {
        label: 'Least Concern',
        code: 'LC',
        description:
          'The species is not considered to be at risk of extinction.',
      },
      anatomy: {
        head: 'Green',
        neck: 'Green',
        body: 'Green',
        wings: 'Black and white',
        tail: 'Black and white',
        legs: 'Black',
      },
      size: 10,
      geographicalArea: {
        department: 'Antioquia',
        region: 'Andes',
        habitat: 'Forests',
        polygon: [
          [-75.572123, 6.788793],
          [-75.573875, 6.790045],
          [-75.577515, 6.789084],
          [-75.576619, 6.787489],
        ],
      },
    },
    {
      id: 2,
      name: 'Guacharaca colombiana',
      sciName: 'Ortalis columbiana',
      familySciName: 'Cracidae',
      familyCode: 2,
      genderSciName: '',
      populationTrend: {
        label: 'Decreasing',
        code: -1,
        color: '#FF0000',
        description: 'The population is decreasing.',
      },
      conservationStatus: {
        label: 'Near Threatened',
        code: 'NT',
        description:
          'The species is close to qualifying for a threatened category.',
      },
      anatomy: {
        head: 'Brown',
        neck: 'Brown',
        body: 'Brown',
        wings: 'Black',
        tail: 'Brown',
        legs: 'Brown',
      },
      size: 50,
      geographicalArea: {
        department: 'Valle del Cauca',
        region: 'Andes',
        habitat: 'Forests',
        polygon: [
          [-76.637906, 3.423943],
          [-76.639748, 3.423077],
          [-76.639198, 3.421547],
          [-76.637635, 3.422529],
        ],
      },
    },
  ];

  getOne(id: string) {
    return this.birds.filter((bird: Bird) => bird.id === Number(id))[0];
  }

  getAll() {
    return this.birds;
  }
}
