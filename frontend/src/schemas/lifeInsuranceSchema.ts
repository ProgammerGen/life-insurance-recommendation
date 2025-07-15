import * as yup from 'yup';

export const lifeInsuranceSchema = yup.object().shape({
  age: yup
    .number()
    .typeError('Age must be a number')
    .required('Age is required')
    .min(18, 'Age must be at least 18'),
  income: yup
    .number()
    .typeError('Income must be a number')
    .required('Income is required')
    .min(1000, 'Income must be at least 1000'),
  dependents: yup
    .number()
    .typeError('Number of dependents must be a number')
    .required('Number of dependents is required')
    .min(0, 'Dependents must be at least 0'),
  risk: yup.mixed<'Low' | 'Medium' | 'High'>().oneOf(['Low', 'Medium', 'High']).required('Risk tolerance is required'),
}); 