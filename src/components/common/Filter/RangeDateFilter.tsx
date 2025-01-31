import { DatePicker } from "@atlaskit/datetime-picker";
import { Box, Flex, xcss } from "@atlaskit/primitives";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const datePickerStyles = xcss({
  border: "2px solid #ddd",
  borderRadius: "8px",
  fontSize: "14px",
  width: "180px",
});

const RangeDateFilter = () => {
  const { t, i18n } = useTranslation("common");

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
      <Box xcss={datePickerStyles}>
        <DatePicker
          appearance="none"
          placeholder={t("start_date")}
          value={startDate}
          onChange={handleStartDateChange}
          maxDate={endDate}
          dateFormat="YYYY-MM-DD"
          locale={i18n.language}
        />
      </Box>

      <Box xcss={datePickerStyles}>
        <DatePicker
          appearance="none"
          placeholder={t("end_date")}
          value={endDate}
          onChange={handleEndDateChange}
          minDate={startDate}
          dateFormat="YYYY-MM-DD"
          locale={t("date_locale")}
        />
      </Box>
    </Flex>
  );
};

export default RangeDateFilter;
