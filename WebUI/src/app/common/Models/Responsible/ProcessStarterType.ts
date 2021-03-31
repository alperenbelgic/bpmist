// tslint:disable-next-line: max-line-length
export type ProcessStarterTypeCode = 'anyone' | 'groupList';


export class ProcessStarterType {
  constructor(
    public readonly code: ProcessStarterTypeCode,
    public readonly name: string,
    public readonly tooltip: string) {
  }

  visualState = {
    // enabled: true
  };
}
