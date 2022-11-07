import { Dropdown, Input } from 'Components/common';
import { COUNTRIES_LIST } from './CompanyFormStep.constants';

const CompanyFormStep = () => {
  return (
    <div>
      <Input placeholder="Company Code" name="companyCode" type="number" />

      <Input placeholder="Company Name" name="companyName" type="text" />

      <Dropdown name="companyRegistration" options={COUNTRIES_LIST} />
    </div>
  );
};

export default CompanyFormStep;
