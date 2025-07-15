"use client"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ApiService } from '@/services/ApiService';
import { FormValues, RecommendationResponse, RecommendationRequest } from '@/types/lifeInsurance';
import { lifeInsuranceSchema } from '@/schemas/lifeInsuranceSchema';
import LifeInsuranceFields from './LifeInsuranceFields';
import LifeInsuranceResult from './LifeInsuranceResult';

export default function LifeInsuranceForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      age: 0,
      income: 0,
      dependents: 0,
      risk: 'Low',
    },
    mode: "onBlur",
    resolver: yupResolver(lifeInsuranceSchema),
  });
  
  const [result, setResult] = useState<null | RecommendationResponse>(null);
  const [loading, setLoading] = useState(false);


  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    setResult(null);
    try {
      const apiResult = await ApiService.getRecommendation(data as RecommendationRequest);
      setResult(apiResult);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">Life Insurance Recommendation</h1>
      {result ? (
        <LifeInsuranceResult result={result} onStartOver={() => { setResult(null); reset(); }} />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <LifeInsuranceFields register={register} errors={errors} watch={watch} loading={loading} />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 font-semibold"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Get Recommendation'}
          </button>
        </form>
      )}
    </div>
  );
}
