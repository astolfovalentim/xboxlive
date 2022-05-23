import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsPositive } from "class-validator";

export class CreateUserDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'O número do usuário',
    example: 1,
  })
  number: number;
}
