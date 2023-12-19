// src/auth/auth.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private readonly userModel: Model<any>) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ username });

    if (user && user.password === password) {
      // Omit sensitive information like password
      const { password, ...result } = user;
      return result;
    }

    return null;
  }
}
