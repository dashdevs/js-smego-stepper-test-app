import Dropdown from 'Components/common/Dropdown';
import Input from 'Components/common/Input';
import Checkbox from 'Components/common/Checkbox';
import ExpandableText from 'Components/common/ExpandableText';
import { PhoneNumberWrapper } from './ContactPersonFormStep.style';

import {
  COUNTRY_CODES_LIST,
  POLICY_CHECKBOX_SECOND_PART,
  POLICY_CHECKBOX_FIRST_PART,
  PARTNERSHIP_POLICY,
} from './ContactPersonFormStep.constants';

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
          smallPartText={POLICY_CHECKBOX_FIRST_PART}
          fullText={POLICY_CHECKBOX_SECOND_PART}
        />
      </Checkbox>

      <Checkbox name="partnership">
        <ExpandableText smallPartText={PARTNERSHIP_POLICY} fullText={POLICY_CHECKBOX_SECOND_PART} />
      </Checkbox>
    </div>
  );
};

export default ContactPersonFormStep;
