export class CompassError extends Error {
  constructor(message: string) {
    super(message);
    this.name = CompassError.name;
  }
}
