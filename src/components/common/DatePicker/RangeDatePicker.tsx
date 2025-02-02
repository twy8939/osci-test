import { DatePicker } from "@atlaskit/datetime-picker";
import { Box, Flex, xcss } from "@atlaskit/primitives";
import { useTranslation } from "react-i18next";

const datePickerStyles = xcss({
  border: "2px solid #ddd",
  borderRadius: "8px",
  fontSize: "14px",
  width: "180px",
});

interface RangeDatePickerProps {
  startDate: string | undefined;
  endDate: string | undefined;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
}

const RangeDatePicker = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}: RangeDatePickerProps) => {
  const { t, i18n } = useTranslation("common");

  return (
    <Flex gap="space.100">
      <Box xcss={datePickerStyles}>
        <DatePicker
          appearance="none"
          placeholder={t("start_date")}
          value={startDate}
          onChange={onStartDateChange}
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
          onChange={onEndDateChange}
          minDate={startDate}
          dateFormat="YYYY-MM-DD"
          locale={t("date_locale")}
        />
      </Box>
    </Flex>
  );
};

export default RangeDatePicker;
