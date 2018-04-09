/**
 * Data model for company
 */
export class Company {
        public companyId: string;
        public companyName: string;
        public companyPhoneNo: number;
        public companyCEO: string;
        public foundedYear: number;
        public isActive: boolean;
        public status: string;

    constructor(values: Object = {}) {
      // Constructor initialization
      Object.assign(this, values);
  }
}
