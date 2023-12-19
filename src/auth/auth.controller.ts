// src/auth/auth.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    const user = await this.authService.validateUser(username, password);

    if (user) {
      // In a real-world scenario, generate and return a JWT token here
      return { message: 'Login successful', user };
    } else {
      return { message: 'Invalid credentials' };
    }
  }
}
