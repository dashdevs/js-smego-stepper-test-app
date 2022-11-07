import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type FieldsT = {
  name: string;
  surname: string;
  jobTitle: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  privacyPolicy: boolean;
  partnership: boolean;
  companyCode: number | null;
  companyName: string;
  companyRegistration: string;
};

export type StepperT = {
  step: number;
  fields: FieldsT;
};

export const initialState: StepperT = {
  step: 0,
  fields: {
    name: '',
    surname: '',
    jobTitle: '',
    email: '',
    countryCode: '',
    phoneNumber: '',
    privacyPolicy: false,
    partnership: false,
    companyCode: null,
    companyName: '',
    companyRegistration: 'Lithuania',
  },
};

export const stepperSlice = createSlice({
  name: 'stepper',
  initialState,
  reducers: {
    nextStep: (state: StepperT) => {
      return { ...state, step: state?.step + 1 };
    },
    previousStep: (state: StepperT) => {
      return { ...state, step: state?.step - 1 };
    },
    fieldChange: (
      state: StepperT,
      action: PayloadAction<{ field: keyof FieldsT; newValue: string | boolean }>,
    ) => {
      const { field, newValue } = action.payload;

      return { ...state, fields: { ...state.fields, [field]: newValue } };
    },
  },
});

export const { nextStep, previousStep, fieldChange } = stepperSlice.actions;

export default stepperSlice.reducer;
