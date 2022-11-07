import { Dropdown, Input, Checkbox, ExpandableText } from 'Components/common';
import styled from 'styled-components';
import {
  COUNTRY_CODES_LIST,
  partnershipPolicy,
  policyCheckboxFirstPart,
  policyCheckboxSecondPart,
} from './ContactPersonFormStep.constants';

const PhoneNumberWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 10px;
`;

const ContactPersonFormStep = () => {
  return (
    <div>
      <Input placeholder="Name" name="name" type="text" />

      <Input placeholder="Surname" name="surname" type="text" />

      <Input placeholder="Job title" name="jobTitle" type="text" />

      <Input placeholder="E-mail address" name="address" type="email" />

      <PhoneNumberWrapper>
        <Dropdown name="countryCode" options={COUNTRY_CODES_LIST} />

        <Input placeholder="Phone No." name="phoneNumber" type="number" />
      </PhoneNumberWrapper>

      <Checkbox name="privacyPolicy">
        <ExpandableText
          smallPartText={policyCheckboxFirstPart}
          fullText={policyCheckboxSecondPart}
        />
      </Checkbox>

      <Checkbox name="partnership">
        <ExpandableText smallPartText={partnershipPolicy} fullText={policyCheckboxSecondPart} />
      </Checkbox>
    </div>
  );
};

export default ContactPersonFormStep;
