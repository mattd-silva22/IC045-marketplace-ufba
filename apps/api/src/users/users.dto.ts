export class CreateUserDto {
    nome: string;
    img?: string;
    email: string;
    senha: string;
    id_papel: number;
}

export class UpdateUserDto {
    nome?: string;
    img?: string;
    email?: string;
    senha?: string;
    id_papel?: number;
}