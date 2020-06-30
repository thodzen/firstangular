export class Employee // "export" is similar to "public"
{
  // public is the default unlike with c#
  public firstName: string;
  lastName: string;
  private _department: string;

  get department(): string { return this._department; }
  set department(val: string) { this._department = val; }

  getInfo(): string {
    return `employee ${this.firstName} ${this.lastName} is a ${this.department}`;
  }
}

export const PI = 3.1415;

export function add(a: number, b: number): number {
  return a + b;
}
