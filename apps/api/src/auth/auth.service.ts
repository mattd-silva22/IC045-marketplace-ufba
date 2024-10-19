import { PrismaService } from '@/infra/database/prisma.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    // Valide o usuário no banco de dados (exemplo simplificado)
    const user = await this.findUserByEmail(email);

    if (user && bcrypt.compareSync(password, user.senha)) {
      return user;
    }
    return null;
  }

  async findUserByEmail(email: string) {
    
    const user = await this.prismaService.tbUsuario.findFirst({
      where: {
        email: email,
      },
    })
    if (!user) throw new UnauthorizedException('User not found');
    
    return user;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
