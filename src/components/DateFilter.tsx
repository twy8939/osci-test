import { DatePicker } from "@atlaskit/datetime-picker";
import { Flex } from "@atlaskit/primitives";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface DatePickerProps {
  onDateChange: (startDate: string, endDate: string) => void;
}

const DateFilter = ({ onDateChange }: DatePickerProps) => {
  const { t } = useTranslation();

  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();

  const handleStartDateChange = (date: string) => {
    setStartDate(date);
    if (endDate) onDateChange(date, endDate);
  };

  const handleEndDateChange = (date: string) => {
    setEndDate(date);
    if (startDate) onDateChange(startDate, date);
  };
  return (
    <Flex gap="space.100">
      <DatePicker
        placeholder={t("common:start_date")}
        value={startDate}
        onChange={handleStartDateChange}
      />
      <DatePicker
        placeholder={t("common:end_date")}
        value={endDate}
        onChange={handleEndDateChange}
      />
    </Flex>
  );
};

export default DateFilter;
