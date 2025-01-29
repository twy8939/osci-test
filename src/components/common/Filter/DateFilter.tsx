import { DatePicker } from "@atlaskit/datetime-picker";
import { Flex } from "@atlaskit/primitives";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const DateFilter = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();

  const handleStartDateChange = (date: string) => {
    setStartDate(date);
    if (date === "") return handleDateChange("", "");
    if (endDate) handleDateChange(date, endDate);
  };

  const handleEndDateChange = (date: string) => {
    setEndDate(date);
    if (date === "") return handleDateChange("", "");
    if (startDate) handleDateChange(startDate, date);
  };

  const handleDateChange = (start: string, end: string) => {
    if (start && end) {
      searchParams.set("startDt", start);
      searchParams.set("endDt", end);
    } else {
      searchParams.delete("startDt");
      searchParams.delete("endDt");
    }

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <Flex gap="space.100">
      <DatePicker
        placeholder={t("common:start_date")}
        value={startDate}
        onChange={handleStartDateChange}
        maxDate={endDate}
      />
      <DatePicker
        placeholder={t("common:end_date")}
        value={endDate}
        onChange={handleEndDateChange}
        minDate={startDate}
      />
    </Flex>
  );
};

export default DateFilter;
