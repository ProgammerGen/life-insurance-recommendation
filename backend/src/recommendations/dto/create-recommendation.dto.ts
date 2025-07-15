import { IsInt, Min, IsIn, IsDefined } from 'class-validator';

export class CreateRecommendationDto {
  @IsDefined({ message: 'Age is required' })
  @IsInt({ message: 'Age must be a number' })
  @Min(18, { message: 'Age must be at least 18' })
  age: number;

  @IsDefined({ message: 'Income is required' })
  @IsInt({ message: 'Income must be a number' })
  @Min(1000, { message: 'Income must be at least 1000' })
  income: number;

  @IsDefined({ message: 'Number of dependents is required' })
  @IsInt({ message: 'Number of dependents must be a number' })
  @Min(0, { message: 'Dependents must be at least 0' })
  dependents: number;

  @IsDefined({ message: 'Risk tolerance is required' })
  @IsIn(['Low', 'Medium', 'High'], { message: 'Risk tolerance is required' })
  risk: 'Low' | 'Medium' | 'High';
}
