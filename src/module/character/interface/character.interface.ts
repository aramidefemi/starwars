import { Document } from 'mongoose';

export interface ICharacter extends Document {
  businessName: string;
  cacCertificate: string;
  cacNumber: number;
}
