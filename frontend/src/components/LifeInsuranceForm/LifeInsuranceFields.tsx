import React from 'react';
import { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';
import { FormValues } from '@/types/lifeInsurance';

interface LifeInsuranceFieldsProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  watch: UseFormWatch<FormValues>;
  loading: boolean;
}

const LifeInsuranceFields: React.FC<LifeInsuranceFieldsProps> = ({ register, errors, watch, loading }) => (
  <>
    <div>
      <label className="block mb-1 font-medium text-gray-700">Age</label>
      <input
        type="number"
        {...register("age")}
        value={isNaN(watch("age")) ? "" : watch("age")}
        className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-400 ${errors.age ? 'border-red-500' : 'border-gray-300'}`}
        min="0"
        step="1"
        placeholder="Enter your age"
        disabled={loading}
      />
      {errors.age && <span className="text-red-500 text-sm mt-1 block">{errors.age.message}</span>}
    </div>
    <div>
      <label className="block mb-1 font-medium text-gray-700">Income ($/year)</label>
      <input
        type="number"
        {...register("income")}
        value={isNaN(watch("income")) ? "" : watch("income")}
        className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-400 ${errors.income ? 'border-red-500' : 'border-gray-300'}`}
        min="0"
        step="1"
        placeholder="e.g. 50000"
        disabled={loading}
      />
      {errors.income && <span className="text-red-500 text-sm mt-1 block">{errors.income.message}</span>}
    </div>
    <div>
      <label className="block mb-1 font-medium text-gray-700">Number of Dependents</label>
      <input
        type="number"
        {...register("dependents")}
        value={isNaN(watch("dependents")) ? "" : watch("dependents")}
        className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-400 ${errors.dependents ? 'border-red-500' : 'border-gray-300'}`}
        min="0"
        step="1"
        placeholder="e.g. 2"
        disabled={loading}
      />
      {errors.dependents && <span className="text-red-500 text-sm mt-1 block">{errors.dependents.message}</span>}
    </div>
    <div>
      <label className="block mb-1 font-medium text-gray-700">Risk Tolerance</label>
      <select
        {...register("risk")}
        className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 ${errors.risk ? 'border-red-500' : 'border-gray-300'}`}
        value={typeof watch === 'function' ? watch('risk') ?? '' : ''}
        disabled={loading}
      >
        <option value="" disabled>Select risk tolerance</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      {errors.risk && <span className="text-red-500 text-sm mt-1 block">{errors.risk.message}</span>}
    </div>
  </>
);

export default LifeInsuranceFields; 