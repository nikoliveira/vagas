import type IPerson from '../types/IPerson';

export default abstract class Person implements IPerson {
  protected _id: number;
  protected name: string;
  protected readonly role: string;
  protected called: number;
  protected job: string;

  constructor(name: string, job: string, role = 'common') {
    this._id = 0;
    this.name = name;
    this.role = role;
    this.called = 0;
    this.job = job;
  }

  public getId(): number {
    return this._id;
  }

  public getName(): string {
    return this.name;
  }

  public getRole(): string {
    return this.role;
  }

  public getCalled(): number {
    return this.called;
  }

  public getJob(): string {
    return this.job;
  }

  public setId(id: number): void {
    this._id = id;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setJob(job: string): void {
    this.job = job;
  }

  countCall(): void {
    this.called += 1;
  }
}
